'use client'

const HowItsMade = () =>{
        const navigation = [
        { name: "Fányi klíma", id: 'klima', desc: "A website made in React JS.", src:"https://miro.medium.com/v2/resize:fit:1400/0*OLBBmwZWiKUNk685.png"},
        { name: "Java project", id: 'java', desc: "Java application for my university project.", src:"https://miro.medium.com/v2/resize:fit:700/0*gtY-llyEbkeoS1Sp.png"},
        { name: "Python project", id: 'python', desc: "A Python application to track gym membership.", src:"https://innovationspace.ansys.com/wp-content/uploads/2024/03/intro-to-python-1024x683.jpg"},
        { name: "MyNeptun App", id: 'neptun', desc: "Mobile application for neptun (unofficial).", src:"https://www.macrix.eu/wp-content/uploads/2022/09/Blog-1-1024x452.png"},
    ];

    const listItems = navigation.map(item =>
        <div id={item.id} key={item.name} className="grid gap-2 bg-[#3636363f] rounded-lg p-4 justify-center content-center shadow-lg hover:scale-105 duration-700">
            <p className="text-3xl">{item.name}</p>
            <div className="w-[325px] h-[182]" style={{ backgroundImage: `url(${item.src})` }} />
            <p>{item.desc}</p>
            <button className="px-3">View</button>
        </div>
        
    );

    return(
        <div id="HowItsMade" className="sticky z-30 top-0 h-screen flex flex-col items-center justify-center backdrop-blur-md bg-[#3636363f] text-white gap-6 duration-700">
                <h2 id="hTitle" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-10">My projects</h2>
                <div className="grid grid-flow-col gap-4">
                    {listItems}
                </div>
        </div>
    )
}
export default HowItsMade;