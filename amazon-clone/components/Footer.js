import React from 'react'
import  Image  from 'next/image';
import us from '../public/us.png'

export default function Footer() {

    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <footer className="bg-amazon_blue w-screen">
        <div 
            className='bg-amazon_blue-light w-full text-center p-3 hover:bg-slate-800 cursor-pointer'
            onClick={scrollToTop}
            >
            <p className="text-white">Back to Top</p>
        </div>
        <div className="grid gap-y-5 place-content-center justify-center sm:grid-cols-2 w-[80vw] lg:grid-cols-4  max-w-screen-2xl mx-auto py-16">
            <div className="flex flex-col gap-y-4">
                <h2 className='footerHead'>Get to Know Us</h2>
                <ul className='footerLink'>
                    <li className="cursor-pointer hover:underline">Careers</li>
                    <li className="cursor-pointer hover:underline">Blog</li>
                    <li className="cursor-pointer hover:underline">About Amazon</li>
                    <li className="cursor-pointer hover:underline">Investor Relations</li>
                    <li className="cursor-pointer hover:underline">Amazon Devices</li>
                    <li className="cursor-pointer hover:underline">Amazon Science</li>
                </ul>
            </div>
            <div  className="flex flex-col gap-y-4">
                <h2 className='footerHead'>Make Money with Us</h2>
                <ul className='footerLink'>
                    <li className="cursor-pointer hover:underline">Sell products on Amazon</li>
                    <li className="cursor-pointer hover:underline">Sell on Amazon Business</li>
                    <li className="cursor-pointer hover:underline">Sell apps on Amazon</li>
                    <li className="cursor-pointer hover:underline">Become an Affiliate</li>
                    <li className="cursor-pointer hover:underline">Advertise Your Products</li>
                    <li className="cursor-pointer hover:underline">Self-Publish with Us</li>
                    <li className="cursor-pointer hover:underline">Host an Amazon Hub</li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-4">
                <h2 className='footerHead'>Amazon Payment Products</h2>
                <ul className='footerLink'>
                    <li className="cursor-pointer hover:underline">Amazon Business Card</li>
                    <li className="cursor-pointer hover:underline">Shop with Points</li>
                    <li className="cursor-pointer hover:underline">Amazon Currency Converter</li>
            
                </ul>
            </div>
            <div className="flex flex-col gap-y-4">
                <h2 className='footerHead'>Let Us Help You</h2>
                <ul className='footerLink'>
                    <li className="cursor-pointer hover:underline">Amazon and COVID-19</li>
                    <li className="cursor-pointer hover:underline">Your Account</li>
                    <li className="cursor-pointer hover:underline">Your Orders</li>
                    <li className="cursor-pointer hover:underline">Shipping Rates & Policies</li>
                    <li className="cursor-pointer hover:underline">Returns & Replacements</li>
            
                </ul>
            </div>
        </div>
        <div className="w-screen flex items-center border-t border-[#3a4553] justify-center gap-x-5 py-6">
            <Image 
                onClick={()=>router.push('/')}
                src='https://links.papareact.com/f90'
                width={60}
                height={60}
                objectFit="contain"
                className="cursor-pointer"
            />
            <div className="flex gap-x-3 border border-[#3a4553]  rounded-md p-2 cursor-pointer border-t">
                <div className="w-[2rem]">
                    <Image src={us} className="w-full h-full" />
                </div>
                <p className="text-[#DDDDDD]">United States</p>
            </div>
        </div>
    </footer>
  )
}
