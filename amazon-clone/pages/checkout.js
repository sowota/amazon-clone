import Image  from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from './../slices/basketSlice';
import CheckoutProduct from './../components/CheckoutProduct';
import { useSession } from 'next-auth/react';
import Header from './../components/Header';

import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key)

export default function Checkout() {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const { data: session } = useSession()
    console.log(session)

    console.log(items)

    const createSession = async ()=>{
        const stripe = await stripePromise

        //call the backend to create a checkout session

        const checkoutSession = await axios.post('/api/create-checkout-session',{
            items:items,
            email:session.user.email
        })

        //redirect user to stripe checkout

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if(result.error){
            alert(result.error.message)
        }

    }

    return (
        <div className=" h-screen w-sc pt-28 lg:flex flex-col max-w-screen-2xl mx-auto">
            <Header/>
            <div className='flex-grow m-5 shadow-sm mx-auto'>
                    <Image 
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit='contain'
                    />
            </div>
            <main className="w-screen md:flex p-16 ">     

                <div className='flex flex-col p-5 space-y-10 h-full flex-grow bg-white md:p-10'>
                    <h1 className='text-3xl border-b pb-4'>Shopping Cart</h1>
                    {
                        items.length === 0 ? 
                        <h1 className='text-xl'>Your cart is empty</h1>
                        :
                        items.map(item => (
                            <CheckoutProduct 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            
                            />
                        ))  
                    }
                </div>

                    {/* sidebar */}   
                {items.length > 0 && (

                <div className='flex flex-col bg-white p-10 shadow-md'>
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items) {" "}
                                <span>
                                    ${total}
                                </span>
                            
                            </h2>

                            <button 
                                role='link'
                                onClick={createSession}
                                disabled={!session}
                                className={`button mt-s ${!session && 'from-gray-300 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                            >
                                {!session? 'Sign in to checkout' : 'Proceed to checktout'}
                            </button>
                        </>
                </div>


                )}
            </main>
        </div>
    )
}
