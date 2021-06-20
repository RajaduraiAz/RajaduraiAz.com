import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rajadurai Azhagudurai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SSE <a href="https://www.gavstech.com/">@GAVS</a>
        </h1>

        <p className={styles.description}>
          Aspiring Azure Architect
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/RajaduraiAz/" className={styles.card}>
            <h3>LinkedIn &rarr;</h3>
            <p>Professional network</p>
          </a>

          <a href="https://github.com/RajaduraiAz/" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Open source projects</p>
          </a>

          <a href="https://www.facebook.com/RajaduraiAz/" className={styles.card}>
            <h3>Facebook &rarr;</h3>
            <p>Other than work</p>
          </a>
        </div>
      </main>
    </div>
  )
}
