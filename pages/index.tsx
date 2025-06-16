import Head from 'next/head'
import OctopusSection from '../components/OctopusSection'
import FeaturesSection from '../components/FeaturesSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>RealEstateMeta.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center justify-between px-8 py-5 shadow bg-white">
        <div className="flex items-center gap-8">
          <img
            src="/logo.png"
            alt="RealEstateMeta.ai logo"
            className="h-32 w-auto"
          />

          <nav className="hidden md:flex gap-8 text-gray-800 text-base font-medium">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#investors" className="hover:text-blue-600">Investors</a>
          </nav>
        </div>

        <a
          href="#demo"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-base"
        >
          Book a Demo
        </a>
      </header>

<main className="relative bg-gradient-to-b from-blue-50 to-white pt-28 pb-10 px-6 text-center overflow-hidden">

        {/* Subtle dot pattern in background */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-repeat pointer-events-none" />

        {/* Logo with animation */}
       <img
  src="/octopus-brain.webp"
  alt="AI Octopus Brain Illustration"
  className="mx-auto mb-8 w-48 md:w-64 lg:w-72 animate-fadeIn drop-shadow-lg"
/>



        {/* Tagline */}
        <p className="text-xl text-gray-700 max-w-xl mx-auto mb-8 animate-fadeIn delay-150">
          Unlock the full power of your real estate data. Our AI brain connects to your systems, learns from your operations, and gives you instant insights and automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 animate-fadeIn delay-300">
          <a href="#demo" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Book a Demo
          </a>
          <a href="#video" className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
            Watch Explainer
          </a>
        </div>
      </main>

      <OctopusSection />
      <FeaturesSection />
    </>
  )
}
