import React from 'react'
import Post from '../../component/Post/Post'
import './blog.scss';
import { image1, image2, image3, image4, image5, image6 } from './import'

const blogData = [
    {
        title: 'Believing neglected so so allowance existence departure.',
        date: '08-11-2021',
        category:'Category',
        img: image3,
    },
    {
        title: 'Do believing oh disposing to supported allowance we.',
        date: '08-11-2021',
        category:'Category',
        img: image4,
    },
    {
        title: 'Believing neglected so so allowance existence departure.',
        date: '08-11-2021',
        category:'Category',
        img: image5,
    },
    {
        title: 'Believing neglected so so allowance existence departure.',
        date: '08-11-2021',
        category:'Category',
        img: image6,
    },
    
]

function Blog() {
  return (
    <div className='land_blog_section'>
        <div className='land_blog_section_title'>
            <h2>Our Latest Blog Posts</h2>
            <button>see all blog</button>
        </div>
        <div className='land_blog_section_content'>
            <div className='land_blog_section_content_left'>
                <Post 
                    img={image1} 
                    text="Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary." 
                    date='22-6-2022'
                    title="Believing neglected so so allowance existence departure."
                    category="category"
                />
                <Post 
                    img={image2} 
                    text="Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything." 
                    date='12-3-2022'
                    title="In design active temper be uneasy. Thirty for remove plenty regard you."
                    category="category"
                />
            </div>
            <div className='land_blog_section_content_right'>
                {
                    blogData.map((blog, index) => <Post img={blog.img} title={blog.title} date={blog.date} category={blog.category} key={index}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Blog