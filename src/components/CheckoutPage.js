import React from 'react';

const centered = { margin: '10px', textAlign: 'center' };

const CheckoutPage = () => {
  return (
    <div className="page-container" style={{height: 'calc(80vh - 70px)'}}>
      <h1 style={centered}>
        Checkout successful!
      </h1>
      <h3 style={centered}>
        Thank you for ordering with jack, queen and king.
      </h3>
      <div style={centered}>
        <p>Estimated delivery time: <strong>never</strong></p>
        This isn't a real website
      </div>
    </div>
  )
}

export default CheckoutPage;