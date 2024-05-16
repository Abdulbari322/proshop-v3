import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <div className='d-flex flex-wrap justify-content-around align-items-stretch'>
      <div key={product._id} className='my-3' style={{ width: '18rem' }}>
        <Card className='h-100 shadow-sm'>
          <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
          </a>
          <Card.Body>
            <a href={`/product/${product._id}`} style={{ fontSize: '0.9rem' }}>
              <Card.Title as='div'>
                <strong>{product.name}</strong>
              </Card.Title>
            </a>
            <Card.Text as='h6'>${product.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Product
