import type { NextPage } from 'next'
import Head from 'next/head'
import Tutorial from '../components/tutorial'

const Home: NextPage =  () => {
  return (
    <div>
      <Head>
        <title>The RSA algorithm explained</title>
        <meta name="description" content="The RSA algorithm explained, visually." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Tutorial />
      </main>
    </div>
  )
}

export default Home
