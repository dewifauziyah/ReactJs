import React from 'react'
import Card from './Card'
import Axios from 'axios'
import { useState, useEffect } from 'react'

export default function PopularDownload() {
  const [popular, setPopular] = useState([]);

  const baseURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0737ff4618e7fa07d047074dba98ef7b&language=en-US&page=1'
  useEffect(() => {
    Axios.get(`${baseURL}`).then((res) => {
      setPopular(res.data.results.slice(0, 16));
    });
  }, []);


  return (
    <>
      <div>
        <div className=' flex justify-center items-center text-white pb-[20px]'>
          <div>
            <i className='fa fa-star text-green-900'></i>
          </div>

        </div>

        <div className='flex justify-center'>
          <div className='w-[80%]'>
          </div>
        </div>

        <div className=' flex justify-center  py-[20px]'>
          <div className='flex-wrap flex space-x-[20px] justify-center'>

            {popular.slice(0, 8).map((p) => {
              return (<Card poster={p.poster_path} title={p.original_title} years={p.release_date} />)
            })}
          </div>
        </div>
      </div>
    </>
  )
}