import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import  verticalMenu from './component/verticalMenu/verticalMenu';
import  login from './page/login/login';
import  rs_Password from './page/rs_Password/rs_Password';
import  nw_Password from './page/nw_Password/nw_Password';
import  inf_account from './page/inf_account/inf_account';
import  dashboard from './page/dashboard/dashboard';
import  device from './page/device/device';
import  service from './page/service/service';
import  queueNumber from './page/queueNumber/queueNumber';
import  report from './page/report/report';
import  role from './page/management/role/role';
import  account from './page/management/account/account';
import  userLogs from './page/management/userLogs/userLogs';
import  addDevice from './page/device/addDevice';
import  detailDevice from './page/device/detailDevice';
import  updateDevice from './page/device/updateDevice ';
// import  dashboard1 from './page/dashboard copy/dab';
function App() {
  return(
    <BrowserRouter>
      <Routes>
          {/* <Route path="/verticalMenu" Component={verticalMenu} /> */}
          <Route path="/login" Component={login} />
          <Route path="/rs_Password" Component={rs_Password} />
          <Route path="/nw_Password" Component={nw_Password} />
          <Route path="/inf_account" Component={inf_account} />
          <Route path="/dashboard" Component={dashboard} />
          <Route path="/device" Component={device} />
          <Route path="/service" Component={service} />
          <Route path="/queueNumber" Component={queueNumber} />
          <Route path="/report" Component={report} />
          <Route path="/role" Component={role} />
          <Route path="/account" Component={account} />
          <Route path="/userLogs" Component={userLogs} />
          <Route path="/addDevice" Component={addDevice} />
          <Route path="/detailDevice" Component={detailDevice} />
          <Route path="/updateDevice" Component={updateDevice} />
          {/* <Route path="/dashboard1" Component={dashboard1} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
