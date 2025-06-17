import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Head>
        <title>404 - Page Not Found | RealEstateMeta.ai</title>
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Return Home
        </a>
      </main>
    </div>
  );
} 