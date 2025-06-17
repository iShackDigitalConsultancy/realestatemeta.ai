import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>RealEstateMeta.ai</title>
        <meta name="description" content="AI-Powered Real Estate Intelligence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center max-w-3xl">
        <div className="mb-12">
          <Image
            src="/logo.png"
            alt="RealEstateMeta.ai"
            width={400}
            height={100}
            className="w-[400px]"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI-Powered Clarity for Real Estate
        </h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Most real estate companies have data scattered across spreadsheets, inboxes, and siloed systems. Our intelligent "octopus" tentacles connect everything — leases, assets, operations — and feed it all into a unified AI brain.
        </p>

        <a 
          href="https://zcal.co/wayne-berger"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
        >
          Book a Demo
        </a>
      </main>
    </div>
  )
}
