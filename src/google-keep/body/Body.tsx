import React from 'react';
import { Header } from "./components/Header";

export const Body: React.FC = () => {
  return <div className='rx-body-container'>
    <Header/>

    <div className="rx-body-content-container">
      <div>Card</div>
      <div>Card</div>
      <div>Card</div>
      <div>Card</div>
      <div>Card</div>
    </div>
  </div>
};
