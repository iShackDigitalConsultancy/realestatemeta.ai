import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>RealEstateMeta.ai - AI-Powered Real Estate Intelligence</title>
        <meta name="description" content="Transform your real estate data into actionable insights with AI-powered intelligence." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        {/* Header */}
        <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="relative">
                <Image
                  src="/logo.png"
                  alt="RealEstateMeta.ai logo"
                  width={256}
                  height={64}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Octopus image */}
            <div className="relative mb-12">
              <Image
                src="/octopus-brain.webp"
                alt="AI Octopus Brain Illustration"
                width={288}
                height={288}
                className="relative mx-auto w-48 md:w-64 lg:w-72 animate-float"
                priority
              />
            </div>

            {/* Main content */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Clarity for Real Estate
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Most real estate companies have data scattered across spreadsheets, inboxes, and siloed systems. Our intelligent "octopus" tentacles connect everything — leases, assets, operations — and feed it all into a unified AI brain.
            </p>

            {/* CTA Button */}
            <a 
              href="https://zcal.co/wayne-berger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book a Demo
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} RealEstateMeta.ai. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
