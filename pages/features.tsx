// Force new build - Clean cache
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ReactElement } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <meta name="description" content="Discover how RealEstateMeta.ai&apos;s AI-powered features transform your real estate data into actionable insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Real Estate Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform brings together all your real estate data into one intelligent system.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Integration</h3>
              <p className="text-gray-600">
                Connect all your real estate data sources into one unified platform. Our AI automatically organizes and structures your data.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                Get deep insights into your real estate portfolio with our AI-powered analytics and predictive modeling.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customizable Workflows</h3>
              <p className="text-gray-600">
                Create custom workflows and automation rules to streamline your real estate operations.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Real Estate Data?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join leading real estate companies who are already using RealEstateMeta.ai to make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/pricing"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Pricing
              </Link>
              <a 
                href="https://zcal.co/wayne-berger"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg font-medium hover:scale-105"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 