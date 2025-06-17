import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Investors() {
  return (
    <>
      <Head>
        <title>Investors - RealEstateMeta.ai</title>
        <meta name="description" content="Join RealEstateMeta.ai&apos;s journey in transforming real estate through AI. We&apos;re seeking strategic partners who share our vision." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re looking for strategic partners who share our vision for transforming real estate through AI.
            </p>
          </div>

          {/* Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Opportunity</h3>
              <p className="text-gray-600">
                The real estate industry is ripe for AI transformation, with a market size exceeding $3 trillion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Technology</h3>
              <p className="text-gray-600">
                Our AI platform has already demonstrated significant value for early adopters in the industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strong Team</h3>
              <p className="text-gray-600">
                Led by experienced professionals in both real estate and artificial intelligence.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interested in Investing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can work together to revolutionize the real estate industry.
            </p>
            <a 
              href="https://zcal.co/wayne-berger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}