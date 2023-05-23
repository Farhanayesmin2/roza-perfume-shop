import React from 'react'; 
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { SiFsecure, SiAuth0 } from "react-icons/si";

import { FaFacebook } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { SiBlogger } from "react-icons/si";


const Footer = () => {

    // FUNCTION ------------------------------------------------------------------
    function Footer1(Icon, Text){
        return(
            <div className="flex items-center h-6 w-auto">
                    <Icon className='h-full w-auto pr-4'/>
                    <p class="text-xs font-bold text-gray-200 capitalize">{Text}</p>
            </div> 
        )
    
    } 
    
    function Line({children}){
        return( 
                <p className="text-xs font-light text-gray-600 leading-none">{children}</p>
             )
    }
    
    function Logo({link, alt}){
        return(
            <div className='w-[39px] h-[26px] rounded-md bg-blue-200'> 
                    <img src={link} alt={alt}></img>
            </div>
        )
    }
    

    return (
        <>
            {/* First Footer */}
            <div className='flex flex-row justify-between items-center px-40 w-full text-white h-[45px] bg-[#4D2952]'> 
                {Footer1(HiOutlineBookmarkAlt, "Free Delivery & Returns*")}
                {Footer1(HiOutlinePaperAirplane, "Online Self Service")}
                {Footer1(TiTick, "100% Genuine Guaranteed")}
                {Footer1(SiFsecure, "Secure Payment")}
                {Footer1(SiAuth0, "100% Authentic Products")}
            </div> 

            {/* Second Footer */}
            <div className='flex flex-row justify-between items-center w-full h-[264px] bg-[#F5F6F6]'>
                <div className='w-1/2 h-full'>
                    <div className='mx-[100px] mt-[48px] mb-[48px]'>
                        <p className="text-base font-bold uppercase pb-6">SIGN up for Special Offers and Promotions</p>
                        <div className='flex space-x-4 pb-4'>
                            <input placeholder='Your Email' className='w-[50%] h-[47px] p-4 bg-white border-b-2 border-b-black'>
                            </input>
                            <input placeholder='Your Mobile' className='w-3/5 h-[47px] p-4 bg-white border-b-2 border-b-black'>
                            </input> 
                            <button className='relative w-[171px] h-[47px] bg-white border-2 border-black'>
                                <p className='font-bold'>SIGN UP</p>
                            </button> 
                        </div>
                        <p className="text-xs text-justify font-light leading-none">By entering your email and clicking “subscribe”, you consent to receive marketing emails from e.l.f. You can unsubscribe at any time through the unsubscribe link in each email. See our Privacy Notice for more details, including how your personal information is used and shared.</p>

                    </div>
                </div>
                <div className='w-1/2 h-full'> 
                    <div className='mx-[100px] mt-[48px] mb-[48px]'>
                        <p className="text-base font-bold uppercase pb-2">NEED HELP?</p> 
                        <p className="text-xs font-light text-gray-600 leading-none pb-6">info@perfumeshop.com</p>

                        <p className="text-base font-bold uppercase pb-2">VISIT US</p> 
                        <div className="text-xs font-light text-gray-600 leading-none uppercase space-y-1">
                            <p>perfumeshop, inc</p>
                            <p>789 ocean ave.</p>
                            <p>coral city, ca 90210</p>
                        </div>
                        

                    </div>
                
                </div>

            </div>
            {/* Third Footer */}
            <div className='flex flex-row justify-start items-start w-full h-[380px] bg-white'>
                
                <div className='flex flex-col w-auto h-fit ml-[100px] mt-12'>
                    <div className='w-full h-10'> 
                        <p className="text-base font-bold uppercase pb-4">NEED HELP?</p> 
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col w-[125px] space-y-4'>
                                <Line>Perfumes</Line>
                                <Line>Woman's Perfume</Line>
                                <Line>Men's Cologne</Line>
                                <Line>Haircare</Line>
                                <Line>Boutiques</Line>
                                <Line>50% Off</Line>
                                <Line>Samples</Line>
                                <Line>Skincare</Line>
                                <Line>Aromatherapy </Line> 
                        </div>

                        <div className='flex flex-col w-[125px] space-y-4'>
                                <Line>Best Sellers</Line>
                                <Line>Clearance</Line>
                                <Line>For Kids</Line>
                                <Line>Makeup</Line>
                                <Line>Candles</Line>
                                <Line>New Arrivals</Line>
                                <Line>Mini</Line>
                                <Line>Hard To Find</Line> 
                        </div>
                    </div> 
                </div>      

                <div className='flex flex-col w-auto h-fit ml-[10px] mt-12'>
                    <div className='w-full h-10'> 
                        <p className="text-base font-bold uppercase pb-4">CUSTOMER SUPPORT</p> 
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col w-[150px] space-y-4'>
                                <Line>Get Certificates</Line>
                                <Line>Gift Cettificate Balance</Line>
                                <Line>Accessibility Policy</Line>
                                <Line>Return Policy</Line>
                                <Line>Security Pledge</Line>
                                <Line>Terms Of Use</Line>
                                <Line>Shipping Rates</Line>
                                <Line>100% Genuine</Line>  
                        </div>

                        <div className='flex flex-col w-[150px] space-y-4'>
                                <Line>Wholesale Information</Line>
                                <Line>Affiliate Program</Line>
                                <Line>Sitemap</Line>
                                <Line>Perfume Coupons</Line>
                                <Line>Careers</Line>  
                        </div>
                    </div> 
                </div>   

                <div className='flex flex-col w-auto h-fit ml-[10px] mt-12'>
                    <div className='w-full h-10'> 
                        <p className="text-base font-bold uppercase pb-4">MY ACCOUNT</p> 
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col w-[150px] space-y-4'>
                                <Line>My Account</Line>
                                <Line>Register Now</Line>
                                <Line>Order Status</Line>
                                <Line>Reminder Club</Line>
                                <Line>Sign In</Line>
                                
                        </div> 
                    </div> 
                </div>     

                <div className='flex flex-col w-auto h-fit ml-[10px] mt-12'>
                    <div className='flex flex-row w-full h-10 space-x-6'> 
                            <GiBearFace className='w-10 h-10 rounded-full'/>
                            <FaFacebook className='w-10 h-10 rounded-full'/>
                            <TiSocialYoutubeCircular className='w-10 h-10 rounded-full'/>
                            <AiFillTwitterCircle className='w-10 h-10 rounded-full'/>
                            <BsPinterest className='w-10 h-10 rounded-full'/>
                            <SiBlogger className='w-10 h-10 rounded-full'/>
                  
                        
                    </div>
                    
                </div>       

            </div>

            {/* Fourth Footer */}
            <div className='h-[228px] w-full bg-black text-gray-300 items-start justify-center'>
                <div className='flex flex-row space-x-6 text-base justify-center py-4'>
                    <p>Customer Service Code: 0A</p> 
                    <p>Privacy Policy | CA Privacy Notice</p>
                    <p>Entire Contents Copywright&copy; 1997-2023. PerfumeShop.com,Inc.</p> 
                </div>

                <p className="text-xs leading-none text-center text-gray-200 pt-4 pb-1">PerfumeShop.com is an independent retailer carrying genuine brand name Perfumes, skincare, haircare, candles and makeup.</p>
                <p className="text-xs leading-none text-center text-gray-200 pt-1 pb-4">PerfumeShop and PerfumeShop.com are trademarks of PerfumeShop, Inc. and are Registered in the US Patent & Trademark Office.</p> 
                <p className="text-xs leading-none text-center text-gray-200 capitalize">All Rights Reserved.</p>

                <div className='flex flex-row justify-center h-[26px] w-auto space-x-3 pt-10'> 
                    <Logo link="https://www.svgrepo.com/download/361978/amex.svg" alt="american express"/>
                    <Logo link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Visa_Debit_SVG_logo.svg/1200px-Visa_Debit_SVG_logo.svg.png" alt='visa'/> 
                    <Logo link="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt='Master Card'/> 
                    <Logo link="https://seeklogo.com/images/D/discover-network-logo-D0993C26F4-seeklogo.com.png" alt="discover"/> 
                    <Logo link="https://download.logo.wine/logo/PayPal/PayPal-Logo.wine.png" alt="paypal"/>
                    <Logo link="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png" alt="after pay"/>
                    <Logo link="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" alt="amazon"/> 
                </div>
            </div>
        </>
    );
};

export default Footer;