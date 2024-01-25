import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import PricingCard from "./PricingCard";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Offer = () => {
    const [offerHead, setOfferHead] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [dataKeys, setDataKeys] = useState([])
    const [cardData, setCardData] = useState({})
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     const db = getDatabase();
    //     const offerRef = ref(db, 'offers/');
    //     onValue(offerRef, (snapshot) => {
    //         const data = snapshot.val();
    //         setCardData(data)
    //         setDataKeys(Object.keys(data))
    //         setImage(cardData[dataKeys[counter]].image)
    //         setOfferHead(cardData[dataKeys[counter]].title)
    //         setPrice(cardData[dataKeys[counter]].price)
    //         setIncludedFeatures(cardData[dataKeys[counter]].features)
    //     })
    // }, [counter])
    // const [includedFeatures, setIncludedFeatures] = useState([])
    // const handleLeftClick = () => {
    //     setCounter(prev => {
    //         let newCounter = prev - 1;
    //         if (newCounter < 0) {
    //             newCounter = dataKeys.length - 1; // Go to the last item
    //         }
    //         setImage(cardData[dataKeys[newCounter]].image);
    //         setOfferHead(cardData[dataKeys[newCounter]].title);
    //         setPrice(cardData[dataKeys[newCounter]].price);
    //         setIncludedFeatures(cardData[dataKeys[newCounter]].features);
    //         return newCounter;
    //     });
    // };

    const handleRightClick = () => {
        setCounter(prev => {
            let newCounter = prev + 1;
            if (newCounter >= dataKeys.length) {
                newCounter = 0; // Go to the first item
            }
            // setImage(cardData[dataKeys[newCounter]].image);
            // setOfferHead(cardData[dataKeys[newCounter]].title);
            // setPrice(cardData[dataKeys[newCounter]].price);
            // setIncludedFeatures(cardData[dataKeys[newCounter]].features);
            return newCounter;
        });
    };
    return (
        <div className="mx-auto h-fit mb-2">
            <div className="flex items-center justify-center lg:mx-0 mx-3">
                <h1 className="lg:text-8xl text-5xl mt-20 mx-3">Our Gym Passes</h1>
            </div>
            <div className="lg:grid lg:grid-cols-10 grid-cols-1 mx-auto relative top-1/2">
            <div className="col-span-1"></div>
                {/* <div
                    className={`col-span-1 flex items-center justify-center ${'lg:flex lg:relative absolute'} h-20 w-14 cursor-pointer px-3 py-5 rounded-lg mx-3 bg-white/45 top-[55%]`}
                    onClick={() => handleLeftClick()}
                >
                    <FaChevronLeft className={`lg:visible col-span-1 bg-transparent text-white`} />
                </div> */}
                <PricingCard includedFeatures={["Official member t-shirt", "Member resources", "Private forum access", "Entry to annual conference"]} price={2000} />
                {/* <div
                    className={`col-span-1 flex items-center justify-center ${'lg:flex lg:relative absolute'} h-20 w-14 cursor-pointer px-3 py-5 rounded-lg mx-3 bg-white/45 top-[55%] right-0`}
                    onClick={() => handleRightClick()}
                >
                    <FaChevronRight className={`lg:visible col-span-1 bg-transparent text-white`} />
                </div> */}
            </div>
            <div className="col-span-1"></div>
        </div>

    );
};

export default Offer;
