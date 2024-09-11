import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { requestFullscreen } from '@novaplay/browser-sdk'

export default function Home() {
  return (
    <div className={styles.container} id={'pageContainer'}>
      <Head>
        <title>NovaPlay Browser SDK Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={()=>{
          requestFullscreen({ elementId: 'gameCanvas', setStyle: true })
        }}>Request Fullscreen</button>
        <h1 className={styles.title}>
          Welcome to the NovaPlay SDK Demo!
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
        <div id="gameCanvas" style={{ width: 100, height: 100, backgroundColor: 'green' }}>
          test text
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
