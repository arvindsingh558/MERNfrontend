import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';

export const Register = () => {

    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    const navigate=useNavigate()

    const {storetokenInLS}=useAuth();

// handling the input values 
    const handleInput=(e)=>{
        let name=e.target.name 
        let value=e.target.value

        setUser({
            ...user,
           [name]:value,

        })
    };

    //handling the form submit
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // console.log(user)
        try {
            const response=await fetch(`http://localhost:5000/api/auth/register`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user),
            })

            const res_data=await response.json();
            console.log("response from server",res_data)

            if(response.ok){
                storetokenInLS(res_data.token);
                toast.success("Registration Successful")
                
                setUser({username:"",email:"",phone:"",password:""});
                navigate("/login")
            }else{
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }


            
        } catch (error) {
            console.log("register",error)
        }

    }


    return <>
        <section>
            <main>
                <div className="">
                    <div className="">
                        <div className="">
                            <img src="" alt="" />
                        </div>


                        <div className="">
                            <h1 className="text-2xl ml-4 mt-4 font-bold">Registration Form</h1>
                            <br />

                            <form onSubmit={handleSubmit} >
                                <div className="flex flex-col justify-start sm:w-2/5 mx-2 p-2">
                                    <label className="text-xl" htmlFor="username">Username</label>
                                    <input className="border mt-1 border-black rounded p-2" type="text" name="username" id="username"
                                        required autoComplete="off" value={user.username} onChange={handleInput}  placeholder="username" />
                                </div>
                                <div className="flex flex-col justify-start sm:w-2/5 mx-2 p-2">
                                    <label className="text-xl" htmlFor="email">Email</label>
                                    <input  className="border mt-1 border-black rounded p-2" type="email" name="email" id="email"
                                        required autoComplete="off" value={user.email} onChange={handleInput}   placeholder="enter your email" />
                                </div>
                                <div  className="flex flex-col justify-start sm:w-2/5 mx-2 p-2">
                                    <label htmlFor="phone">Phone</label>
                                    <input  className="border mt-1 border-black rounded p-2" type="number" name="phone" id="phone"
                                        required autoComplete="off"  value={user.phone} onChange={handleInput}   placeholder="enter your phone" />
                                </div>
                                <div  className="flex flex-col justify-start sm:w-2/5 mx-2 p-2">
                                    <label htmlFor="password">Password</label>
                                    <input  className="border mt-1 border-black rounded p-2" type="password" name="password" id="password"
                                        required autoComplete="off"  value={user.password} onChange={handleInput}   placeholder="enter your password" />
                                </div>
                                <br />
                                <button className="ml-6 px-2 py-1 rounded text-white bg-red-500" type="submit" >Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
};
