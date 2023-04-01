import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SingleHeader from '../../components/SingleHeader/SingleHeader'
import product from '../../faker/Product'
import "./SingleProduct.scss"
import ReactImageMagnify from 'react-image-magnify';



const SingleProduct = () => {

  const {slug} = useParams();
  const products = product.find((data) => data.slug === slug)



  return (
    <>
  <SingleHeader />

  <div className="single-product-pages">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="product-img">

         {/* =============================== */}

                <div style={{width : '100%' , height : '100%'}}>
                <ReactImageMagnify {...{
                smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: `${products.photo}`
                },
                largeImage: {
                src: `${products.photo}`,
                width: 1200,
                height: 1800
            }
        }} />
        </div>

         {/* =======================================*/}
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <h2>{products.title}</h2>
            <p>{slug}</p>

            {products.sale_price ?   (<p>

            <span className='regular-price'>{products.regular_price} BDT</span>
              <span className='sale-price'>{products.sale_price} BDT</span>
            </p>) : (<span className='sale-price'>{products.regular_price} BDT</span>)}
          

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum blanditiis exercitationem nisi deserunt suscipit tempore natus minima maiores iure?</p>

            <button className='btn btn-primary'>Add to cart</button>

          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
    </>
  )
}

export default SingleProduct