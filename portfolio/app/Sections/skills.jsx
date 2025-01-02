'use client'
const Skills = () => {

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
            <div id="AboutMe" className="sticky top-0 z-20 h-screen flex flex-col items-center justify-center backdrop-blur-md bg-[#3636363f] text-white duration-700">
                <div className="w-4/5 p-5 flex flex-col items-center justify-center rounded-lg gap-2.5">
                <h2 id="abTitle" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl duration-700">Key Skills and Experience:</h2>
                    <div className="grid gap-4">              
                        <div class="bg-[#3636363f] p-5 rounded-xl">
                            <p className="md:text-2xl lg:text-3xl xl:text-4xl text-justify list-inside leading-4">
                                Programming: Proficient in C#, Java, and Python, with experience in developing console applications, Windows Forms, and web applications using frameworks like CSS and Bootstrap.
                            </p>
                        </div>
                        <div class="bg-[#3636363f] p-5 rounded-xl">
                            <p className="md:text-2xl lg:text-3xl xl:text-4xl text-justify list-inside leading-4">
                                Problem-solving: Skilled in troubleshooting and optimizing systems, with a focus on finding innovative solutions.
                            </p>
                        </div>
                        <div class="bg-[#3636363f] p-5 rounded-xl">
                            <p className="md:text-2xl lg:text-3xl xl:text-4xl text-justify list-inside leading-4">
                                Teamwork: Proven ability to collaborate effectively in a team environment while also being able to work independently.
                            </p>
                        </div>
                        <div class="bg-[#3636363f] p-5 rounded-xl">
                            <p className="md:text-2xl lg:text-3xl xl:text-4xl text-justify list-inside leading-4">
                                Technical Expertise: Strong understanding of software development principles, data structures, and algorithms.
                            </p>
                        </div>
                        <div class="bg-[#3636363f] p-5 rounded-xl">
                            <p className="md:text-2xl lg:text-3xl xl:text-4xl text-justify list-inside leading-4">
                                Languages: Fluent in English (B2), with basic German language skills.
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
)}
export default Skills;