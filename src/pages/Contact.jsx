import { useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';

export const Contact = () => {

    const Data = {
        username: "",
        email: "",
        message: "",
    }

    const [contact, setContact] = useState(Data)

    const [userData, setUserData] = useState(true)

    const { user } = useAuth()

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        })

        setUserData(false)
    }


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name)
        // console.log(value)

        setContact({
            ...contact,
            [name]: value,
        })
    }
    // console.log(contact)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            })
            console.log(response)

            if (response.ok) {
                setContact(Data)
                const data = await response.json()
                // console.log(data)
                toast.success("Message send successfully")
            }

        } catch (err) {
            console.log(err)
        }

    }


    return <>
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col justify-start sm:w-2/5 m-3 p-2">
                <label className="text-xl " htmlFor="username">Username</label>
                <input className="border mt-1 border-black rounded p-2" type="text" name="username" id="username" value={contact.username} onChange={handleInput} />
            </div>

            <div className="flex flex-col justify-start sm:w-2/5 m-3 p-2">
                <label className="text-xl " htmlFor="email">Email</label>
                <input className="border mt-1 border-black rounded p-2" type="email" name="email" id="email" value={contact.email} onChange={handleInput} />
            </div>

            <div className="flex flex-col justify-start sm:w-2/5 m-3 p-2">
                <label className="text-xl " htmlFor="message">Message</label>
                <textarea className="border mt-1 border-black rounded p-2" name="message" id="message" value={contact.message} onChange={handleInput}></textarea>
            </div>
            <input className="ml-6 px-2 py-1 rounded text-white bg-red-500" type="submit" value="Submit now" />
        </form>
    </>
};
