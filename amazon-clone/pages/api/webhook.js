import {buffer} from 'micro'
import * as admin from 'firebase-admin'


//secure connection to firebase from backend
const serviceAccount = require('../../permissions.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount) 
  })
  : admin.app()

// connect to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNIN_SECRET


const fullfillOrder = async(session) =>{
    console.log('Fulfillinf order', session)

    return setDoc(app.firestore())
}


export default async (req, res) =>{
    if(req.method === 'POST'){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers('stripe-signature')

        let event 

        // verify that the event posted came from stripe 
        try{
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        }catch(error){
            console.log('error', error.message)
            return res.status(400).send(`Webhook error;: ${error.message}`)
        }

        //handle the checkout.session.completed event 
        if(event.type === 'checkout.session.completed'){
            const session = event.data.object

            //fulfill the order 


        }
    }
}