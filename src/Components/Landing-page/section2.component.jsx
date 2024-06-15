import React from "react";
import yourImage from "../../Images/cb_five.jpg"; // Replace with the correct path to your image

const Section2 = () => {

    return (
        <>
            <div className='image-container'>
                <img
                    src={yourImage}
                    alt=" The Covers Brothers"
                    className='responsive-image'
                />
            </div>
            <div className="section2__list">
                <ul>
                    <li>RYAN - Bass Guitar and Vocals</li>
                    <li>RAY - Lead Guitar and Vocals</li>
                    <li>IAN - Drums, Cajón and Vocals</li>
                    <li>CHRIS - Guitar and Vocals</li>
                </ul>
            </div>
        </>
    )
}

export default Section2 