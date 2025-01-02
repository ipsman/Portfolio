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
        <div id="AboutMe" className="sticky top-0 z-20 h-auto min-h-screen flex flex-col items-center justify-center backdrop-blur-md bg-[#3636363f] text-white duration-700">
  <div className="w-full max-w-screen-lg p-5 flex flex-col items-center justify-center rounded-lg gap-6 sm:gap-8">
    <h2 id="abTitle" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl duration-700 text-center">
      About me
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
      <img
        src="img.png"
        alt="Profile"
        className="rounded-xl shadow-lg object-cover object-center w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[660px] 2xl:h-[725px]"
      />
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4">
        <div className="bg-[#3636363f] p-4 sm:p-5 rounded-xl shadow-lg">
          <p
            id="abTitle2"
            className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-justify"
          >
            I am a highly motivated and results-oriented Information Technology
            student eager to contribute my skills and knowledge to a dynamic and
            innovative company. With a strong foundation in software development
            and a passion for problem-solving, I am confident in my ability to
            excel in a fast-paced environment.
          </p>
        </div>
        <div className="bg-[#3636363f] p-4 sm:p-5 rounded-xl shadow-lg">
          <p
            id="abTitle2"
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-justify"
          >
            Academic Background:
          </p>
          <p
            id="abTitle2"
            className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-justify"
          >
            Currently pursuing a degree in Computer Science at Danube
            University, specializing in software development. Previously, I
            completed a technical informatics program at Budapest Technical
            Training Center, where I gained extensive experience in C#, Java,
            and web development.
          </p>
        </div>
        <div className="bg-[#3636363f] p-4 sm:p-5 rounded-xl shadow-lg">
          <p
            id="abTitle2"
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-justify"
          >
            Work Experience:
          </p>
          <p
            id="abTitle2"
            className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-justify"
          >
            LIDL IT Service & Support: Provided technical support, managed
            inventory, and assisted with troubleshooting.
          </p>
        </div>
      </div>
    </div>
    <button
      id="btnTitle"
      className="text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-6 shadow-lg backdrop-blur-md rounded-lg bg-[#3636363f] hover:-translate-y-1 duration-200"
      onClick={download}
    >
      Download my CV
    </button>
  </div>
</div>
)}
export default AboutMe;