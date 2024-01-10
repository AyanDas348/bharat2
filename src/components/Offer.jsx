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
    useEffect(() => {
        const db = getDatabase();
        const offerRef = ref(db, 'offers/');
        onValue(offerRef, (snapshot) => {
            const data = snapshot.val();
            setCardData(data)
            setDataKeys(Object.keys(data))
            setImage(cardData[dataKeys[counter]].image)
            setOfferHead(cardData[dataKeys[counter]].title)
            setPrice(cardData[dataKeys[counter]].price)
            setIncludedFeatures(cardData[dataKeys[counter]].features)
        })
    }, [])
    const [includedFeatures, setIncludedFeatures] = useState([])
    const handleLeftClick = () => {
        setCounter(prev => {
            let newCounter = prev - 1;
            if (newCounter < 0) {
                newCounter = dataKeys.length - 1; // Go to the last item
            }
            setImage(cardData[dataKeys[newCounter]].image);
            setOfferHead(cardData[dataKeys[newCounter]].title);
            setPrice(cardData[dataKeys[newCounter]].price);
            setIncludedFeatures(cardData[dataKeys[newCounter]].features);
            return newCounter;
        });
    };

    const handleRightClick = () => {
        setCounter(prev => {
            let newCounter = prev + 1;
            if (newCounter >= dataKeys.length) {
                newCounter = 0; // Go to the first item
            }
            setImage(cardData[dataKeys[newCounter]].image);
            setOfferHead(cardData[dataKeys[newCounter]].title);
            setPrice(cardData[dataKeys[newCounter]].price);
            setIncludedFeatures(cardData[dataKeys[newCounter]].features);
            return newCounter;
        });
    };
    return (
        <div className="mx-3">
        <div className="flex items-center justify-center">
            <h1 className="text-8xl mt-20">Our Gym Passes</h1>
        </div>
            <div className="grid lg:grid-cols-10 grid-cols-1 items-center justify-center mx-auto">
                <div className="col-span-1 items-center justify-center flex cursor-pointer" onClick={() => handleLeftClick()}>
                    <FaChevronLeft className="lg:visible col-span-1" />
                </div>
                <PricingCard includedFeatures={includedFeatures} image={image} offerHead={offerHead} price={price} />
                <div className="col-span-1 flex items-center justify-center cursor-pointer" onClick={() => handleRightClick()}>
                    <FaChevronRight className="lg:visible col-span-1" />
                </div>
            </div>
        </div>
    );
};

export default Offer;
