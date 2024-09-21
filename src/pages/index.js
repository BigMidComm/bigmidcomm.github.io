import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Head>
        <title>BigMid</title>
        <meta name="description" content="BigMid innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="flex justify-between items-center p-5 bg-black text-white">
        <div className="flex items-center">
          <img src="/logo.png" alt="BigMid Logo" className="h-32 -m-9" />
          <h1 className="text-xl font-bold">BIGMID</h1>
        </div>
      </header>

      <main className="flex-1 p-10 flex justify-between items-center space-x-10">
        {/* Video Section */}
        <div className="w-2/3"> {/* Reduced width for the video container */}
          <video className="w-full h-auto" autoPlay muted loop src="/video.mp4"></video>
        </div>

        {/* Text Section */}
        <div className="w-1/2 text-white p-15"> {/* Increased width for the text container */}
          <p className="text-2xl mb-5">
            At BigMid, we are redefining innovation with a focus on solving real-world challenges through technology. Our mission is to create forward-thinking solutions that drive progress and transform industries. We believe in the power of disruptive ideas and are dedicated to pushing boundaries, delivering excellence, and making a lasting impact.
          </p>
          <p className="text-gray-400">
            Really excited to get in touch with us? Send us an email at{' '}
            <a href="mailto:bigmidcomm@gmail.com" className="underline">
              bigmidcomm@gmail.com
            </a>{' '}
            or follow us at <strong>@BigMid</strong> on Facebook and Instagram for updates and news.
          </p>
        </div>
      </main>
    </div>
  );
}
