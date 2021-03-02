import { ChallengesContext } from "../contexto/ChallengeContext";
import styles from "../styles/component/profile.module.css";
import { useContext } from 'react';
export function Profile() {

    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/maikonweber.png" alt="Maikon Weber"/>
            <div>
            <strong>Maikon Weber</strong>
            <p>
                <img src="icons/level.svg"></img>
                Level {level}                   
            </p>
            </div>
        </div>
    );
}