'use client'

import NavLinks from "./navLinks"
import Lang from "app/Icons/lang"


export default function NavBar() {
    var langBool = false;
    function LangSelectOn() {

        if(langBool){
            document.getElementById("langSelect").style.transform = "scale(0,0)";

            langBool = false;
        }
        else{
            document.getElementById("langSelect").style.transform = "scale(1,1)";

            langBool = true;
        }
    }

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

