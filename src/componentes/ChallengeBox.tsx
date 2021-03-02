import { ChallengesContext } from '../contexto/ChallengeContext';
import styles from '../styles/component/ChallegeBox.module.css'
import { useContext } from "react"
import { CompleteChallengers } from './CompleteChallengers';
import { CountdownContext } from '../contexto/CountdownContext';

export function ChallengeBox() { 

const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

const {resetCountdown} = useContext(CountdownContext);

function handleChallengeSuccedded(){
    completeChallenge();
    resetCountdown();
}

function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();

}

    return (
        <div className={styles.challengeBoxContainer} > 
            { activeChallenge ?
             (<div className={styles.challengeActive}>
                 <header>Ganhe {activeChallenge.amount} </header>
                 <main>
                     <img src={`icons/${activeChallenge.type}.svg`}>
                     </img>
                     <strong>
                        Novo Desafio
                     </strong>
                     <p>{activeChallenge.description} </p>
                     </main>
                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}>Falhou</button>
                       
                        <button 
                        type="button"
                        className={styles.challengeSuceededButton}
                        onClick={handleChallengeSuccedded}
                        >Completei</button>
                        
                    </footer>
                 
             </div> ) : 
                (
                <div className={styles.challengeBoxNotActive}>
                <strong>
                    Finalize um Ciclo para receber um desafio
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="level-up">
                       
                    </img>
                    Avance o Desafio 
                </p>
                </div>
       )   }
           </div> 
    )

}