import { Link } from "react-router-dom";

export const About =()=>{
    return <>
    <h1 className="text-4xl ml-8 mt-2 font-bold">Why Choose Us?</h1>
    <p className="md:w-1/3 mr-7 ml-8 font-normal mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum natus fugiat animi earum est quibusdam tenetur culpa illo veritatis.</p>
    <p className="md:w-1/3 mr-7 ml-8 font-normal mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum natus fugiat animi earum est quibusdam tenetur culpa illo veritatis.</p>
    <p className="md:w-1/3 mr-7 ml-8 font-normal mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum natus fugiat animi earum est quibusdam tenetur culpa illo veritatis.</p>
    <p className="md:w-1/3 mr-7 ml-8 font-normal mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum natus fugiat animi earum est quibusdam tenetur culpa illo veritatis.</p>
    <p className="md:w-1/3 mr-7 ml-8 font-normal mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum natus fugiat animi earum est quibusdam tenetur culpa illo veritatis.</p>
    <div className="mt-1">
    <Link to="/">
    <button className=" ml-8 px-2 py-1 bg-gray-300 rounded hover:bg-red-400 hover:text-white">Connect Now</button>
    </Link>
    <Link to="/about">
    <button className="px-2 ml-2 py-1 bg-gray-300 rounded hover:bg-red-400 hover:text-white">Learn More</button>
    </Link>
    </div>
    </>
};
