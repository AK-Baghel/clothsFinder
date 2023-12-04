import React, { useState, useEffect } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa";


import { FaSearch } from "react-icons/fa";

import { IoClose } from "react-icons/io5"
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Header = ({ checkLogin }) => {

    const location = useLocation();
    const [show, setShow] = useState(true);
    const [popUp, setPopUp] = useState(false);

    const [searchShow, setSearchShow] = useState(false);
    const [products, setProducts] = useState([]);


    const toggleBar = () => {
        setShow(!show);
    }
    const navigate = useNavigate();

    const routing = (para) => {
        navigate(para);
        setShow(true)
        setPopUp(false)
    }

    const getProducts = async () => {
        let result = await fetch("http://localhost:8080");
        result = await result.json();
        setProducts(result);
    }

    const searchHandle = async (e) => {
        setSearchShow(true)
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:8080/search/${key}`)
            result = await result.json();
            if (result) {
                setProducts(result)
                console.log(products);
            }
        }
        else {
            setSearchShow(false)
            getProducts();
        }

    }
    // useEffect(() => {
    //     getProducts();

    // }, [])

    return (
        <div className="headerContainer">

            <div className="headerBanner">
                <div className="headerCall">
                    <FaPhoneAlt />
                    <div className="headerCallNumber">+91298374788</div>
                </div>
                <div className="headerBannerPages">
                    <div className={` bannerHoverUnderline headerBannerItem ${location.pathname === "/manufacturer" ? "bannerActive" : ""}`} onClick={() => { routing("/manufacturer") }}>Manufacturer</div>
                    <div className={` bannerHoverUnderline headerBannerItem ${location.pathname === "/retailer" ? "bannerActive" : ""}`} onClick={() => { routing("/retailer") }} >Retailer</div>
                    <div className={` bannerHoverUnderline headerBannerItem ${location.pathname === "/visiter" ? "bannerActive" : ""}`} onClick={() => { routing("/visiter") }} >Visiter</div>
                </div>

            </div>
            <div className="headerItems" >

                <div className="headerLogo" onClick={() => { routing("/") }}>
                    <div className="headerLogoImg">Cloths Finder</div>
                </div>

                <div className="headerSearch">
                    {/* <input type="text" className="searchInput" placeholder="Search here..." onChange={searchHandle} onClick={searchHandle} /> */}
                    <input type="text" className="searchInput" placeholder="Search here..." />
                    {
                        searchShow
                            ?
                            <MdClose className="searchIcon" onClick={() => { setSearchShow(false); }} />
                            :
                            <FaSearch className="searchIcon" onClick={searchHandle} />
                    }
                </div>

                <div className={`headerAllItem ${show ? "headerMobile " : ""}`}>

                    <div className="headerRight">

                        <div className={`headerItem hoverUnderline ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>Home</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/men" ? "active" : ""}`} onClick={() => { routing("/men") }} >Men</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/women" ? "active" : ""}`} onClick={() => { routing("/women") }} >Women</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/mail" ? "active" : ""}`} onClick={() => { routing("/mail") }} >Mail Us</div>
                        {/* <div className={`headerItem hoverUnderline`} onClick={() => { checkLogin(1) }} >Login(Dashboard)</div> */}

                    </div>


                </div>


            </div>


            <div className="headerSearchBox">
                {/* <input type="text" className="searchInput" placeholder="Search here..." onChange={searchHandle} onClick={searchHandle} /> */}
                <input type="text" className="searchInput" placeholder="Search here..." />
                {
                    searchShow
                        ?
                        <MdClose className="searchIcon" onClick={() => { setSearchShow(false); }} />
                        :
                        <FaSearch className="searchIcon" onClick={searchHandle} />
                }
            </div>

            {
                show ? <FaBars className="headerBar" onClick={toggleBar} /> : <IoClose className=" headerBar headerCross" onClick={toggleBar} />
            }



            {/* {
                searchShow ?
                    <>
                        <div className="searchContainer">
                            {
                                products.map((item, index) => {
                                    return (
                                        <div className="searchItems" key={index} onClick={() => { navigate(`/manufacture`) }}>
                                            <div className="searchItem">Company Name = {item.companyName}</div>
                                            <div className="searchItem">Companu Url = {item.companyUrl}</div>
                                            <div className="searchItem">Companu Url = {item.address}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                    : ""
            } */}

        </div>
    )
}
export default Header;