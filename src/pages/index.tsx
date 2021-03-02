
import { CompleteChallengers } from "../componentes/CompleteChallengers";
import { Countdown } from "../componentes/countdown";
import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/perfil";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import { ChallengeBox } from "../componentes/ChallengeBox";
import { CountdownProvider } from "../contexto/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>
        Inicio / Move.it
      </title>
    </Head>
    <ExperienceBar />
    <CountdownProvider>

    
    <section>
      <div>
        <Profile /> 
        <CompleteChallengers />
        <Countdown />
      </div>
      <div>
       <ChallengeBox /> 
      </div>
    
    </section>
    </CountdownProvider>
    </div>
    
  )
}
