import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeaturesSection from '../components/FeaturesSection'
import OctopusSection from '@/components/OctopusSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>RealEstateMeta.ai - AI-Powered Real Estate Intelligence</title>
        <meta name="description" content="Transform your real estate data into actionable insights with AI-powered intelligence. Connect, analyze, and make better decisions with RealEstateMeta.ai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-32 pb-20 px-6 text-center overflow-hidden">
        {/* Sophisticated background patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 bg-repeat" />
        <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-10 bg-repeat" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        {/* Hero content container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Octopus image with enhanced styling */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-transparent blur-2xl" />
            <Image
              src="/octopus-brain.webp"
              alt="AI Octopus Brain Illustration"
              width={288}
              height={288}
              className="relative mx-auto w-48 md:w-64 lg:w-72 animate-float drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300"
            />
            
            <div className="absolute inset-0 bg-blue-400/20 blur-3xl -z-10 animate-pulse-slow" />
          </div>

          {/* Enhanced tagline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-3xl mx-auto mb-6 animate-fadeInUp leading-tight">
            Unify Your Real Estate Data with AI Intelligence
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fadeInUp delay-150 leading-relaxed">
            Bring your scattered real estate data into one intelligent source of truth. Our AI-powered octopus connects, learns, and gives you instant clarity.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp delay-300">
            <a 
              href="https://zcal.co/wayne-berger"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book a Demo
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">→</span>
            </a>
            <a 
              href="#video" 
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg font-medium hover:scale-105"
            >
              Watch Explainer
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">→</span>
            </a>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 animate-fadeInUp">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
              <p className="text-gray-600">Data Accuracy Rate</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 animate-fadeInUp delay-100">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10x</h3>
              <p className="text-gray-600">Faster Analysis</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 animate-fadeInUp delay-200">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600">AI-Powered Support</p>
            </div>
          </div>
        </div>
      </section>

      <OctopusSection />
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Ready to Transform Your Real Estate Data?
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fadeInUp delay-100">
            Join leading real estate companies who are already using RealEstateMeta.ai to make better decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp delay-200">
            <a 
              href="https://zcal.co/wayne-berger"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Free Trial
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg font-medium hover:scale-105"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
