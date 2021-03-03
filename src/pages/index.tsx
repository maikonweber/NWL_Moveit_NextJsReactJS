
import { CompleteChallengers } from "../componentes/CompleteChallengers";
import { Countdown } from "../componentes/countdown";
import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/perfil";
import styles from "../styles/pages/Home.module.css";
import {GetServerSideProps} from "next";
import Head from "next/head";
import { ChallengeBox } from "../componentes/ChallengeBox";
import { CountdownProvider } from "../contexto/CountdownContext";
import { ChallengesProvider } from "../contexto/ChallengeContext"


interface HomeProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;

}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
    level={props.level}
    currentExp={props.currentExp} 
    challengesCompleted= {props.challengesCompleted}
    
    >
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
    </ChallengesProvider>
    
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExp, challengeCompleted } = ctx.req.cookies;


  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp), 
      challengeCompleted: Number(challengeCompleted)
    }
  }
}