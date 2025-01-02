'use client'

import { LangSelectOn } from "./navBar";

export default function LangSelect() {
    const languages = [
        { name: "English", id: 'English', num: "0"},
        { name: "Hungarian", id: 'Hungarian', num: "1"},
    ];

    const listItems = languages.map(item =>
        <li className="px-3" key={item.name}> <button onClick={() => ChangeLang(item.num)} id={item.id}> {item.name} </button>  </li>
    );


    const ids = ["English", "Hungarian", "wTitle", "wTitle2", "abTitle", "abTitle2", "btnTitle", "hTitle", "hTitle2", "homeTitle", "endTitle", "nabTitle", "nhTitle"]
    const hu = ["Angol","Magyar","Üdvözöllek","Ez a portfolióm","Rólam", "Máté vagyok, 22 éves egyetemista. Jelenleg számítástechnikát tanulok, és szabadidőmben indie játékokon dolgozom.", "Töltsd le a CV-m", "Projektjeim", "Ez a weboldal React js-el és Tailwind-el készült.", "Kezdőlap", "Névjegy", "Rólam", "Projektjeim"]
    const en = ["English","Hungarian","Welcome","This is my portfolio", "About me", "My name is Máté, I'm a 22-year-old university student. I'm currently studying Computer Science, and working on indie games in my free time.", "Download my CV", "My projects", "This website was made with React js and Tailwind.", "Home", "Contact", "About me","My projects"]

    function ChangeLang(num) {
        if(num == 0){
            for (let index = 0; index < ids.length; index++) {
                document.getElementById(ids[index]).textContent = en[index];   
            }
        }
        else{
            for (let index = 0; index < ids.length; index++) {
                document.getElementById(ids[index]).textContent = hu[index];   
            }
        }
    
        sessionStorage.setItem("langSelectNum", 1);
        LangSelectOn();
    }

    return(
        <ul id="langSelect" className="block scale-0 origin-top-right overflow-hidden fixed z-50 top-11 right-1 shadow-lg backdrop-blur-md p-1 w-36 bg-[#3636363f] rounded-lg gap-2.5 duration-700">{listItems}</ul>
    )
}

