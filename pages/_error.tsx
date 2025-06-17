import type { NextPage } from 'next'
import Head from 'next/head'

interface ErrorProps {
  statusCode?: number
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Head>
        <title>Error | RealEstateMeta.ai</title>
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Return Home
        </a>
      </main>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error 