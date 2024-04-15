import React from 'react'
import Masnory,   {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages'
import Subtitle from '../shared/Subtitle'
const ImageGallery = () => {
  return (
    
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3, 992:4 }}>
      {/* <h1 style={{color:"blue"}}>Our Gallery</h1> */}
      <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">
              Visit our Customers gallery
            </h2>
        <Masnory gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img className='image__gallery' src={item} alt="" key={index} style={{width:"100%",
                display:"block",borderRadius:"10px"}}
                     />
                ))
            }

        </Masnory>
    </ResponsiveMasonry>
  )
}

export default ImageGallery