import React,{useState} from 'react'
import {data} from '../data/data'
const Food = () => {
    // console.log(data);
    const[foods,setFood]=useState(data);
    // filter types
    const filterType=(category)=>{
        setFood(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };
    
    // filter prices
    const filterPrice=(price)=>{
        setFood(
            data.filter((item)=>{
                return item.price === price;
            })
        );
    };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-15 '>
        <h1 className='text-orange-600 font-boldm text-4xl text-center'>Top rated Menu Items</h1>
        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex'>
                    <button onClick={()=>setFood(data)} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>All</button>
                    <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>Burgers</button>
                    <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>Chicken</button> 
                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[400px] w-full'>
                    <button onClick={()=>filterPrice('10$')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>10$</button>
                    <button onClick={()=>filterPrice('20$')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>20$</button>
                    <button onClick={()=>filterPrice('30$')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>30$</button>
                    <button onClick={()=>filterPrice('40$')} className='m-1 border-orange-600 text-orange-700 hover:bg-orange-700 hover:text-white'>40$</button>
                </div>
            </div>
        </div>
        {/* Display Food */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6'>
            {foods.map((item,index)=>(
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-200' >
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p >
                            <span className='bg-orange-700 text-white rounded-full p-1'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food
