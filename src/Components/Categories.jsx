
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import{Link} from 'react-router-dom';



function Categories() {

const [categories,setCategories]=useState([])


useEffect(()=>{

axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

},[])
  

  return (
    <div className='container'>

      <div className="my-5 text-center"><h1>Categories</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tenetur explicabo odio numquam quod officiis, repudiandae harum amet officia. Rem mollitia provident aliquam neque voluptatibus! Eos nisi maxime a provident?</p>

      </div>
      <div className="row">

{

categories.map((val,key) =>


<div className="col-md-4 my-3" key={key}  >


<Link className='text-decoration-none' to={`/products/category/${val}`}>
<Card>
  
  <Card.Body>
    <Card.Title>{key+1}-{val.toUpperCase().replace("-","  ")}</Card.Title>
  
  </Card.Body>
</Card>
</Link>


</div>

)

}

      </div>
    </div>
  )
}

export default Categories