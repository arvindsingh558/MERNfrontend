import { NavLink } from "react-router-dom"
// import "./Navbar.css";


import { useAuth } from "../store/Auth";

export function Navbar() {

  const { isLoggedIn } = useAuth()

  return (
    <>
      <header>
        <div className="w-full bg-gray-300 flex justify-between items-center shadow-2xl">
          <div className="ml-6 font-bold">
            <NavLink to="/">IT Service</NavLink>
          </div>

          <nav>
            <ul className="flex justify-center items-center p-4 gap-7">
              <li> <NavLink to="/" className="hover:bg-red-500 hover:text-white py-1 px-2 hover:rounded-xl">Home</NavLink> </li>
              <li> <NavLink to="/about" className="hover:bg-red-500 hover:text-white py-1 px-2 hover:rounded-xl">About</NavLink> </li>
              <li> <NavLink to="/service" className="hover:bg-red-500 hover:text-white py-1 px-2 hover:rounded-xl">Services</NavLink> </li>
              <li> <NavLink to="/contact" className="hover:bg-red-500 hover:text-white py-1 px-2 hover:rounded-xl">Contact</NavLink> </li>
              {
                isLoggedIn ? <li> <NavLink to="/logout" className="hover:bg-red-500 hover:text-white py-1 px-2 hover:rounded-xl">Logout</NavLink> </li> : <>

                  <li> <NavLink to="/register" className="hover:bg-red-500 hover:text-white py-1 px-2 hover:rounded-xl">Register</NavLink> </li>
                  <li> <NavLink to="/login" className="hover:bg-red-500 hover:text-white py-1 px-2 hover:rounded-xl">Login</NavLink> </li>
                </>
              }

            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
