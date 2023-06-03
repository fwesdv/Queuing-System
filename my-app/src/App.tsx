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
import  addService from './page/service/addService';
import  detailService from './page/service/detailService';
import  editService from './page/service/editService';
import  newNumber from './page/queueNumber/newNumber';
import  detailQN from './page/queueNumber/detailQN';
import  addRole from './page/management/role/addRole';
import  addAccount from './page/management/account/addAccount';
import  editRole from './page/management/role/editRole';
import  editAccount from './page/management/account/editAccount';
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
          <Route path="/addService" Component={addService} />
          <Route path="/detailService" Component={detailService} />
          <Route path="/editService" Component={editService} />
          <Route path="/newNumber" Component={newNumber} />
          <Route path="/detailQN" Component={detailQN} />
          <Route path="/addRole" Component={addRole} />
          <Route path="/addAccount" Component={addAccount} />
          <Route path="/editRole" Component={editRole} />
          <Route path="/editAccount" Component={editAccount} />
          {/* <Route path="/dashboard1" Component={dashboard1} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
