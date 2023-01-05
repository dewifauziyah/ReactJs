import { Outlet, Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="nav-bar flex bg-blue-500 text-white justify-between items-center py-6 px-4 bg-black">
        <div className='nav-brand w-2/12'>
          <img src="https://www.dewimagazine.com/img/logonew.png?v=2" class="w-10 h-10"></img>
        </div>

        <form class="flex items-center">
          <label for="voice-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movie..." required="" />
            <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
              <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

        </form>

        <div className='nav flex items-center space-x-4 w-3/12 justify-end'>
          <Link to="Home" className='nav-link text-gray-400 hover:text-white'>Home</Link>
          <a href="" className='nav-link text-green-500'>4K</a>
          <a href="" className='nav-link text-gray-400 hover:text-white'>Trending</a>
          <Link to="BrowseMovie" className='nav-link text-gray-400 hover:text-white'>BrowseMovie</Link>
        </div>

        <div className="flex space-x-2 w-2/12">
          <a href="" className='nav-link text-white hover:text-gray-400'>Login</a>
          <p>|</p>
          <a href="" className='nav-link text-white hover:text-gray-500'>Register</a>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar