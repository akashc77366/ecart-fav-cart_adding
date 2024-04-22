import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { emptyCart, removeFromcart } from '../redux/slice/cartSlice';
import { Link, useNavigate } from 'react-router-dom';






function Cart() {

  const cartArray = useSelector((state)=>state. cartReducer)
  const dispatch =useDispatch()
  const navigate =useNavigate()


  const [total,setTotal] =useState(0)

  const getCarttotal =()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getCarttotal()
  },[cartArray])

  const handleCart=()=>{
    dispatch(emptyCart())
    alert("your order placed successfully.....thankyou ")
    navigate('/')
  }


  return (

    <div style={{"marginTop":"100px"}} >
    {

          cartArray.length>0?
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
    {
      cartArray.map((product,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{product.title}</td>
          <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
          <td>{product.price}</td>
          <td><Button onClick={()=>dispatch(removeFromcart(product.id))} variant="outline-info"><i class="fa-solid fa-trash" style={{color: '#d22014'}}></i></Button></td>

        </tr>
      ))
    }
    

      </tbody>
      </Table>
      
       :<div style={{height:'100vh'}} className='w-100 d-flex dlex-column align-items-center justify-content-center'>

  <img height={'500px'} src="https://go.picsnippets.com/hosted/images/ac/97a7e657b64475a09d370eb77d176a/cart_gif.gif" alt="hhh" />
  <Link className='btn btn-warning rounded' style={{textDecoration:'none'}} to={'/'}>Back to Home</Link>
</div>
    }
    <div className='col-lg=3'>
      <div className='border mt-3 rounded shadow p-2 w-100'>
        <h1 className='text-primary p-2'>Cart Summary</h1>
        <h4>Total Products:<span>{cartArray.length}</span></h4>
        <h4>Total:<span className='text-danger fw-bolder fs-2'>${total}</span></h4>
        <div className='d-grid'>
          <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check Out</button>
        </div>
      </div>
    </div>
   </div> 
   
  )
}

export default Cart