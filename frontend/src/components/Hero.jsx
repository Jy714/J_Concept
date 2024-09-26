import { assets } from "../assets/assets"
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div>
      <div className="w-full bg-pink-200">
        <Marquee className="py-3 text-gray-700 font-semibold text-sm overflow-x-hidden  text-nowrap"  speed={150} loop={0}>
          ENJOY ADDITIONAL 20% OFF FOR ALL PRODUCT BY SUBSCRIBE US • FREE LOCAL SHIPPING WITH ORDERS ABOVE RM50
        </Marquee>
      </div>

      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular ">Latest Arrivals</h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        {/* Hero Right Side */}
        <img src={assets.hero_img} alt="hero" className="w-full sm:w-1/2" />
      </div>

    </div>
  )
}

export default Hero
