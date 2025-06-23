import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import ModulesSection from '../components/FeaturesSection'
import {
  Building2,
  Search,
  FileSpreadsheet,
  Wrench,
  ClipboardList,
  ShieldCheck,
  BarChart3,
  PackageCheck,
  MessageCircle,
} from 'lucide-react'

const coreModules = [
  {
    title: 'Leasing Intelligence',
    icon: Building2,
    description: 'AI-powered insights into lease performance, tenant behavior, and market positioning. Generate reports on lease expirations, renewal probabilities, and optimal pricing strategies. Track tenant satisfaction and identify opportunities for lease optimization.'
  },
  {
    title: 'Vacancy Management',
    icon: Search,
    description: 'Predictive analytics for vacancy management and tenant turnover. Get insights into vacancy trends, time-to-lease metrics, and market demand. Generate reports on vacancy costs and optimization strategies.'
  },
  {
    title: 'Accounting & Billing',
    icon: FileSpreadsheet,
    description: 'Automated financial insights and reporting for real estate operations. Track revenue streams, expense patterns, and financial performance. Generate detailed reports on cash flow, budget variances, and financial forecasting.'
  },
  {
    title: 'Facilities Management',
    icon: Wrench,
    description: 'Smart insights for building operations and maintenance. Monitor building performance, energy usage, and maintenance schedules. Generate reports on operational efficiency and cost optimization opportunities.'
  },
  {
    title: 'Asset Registry',
    icon: ClipboardList,
    description: 'Comprehensive asset tracking and management insights. Monitor asset performance, depreciation, and value trends. Generate detailed reports on asset utilization, maintenance history, and replacement planning.'
  },
  {
    title: 'Preventative Maintenance',
    icon: ShieldCheck,
    description: 'AI-driven maintenance insights and scheduling. Predict maintenance needs and optimize maintenance schedules. Generate reports on maintenance costs, equipment performance, and preventive maintenance effectiveness.'
  },
  {
    title: 'Financial Dashboards',
    icon: BarChart3,
    description: 'Real-time financial insights and performance tracking. Monitor key financial metrics, ROI, and investment performance. Generate comprehensive reports on financial health, investment returns, and portfolio performance.'
  },
  {
    title: 'Procurement Optimization',
    icon: PackageCheck,
    description: 'Smart procurement insights and vendor management. Track procurement costs, vendor performance, and contract compliance. Generate reports on procurement efficiency, cost savings opportunities, and vendor relationships.'
  },
  {
    title: 'Communication',
    icon: MessageCircle,
    description: 'Centralized communication tools for property managers, tenants, and service providers. Streamline conversations, automate notifications, and keep all stakeholders informed in real time.'
  },
]

const featureTabs = [
  {
    key: 'ai-assistant',
    label: 'AI Assistant',
    content: (
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">AI Assistant</h3>
        <p className="text-gray-700 text-lg">Get instant answers and insights from our AI assistant. Available 24/7 to help with market analysis, property comparisons, and investment opportunities.</p>
      </div>
    ),
  },
  {
    key: 'ai-dashboards',
    label: 'AI Dashboards',
    content: (
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">AI Dashboards</h3>
        <p className="text-gray-700 text-lg">Create custom AI-powered dashboards that automatically update with the latest market data, trends, and insights. Visualize your data in meaningful ways.</p>
      </div>
    ),
  },
  {
    key: 'expert-reports',
    label: 'Expert Reports',
    content: (
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">Expert Reports</h3>
        <p className="text-gray-700 text-lg">Generate comprehensive reports powered by AI, including market analysis, property valuations, and investment recommendations. Save hours of manual research.</p>
      </div>
    ),
  },
]

// Force new deployment
export default function Home() {
  const [activeTab, setActiveTab] = useState(featureTabs[0].key)
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>RealEstateMeta.ai</title>
        <meta name="description" content="AI-Powered Real Estate Intelligence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pt-32">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-6">
              AI-Powered Clarity for Real Estate
            </h1>
            <p className="text-xl text-center mb-8">
              We integrate scattered data from your existing systems into a single, clear view.
            </p>
            <div className="mb-8">
              <Image
                src="/RealEstate Meta Tenticles.png"
                alt="RealEstate Meta Tentacles"
                width={350}
                height={200}
                className="mx-auto drop-shadow-xl"
                priority
              />
            </div>
            <p className="text-lg text-center mb-8 text-gray-700 max-w-2xl mx-auto">
              <span className="block font-semibold text-xl text-blue-700 mb-2">Seamless MRI Integration. Unified Intelligence.</span>
              RealEstateMeta.ai is a proud partner of MRI Software, offering full integration with PMX and MDA/Property Central. Our platform pushes and pulls data across MRI, SmartBuildingApp.com (Operations PropTech), and iProp.Solutions (Transactions PropTech) to create a single, intelligent source of truth. With AI-powered insights layered across leasing, facilities, finance, and asset data, RealEstateMeta.ai simplifies operations, boosts compliance, and empowers smarter decisions—faster.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/realestatemeta/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Platform Features</h2>
          <div className="flex justify-center mb-8 gap-2 flex-wrap">
            {featureTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 border-2 ${activeTab === tab.key ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg">
            {featureTabs.find(tab => tab.key === activeTab)?.content}
          </div>
        </div>

        {/* Integration Options Section */}
        <section className="mt-20 bg-gradient-to-b from-white to-blue-50 py-12 px-6 text-center rounded-xl shadow mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration Options</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Plug RealEstateMeta.ai into your data lake or use our proptech tools,{' '}
            <span className="font-semibold text-blue-700">smartbuildingapp.com</span> and{' '}
            <span className="font-semibold text-blue-700">iprop.solutions</span> to gather and organise your data.
          </p>
          <div className="flex flex-col items-center mb-2">
            <div className="flex flex-col items-center mb-6">
              <img src="/MRI.png" alt="MRI Logo" className="h-24 w-auto mb-2 drop-shadow-lg" />
              <span className="text-sm text-gray-700 font-semibold">MRI</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-16">
              <div className="flex flex-col items-center">
                <img src="/Asset 4.svg" alt="SmartBuildingApp.com Logo" className="h-14 w-auto mb-2" />
                <span className="text-xs text-gray-500">SmartBuildingApp.com</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/iProp Solutions Logo.png" alt="iProp.solutions Logo" className="h-14 w-auto mb-2" />
                <span className="text-xs text-gray-500">iProp.solutions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Modules Section */}
        <section className="mt-20 bg-gradient-to-b from-blue-50 to-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Core AI Modules for Real Estate Operations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreModules.map(({ title, icon: Icon, description }, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="flex justify-center items-center mb-4 h-12 w-12 mx-auto rounded-full bg-blue-100 text-blue-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 break-words">{title}</h3>
                <p className="text-gray-600 text-sm break-words whitespace-pre-line">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Get Started Button below Core Modules */}
        <div className="flex justify-center mt-12 mb-8">
          <a
            href="https://zcal.co/wayne-berger"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
<ModulesSection />
