import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoryActions';
import Category from '../components/Category';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <div className='py-3'>
      <h1>Categories</h1>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {categories && (
        <Row>
          {categories?.map(({ attributes, id }) => (
            <Col sm={12} md={6} lg={4} xl={3} key={id}>
              <Category product={attributes} id={id} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
