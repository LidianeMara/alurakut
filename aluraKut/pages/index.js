import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsArea'

function ProfileSideBar(props) { 
  return (
    <Box>
    <img style={{borderRadius: '8px'}} src={`https://github.com/${props.githubUser}.png`} />
  </Box>
  )
}



export default function Home() {
  const githubUser = 'LidianeMara';
  const meusAmigos = [
    'danielalfb', 
    'gloriaporte', 
    'chgp', 
    'marcellabarros', 
    'marialuisacp',
    'Julio-Freitas', 
    ];



  return (
  <> 
    <AlurakutMenu />     
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box> 
           <h1 className="title">{`Bem-vindo, ${githubUser}!`}</h1> 
           <OrkutNostalgicIconSet />
          </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper> 
           <h2 className="smallTitle">Meus amigos ({meusAmigos.length})</h2>
            <ul>
              {meusAmigos.map((amigo) => {
              return (
                <li>
                  <a href={`/users/${amigo}`} key={amigo}>
                    <img src={`https://github.com/${amigo}.png`}/>
                    <span>{amigo}</span>
                  </a>
                </li>
                   )
               })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box> 
            <h2 className="smallTitle">Minhas comunidades</h2> 
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
