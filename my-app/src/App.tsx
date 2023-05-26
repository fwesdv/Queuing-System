import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import  verticalMenu from './component/verticalMenu/verticalMenu';
import  login from './page/login/login';
import  rs_Password from './page/rs_Password/rs_Password';
import  nw_Password from './page/nw_Password/nw_Password';
import  inf_Password from './page/inf_account/inf_account';
function App() {
  return(
    <BrowserRouter>
      <Routes>
          {/* <Route path="/verticalMenu" Component={verticalMenu} /> */}
          <Route path="/login" Component={login} />
          <Route path="/rs_Password" Component={rs_Password} />
          <Route path="/nw_Password" Component={nw_Password} />
          <Route path="/inf_Password" Component={inf_Password} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
