
import Link from 'next/link';
import Product from './Product';



export default function ProductFeed({products}) {


    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-36 mx-auto -mt-12 sm:-mt-8 lg:-mt-64' >
            {products.slice(0, 4).map(product =>(
                
            
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        image={product.image}
                        rating={product.rating.rate}
                    />
               
                
            ))}

            <img className='md:col-span-full' src='https://links.papareact.com/dyz'/>
            <div className='md:col-span-2'>
            {products.slice(4, 5).map(product =>(
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    rating={product.rating.rate}
                />
            ))}
            </div>
            {products.slice(5,products.length).map(product =>(
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    rating={product.rating.rate}
                />
            ))}
          
        </div>
    )
}


