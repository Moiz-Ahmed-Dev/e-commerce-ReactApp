import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import{Link} from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products))
  }, [categoryName])



  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>{categoryName.toUpperCase()}</h1>
        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quisquam assumenda quod hic numquam quas. Quaerat, velit. Debitis reprehenderit eos, ipsum praesentium inventore magnam! Fuga excepturi voluptatum dicta velit facilis.</p>
      </div>
      <div className="row">
        {
          products.map((val, key) =>
            <div className="my-4 col-md-6" key={key}>
             <Link className='text-decoration-none' to={`/products/${val.id}`}>
             <Card>
                <Card.Img variant="top" src={val.thumbnail} />
                <Card.Body>
                  <Card.Title>{val.title}-{val.price}$</Card.Title>
                  <Card.Text>{val.description}                                       
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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

export default CategoryPage