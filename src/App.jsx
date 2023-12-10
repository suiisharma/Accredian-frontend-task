import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './signIn';
import SignUp from './signUp';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <Toaster
      toastOptions={{
        style: {
          maxWidth: '300px', 
          whiteSpace: 'wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      }}
      ></Toaster>
      <Routes>
        <Route path='/' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </Router>
  )
}

export default App