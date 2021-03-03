import { ChallengesContext } from "../contexto/ChallengeContext"
import styles from  "../styles/component/LevelupModal.module.css"
import {useContext} from "react";
import { ChallengeContext } from "../contexto/ChallengeContext";

 
export function LevelupModal() {
    const { level , closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>
        <div className={styles.container}>
            <header>{level}</header>
            <strong> Parabens </strong>
            <p> Você Alcançou um novo level </p>
            <button type="button" 
            onClick={closeLevelUpModal}><img src="/icons/close.svg" alt="Fechar Modal"></img></button>
            </div>
        </div>
    )

}