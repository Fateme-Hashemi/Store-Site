import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
}
const slideImages = [
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/335b847fa0aa058bebfdedc94e0e9a28853d900e_1689608398.jpg?x-oss-process=image/quality,q_95',
    caption: 'Slide 1'
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/9d4d5bbd824c8dcf511c35af50da985ce1216f89_1689417345.jpg?x-oss-process=image/quality,q_95',
    caption: 'Slide 2'
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/99d70ee0df643a1c61e6324f72c2383b888f8c9b_1688294427.jpg?x-oss-process=image/quality,q_95',
    caption: 'Slide 3'
  },
];

const Banner = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Banner;