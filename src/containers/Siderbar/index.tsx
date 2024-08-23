import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Siderbar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Kaue Bulhoes</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        kauebulhoes
      </Paragrafo>
      <Descricao fontSize={12}>Engenheiro Front End</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Siderbar
