import React from 'react'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import product from '../../faker/Product'
import "./Home.scss"
import {BiChevronRight} from "react-icons/bi"
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"
import jwelary from '../../faker/jwelary'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
   <div className="ba-img">
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="headline">
            <h2>Classic,Symbolic and Timeless</h2>\
            <p>With our stunning collection of fine jwelary,You never have to sacrifice luxury for price.</p>
            <div className="buttons">
                      <button className='baton'>PURCHASE NOW</button>

                    </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="jwelary-ring">
           
          </div>
        </div>
      </div>
       
    </div>
    </div>

    <Title />

    <div className="container my-5">
      <div className="row">
        <div className="col-md-3 p-0 m-0">
          <div className="blog">
            <img src="https://www.ekko-wp.com/wp-content/uploads/sites/3/2019/04/jewelry7.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="statement">
            <h2>Statement Necklaces</h2>
            <p>Urna et pharetra pharetra massa massa ultricies mi quis hendrerit consequat semper viverra.</p>
            <div className="buttons">
                      <button className='baton'>Shop NOW</button>

                    </div>
          </div>
        </div>
        <div className="col-md-3">
        <div className="blog">
            <img src="https://www.ekko-wp.com/wp-content/uploads/sites/3/2019/04/jewelry6.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-3">
        <div className="blog">
            <img src="https://www.ekko-wp.com/wp-content/uploads/sites/3/2019/04/jewelry5.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <Title />

    <div className="allproduct">
      <div className="container">
        <div className="row">
          

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

    <div className="product-img">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-jwelary">
            <div className="headline">
            <h2>Start the latest trends</h2>\
            <p>Sagittis purus sit amet volutpat consequat mauris nunc.
            Vehicula ipsum a arcu cursus vitae congue.</p>
            <div className="buttons">
                      <button className='baton'>Shop NOW</button>

                    </div>
          </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <Title />

    <div className="allproduct">
      <div className="container">
        <div className="row">
          

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


    <div className="chain">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="chain-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="newslater">
                    <h2>Subscribe to our newsletter</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputtype">
                    <input className='from-control'placeholder='Enter your e-mail address'    type="text" />
                    <div className="bnt">
                    <button className='baaton'>Subscribe</button>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Title />


    <div className="jwelary-blog my-5">
      <div className="container">
        <div className="row">
          
            {jwelary.map(item =>
            <div className="col-md-4">
            <div className="my-card">
            <div className="card">
            <div className="card-body">
              <img src={item.photo} alt="" />
              <h2>{item.title}</h2>
              <span>Read More <BiChevronRight/></span>
            </div>
          </div>
            </div>
              </div>
              
              )}

        </div>
      </div>
    </div>


    <div className="bg-card">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading">
              <Title/>

              <div className="row">
                <div className="col-md-4">
                  <div className="iconbox">
                   < FaFacebookF color='#e0c22d' size="50px" />
                   <h3>Facebook</h3>
                   <p>Find the top designer <br></br>collection</p>
                    
                  </div>
                </div>
                <div className="col-md-4">
                <div className="iconbox">
                   < FaTwitter color='#e0c22d' size="50px" />
                   <h3>Twitter</h3>
                   <p>Your ultimate jwelary <br></br>destination</p>
                    
                  </div>
                </div>
                <div className="col-md-4">
                <div className="iconbox">
                   < FaInstagram color='#e0c22d' size="50px" />
                   <h3>Instagram</h3>
                   <p>Discover the latest <br></br> collection</p>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <Footer />
    
    
    
    </>
  )
}

export default Home