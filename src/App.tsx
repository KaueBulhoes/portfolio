import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Siderbar from './containers/Siderbar'
import Projetos from './containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Siderbar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
