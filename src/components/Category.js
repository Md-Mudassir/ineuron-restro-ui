import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config';
import Rating from './Rating';

const Category = ({ product, id }) => {
  let imgUrl = `${BASE_URL}${product.cover.data.attributes.url}`;
  let rating = product?.reviews?.data[0]?.attributes.rating;

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/category/${id}`}>
        <Card.Img src={imgUrl} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/category/${id}`}>
          <Card.Title as='div'>
            <strong>{product.name} </strong>
          </Card.Title>
        </Link>
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

export default Category;
