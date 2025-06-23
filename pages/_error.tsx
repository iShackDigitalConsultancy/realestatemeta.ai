import type { NextPage } from 'next'
import Head from 'next/head'

interface ErrorProps {
  statusCode?: number
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>Error - RealEstateMeta.ai</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry for the inconvenience. Please try again later.
        </p>
        <a
          href="/"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Return to Home
        </a>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error 