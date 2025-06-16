import {
  Building2,
  Search,
  FileSpreadsheet,
  Wrench,
  ClipboardList,
  ShieldCheck,
  BarChart3,
  PackageCheck,
} from 'lucide-react'

const features = [
  { title: 'Leasing', icon: Building2 },
  { title: 'Vacancies', icon: Search },
  { title: 'Accounting & Billing', icon: FileSpreadsheet },
  { title: 'Facilities Management', icon: Wrench },
  { title: 'Asset Registry', icon: ClipboardList },
  { title: 'Preventative Maintenance', icon: ShieldCheck },
  { title: 'Financial Dashboards', icon: BarChart3 },
  { title: 'Procurement', icon: PackageCheck },
]

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Core AI Modules for Real Estate Operations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map(({ title, icon: Icon }, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="flex justify-center items-center mb-4 h-12 w-12 mx-auto rounded-full bg-blue-100 text-blue-600">
              <Icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
