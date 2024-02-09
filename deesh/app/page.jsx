import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 ">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex ">
        <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          
          <code className="font-mono font-bold">Egwu Marvin Epie</code>
        </p>
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="https://univelcity.com/"
            target="_blank"
            rel="noopener noreferrer">
            
              <h1 className="font-bold">By</h1>
            
            <Image
              src="/univelcity_logo.PNG"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/frontEnd6B7.PNG"
          alt="Next.js Logo"
          width={400}
          height={300}
          priority
        />
      </div>

      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://egwu-marvin.github.io/FRONTEND-WEEK3/"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>
            HTML
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            We have been thought the basic HTML tags and attribute and how to build basic layout of webpages.
            😜Click to see one of our class assignments
          </p>
        </a>

        <a
          href="https://egwu-marvin.github.io/CARDS/"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}> 
            CSS
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              {/* -&gt; */}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            We were thought how to enhance the design of a web page with CSS and also how to make the webpage responsive.
            🐱‍👓Click to see what i did😜😜🐱‍🏍
          </p>
        </a>

        <a
          href="https://egwu-marvin.github.io/CALCULATOR/"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
          target="_blank">
            
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>
            JAVASCR🤞PT
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            DOM manipulation, Objects, Methods, Variables, Arrays and many more had been passed to us in this broad topic.
            😁😁Click to see what I tried out
          </p>
        </a>

        <a
          href="#"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NEXT.JS🐱‍🏍
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            So far we had been thought how to install Next.js, create a project and instantly deploy our Next.js site to a shareable URL with Vercel.
            😜Click here to see me other work😆😆
          </p>
        </a>
      </div>
    </main>
  );
}
