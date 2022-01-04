import Head from 'next/head'

import TextOnBgCarousel from '../components/TextOnBgCarousel';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beskid Zielony | Lokalna Organizacja Turystyczna</title>
      </Head>

      <div className='d-block w-100 h-20 bg-success' style={{height: '40px'}}></div>
      <TextOnBgCarousel />
      
    </div>
  )
}
