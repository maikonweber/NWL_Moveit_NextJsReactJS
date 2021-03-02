import "../styles/global.css"

import { ChallengesProvider } from '../contexto/ChallengeContext';
 
function MyApp({ Component, pageProps }) {

  return (
  <ChallengesProvider>
  <Component {...pageProps} />
  </ChallengesProvider>
  )
}

export default MyApp
