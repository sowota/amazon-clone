import  Image  from 'next/image';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { addToBasket } from '../../slices/basketSlice';



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
    const data = await res.json()

    return { 
        props: {product: data}
    }
}


export default function Product({product}) {

    const {id,title, price, description, image, category, hasPrime, rating} = product
    //console.log(product.id)

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

    console.log(product)
    //sending the product as an action to the redux store, meaning the basket slice
    dispatch(addToBasket(product))
 }




    return (
        <div className='relative top-28 bg-gray-100 h-screen w-screen flex flex-col items-center justify-center ' >
            <Header />
            <div className='bg-white flex flex-col gap-y-10 items-center justify-center p-8 w-full mx-auto rounded-lg md:flex-row max-w-5xl'>
                <div className='w-1/2 h-1/2 md:w-full px-5 grow-0'>
                    <Image src={product.image} width={230} height={230} objectFit='contain'/>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <p className='bg-amazon_blue self-start text-white p-2 rounded-md bold'>{product.category}</p>
                    <h1 className='text-3xl'>{product.title}</h1>
                    <h2 className='text-2xl'>${product.price}</h2>
                    <p className=''>{product.description}</p>
                    <button onClick={addItemToBasket} className='mt-auto button self-start '>Add to busket</button>
                </div>
            </div>

        </div>
    )
}
