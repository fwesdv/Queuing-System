import { useNavigate, useParams } from 'react-router-dom';
import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './updateDevice.module.css';
import ReactSelect from 'react-select';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useState } from 'react';
  
function Device() {
    const options1 = [
        { value: 'all', label: 'Kiosk' },
        { value: 'activate', label: 'Display counter' },
      ]
      
      const  deviceId  =useParams().id;
      const deviceid= String(deviceId)
    const navigate =useNavigate();
    const newDevice =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const db = getFirestore();
            const docRef = doc(db, 'device', deviceid);
            const updatedata = {
                MaTB,
                IP,
                Name,
                TypeDevice,
                UserName,
                Password,
                Service,
            };
            await setDoc(docRef, updatedata, { merge: true });
          } catch (error) {
            console.error('Error fetching device:', error);
          }
        console.log("thanh cong");
        navigate(`/device`)
    };


    const [MaTB, setMaTB] = useState('');
    const [IP, setIP] = useState('');
    const [Name, setName] = useState('');
    const [TypeDevice, setTypeDevice] = useState('');
    const [Service, setService] = useState('');
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
  return (
    <>
        <VerticalMenu content={'Cập nhật thiết bị'}></VerticalMenu>
        <div className={styles.title}>Quản lý thiết bị</div>
        <div >
            <form className={styles.updateDevice} onSubmit={(e)=>newDevice(e)}>
            <div className={styles.updateDevice_body}>
                <div className={styles.body_title}>Quản lý thiết bị</div>

                <div className={styles.body_col}>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mã thiết bị: *</b></label>
                            <input type="text" placeholder={'KIO_01'} onChange={(e) => setMaTB(e.target.value)}/>
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên thiết bị: *</b></label>
                            <input type="text" placeholder="Kiosk" onChange={(e) => setName(e.target.defaultValue)}/>
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Địa chỉ IP: *</b></label>
                            <input type="text" placeholder="128.172.308" onChange={(e) => setIP(e.target.value)}/>
                        </div>
                    </div>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Loại thiết bị: *</b></label>
                            <ReactSelect className={styles.input} options={options1} onChange={(e) => setTypeDevice(e?.value ?? '')}/>   
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên đăng nhập: *</b></label>
                            <input type="text" placeholder="Linhkyo011" onChange={(e) => setUserName(e.target.value)}/>
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mật khẩu: *</b></label>
                            <input type="text" placeholder="CMS" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={styles.last_input}>
                    <label htmlFor="username"><b>Dịch vụ sử dụng: *</b></label>
                    <input type="text" placeholder="Khám tim mạch"  onChange={(e) => setService(e.target.value)}/>
                </div>
                <a>* Là trường thông tin bắt buộc</a>
            </div>
            <div className={styles.device_footer}>
                <button type="submit" className="btn1">Hủy bỏ</button>
                <button type="submit" className="btn">Cập nhật</button>  
            </div>
            </form>
        </div>
        
    </>
  );
}

export default Device;
