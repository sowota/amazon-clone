import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner5 from '../public/banner5.jpg';
import banner6 from '../public/banner6.jpg'
import banner7 from '../public/banner7.jpg'
import Image from 'next/image';
import banner9 from '../public/banner9.jpg'
import banner10 from '../public/banner10.jpg'

 


export default function Banner() {
    return (
        <div className='relative'>
            {/* <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20' /> */}
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={4000}
            >
                <div>
                    <Image src={banner5} objectFit='cover'   />
                </div>   
                <div>
                    <Image src='https://links.papareact.com/6ff' width='100%' height='100%'objectFit='cover'/>
                </div>   
                <div>
                    <Image src={banner6} objectFit='cover'/>
                </div>   
                <div>
                    <Image src={banner7} objectFit='cover'/>
                </div>   
                <div>
                    <Image src={banner9} objectFit='cover'/>
                </div>   
                <div>
                    <Image src={banner10} objectFit='cover'/>
                </div>   
            </Carousel>
        </div>
    )
}
