import { useEffect } from "react";
import { useAuth } from "../store/Auth";

export const Service = () => {

    const { services } = useAuth();

    return <>
        <ul className="flex justify-center flex-wrap w-full mt-3">
            {
                services.map((currElem, index) => {
                    const { service, description, price, provider } = currElem;

                    return (
                        <div key={index} className="w-80 border border-black m-4 p-4">
                            <div className=" h-52 w-60 m-auto"></div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm">{service}</p>
                                <p className="text-sm">{price}</p>
                            </div>
                            <div className="text-2xl">{provider}</div>
                            <div className="text-sm">{description}</div>
                        </div>
                    )
                })
            }
        </ul>
    </>
};
