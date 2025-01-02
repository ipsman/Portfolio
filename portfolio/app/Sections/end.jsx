'use client';

import { useEffect } from 'react';

const End = () => {
  useEffect(() => {
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg')
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbz8sf1naTVKm1RoTL-nGUzt9fSIWqRHZ9WcHxaKxpg8rPElcgqxb427UQM5TN31lohz/exec';

    const handleSubmit = async (e) => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully!"
          setTimeout(function(){
            msg.innerHTML = ""
          }, 5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <div
      id="End"
      className="sticky z-40 top-0 h-screen flex flex-col items-center justify-center backdrop-blur-md bg-[#3636363f] text-white gap-2.5 duration-700"
    >

      <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl mt-10">Contact me</h3>

      <div>
        <form name="submit-to-google-sheet" className='grid gap-2 mt-10'>
        <input type="text" name="Name" placeholder="Your name" required  className='py-1 px-2 rounded-md bg-[#363636a5] w-[400px] text-white text-xl font-bold'/>
          <input type="email" name="Email" placeholder="Your email" required className='py-1 px-2 rounded-md bg-[#363636a5] w-[400px] text-white text-xl font-bold' />
          <textarea name="Message" rows="6" placeholder="Your message" required className='py-1 px-2 rounded-md bg-[#363636a5] w-[400px] text-white text-xl font-bold'></textarea>
          <button type="submit">Submit</button>
          <span id='msg'></span>
        </form>
      </div>
    </div>
  );
};

export default End;