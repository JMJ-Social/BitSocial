import { Routes, Route } from "react-router-dom";
import { Home, Profile, Messages, Posts, NavBar } from "./components";
const App = () => {
    return (
        <div>
            <Home />
            <div id='body'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Posts />}/>
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<Messages />} />
            </Routes>
            </div>
        </div>
    )
}
export default App;