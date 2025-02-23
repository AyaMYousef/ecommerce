import React, { useContext, useRef } from 'react'
import logo from '../assets/images/freshcart-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { userToken } from '../Context/UserToken'
import { useEffect } from 'react'
import { numItem } from '../Context/NumCartContext'

export default function Navbar() {

  let { isLogin, setLogin } = useContext(userToken)


  let { cartNum } = useContext(numItem)
  let ref = useRef(null)
  let navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    setLogin(null)
    navigate('/')
  }


  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.body.classList.add('dark');
      ref.current.checked = true;
    }

  }, [])

  function toggleMe() {
    let body = document.body;
    console.log(ref.current.checked);
    if (ref.current.checked) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      body.classList.remove('dark');
      localStorage.removeItem('theme')
    }

  }


  return (
    <nav className="green-color border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap justify-between lg:justify-start items-center  mx-auto p-4">
        <Link href="https://flowbite.com/" className="flex items-center w-[20%] space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="" />

        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden lg:flex lg:justify-between w-[80%] space-x-8" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >About</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Services</Link>
            </li>

            <li>
              <Link to="/brands" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Brand</Link>
            </li>
            <li>
              <Link to="/contactus" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Pricing</Link>
            </li>
            <li>
              <Link to="/products" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Products</Link>
            </li>
            {isLogin &&
              <li>
                <Link to="/cart" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >
                  <i className='fa-solid fa-shopping-cart'>
                    {cartNum}
                  </i>
                </Link>
              </li>
            }
            <li>
              <Link to="/services" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Contact</Link>
            </li>
            <li className=" text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch-2" type="checkbox" ref={ref} onChange={toggleMe} class="peer sr-only" />
                <label for="switch-2" class="hidden"></label>
                <div class="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border
                     after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
              </label>
            </li>
          </ul>




          {isLogin ?
            <>

              <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                <li onClick={logout}>
                  <Link to="/logout" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >LogOut</Link>
                </li>

              </ul>
            </> :

            <>
              <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/login" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Login</Link>
                </li>
                <li>
                  <Link to="/register" className="block py-2 px-3  text-gray-700 rounded lg:bg-transparent  lg:p-0 dark:text-white" >Register</Link>
                </li>
              </ul>

            </>

          }

        </div>
      </div>
    </nav>

  )
}



