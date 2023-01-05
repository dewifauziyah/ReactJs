import React from 'react';

export default function Card(props) {
  return (
    <>
      <div className='card w-[20%] bg-transparent rounded-lg shadow-md mx-5'>
        <a>
          <img className='border-8 border-white2 rounded-lg w-16 md:w-32 lg:w-56 hover:bg-violet-600' src={`https://image.tmdb.org/t/p/original${props.poster}`} />
        </a>
        <div className='px-6 py-4'>
          <div className='font-bold mb-2 text-white hover:text-gray-400 '>{props.title}</div>
          <p className='text-base text-gray-500'>
            {props.years.slice(0, 4)}
          </p>
        </div>
      </div>
    </>
  )
}