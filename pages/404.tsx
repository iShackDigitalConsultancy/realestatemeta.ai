import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>404 - Page Not Found | RealEstateMeta.ai</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
} 