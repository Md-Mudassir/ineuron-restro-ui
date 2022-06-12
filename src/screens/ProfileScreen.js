import React, { useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails } from '../actions/userActions';

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  let { data } = user;

  useEffect(() => {
    if (!userDetails) {
      history.push('/login');
    } else {
      dispatch(getUserDetails());
    }
  }, [dispatch, history]);

  return (
    <Row className='py-3'>
      <Col md={3}>
        <h2>User Profile</h2>

        {error && <Message variant='danger'>{error}</Message>}

        {loading && <Loader />}
        <Form>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={data?.username}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' value={data?.email}></Form.Control>
          </Form.Group>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
