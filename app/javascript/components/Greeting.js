import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting,fetchGreeting } from '../redux/greeting/greettingSlice';

const Greeting = () => {
   const dispatch = useDispatch();
   const greeting = useSelector(getGreeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;