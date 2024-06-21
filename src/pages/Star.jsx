import React from 'react'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rate, reviews }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let numbers = index + 0.5;

        return (
            <span key={index}>
                {
                    rate > index + 1 ? <FaStar /> : rate > numbers ? <FaStarHalfAlt /> : <AiOutlineStar />
                }
            </span>
        )
        
    });


    return (
        <div className='flex'>
            {ratingStar}
        </div>
    )
}

export default Star