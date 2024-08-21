import { Link } from "react-router-dom";

export const Home =()=>{
    return <>
    <h1 className="mt-36 ml-8 text-2xl font-bold">We are best IT Company</h1>
    <p className="text-4xl ml-8 font-bold">Welcome to Website</p>
    <p className="md:w-1/3 mr-7 ml-8 font-normal mt-1">Are you ready to take business to the next level with cutting-edge It Solutions ?
        Look no futher! We specialize in providing innovative IT services and solutions tailored to meet your unique needs.
    </p>
    <div className="mt-4">
    <Link to="/">
    <button className=" ml-8 px-2 py-1 bg-gray-300 rounded hover:bg-red-400 hover:text-white">Connect Now</button>
    </Link>
    <Link to="/about">
    <button className="px-2 ml-2 py-1 bg-gray-300 rounded hover:bg-red-400 hover:text-white">Learn More</button>
    </Link>
    </div>
    </>
};
