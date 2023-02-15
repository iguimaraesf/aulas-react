// Era const App() {...} export App;

import { AppRoutes } from "./routes"
import { UsuarioLogadoProvider } from "./shared/contexts";
//import { UsuarioLogadoProvider } from "./shared/contexts/usuarioLogado";

// Isso ajuda o intellisense do Visual Studio Code
export const App = () => {
  return (
    <UsuarioLogadoProvider nomeDoUsuario='(nenhum)' logout={() => console.log('saida... no App.tsx')}>
      <AppRoutes/>
    </UsuarioLogadoProvider>
  );
}
