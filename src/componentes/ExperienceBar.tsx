import { ChallengesContext } from "../contexto/ChallengeContext";
import styles from "../styles/component/ExperienceBar.module.css";
import { useContext } from "react";

export function ExperienceBar () {
    const { currentExp, experieceToNextLevel } = useContext(ChallengesContext);
    
    const percentToNextLevel = Math.round(currentExp * 100) / experieceToNextLevel;
    
    return (
        <header className={styles.experienceBar}>
        <span> 0 xp </span>
        <div>
            <div style={{ width: '50%' }} />
        <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}
        }> {currentExp} xp </span>
        </div>

        <span> {experieceToNextLevel} xp </span>
        </header>
    
);
 
}
