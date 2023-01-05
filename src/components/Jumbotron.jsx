import { BsFillStarFill } from 'react-icons/bs';
const Jumbotron = () => {
  return (
    <>
      <div className="bg-gray-800 h-[320px]">
        <p className="flex justify-center text-5xl font-bold text-white pt-9">Download YTS YIFY movies: HD smallest size</p>
        <p className="text-gray-300 text-md m-auto pt-6 text-center w-[55%]">Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
        </p>
        <p className="text-blue-500 text-center hover:text-blue-800 pt-6 text-xl font-bold">IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</p>
        <div className='flex justify-center mt-10'>
          <BsFillStarFill className='w-12 text-green-500 mt-2' />
          <p className='text-white font-bold text-xl'>Populer Download</p>
        </div>
        <p className='text-blue-500 hover:text-blue-800 text-xl flex justify-end mt-[-20px]'>More Featured...</p>
        <div className="border-[1px] mt-2 border-white border-t-solid mx-12"></div>
      </div>


    </>

  )
}
export default Jumbotron