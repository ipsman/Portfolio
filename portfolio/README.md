This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
<a className='text-2xl bg-gradient-to-br from-[#AA2769] to-[#3A10AE] bg-gray-800 p-1.5 rounded-md m-3.5' href="https://matedevs.netlify.app" target="_blank" rel="noopener noreferrer">Webpage</a>


<main className=' h-screen font-raleway font-thin bg-gradient-to-b from-[#541556] to-[#370c4c] bg-[#370c4c]'>
      

      <section className='max-h-screen w-screen'>
        <nav className='flex justify-between mb-2 py-1'>
          <h1 className='text-3xl m-2'>Matedevs</h1>
          <ul className='flex items-center gap-3'>
            <li>
              <span className='font-raleway font-thin text-3xl cursor-pointer' onClick={}>&#9776;</span>
            </li>
          </ul>
        </nav>

        <div id='overlay' className='w-0 h-screen fixed z-10 overflow-x-hidden bg-[#0000004d] backdrop-blur-xl shadow-sm content-center items-center'></div>
          <div className='container mx-auto h-80 w-screen '>
            <h1 className='text-4xl text-center mb-6'>This is my portfolio</h1>
          </div>

          <div className='p-4 flex-auto backdrop-blur-md rounded-lg bg-[#0e0e0e3f] container shadow-lg'>
            <p className='text-lg text-justify'>
              My name is Máté, I'm an 19 year old computer enthusiast. 
              I'm currently studying Computer Science in Budapest, Hungary, 
              and working on indie games in my free time.
            </p>
        </div>
    </section>
      
    </main>


    backdrop-blur-md bg-[#3636363f] shadow-lg

                <div className="top-0 w-screen container flex flex-wrap items-center justify-between mx-auto backdrop-blur-md bg-[#3636363f] text-white gap-2.5">
                <a href="">Home</a>
            </div>


                const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('public/Cv1.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }


    return (
        <div className="lang">
          <div className={this.props.lang}></div>
          <ul class="dropdown">{options}</ul>
        </div>