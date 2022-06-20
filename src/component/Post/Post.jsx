import React from 'react'
import './post.scss'

function Post({img, text, title, date, category}) {
  return (
    <div className='post_item'>
        <div className='post_item_img'>
            <img src={img} alt='post_image'/>
        </div>
        <div className='post_item_info'>
            <div className='post_item_date_info'>
                <p>{date}</p>
                <p>{category}</p>
            </div>
            <h4>{title}</h4>
            {text && <p>{text}</p>}
        </div>
    </div>
  )
}

export default Post