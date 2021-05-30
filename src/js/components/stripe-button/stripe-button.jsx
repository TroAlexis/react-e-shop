import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IwoHpJAuPPImKx9bB9qDmIFBi5bsDwvtQUiAZdxpac9o4dOC8NnRHGE5nV6hwjfp7WSywpyM8nFqMBTi2kjUn8z00025Aa9nD';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return pug`
    StripeCheckout(
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description=${`Your total is ${price}$`}
      amount=priceForStripe
      panelLabel="Pay Now"
      token=onToken
      stripeKey=publishableKey
    )
  `;
};

export default StripeCheckoutButton;
