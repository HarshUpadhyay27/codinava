import React from 'react'

const Gif = (props) => {
    return (
        <div className='gif'>
        <img src={props.newData.images.original.url}  alt="..." ></img>
        </div>
    )
}

export default Gif
