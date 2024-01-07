
import Founder from "../components/Founder"
import Hero from "../components/Hero"
import HorizontalStrip from "../components/HorizontalStrip"
import Offer from "../components/Offer"
import Programs from "../components/Programs"

const HomePage = () => {
  return (
    <div className="bg-black text-white overflow-x-clip">
        <Hero />
        <HorizontalStrip />
        <Programs />
        <Founder />
        <Offer />
    </div>
  )
}

export default HomePage