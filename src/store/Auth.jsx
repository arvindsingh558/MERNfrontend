import { createContext,useContext, useEffect, useState } from "react";

export const AuthContext=createContext();


export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem('token'))
    const [user,setUser]=useState("")
    const [services,setServices]=useState([])

    const storetokenInLS=(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken)
    }

    let isLoggedIn= !!token
    // console.log("isloggedin",isLoggedIn)

    // takling the logout functionality 

    const LogoutUser=()=>{
        setToken("")
        return localStorage.removeItem('token')
    }


    //JWT AUTHENTICATION- to get the currently logged in user data

    const userAuthentication=async()=>{
        try {
            const response=await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            if(response.ok){
                const data=await response.json()
                // console.log("userdata",data.userData)
                setUser(data.userData)
            }
            
        } catch (err) {
            console.error("Error fetching user data")
        }
    }

    const fetchData=async ()=>{
        try {
            const response=await fetch("http://localhost:5000/api/data/service",{
                method:"GET"
            })

            if(response.ok){
                const data=await response.json()
                // console.log(data.msg)
                setServices(data.msg)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
        userAuthentication()
    },[])




    return <AuthContext.Provider value={{storetokenInLS, LogoutUser ,isLoggedIn,user,services}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth=()=>{
    const authContextValue=useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return authContextValue
}