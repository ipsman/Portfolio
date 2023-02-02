'use client'

import React from "react";

export default function LangSelect() {
    const languages = [
        { name: "English", id: 'English', num: "0"},
        { name: "Hungarian", id: 'Hungarian', num: "1"},
    ];

    const listItems = languages.map(item =>
        <li className="px-3" key={item.name}> <button onClick={() => ChangeLang(item.num)} id={item.id}> {item.name} </button>  </li>
    );


    const ids = ["English", "Hungarian", "wTitle", "wTitle2", "abTitle", "abTitle2", "btnTitle", "hTitle", "hTitle2", "eTitle", "homeTitle", "endTitle", "nabTitle", "nhTitle"]
    const hu = ["Angol","Magyar","Üdvözöllek","Ez a portfólióm","Rólam", "Máté vagyok, 20 éves egyetemista. Jelenleg számítástechnikát tanulok Budapesten, és szabadidőmben indie játékokon dolgozom.", "Töltsd le a CV-m", "Hogyan készült", "Ez a weboldal React js-el és Tailwind-el készült.", "Köszönöm a figyelmet!", "Kezdőlap", "Vége", "Rólam", "Hogyan készült"]
    const en = ["English","Hungarian","Welcome","This is my portfolio", "About me", "My name is Máté, I'm a 20-year-old university student. I'm currently studying Computer Science in Budapest, Hungary, and working on indie games in my free time.", "Download my CV", "How It's Made", "This website was made with React js and Tailwind.", "Thanks for your attention!", "Home", "End", "About me","How It's Made"]
   
    function ChangeLang(num) {
        
        if(num == 0){
            for (let index = 0; index < 14; index++) {
                document.getElementById(ids[index]).textContent = en[index];   
            }
        }
        else{
            for (let index = 0; index < 14; index++) {
                document.getElementById(ids[index]).textContent = hu[index];   
            }
        }
        LangSelectOn();
    }

    return(
        <ul id="langSelect" className="block scale-0 origin-top-right overflow-hidden fixed z-50 top-11 right-1 shadow-lg backdrop-blur-md p-1 w-36 bg-[#3636363f] rounded-lg gap-2.5 duration-700">{listItems}</ul>
    )
}

