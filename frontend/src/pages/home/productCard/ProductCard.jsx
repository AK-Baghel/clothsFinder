import React from 'react'
import "./style.css"

function ProductCard() {
    return (
        <div className="productCardContainer">
            <img src="https://i.pinimg.com/564x/c7/a7/b9/c7a7b950be03c8f82dc20e641d2852d4.jpg" alt="" className="productCardImg" />
            <div className="productCardTitle">DUKE Jeans 7JX9</div>
            <div className="productCardButton">View Detail</div>
        </div>
    )
}

export default ProductCard