import React, { useState, useEffect } from 'react'
import './css/carousel.css' //will be added later

const Carousel = (props) => {
    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = (currentIndex) => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
        else {
            setCurrentIndex(prevState => prevState = 0)
        }
       
    }
    
    const prev = (currentIndex) => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        else {
            setCurrentIndex(prevState => prevState = length-1)
        }
    }


    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)

        
        const intervalId = setInterval(() => {
            next(currentIndex);
        }, 8000);

        return () => clearInterval(intervalId); 
        
    }, [children, currentIndex])

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
               
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
               
            </div>
            <button onClick={()=> prev(currentIndex)} className="left-arrow">
                    &lt;
            </button>
            <button onClick={()=> next(currentIndex)} className="right-arrow">
                    &gt;
            </button>
        </div>
    )
}


export default Carousel
