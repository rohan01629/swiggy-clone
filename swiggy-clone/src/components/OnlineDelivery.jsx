import React from 'react'
import { useEffect,useState } from 'react';
import Card from './Card';

export default function OnlineDelivery() {
    const [data,setData ] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        },[]
    )
  return (
       
    <div className='max-w-[1200px] mx-auto px-2'>
    <div className='flex my-3 items-center justify-between'>
    <div className='text-[25px] font-bold'>
     Restaurant with Online food delivery in Jodhpur
    </div>
   
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        {
            data.map(
                (d,i) => {
                    return <Card {...d}/>
                }

            )

            
        }
    </div>
  </div>
  
  )
}
