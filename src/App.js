
import { useEffect, useState} from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import { Home, Profile, Messages, Posts, NavBar,RegLog} from "./components";

const App = () => {
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    return (
        <div>
            <Home />
            <div id='body'>
            <NavBar token={token} /> 
            <Routes>
                <Route path='/' element={<Posts />}/>
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/loginRegister' element={<RegLog />}/>
            </Routes>
            </div>
        </div>

    )
}
export default App;