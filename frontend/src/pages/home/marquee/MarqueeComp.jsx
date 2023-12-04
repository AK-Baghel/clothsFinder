import React from "react";
import Marquee from "react-fast-marquee";
import "./style.css"
import ProductCard from "../productCard/ProductCard";
// import TestimonialTile from "../testimonial/TestimonialTile";

function MarqueeComp({ direction }) {
    return (
        <div className="marqueeContainer">
            <Marquee pauseOnHover={true} speed={100} autoFill={true} className="marquee" gradient={true} gradientWidth={10} direction={direction}  >
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Marquee>
        </div>
    )
}

export default MarqueeComp