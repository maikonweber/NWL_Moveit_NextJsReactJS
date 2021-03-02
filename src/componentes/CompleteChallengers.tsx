import styles from '../styles/component/CompletChallengers.module.css';
import { useContext } from "react";
import {ChallengesContext} from "../contexto/ChallengeContext";

export function CompleteChallengers() 
{

    const {challengesCompleted} = useContext(ChallengesContext);


    return (
        <div className={styles.completeChanllengers}>
            <span> Desafios Completos </span>
            <span>{challengesCompleted}</span>
        </div>
    );

}