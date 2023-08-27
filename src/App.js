import React from "react"
import * as Components from './Components';

function App() {
  // Define um estado "login" com o valor inicial "true"
  const [login, toggle] = React.useState(true);
  return (
    <div style={{ display: "flex" }}>
      {/* Barra de Navegação na Lateral */}
      <nav style={{ width: "200px", backgroundColor: "#f0f0f0", padding: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre nós</a>
          </li>
        </ul>
      </nav>
      <Components.Container>
        {/* Bloco de Cadastro */}
          <Components.CadastroContainer login={login}>
            <Components.Form>
              <Components.Title>Criar Conta</Components.Title>
              <Components.Input type='text' placeholder='Name' />
              <Components.Input type='email' placeholder='Email' />
              <Components.Input type='password' placeholder='Password' />
              <Components.Button>Cadastre-se</Components.Button>
            </Components.Form>
          </Components.CadastroContainer>

          {/* Bloco de Login */}
          <Components.LoginContainer login={login}>
            <Components.Form>
              <Components.Title>Login</Components.Title>
              <Components.Input type='email' placeholder='Email' />
              <Components.Input type='password' placeholder='Password' />
              <Components.Anchor href='#'>Esqueceu sua senha?</Components.Anchor>
              <Components.Button>Login</Components.Button>
            </Components.Form>
          </Components.LoginContainer>

          {/* Bloco de Overlay (animação entre login e cadastro) */}
          <Components.OverlayContainer login={login}>
            <Components.Overlay login={login}>

              {/* Painel de Overlay à Esquerda */}
              <Components.LeftOverlayPanel login={login}>
                <Components.Title>Bem Vindo(a)!</Components.Title>
                <Components.Paragraph>
                  Para se manter conectado conosco, faça login com suas informações pessoais
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Login
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              {/* Painel de Overlay à Direita */}
              <Components.RightOverlayPanel login={login}>
                <Components.Title>Olá, Meu Chapa</Components.Title>
                <Components.Paragraph>
                  Seja mais um parceiro nosso, cadastre-se e dê uma olhada em nossa locadora.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Cadastre-se
                </Components.GhostButton>

              </Components.RightOverlayPanel>

            </Components.Overlay>
          </Components.OverlayContainer>
        
      </Components.Container>
        
    </div>
  )
}
export default App;