const functions = require('firebase-functions');
// We should install required packages (stripe, body-parser) using npm install inside /functions/ folder
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

const stripe = require('stripe')('********************');



 async function charge(req, res) {
 
    const body = (req.body);
    const token = body.token;
    
    
// const charge = await stripe.charges.create({
//     amount: 100,
//     currency: 'inr',
//     description: 'Example charge',
//     source: token,
//   }).then(charge => {
//     send(res, 200, {
//         message: 'Success',
//         charge,
//     });
// }).catch(err => {
//     console.log(err);
//     send(res, 500, {
//         error: err.message,
//     });
// });

const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: 'inr'
  }).then(charge =>{
      send(res,200,{
         message:'success',
         paymentIntent 
      })
  }).catch(err =>{
      send(res,500,{
          error:err.message
      });
  }); 

// const paymentMethodReq = await stripe.createPaymentMethod({
//     type: "card",
//     card: cardElement,
//   });

//   if (paymentMethodReq.error) {
//   send(res,500,{
//    PaymentError: paymentMethodReq.error.message,
//   }); 
//   }

//   const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
//     payment_method: paymentMethodReq.paymentMethod.id
//   });
}

function send(res, code, body) {
    res.send({
        statusCode: code,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(body),
    });
}

  app.use(cors);
app.post('/', (req, res) => {
    // Catch any unexpected errors to prevent crashing
    try {
        charge(req, res);
    } catch(e) {
        console.log(e);
        send(res, 500, {
            error:`This is error ${e.message} ${console.log(charge)}`
        });
    }
});
exports.charge = functions.https.onRequest(app);