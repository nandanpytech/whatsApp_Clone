import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId="958885870059-ueqmn8bfgimk5bd3ehfbnsvs416kqbdm.apps.googleusercontent.com"
  return (
    <div className="App">
      <GoogleOAuthProvider  clientId={clientId}>
        <AccountProvider >
           <Messanger></Messanger>
        </AccountProvider>   
      </GoogleOAuthProvider>     
    </div>
  );
}

export default App;
