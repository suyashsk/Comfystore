import React from 'react'

const Home = ({product,setProduct}) => {
  return (
    <div className='home_conatiner'>
      <div className='image_text'></div>
      <div className='featured_products'>
        <div>
          <h2 className='font-bold text-xl'>Featured Products</h2>
          <hr></hr>
        </div>
        <div className="actul_feature">
        {
          product.filter((item)=>{
            if(item.attributes.featured === true){
              return item
            }
          }).map((item,index)=>{
            return <div className='items_holder' key={index}>
              
              <div className='img_holder'>
              <img src={item.attributes.image} alt='item' />
              </div>
              <h1>{item.attributes.title}</h1>
              
              <p>Rs. {item.attributes.price}</p>
              
            </div>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home