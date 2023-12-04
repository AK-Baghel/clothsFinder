import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import "./style.css"
import ProductCard from './productCard/ProductCard'
import MarqueeComp from './marquee/MarqueeComp'

function Home() {
    return (
        <div className='homeMain'>
            <Carousel />

            <MarqueeComp direction={"right"} />

            <div className="homeContainer">
                <div className="homeCollections">OUR COLLECTIONS</div>

                <div className="homeBannerMen">
                    <div className="homeBannerBox">
                        <div className="homeBannerText">Men's Clothing</div>
                    </div>
                </div>

                <div className="homeBannerWomen">
                    <div className="homeBannerBox">
                        <div className="homeBannerText">Women's Clothing</div>
                    </div>
                </div>

                <div className="homeBannerKid">
                    <div className="homeBannerBox">
                        <div className="homeBannerText">Kid's Clothing</div>
                    </div>
                </div>
                <div className="homeBannerRegular">
                    <div className="homeBannerBox">
                        <div className="homeBannerText">Regular Clothing</div>
                    </div>
                </div>

                <div className="homeCollections">NEW ARRIVALS</div>

                <div className="productContainer">

                    <div className="homeCollections">Trending</div>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    {/* <ProductCard />
                    <ProductCard /> */}
                </div>


                <MarqueeComp direction={"left"} />

                <div className="displayBanner">
                    <div className="displayBannerContainer">
                        <div className="displayBannerText">20% Discount on</div>
                        <div className="displayBannerHeading">Trending Fabric</div>
                        <div className="displayBannerButtons">
                            <div className="productCardButton">Shop Now</div>
                            <div className="productCardButton">Quick View</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home