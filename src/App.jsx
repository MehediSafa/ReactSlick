
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";



function App() {
function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      <IoIosArrowBack/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick} >
      <IoIosArrowForward />
      </div>
  );
}

  
  let [product,setProduct] = useState([])
  let getData = ()=>{
    axios.get("https://dummyjson.com/products").then((response)=>{
     setProduct(response.data.products);
     
    })
  };
  console.log(product);
  
 useEffect(()=>{
   getData()
  
 },[]);

 var settings = {
 
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow/>,
  prevArrow: <SamplePrevArrow/>
};
  return (
  
    <Container>

      <Row>
        <Slider {...settings}>
        {product.map((item,i) => (
          
        <Col key={i} lg = {4}>
         <div className='products'>
         
            <img src={item.thumbnail} alt="" />
            <div className="product_texts">
            
            <h4> <span></span> {item.title}</h4>
            <p><span>Description:</span>{item.description}</p>
            <p><span>Price:  $</span>{item.price}</p>
            <p><span>Discoun :</span>{item.discountPercentage}</p>
            <p><span>Rating:</span>{item.rating}</p>
            </div>
         </div>
            </Col>
  ))}
        </Slider>
      </Row>
    </Container>
  
  )
}

export default App