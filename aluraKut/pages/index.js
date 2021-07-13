
import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsArea'

function ProfileSideBar(props) { 
  return (
    <Box as="aside">
      <img style={{borderRadius: '8px'}} src={`https://github.com/${props.githubUser}.png`} />
      <hr/>
      <p>
        <a className="box-link" href={`https://github.com/${props.githubUser}`}>@{props.githubUser}</a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
  </Box>
  )
}



export default function Home() {
  const [comunidades, setComunidades] =  React.useState([{
    id: '2021-07-13T22:02:31.413Z',
    title: 'Valorant',
    image: 'https://img.redbull.com/images/c_crop,x_272,y_0,h_1440,w_1680/c_fill,w_650,h_540/q_auto,f_auto/redbullcom/2020/6/2/akoqciwp4hrh5fhrbuba/games-valorant-capa',
    }]);
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
           <h1 className="title">{`Bem-vindo(a), ${githubUser}!`}</h1> 
           <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2>O que você deseja fazer?</h2>
              <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosForm = new FormData(e.target);
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosForm.get('title'),
                  image: dadosForm.get('image'),
                };
              
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
              } }>
                <div>
                  <input 
                    placeholder="Qual vai ser o nome da sua comunidade?"
                    name="title" 
                    aria-label="Qual vai ser o nome da sua comunidade?"
                    type="text"
                  />
                </div>
                <div>
                  <input 
                    placeholder="Coloque uma URL para usarmos de capa"
                    name="image" 
                    aria-label="Coloque uma URL para usarmos de capa"
                    type="text"
                  />
                </div>
                <button>Criar comunidade</button>
              </form>
          </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper> 
           <h2 className="smallTitle">Meus amigos ({meusAmigos.length})</h2>
            <ul>
              {meusAmigos.map((amigo) => {
              return (
                <li key={amigo}>
                  <a href={`/users/${amigo}`}>
                    <img src={`https://github.com/${amigo}.png`}/>
                    <span>{amigo}</span>
                  </a>
                </li>
                   )
               })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper> 
           <h2 className="smallTitle">Minhas comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((comunidade) => {
              return (
                <li  key={comunidade.id}>
                  <a href={`/comunities/${comunidade.title}`}>
                  <img src={comunidade.image}/>
                    <span>{comunidade.title}</span>
                  </a>
                </li>
                   )
               })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
