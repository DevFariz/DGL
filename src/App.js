import {
  HomePage,
  ImprintPage,
  ProtectionPage,
  LoginSignUpStartPage,
  LoginPage,
  SignUpPage1,
  SignUpPage2,
  FinishSignUpPage,
  Dashboard,
} from "./pages";
import Navbar from "./components/navbar/Navbar";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <ImprintPage /> */}
      {/* <ProtectionPage /> */}
      {/* <LoginSignUpStartPage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage1 /> */}
      {/* <SignUpPage2 /> */}
      {/* <FinishSignUpPage /> */}
      <div className="dashboard-container">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
