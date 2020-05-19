import React from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const {stripe, elements} = this.props

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      stripeTokenHandler(result.token);
     async function stripeTokenHandler (token) {
        const paymentData = {
          token: token.id,
        };
         console.log(paymentData);
        // Use fetch to send the token ID and any other payment data to your server.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

          const response = await fetch('https://us-central1-information-management-s-c7f1c.cloudfunctions.net/charge', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:console.log(JSON.stringify(paymentData)),
          
          }).then(response =>{
             console.log(response.json());
              const clientSecret = response.client_secret;
              
          });
      
       
      
        // Return and display the result of the charge.
       
      }
      
    }
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button style={{marginLeft:'4vh'}} disabled={!this.props.stripe}>Confirm order</button>
      </form>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm  stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}