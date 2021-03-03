import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from 'js-cookie';
import challenges from "../../challenges.json";
import { LevelupModal } from "../componentes/levelupmodal";


interface challenge {
    type: "body" | 'eye';
    description: string;
     amount: number;
}


interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExp: number;
    challengesCompleted: number;
  
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
    closeLevelUpModal: () => void;
    

}


export  const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider({ children, ...rest } : ChallengesProviderProps ) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExp, SetCurrentExp] = useState(rest.currentExp ?? 0);
    const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null)
    
    const experieceToNextLevel = Math.pow((level + 1) * 4, 2)

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false) 
    
    
    useEffect(() => {
    Notification.requestPermission();    
     }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExp', String(currentExp));
        Cookies.set('challengeCompleted', String(challengesCompleted));





    }, [level, currentExp, challengesCompleted]);

    function closeLevelUpModal() {

        setIsLevelUpModalOpen(false);

    }

    function levelup() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
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
        <ChallengesContext.Provider value={{ level , levelup, currentExp, challengesCompleted, startNewChallenge, activeChallenge,resetChallenge,experieceToNextLevel,completeChallenge, closeLevelUpModal }}>
        {children}     
        { isLevelUpModalOpen && <LevelupModal>
        </LevelupModal>
        } 
        </ChallengesContext.Provider>

    );
}