
import Founder from "../components/Founder"
import Hero from "../components/Hero"
import HorizontalStrip from "../components/HorizontalStrip"
import Offer from "../components/Offer"
import Programs from "../components/Programs"
import StateOfArt from "../components/StateOfArt"
import Trainer from "../components/Trainer"
import WhatWeOffer from "../components/Whatweoffer"

const HomePage = () => {
  return (
    <div className="bg-black text-white !overflow-x-hidden">
      <Hero />
      <HorizontalStrip />
      <Programs />
      {/* <Trainer /> */}
      {/* <Founder /> */}
      <div className="offer-background">
      </div>
      {/* <Offer /> */}
      <StateOfArt />
      <WhatWeOffer />
    </div>
  )
}

export default HomePage