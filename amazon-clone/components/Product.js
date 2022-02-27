import  Image  from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice';
import  Link  from 'next/link';


const MAX_RATING = 5
const MIN_RATING = 2

export default function Product({id, title, price, description, image, category, rating}) {
  
const[rate] = React.useState(
    Math.floor(Math.random()* MAX_RATING - MIN_RATING + 1) + MIN_RATING
)

const[hasPrime] = React.useState(
    Math.random() < 0.5   
 )

 const dispatch = useDispatch()
 const addItemToBasket =()=>{
    const product = {
        id, 
        title, 
        price, 
        description, 
        image, 
        category,
        hasPrime,
        rating
    }
    //sending the product as an action to the redux store, meaning the basket slice
    dispatch(addToBasket(product))

    // addDoc(collection(db, 'cart'),{
    //     id:id,
    //     title:title,
    //     price:price,
    //     description:description,
    //     image:image,
    //     category:category,
    //     hasPrime:hasPrime,
    //     rating:rating
    // })
 }



    return (
        <div  key={id} className='relative flex flex-col m-5 bg-white rounded-lg z-30 p-10 cursor-pointer hover:shadow-lg'>
            <Link href={'/product/' + id}>
                <div key={id} className='flex flex-col'>
                    <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
                    <Image src={image} height={200} width={200} objectFit="contain"  />
                    <h4 className='my-3'>{title}</h4>
                    <div className='flex'>
                        {Array(rate).fill().map((_, i) =>(
                            <StarIcon key={i}className='h-5 text-yellow-500'/>
                        ))}
                    </div>
                    <p className='text-xs my-2 line-clamp-2'>{description}</p>
                    <p className='mb-5'>${price}</p>
                    {hasPrime &&
                        <div className='flex items-center space-x-2'>
                            <img className='w-12' src='https://links.papareact.com/fdw'/>
                            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                        </div>
                    }
                </div>
            </Link>
                <button onClick={addItemToBasket} className='mt-auto button'>Add to busket</button>
            </div>
    )
}
