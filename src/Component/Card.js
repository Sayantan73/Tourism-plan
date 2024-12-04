import React, { useState } from 'react'

function Card({id, image, info, price, name, removeTour}) {
    const [readMore, setReadMore] = useState(false)
    let description = readMore ? info : `${info.substring(0, 200)}...`;
    const readMoreHandler = ()=>{
        setReadMore(!readMore)
        description = info
    }
    
  return (
    <div className='card'>
        <img src={image} alt="" className="image" />
        <div className="tour-details">
            <h4 className='tour-price'>{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div className="tour-info">
            {description}
            <span className='read-more' onClick={readMoreHandler}>
                {readMore ? "show less": "show more"}
            </span>
        </div>
        <button className='btn-red' onClick={ ()=> removeTour(id) }>Not Interested</button>
    </div>
  )
}

export default Card;
