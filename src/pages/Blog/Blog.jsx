import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SingleHeader from '../../components/SingleHeader/SingleHeader'
import product from '../../faker/Product'
import "./Blog.scss"

const Blog = () => {
  return (
   <>

   <SingleHeader />
   <div className="allproduct">
      <div className="container">
        <div className="row">
            <h2 className='trends'>Our Trends Products</h2>
   {product.map((item,index) => 
            <div className="col-lg-3">
            <div className="product-item">
            <img src={item.photo} alt="" />
            <h3>{item.title}</h3>
            <span>{item.price}</span>
            <div className="bnt">
              <Link className='baaton' to={`/${item.slug}`}>Add to cart</Link>
            </div>
          </div>
            </div>
            
            )}
                </div>
      </div>
    </div>
        

            <Footer />



   
   
   </>
  )
}

export default Blog