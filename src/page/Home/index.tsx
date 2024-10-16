import React from 'react'
import { Link } from 'react-router-dom'

// type Props = {}

const rutes = [
    { name: "Usuarios", href: "/user" },
    { name: "Productos", href: "/products" },
    { name: "Ventas", href: "/sale" },
    
];

const Home = () => {
    return (
        <>
            <div className='flex 
                    justify-between 
                    pb-4
                    pl-[40px]
                    pr-[40px]'>
                {rutes.map((rute, index) => (
                    <button key={index}
                    className='bg-gray-100 
                    text-black 
                    font-mono 
                    py-1 
                    px-4 
                    border-[1px] 
                    border-gray-300 
                    transition-all 
                    duration-300
                    rounded-full
                    w-[140px] '>
                        <Link to={rute.href}>{rute.name}</Link>
                    </button>
                ))}

            </div>
        </>
    )
}

export default Home;