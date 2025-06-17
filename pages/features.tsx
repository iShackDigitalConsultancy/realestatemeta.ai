import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ReactElement } from 'react'

interface FeatureDetail {
  title: string
  description: string
}

interface Feature {
  title: string
  description: string
  icon: ReactElement
  details: FeatureDetail[]
}

interface Features {
  [key: string]: Feature
}

export default function Features() {
  const [activeTab, setActiveTab] = useState<string>('ai-assistant')

  const features: Features = {
    'ai-assistant': {
      title: 'AI Assistant',
      description: 'Your intelligent real estate data companion',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        {
          title: 'Natural Language Processing',
          description: 'Ask questions in plain English and get instant, accurate responses about market trends, property values, and investment opportunities. Generate detailed reports on any topic with a simple query.'
        },
        {
          title: '24/7 Availability',
          description: 'Get answers anytime, anywhere. Our AI assistant is always ready to help with your real estate queries, providing instant access to market data and analysis.'
        },
        {
          title: 'Contextual Understanding',
          description: 'The AI understands the context of your questions and provides relevant, detailed responses based on your specific needs. Generate comprehensive reports that adapt to your business context.'
        },
        {
          title: 'Learning & Adaptation',
          description: 'Our AI continuously learns from interactions to provide increasingly accurate and personalized responses. Reports and insights become more tailored to your specific needs over time.'
        }
      ]
    },
    'ai-dashboards': {
      title: 'AI Dashboards',
      description: 'Visualize your data with intelligent insights',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: [
        {
          title: 'Customizable Views',
          description: 'Create and customize dashboards to match your specific needs and preferences. Generate reports for any view with a single click, from market trends to property performance.'
        },
        {
          title: 'Real-time Updates',
          description: 'Data automatically updates in real-time, ensuring you always have the latest information. Schedule automated reports to keep stakeholders informed of key metrics.'
        },
        {
          title: 'Predictive Analytics',
          description: 'AI-powered predictions and trend analysis to help you make informed decisions. Generate forward-looking reports that highlight potential opportunities and risks.'
        },
        {
          title: 'Interactive Visualizations',
          description: 'Engage with your data through interactive charts, graphs, and maps. Export any visualization as a detailed report with supporting data and insights.'
        }
      ]
    },
    'expert-reports': {
      title: 'Expert Reports',
      description: 'Comprehensive analysis and insights',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: [
        {
          title: 'Market Analysis',
          description: 'Detailed reports on market trends, property values, and investment opportunities. Access comprehensive data on market conditions, demographics, and economic indicators.'
        },
        {
          title: 'Property Valuations',
          description: 'Accurate property valuations based on comprehensive data analysis. Generate detailed reports comparing properties across multiple metrics and market conditions.'
        },
        {
          title: 'Investment Recommendations',
          description: 'AI-powered investment suggestions based on your goals and market conditions.'
        },
        {
          title: 'Custom Report Generation',
          description: 'Generate custom reports tailored to your specific needs and requirements.'
        }
      ]
    },
    'core-modules': {
      title: 'Core Modules',
      description: 'Essential real estate data and analysis tools',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      details: [
        {
          title: 'Property Data Analysis',
          description: 'Comprehensive property data analysis with detailed reports on market values, trends, and comparisons. Access historical data and predictive analytics for informed decision-making.'
        },
        {
          title: 'Market Intelligence',
          description: 'Real-time market intelligence with detailed reports on market conditions, trends, and opportunities. Track key metrics and generate insights for strategic planning.'
        },
        {
          title: 'Investment Analytics',
          description: 'Advanced investment analytics with detailed reports on ROI, risk assessment, and market opportunities. Generate comprehensive investment analysis and recommendations.'
        },
        {
          title: 'Portfolio Management',
          description: 'Complete portfolio management with detailed reports on performance, risk, and opportunities. Track and analyze your entire real estate portfolio in one place.'
        }
      ]
    },
    'operations-modules': {
      title: 'Operations Modules',
      description: 'AI-powered insights for real estate operations',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      details: [
        {
          title: 'Leasing Intelligence',
          description: 'AI-powered insights into lease performance, tenant behavior, and market positioning. Generate reports on lease expirations, renewal probabilities, and optimal pricing strategies. Track tenant satisfaction and identify opportunities for lease optimization.'
        },
        {
          title: 'Vacancy Management',
          description: 'Predictive analytics for vacancy management and tenant turnover. Get insights into vacancy trends, time-to-lease metrics, and market demand. Generate reports on vacancy costs and optimization strategies.'
        },
        {
          title: 'Accounting & Billing',
          description: 'Automated financial insights and reporting for real estate operations. Track revenue streams, expense patterns, and financial performance. Generate detailed reports on cash flow, budget variances, and financial forecasting.'
        },
        {
          title: 'Facilities Management',
          description: 'Smart insights for building operations and maintenance. Monitor building performance, energy usage, and maintenance schedules. Generate reports on operational efficiency and cost optimization opportunities.'
        },
        {
          title: 'Asset Registry',
          description: 'Comprehensive asset tracking and management insights. Monitor asset performance, depreciation, and value trends. Generate detailed reports on asset utilization, maintenance history, and replacement planning.'
        },
        {
          title: 'Preventative Maintenance',
          description: 'AI-driven maintenance insights and scheduling. Predict maintenance needs and optimize maintenance schedules. Generate reports on maintenance costs, equipment performance, and preventive maintenance effectiveness.'
        },
        {
          title: 'Financial Dashboards',
          description: 'Real-time financial insights and performance tracking. Monitor key financial metrics, ROI, and investment performance. Generate comprehensive reports on financial health, investment returns, and portfolio performance.'
        },
        {
          title: 'Procurement Optimization',
          description: 'Smart procurement insights and vendor management. Track procurement costs, vendor performance, and contract compliance. Generate reports on procurement efficiency, cost savings opportunities, and vendor relationships.'
        }
      ]
    }
  }

  return (
    <>
      <Head>
        <title>Features - RealEstateMeta.ai</title>
        <meta name="description" content="Discover the powerful features of RealEstateMeta.ai's AI-powered real estate intelligence platform" />
      </Head>

      <header className="fixed w-full z-50 bg-white/95 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-12">
            <Image
              src="/logo.png"
              alt="RealEstateMeta.ai logo"
              width={128}
              height={32}
              className="h-32 w-auto transition-transform hover:scale-105"
            />

            <nav className="hidden md:flex gap-10 text-gray-600 text-base font-medium">
              <Link href="/features" className="text-blue-600 font-semibold">Features</Link>
              <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
              <Link href="/investors" className="hover:text-blue-600 transition-colors">Investors</Link>
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

      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Real Estate Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our AI-powered platform transforms your real estate data into actionable insights and comprehensive reports
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(features).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {features[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Feature Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                {features[activeTab].icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {features[activeTab].title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {features[activeTab].description}
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {features[activeTab].details.map((detail: FeatureDetail, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-gray-600">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience the Power of AI?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today and see how RealEstateMeta.ai can transform your real estate business with powerful data analysis and reporting capabilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://zcal.co/wayne-berger"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Free Trial
              </a>
              <Link
                href="/pricing"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg font-medium hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 