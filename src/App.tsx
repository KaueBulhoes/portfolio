import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Siderbar from './containers/Siderbar'
import Projetos from './containers/Projetos'
import { ThemeProvider } from 'styled-components'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <>
      <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
        <EstiloGlobal />
        <Container>
          <Siderbar trocaTema={trocaTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
