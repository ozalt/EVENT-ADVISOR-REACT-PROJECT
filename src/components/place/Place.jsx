import React from 'react';
import './place.css';
// import images
const Place = ({ imgUrl, imgHeight, text, textPosition }) => {
    // const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        height: imgHeight,
    };

    // const placeMore = {
    //     display: isHovered ? 'block' : 'none',

    // }
    const textStyle = {
        top: textPosition,
        
    };
    // onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    return (
        <div className='place' >
            <img src={imgUrl} alt="" style={imageStyle} />
            <p className="place-heading" style={textStyle}>
                {text}
            </p>
            {/* <p className='scale-up-center place-more' style={placeMore}>content here</p> */}
        </div>
    )
}

export default Place
