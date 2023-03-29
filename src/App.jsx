
import {Routes, Route} from 'react-router-dom'
import Login from './login/Login'
import Header from './header/Header'


function App() {
  return (
    <Routes>
      <Route path = '/' element = { <Login/>}/>
      <Route path = '/header' element = { <Header/>}/>

     

    </Routes>
  )

}


export default App;
