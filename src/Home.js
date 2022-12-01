import React from 'react'
import "./Home.css"
import Product from './Product'
import UncontrolledExample from './UncontrolledExample'


function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        {/* <img src="./materials/amazonPrimeWall.webp" alt="" className="home_image" /> */}
        < UncontrolledExample className="home_image" />

        <div className="home_row">
          <Product
            image="./materials/iphone_product.jpg"

            title="I Phone 12 pro iQOO Z6 Lite 5G (Stellar Green, 4GB RAM, 64GB Storage) '"
            price={10000}
            rating={5} />
          <Product />


        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
        </div>

      </div>
    </div>
  )
}

export default Home