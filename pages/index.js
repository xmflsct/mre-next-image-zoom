import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import styles from '../styles/Home.module.css'

import { Controlled } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Home () {
  const [isZoomed1, setIsZoomed1] = useState(false)
  const onZoomChange1 = useCallback(shouldZoom => {
    setIsZoomed1(shouldZoom)
  }, [])

  const [isZoomed2, setIsZoomed2] = useState(false)
  const onZoomChange2 = useCallback(shouldZoom => {
    setIsZoomed2(shouldZoom)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card} onClick={() => setIsZoomed1(true)}>
            <Controlled isZoomed={isZoomed1} onZoomChange={onZoomChange1}>
              <Image
                src='https://images.ctfassets.net/hb7jdg1fwzzk/IlK22NNIh778evBgxj7Ao/3b90eba7bb57cd11159a6a3f66ca722f/JK16-209-1_Cylinder_vase_M__h.16X12X9cm__stoneware__handpainted__TerraDelft.JPG?fm=jpg&fl=progressive&fit=fill&q=85&w=1080&h=1080'
                layout='responsive'
                width={270}
                height={270}
              />
            </Controlled>
          </div>

          <div className={styles.card}>
            <Image
              src='https://images.ctfassets.net/hb7jdg1fwzzk/IlK22NNIh778evBgxj7Ao/3b90eba7bb57cd11159a6a3f66ca722f/JK16-209-1_Cylinder_vase_M__h.16X12X9cm__stoneware__handpainted__TerraDelft.JPG?fm=jpg&fl=progressive&fit=fill&q=85&w=1080&h=1080'
              layout='responsive'
              width={270}
              height={270}
            />
          </div>

          <div className={styles.card} onClick={() => setIsZoomed2(true)}>
            <Controlled isZoomed={isZoomed2} onZoomChange={onZoomChange2}>
              <Image
                src='https://images.ctfassets.net/hb7jdg1fwzzk/IlK22NNIh778evBgxj7Ao/3b90eba7bb57cd11159a6a3f66ca722f/JK16-209-1_Cylinder_vase_M__h.16X12X9cm__stoneware__handpainted__TerraDelft.JPG?fm=jpg&fl=progressive&fit=fill&q=85&w=1080&h=1080'
                width={270}
                height={270}
              />
            </Controlled>
          </div>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
