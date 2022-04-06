
import  Image  from 'next/image';
import React from 'react'
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

const MAX_RATING = 5
const MIN_RATING = 2

export default function CheckoutProduct({id, title, price, rating, description,image, categroy, hasPrime }) {

    const[rate] = React.useState(
        Math.floor(Math.random()* MAX_RATING - MIN_RATING + 1) + MIN_RATING
    )

    const dispatch = useDispatch()

    const removeItem = ()=>{
        dispatch(removeFromBasket({id}))
    }

   
    return (
        <div 
            key={id}
            className="flex flex-col lg:flex-row border-b pb-9 justify-center items-center gap-x-8"
        >
            <div className=" w-[15rem]">
                <Image src={image} width={200} height={200} objectFit='contain' />
            </div>

            <div className='flex-1 flex flex-col gap-y-3'>
                <p className='md:text-2xl'>{title}</p>
                <div className='flex'>
                    {Array(rate).fill().map((_, i) =>(
                        <StarIcon className='h-5 text-yellow-500'/>
                    ))}
                </div>
                <p className='text-xs my-2 line-clamp-3 md:text-xl'>
                    {description}
                </p>
                <p className='text-xl'>
                    ${price}
                </p>
                {hasPrime &&
                    <div className='flex items-center space-x-2'>
                        <img
                            loading='lazy'
                            className='w-12'
                            src='https://links.papareact.com/fdw'
                        />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                    </div>
                }
               
            <div className='flex flex-col space-y-2 my-auto justify-self-start col-start-1 row-start-3 lg:col-start-2'> 
                 {/* <button className='button'>Add to Basket</button> */}
                 <button onClick={removeItem} className='button self-start '>Remove from Basket</button>
            </div>
            </div>
        </div>
    )
}
