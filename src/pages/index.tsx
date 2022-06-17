import type { NextPage } from 'next'
import { Header } from '../common/components/Header';

import { useTheme, useThemeBackground } from '../common/context/themes'

const Home: NextPage = () => {
  const { themeBg } = useThemeBackground();
  const { theme } = useTheme();

  return (
    <div style={
      {
        ...themeBg
      } as React.CSSProperties
     } >
     <Header/>
    </div>
  )
}

export default Home
