import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './detailDevice.module.css';
import Edit from '../../assets/icon/Edit Square.png'
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function DetailDevice() {

      const  deviceId  =useParams().id;
      const deviceid= String(deviceId)
      console.log(deviceid,"deviceId")
      const db = getFirestore();
      useEffect(() => {
        const fetchData = async () => {
          const docRef = doc(db, 'device', deviceid);
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          console.log(data,"deviceId")
          if (data) {
            setMaTB(data.MaTB);
              setName(data.Name);
              setIP(data.IP);
              setTypeDevice(data.TypeDevice);
              setService(data.Service);
              setUserName(data.UserName);
              setPassword(data.Password);
          }
        };
        fetchData();
      }, [db]);

      const [MaTB, setMaTB] = useState('');
      const [IP, setIP] = useState('');
      const [Name, setName] = useState('');
      const [TypeDevice, setTypeDevice] = useState('');
      const [Service, setService] = useState('');
      const [UserName, setUserName] = useState('');
      const [Password, setPassword] = useState('');
  return (
    <>
        <VerticalMenu content={'Chi tiết thiết bị'}></VerticalMenu>
        <div className={styles.addButon}>
            <img src={Edit} alt="" />
            <p>Cập nhật <br /> thiết bị</p>
        </div>
        <div className={styles.detailDevice}>
            <div>
                <div className={styles.title}>Thông tin thiết bị</div>
                <div className={styles.body_col}>
                        <div >
                            <div className={styles.body_row}>
                                <b >Mã thiết bị: </b>
                                <a>{MaTB}</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Tên thiết bị: </b>
                                <a>{Name}</a>
                            </div>                     
                            <div className={styles.body_row}>
                                <b >Địa chỉ IP:</b>
                                <a>{IP}</a>
                            </div>
                        </div>
                        <div >
                            <div className={styles.body_row}>
                                <b >Loại thiết bị: </b>
                                <a>{TypeDevice}</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Tên đăng nhập: </b>
                                <a>{UserName}</a>
                            </div>                     
                            <div className={styles.body_row}>
                                <b >Mật khẩu:</b>
                                <a>{Password}</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.last_input}>
                        <b ><b>Dịch vụ sử dụng: </b></b>
                        <a>{Service}</a>
                    </div>
            </div>

        </div>
        
    </>
  );
}

export default DetailDevice;
