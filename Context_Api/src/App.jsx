import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
    <h1>Context Api Data Display </h1>
    <LogIn />
    <Profile />
    </UserContextProvider>
  );
}

export default App;
