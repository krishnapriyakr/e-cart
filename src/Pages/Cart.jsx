import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'

function Cart() {

  const cartArray=useSelector(state=>state.cartReducer)
  const dispath = useDispatch()

  const [total, setTotal] = useState(0)
  const navigate=useNavigate()
  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else {
      setTotal(0)
    }
  }
  useEffect(() => {
    getCartTotal()
  },[cartArray])

  const handleCart = () => {
    dispath(emptyCart())
    alert("Order placed successfully,Thank you for purchasing")
    navigate('/')
  }
  return (
    <div className='container' style={{marginTop:'100px'}}>
      {
        cartArray.length > 0 ?
          <div className="row mt-5">
            <div className="col-lg-8">
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Product image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  cartArray.map((products, index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{products.title}</td>
                      <td><img width={'150px'} height={'100px'} src={products.thumbnail} alt="" /></td>
                      <td>{products.price}</td>
                      <td><button onClick={()=>dispath(removeFromCart(products.id))} className='btn'><i class="fa-solid fa-trash text-danger"></i></button> </td>
                    </tr>
                  ))
                }
                </tbody> 
            </table>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div className='border mt-3 rounded shadow p-2 w-100'>
                <h2 className='text-primary'> <b> Cart Summary</b></h2> <br />
                <h4 >Total Products: <span>{cartArray.length}</span> </h4>
                <h4 className='mt-3'>Total: <span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
                <div className="d-grid">
                  <button  onClick={handleCart} className='btn btn-success'>check out</button>
                </div>
              </div>
            </div>


          </div>
          : <div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-item-center'>
          <center>  <img height={'400px'}  src="https://th.bing.com/th/id/OIP.99DKEzGiqgjYfWg2_NmD_QAAAA?w=360&h=360&rs=1&pid=ImgDetMain" alt="" /> </center>
            <h3 className='text-center text-danger'> <b> Cart is Empty!!</b></h3> <br />
       <center>     <Link style={{textDecoration:'none',width:'200px', alignItems:'center'}} className='btn btn-warning rounded' to={'/'} >back to Home </Link> </center>
          </div>

      }
    </div>
  )
}

export default Cart