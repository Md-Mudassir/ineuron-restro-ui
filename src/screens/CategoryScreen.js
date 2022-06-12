import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, ListGroup, Image, Card, Button, Spinner, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import { BASE_URL } from '../config';
import { listCategoryDetails } from '../actions/categoryActions';

const Category = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { loading, error, category } = categoryDetails;

  let food = category?.attributes;

  let imgUrl = `${BASE_URL}${food?.cover.data.attributes.url}`;
  let rating = food?.reviews?.data[0]?.attributes.rating;

  useEffect(() => {
    dispatch(listCategoryDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <div className='py-3'>
      <Link to='/categories' className='btn btn-light my-3'>
        Back
      </Link>
      {loading && <Spinner />}
      {error && <Message variant='danger'>{error}</Message>}
      {food && (
        <Row>
          <Col md={6}>
            <Image src={imgUrl} alt={food.name} fluid={true} />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{food.name} </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={rating} text={`${food?.reviews?.data?.length} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>Price: ₹{food.price}</ListGroup.Item>
              <ListGroup.Item>Description: {food.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹ {food.price} </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              {food.isAvailable && (
                <ListGroup.Item>
                  <Row className='d-flex align-items-center'>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(12).keys()].map((n) => (
                          <option key={n + 1} value={n + 1}>
                            {n + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className='btn-block'
                  type='button'
                  disabled={!food.isAvailable}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Category;
