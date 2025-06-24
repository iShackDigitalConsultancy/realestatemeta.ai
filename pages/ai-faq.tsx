import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqSections = [
  {
    title: "⚠️ General Concerns About AI",
    faqs: [
      { q: "Will AI replace my job?", a: "Not entirely. AI is more likely to automate repetitive tasks, allowing professionals to focus on high-value, strategic work. It's a tool to enhance roles, not erase them." },
      { q: "Can AI be trusted to make important decisions?", a: "AI can surface insights and make recommendations based on data, but human oversight is essential. Responsible systems are always designed to keep a human in the loop." },
      { q: "How much control do humans retain over AI systems?", a: "In well-designed enterprise systems, humans define rules, approve outputs, and can override AI decisions. AI augments decision-making but does not replace accountability." },
      { q: "What if AI makes a mistake — who is accountable?", a: "The organisation deploying the AI remains responsible. That's why audit trails, validation layers, and human review are key in production-grade AI systems." },
      { q: "Can AI become uncontrollable or 'go rogue'?", a: "Not in enterprise settings. The 'rogue AI' idea is more science fiction. Systems used in real estate and enterprise tools are rule-based and narrowly scoped, not autonomous general AI." },
      { q: "Will AI widen the gap between tech-savvy and non-tech users?", a: "Good AI tools are designed for accessibility. With user-friendly interfaces and natural language assistants, AI can make tech more approachable, not less." },
      { q: "How do I know if AI is biased or fair?", a: "Bias depends on the data it's trained on. Responsible vendors audit data inputs and model behaviour regularly. Transparency and explainability are built-in best practices." },
    ]
  },
  {
    title: "🔒 Data & Privacy Concerns",
    faqs: [
      { q: "Is my data safe when AI tools are used?", a: "Yes, if the system uses encrypted storage, follows compliance laws, and controls access properly. Look for SOC 2, ISO 27001, and POPIA compliance." },
      { q: "Will AI expose or misuse personal or confidential information?", a: "No — enterprise AI is typically deployed in controlled environments. Sensitive data is anonymised or masked before being processed." },
      { q: "How does AI handle data compliance (e.g., POPIA, GDPR)?", a: "It depends on the provider, but compliant AI solutions allow data residency, consent control, audit logs, and the right to access/delete data." },
      { q: "Who owns the data used by or produced by AI?", a: "Generally, you do. The AI processes your data but does not claim ownership. Ensure contracts and terms reflect this." },
      { q: "Can AI systems be hacked or manipulated?", a: "All digital systems carry some risk, but AI solutions with multi-layered security, regular audits, and secure APIs greatly reduce exposure." },
    ]
  },
  {
    title: "🧠 Ethical & Bias Issues",
    faqs: [
      { q: "Is the AI system making unbiased decisions?", a: "The best systems are tested against bias. But no AI is perfect — that's why transparency, retraining, and regular audits are essential." },
      { q: "Can AI discriminate based on race, gender, or economic status?", a: "It can if trained on flawed data. That's why ethical AI development includes bias testing and avoids using protected characteristics unless justified." },
      { q: "How transparent are AI algorithms and decisions?", a: "Modern AI tools include explainability modules — showing why a suggestion was made, based on input data or historical patterns." },
      { q: "Are we outsourcing too much ethical responsibility to machines?", a: "No — ethical AI always keeps humans responsible. The role of AI is to inform, not dictate decisions." },
    ]
  },
  {
    title: "💼 Business & Adoption Concerns",
    faqs: [
      { q: "Is AI worth the investment?", a: "Yes, when deployed correctly. It reduces time spent on manual tasks, improves accuracy, and speeds up decision cycles — often with quick ROI." },
      { q: "How difficult is it to implement and integrate AI into my business?", a: "Solutions like RealEstateMeta.ai are built to integrate with existing tools (like SAP, XERO or MRI solutions) via API and can be onboarded in days, not months." },
      { q: "Will my team be able to use it easily, or will it require retraining?", a: "AI assistants today use natural language and intuitive dashboards. No coding or retraining required — just a little orientation." },
      { q: "Will AI disrupt current workflows or systems?", a: "Not if designed properly. AI overlays existing systems and enhances workflows with automation, not replacement." },
      { q: "What are the hidden or ongoing costs of AI tools?", a: "Beyond licensing, consider cloud compute usage, support, and training. A good vendor will be transparent and offer value-based pricing." },
    ]
  },
  {
    title: "🧩 Industry-Specific Concerns (Real Estate, PropTech, FM)",
    faqs: [
      { q: "Can AI truly understand the nuances of real estate or our sector?", a: "Yes, especially when trained on property-specific data like leases, vacancies, and asset registers. RealEstateMeta.ai, for example, is built solely for this." },
      { q: "Will it replace brokers, agents, or facility managers?", a: "No — it will help them do more in less time, make better calls, and focus on value-adding tasks like tenant experience or strategic planning." },
      { q: "How accurate are AI-generated insights or valuations?", a: "AI draws on historical and real-time data for pattern recognition — it's not a replacement for valuation experts, but a smart assistant." },
      { q: "Can AI integrate with my existing tools (e.g., MRI, SAP, MDA)?", a: "Yes. Platforms like RealEstateMeta.ai are API-first and designed to push/pull data from ERPs, leasing CRMs, FM tools, and BI dashboards." },
    ]
  },
];

export default function AiFaq() {
  return (
    <>
      <Head>
        <title>AI FAQ - RealEstateMeta.ai</title>
        <meta name="description" content="Frequently asked questions about AI, data, privacy, ethics, and business adoption for RealEstateMeta.ai" />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">AI FAQ</h1>
        {faqSections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">{section.title}</h2>
            <ul className="space-y-6">
              {section.faqs.map((faq) => (
                <li key={faq.q} className="bg-white rounded-lg shadow p-6">
                  <p className="font-medium text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-700 text-base">{faq.a}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
} 