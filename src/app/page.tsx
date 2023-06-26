

import Image from 'next/image'
import Nav from '../components/Nav';
import Video from '../components/Video';
import PDFViewer from '@/components/PDFViewer';


export default function Home() {
  return (
    <>
      <main>
        <section className=''>
          front: logo, pictures
        </section>
        <section className='bg-rose-700'>
          about: mission, history
        </section>
        <section className='bg-blue-900'>
          <div className = 'video-container '>
            <Video videoId="JEbmtmEkfxs" />
          </div>
          <div className="program-container">
            {/* <PDFViewer pdf = '/src/app/A-Thousand-Tongues-program.pdf' /> */}
          </div>
          video and program
        </section>
      </main>
    </>
  )
}
