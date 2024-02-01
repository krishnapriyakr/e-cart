import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWhishlist } from '../redux/slices/whishlistSlice'
import { addTocart } from '../redux/slices/cartSlice'

function Whishlist() {

  const whishlistArray=useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  
  const handleWhishlistcart = (products) => {
    dispatch(addTocart(products))
    dispatch(removeFromWhishlist(products.id))
   }

  return (
    <Row  className='ms-5' style={{marginTop:'100px'}}>
      {
        whishlistArray.length > 0 ?
          whishlistArray.map((products, index) => (
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
                    <button className='btn' onClick={()=>dispatch(removeFromWhishlist(products.id)) } > <i class="fa-solid fa-trash text-danger fa-lg "></i> </button>    
                    <button className='btn ' onClick={()=>handleWhishlistcart(products)} > <i class="fa-solid fa-shopping-cart text-primary fa-lg"></i>  </button>    
                </div> 
          </Card.Body>
        </Card>
                </Col>
          )) :<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-item-center'>
          <center>  <img height={'350px'}  src="https://i.pinimg.com/originals/29/5a/50/295a50b21af59b87804f2fa5a3d2fe4a.gif" alt="" /> </center>
            <h3 className='text-center text-danger'> <b> Whishlist is Empty!! </b></h3> <br />
       <center>     <Link style={{textDecoration:'none',width:'200px', alignItems:'center'}} className='btn btn-warning rounded' to={'/'} >back to Home </Link> </center>
          </div>
        
      }
    </Row>
  )
}

export default Whishlist