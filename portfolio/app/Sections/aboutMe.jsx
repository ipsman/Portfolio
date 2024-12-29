'use client'
const AboutMe = () => {

    const download = () => {
        fetch('Cv1.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Cv1.pdf';
                alink.click();
            })
        })
    }

    return (
            <div id='AboutMe' className="sticky top-0 z-20 h-screen flex flex-col items-center justify-center backdrop-blur-md bg-[#3636363f] text-white duration-700">
                <div className=' w-4/5 p-5 flex flex-col items-center justify-center rounded-lg gap-2.5'>
                    <h2 id="abTitle" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl duration-700">About me</h2>
                    <p id="abTitle2" className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-justify'>
                        My name is Máté, I'm a 22-year-old university student. 
                        I'm currently studying Computer Science, 
                        and working on indie games in my free time.
                    </p>

                    <button id="btnTitle" className="relative top-8 text-2xl py-2 px-4 shadow-lg backdrop-blur-md rounded-lg bg-[#3636363f] hover:-translate-y-1 duration-200" onClick={download}>Download my CV</button>
                </div>
            </div>
)}
export default AboutMe;