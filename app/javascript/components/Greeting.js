import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting.greatting}</p>
    </div>
  );
};

export default Greeting;