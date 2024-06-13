import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div>
      {/*className='d-flex flex-wrap justify-content-around'*/}
      {/* Mapping over products */}
      <div key={product._id} className='my-3'>
        {/*style={{ width: '18rem' }}*/}
        <Card className='h-100 shadow-sm'>
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
          </Link>
          <Card.Body>
            <Link
              to={`/product/${product._id}`}
              style={{
                fontSize: '0.9rem',
                display: 'block',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'black',
              }}
            >
              {/* Product name */}
              <Card.Title
                as='div'
                style={{
                  maxWidth: '100%', // Ensure the title doesn't exceed the card width
                  overflow: 'hidden', // Hide overflowing content
                  textOverflow: 'ellipsis', // Truncate with ellipsis
                  whiteSpace: 'nowrap', // Prevent wrapping
                }}
              >
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as='div'>
              <Rating value={product.rating} /> {/* Product rating */}
              <div
                style={{ fontSize: '0.8rem' }}
              >{`${product.numReviews} reviews`}</div>{' '}
              {/* Number of reviews */}
            </Card.Text>
            <div className='d-flex justify-content-between align-items-center'>
              {/* Product price */}
              <Card.Text
                as='h6'
                style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}
              >
                ${product.price}
              </Card.Text>
              {/* Buy button */}
              <Button variant='primary' className='ml-auto'>
                Buy
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Product
