import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';

const URL="http://localhost:5000/api/auth/login"

export const Login = () => {

    const [user,setUser]=useState({
        email:"",
        password:"",
    });

    const navigate=useNavigate()
    const {storetokenInLS}=useAuth()
    
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
        try {
            const response=await fetch(URL,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user)
            })

            // console.log("Login",response)
            const res_data=await response.json();

            if(response.ok){
                storetokenInLS(res_data.token)

                // alert("Login Successful")
                toast.success("Login Successful")
                setUser({email:"",password:""})
                navigate("/")
            }else{
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }


    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two cols">
                        <div className="registration-image">
                            <img src="" alt="" />
                        </div>

                        {/* //registrationform */}

                        <div className="">
                            <h1 className="text-2xl ml-4 mt-4 font-bold">Login Form</h1>
                            <br />

                            <form onSubmit={handleSubmit} >
                                <div className="flex flex-col justify-start sm:w-2/5 mx-2 p-2">
                                    <label className="text-xl" htmlFor="email">Email</label>
                                    <input className="border mt-1 border-black rounded p-2" type="email" name="email" id="email"
                                        required autoComplete="off" value={user.email} onChange={handleInput}   placeholder="enter your email" />
                                </div>
                                <div className="flex flex-col justify-start sm:w-2/5 mx-2 p-2">
                                    <label className="text-xl" htmlFor="password">Password</label>
                                    <input className="border mt-1 border-black rounded p-2" type="password" name="password" id="password"
                                        required autoComplete="off"  value={user.password} onChange={handleInput}   placeholder="enter your password" />
                                </div>
                                <br />
                                <button  type="submit"  className="ml-6 px-2 py-1 rounded text-white bg-red-500">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
};
