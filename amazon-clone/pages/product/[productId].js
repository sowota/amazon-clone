import  Image  from 'next/image';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { addToBasket } from '../../slices/basketSlice';
import { StarIcon } from '@heroicons/react/solid';

import banner3 from '../../public/banner3.jpg';



export const getStaticPaths = async () =>{

    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    const paths = data.map(product =>{
        return {
            params: {productId:product.id.toString()}
        }
    })


    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context) =>{
    const id = context.params.productId
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const product = await res.json()

    return { 
        props: {product}
    }
}


export default function Product({product}) {

    const {id,title, price, description, image, category, hasPrime, rating} = product
    //console.log(product.id)

    const rate = Math.floor(rating.rate)
    //console.log(rate)

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

    //console.log(product)
    //sending the product as an action to the redux store, meaning the basket slice
    dispatch(addToBasket(product))
 }




    return (
        <div className='relative top-28 bg-gray-100  w-screen flex flex-col items-center justify-center gap-y-28 px-7 ' >
            <Header />
            <div className='bg-white flex flex-col gap-y-10 gap-x-16   p-8 w-full mx-auto rounded-lg md:flex-row max-w-7xl mt-20'>
                <div className='w-[16rem] md:w-[30rem] px-5'>
                    <img src={product.image} className='w-full h-full object-contain' />
                </div>
                <div className='flex flex-col gap-y-4 ml-5 justify-start'>
                    <p className='bg-amazon_blue self-start text-white p-2 rounded-md bold'>{product.category}</p>
                    <h1 className='text-3xl'>{product.title}</h1>
                    <div className="flex gap-x-4">
                        <div className="flex">
                            {Array(rate).fill().map((_, i) => (
                                <StarIcon className='w-5 text-yellow-500'/>
                            ))}
                        </div>
                        <p className='text-amazon_blue-light'>{product.rating.count} ratings</p>
                    </div>
                    <hr/>
                    <h2 className='text-base'>Price: <span className='text-red-700 text-2xl'>${product.price}</span></h2>
                    <p className='text-green-700 text-xl font-bold'>In Stock.</p>
                    <p className=''>{product.description}</p>
                    <button onClick={addItemToBasket} className='mt-auto button self-start '>Add to busket</button>
                </div>
            </div>

            <div className=''>
                    <Image src={banner3} width={1000} height={260} objectFit='cover'/>
            </div>

        </div>
    )
}
