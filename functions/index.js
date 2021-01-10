const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express=require("express");
const cors=require("cors");
const { request, response } = require('express');
const stripe= require("stripe")('sk_test_51I5uSFKSw31fJXZ7MHPcuZWwaygzqIDLSyIL4p4AeVaDZnw1Hg3cXxTTx47ZXg3lxQS6hKmNjuxElnS40TSoUEW200Y62YG7SI')

//API

//App config
const app=express();

//Middlewares
app.use(cors({origin:true}))
app.use(express.json());

//API routes
app.get('/',(request,response)=>response.status(200).send('heloooooo'))
//app.get('/deba',(request,response)=>response.status(200).send('heloooooo11111'))
app.post('/payment/create',async(request,response)=>{
    const total=request.query.total;
    console.log('payment request received',total);
    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,//subunits of currency
        currency:"INR",
        //description: 'Software development services',
    });
    // var customer = await stripe.customers.create({
    //     name: 'Jenny Rosen',
    //     address: {
    //       line1: '510 Townsend St',
    //       postal_code: '98140',
    //       city: 'San Francisco',
    //       state: 'CA',
    //       country: 'US',
    //     }
    //   });

    //OK - Created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})


//Listen command
exports.api =functions.https.onRequest(app)