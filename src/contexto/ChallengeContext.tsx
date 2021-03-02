import { createContext, useState, ReactNode, useEffect } from "react";

import challenges from "../../challenges.json";


interface challenge {
    type: "body" | 'eye';
    description: string;
     amount: number;
}


interface ChallengesProviderProps {
    children: ReactNode;
}

interface ChallengesContextData {
    level: number;
    currentExp: number;
    challengesCompleted: number;
    levelup: () => void;
    startNewChallenge: () => void;
    activeChallenge: challenge;
    resetChallenge: () => void;
    experieceToNextLevel: number;
    completeChallenge: () => void;
    

}


export  const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider({ children } : ChallengesProviderProps ) {
    const [level, setLevel] = useState(1);
    const [currentExp, SetCurrentExp] = useState(0);
    const [challengesCompleted, setchallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)
    
    const experieceToNextLevel = Math.pow((level + 1) * 4, 2)

    
    useEffect(() => {
    Notification.requestPermission();    
     }, [])

  

    function levelup() {
        setLevel(level + 1);
    } 

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge)
        new Audio('/notification.mp3').play();
        console.log("Começou")
        if (Notification.permission === 'granted') {
            new Notification('Novo Desafio ', {
               body: `Valendo ${challenge.amount} xp! ` 
            })
        }
    } 

    function resetChallenge() {

        setActiveChallenge(null);
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }
        const { amount } = activeChallenge;
        let finalExperience = currentExp + amount;

        if (finalExperience >= experieceToNextLevel ) {
            finalExperience = finalExperience - experieceToNextLevel;
            levelup()

        } 

        SetCurrentExp(finalExperience);
        setActiveChallenge(null);
        setchallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider value={{ level , levelup, currentExp, challengesCompleted, startNewChallenge, activeChallenge,resetChallenge,experieceToNextLevel,completeChallenge }}>
        {children}     
        </ChallengesContext.Provider>

    );
}