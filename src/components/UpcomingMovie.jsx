import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";

export default function UpcomingMovie() {
  const [currentPage, setCurrentPage] = useState(1);
  const [upcoming, setUpcoming] = setState([]);

  const baseURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0737ff4618e7fa07d047074dba98ef7b&language=en-US&page=1'

  useEffect(() => {
    Axios({
      method: "GET",
      url: `${baseURL}page=${currentPage}`
    }).then((res) => {
      setUpcoming(res.data.results);
    });
  }, [currentPage])

  return (
    <section>
      <div className='flex flex-wrap justify-center space-x-[50px] px-[100px] justify-between'>
        {upcoming.map((data, i) => {
          <Card title={el.original_title} poster={el.poster_path} year={el.release_date.slice(0, 8)} />
        })}
      </div>
    </section>
  )
}