import React from 'react'
import {  Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/usefetch';
import { useDispatch } from 'react-redux';
import { addToWhishlist } from '../redux/slices/whishlistSlice';
import { addTocart } from '../redux/slices/cartSlice';

function Home() {
  const data=useFetch(`https://dummyjson.com/products`)
  console.log(data);

  const  dispatch=useDispatch()
  return (
    <>
      <Row className='ms-5' style={{marginTop:'100px'}}>
        {
          data?.length > 0. ? data?.map((products, index) => (
          
          <Col key={index} className='mb-3' sm={12} md={8} lg={4} xl={3} >
        <Card className='shadow rounded' style={{ width: '18rem', height:'30rem' }}>
      <Card.Img variant="top" style={{height:'200px'}} src={products?.thumbnail} />
      <Card.Body>
        <Card.Title style={{color:'black',fontSize:'20px'}}> <b> {products?.title} </b>  </Card.Title>
        <Card.Text>
      <p> {products?.description.slice(0,55)}...</p>   <br /> <center>
           <b style={{color:'black'}}> &#8377;{products?.price} &nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:'green'}}> {products?.discountPercentage}% Off </span> </b> </center>
                              
          </Card.Text>
          <div  className='d-flex  justify-content-between align-item-bottom '>
                <button className='btn' onClick={()=>dispatch(addToWhishlist(products))}  > <i class="fa-solid fa-heart text-danger fa-lg "></i> </button>    
                <button className='btn' onClick={()=>dispatch(addTocart(products))} > <i class="fa-solid fa-shopping-cart text-success fa-lg"></i>  </button>    
            </div> 
      </Card.Body>
    </Card>
            </Col>
             )):  <p className='text-danger fs-4 fw-bolder'>Nothing to Display </p> 
        }
      </Row>


     
    </>
  )
}

export default Home