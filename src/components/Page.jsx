import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickPin } from '../features/pin';
import { GiSnake } from "react-icons/gi";
import './Page.css';

const Page = () => {
  const { pins, showTryPin,lastControl } = useSelector((state) => state.pin);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Chamber of Secrets</h1>
      <div className="calculator">
        <div className="screen">
          {showTryPin.length > 0 &&
            showTryPin.map((wins, index) => (
              <span key={index}>{wins}</span>
            ))}
        </div>

        <div className="grid">
          {pins.map((pin, index) => (
            <button
              key={index}
              onClick={() => dispatch(clickPin(pin))}
              className="button"
            >
              {pin}
            </button>
          ))}
          <div style={{marginLeft:"50px",marginTop:"20px",}}>
          {lastControl === 4 ? null :<GiSnake/> }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
