import React from 'react';
import logo from "../assets/images/logo.png";
import colorMode from "../assets/images/color_mode.png";
import userProfile from "../assets/images/user_profile.svg"
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className={`flex sticky w-full top-0 left-0 justify-between items-center px-4 flex-wrap ${props.mode==="dark" ? "bg-black" : "bg-gray-700"}`}>
            <div className='flex items-center'>
                <div className="text-black my-3 bg-white p-1 rounded-lg text-sm font-mono">
                    <img width={25} height={25} src={logo} alt="" />
                </div>
                <div className='text-white font-bold ml-4'>
                    {props.title}
                </div>
            </div>
            <div className='flex items-center text-white justify-between'>
                <div className='mx-2'>
                    <img src={colorMode} alt="color-mode" className='invert w-6 h-6 cursor-pointer' onClick={props.toggleMode}/>
                </div>
                <div className='ml-2 block'>
                    <Link to={"/profile"}> <img src={userProfile} alt="profile" className='invert w-7 h-7'/> </Link>
                </div>
            </div>
        </div>
    )
};