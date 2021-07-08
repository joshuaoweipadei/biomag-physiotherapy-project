import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
import { PostsData } from '../../Data'

import '../../styles/ProductSlider.css';

import card3 from '../../images/brand/card3.jpg';

const CardImg = (props) => {
  return (
    <div className="imgContainer">
      <img src={props.image} alt="img" />
    </div>
  )
}

const CardBody = (props) => {
  return (
    <div className="card__body">
      <div className="body__title">
        <hr/>
        <h2>{props.title}</h2>
      </div>
      <p className="body__text">{props.text}</p>
    </div>
  )
}

const Card = (props) => {
  return (
    <div className="product__sliderCard">
      <CardImg category={props.details.category} image={props.details.image}/>
      <CardBody title={props.details.title} text={props.details.text}/>
    </div>
  )
}


const ProductSlider = () => {
  return (
    // <ScrollAnimation animateIn='fadeIn'>
      <div className="product">
        <div className="product__container" id="product">
          <h1>Our Products</h1>
          <div className="product__row">
            <div className="product__info">
              <div className="product__infoBg">
                <img src={card3} alt="img"/>
              </div>
              <div className="product__infoContent">
                <p>Effective & Trusted</p>
                <h1>High Quality</h1>
                <p>Quality plus result is what you will get.</p>
              </div>
            </div>
            <div className="product__slider">
              <div className="product__sliderRow">
                <div className="product__sliderRow__Box">
                  {Object.keys(PostsData).map(key => <Card key={key} index={key} details={PostsData[key]}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </ScrollAnimation>
  )
}

export default ProductSlider
