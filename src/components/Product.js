import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config';
import Rating from './Rating';

const Product = ({ product, id, idx }) => {
  // console.log('re', product.reviews.data.attributes.rating ?? 0);
  let imgUrl = `${BASE_URL}${product.cover.data.attributes.url}`;
  let rating = product?.reviews?.data[0]?.attributes.rating;

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${id}`}>
        <Card.Img src={imgUrl} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${id}`}>
          <Card.Title as='div'>
            <strong>{product.name} </strong>
          </Card.Title>
        </Link>
        <Card.Title as='p'>
          <strong>{product.description} </strong>
        </Card.Title>
        <Card.Text as='div'>
          <Rating value={rating} text={`${product?.reviews?.data?.length} reviews`} />
        </Card.Text>
        <Card.Text as='h3' className='mt-2'>
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
