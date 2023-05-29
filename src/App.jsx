import axios from "axios";
import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import { Context, server } from "./main";
import Eventhome from "./pages/event/Eventhome";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Investorlist from "./pages/investor/investorlist/Investorlist";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Startuphomepage from "./pages/startup/startuphome/startuphome";
import Startuplist2 from "./pages/Startup/startuplist/Startuplist";
import Addstart from "./pages/startup/startupregister/Startupregister";

function App() {

  const {setUser,setIsAuthenticated,setLoading} = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/home2/startup" element={<Startuphomepage />} />
      <Route path="/home2/startup/startupregister" element={<Addstart />} />
      <Route path="/home2/startup/startuplist" element={<Startuplist2 />} />
      <Route path="/home2/investor" element={<Investorlist />} />
      <Route path="/home2/event" element={<Eventhome/>} />
    </Routes>
    <Footer />
    <Toaster />
  </Router>
}

export default App;

