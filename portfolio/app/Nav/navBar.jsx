'use client'

import NavLinks from "./navLinks"
import Lang from "app/Icons/lang"


export default function NavBar() {
    

    return (
           <nav className="fixed z-50 w-screen bg-[#3636363f] shadow-lg backdrop-blur-md p-1 sm:text-lg md:text-xl lg:text-2xl gap-2">
                <NavLinks/>
                <div className='float-right'>
                    <div className="p-1" onClick={LangSelectOn}>
                        <Lang/>
                    </div>
                </div>
           </nav>
)}

var langBool = 0;

export function LangSelectOn() {
    langBool = sessionStorage.getItem("langSelectNum");

    if(langBool == 1){
        document.getElementById("langSelect").style.transform = "scale(0,0)";

        langBool = 0;
    }
    else{
        document.getElementById("langSelect").style.transform = "scale(1,1)";

        langBool = 1;
    }
    sessionStorage.setItem("langSelectNum", langBool);
}