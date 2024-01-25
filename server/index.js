const express = require('express')
const razorpay = require('razorpay')
require('dotenv').config()
const cors = require('cors')
const crypto = require('crypto')
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the actual origin of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.post("/orders", async (req, res) => {
    try {
        const razorpay_instance = new razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        })

        const options = req.body
        const order = await razorpay_instance.orders.create(options)
        if (!order) {
            return res.json(500).send("Error")
        }
        res.json(order)
    } catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
})

app.post("/orders/validate", async(req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`)
    const digest = sha.digest("hex")
    if(digest !== razorpay_signature){
        return res.status(400).json({message: "Transaction is not legit"})
    }
    res.json({
        message: "Success",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
    })
})

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
})

