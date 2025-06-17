import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Investors() {
  return (
    <>
      <Head>
        <title>Invest in RealEstateMeta.ai - AI-Powered Real Estate Intelligence</title>
        <meta name="description" content="Join us in revolutionizing real estate data management. Invest in RealEstateMeta.ai and be part of the future of property intelligence." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="fixed w-full z-50 backdrop-blur-sm bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-12">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="RealEstateMeta.ai logo"
                width={128}
                height={32}
                className="h-32 w-auto transition-transform hover:scale-105"
              />
            </Link>

            <nav className="hidden md:flex gap-10 text-gray-600 text-base font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="/investors" className="text-blue-600 font-semibold">Investors</Link>
            </nav>
          </div>

          <a
            href="https://zcal.co/wayne-berger"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 text-base font-medium shadow-sm hover:shadow-md"
          >
            Book a Demo
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Invest in the Future of Real Estate AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re looking for strategic partners who share our vision for transforming real estate through AI.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Intelligence</h3>
              <p className="text-gray-600">
                Our AI acts as the brain, aggregating leasing, facility, and financial data across systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp delay-100">
              <div className="text-4xl mb-4">🐙</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Data Integration</h3>
              <p className="text-gray-600">
                Our tools act as data tentacles — integrating directly with MDA/PMX, Excel sheets, or APIs to pull operational info into smart dashboards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp delay-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Expansion</h3>
              <p className="text-gray-600">
                We&apos;ve already onboarded clients in South Africa, with global expansion planned into the UK and US.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                  <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Email:</span> wayneb@ishack.co.za
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Location:</span> South Africa
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Schedule a Call</h3>
                    <p className="text-gray-600 mb-4">
                      Prefer to talk directly? Schedule a call with our team to discuss investment opportunities.
                    </p>
                    <a
                      href="https://zcal.co/wayne-berger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                    >
                      Book a Call via Zcal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}