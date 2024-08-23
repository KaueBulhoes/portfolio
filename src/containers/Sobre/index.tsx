import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        quaerat nam quasi! Sit et nam possimus excepturi, eius animi facilis
        provident corporis iste ratione ipsum quos, architecto cum pariatur
        sequi.
      </Paragrafo>
      <GithubSecao>
        <img
          height="180em"
          src="https://github-readme-stats.vercel.app/api?username=kauebulhoes&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        />
        <img
          height="180em"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=kauebulhoes&layout=compact&langs_count=7&theme=dracula"
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre
