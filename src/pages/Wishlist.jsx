import React from 'react'
import { Row ,Col, Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromwishlist } from '../redux/slice/wishlistslice'
import { addToCart } from '../redux/slice/cartSlice'


function Wishlist() {

 const wishlistArray=useSelector((state)=>state.wishlistReducer)
 const dispatch =useDispatch()
 const handlewishlistcart =(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromwishlist(product.id))
 }
  return (
    <div style={{marginTop:'100px'}}>

    <Row>
{
wishlistArray.length>0?
wishlistArray.map((product,index)=>(


 <Col>
 <Card key={index} className='m-3' style={{ width: '18rem'}}>
<Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
<Card.Body>
 <Card.Title>{product.title.slice(0,25)}</Card.Title>
 <Card.Text>
  {product?.description.slice(0,50)}
 </Card.Text>
 <h5>{product?.price}</h5>

<div className='d-flex  justify-content-between'>
<Button onClick={()=>dispatch(removeFromwishlist(product.id))} variant="outline" className='btn ' ><i class="fa-solid fa-trash" style={{color: '#d22014'}}></i> </Button>
 <Button onClick={()=>handlewishlistcart(product)} variant="outline" className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: '#eb1405'}}></i> </Button>

</div>
</Card.Body>
</Card>
 </Col>
)):<div style={{height:'100vh'}} className='w-100 d-flex dlex-column align-items-center justify-content-center'>
  
  <img height={'500px'} src="https://go.picsnippets.com/hosted/images/ac/97a7e657b64475a09d370eb77d176a/cart_gif.gif" alt="hhh" />
  <Link className='btn btn-warning rounded' style={{textDecoration:'none'}} to={'/'}>Back to Home</Link>
</div>


}



    </Row>

    </div>
  )
}

export default Wishlist