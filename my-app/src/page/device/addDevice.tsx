import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './addDevice.module.css';
import ReactSelect from 'react-select';
import {device} from '../../type/Device';
import { addDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { deviceCollection } from '../../lb/Data';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AddDevice (): JSX.Element{  
    const options1 = [
        { value: 'Kiosk', label: 'Kiosk' },
        { value: 'Display counter', label: 'Display counter' },
      ]
      const addNewDevice =async(deviceData: device)=>{ 
        try {
            const newDevice = await addDoc(deviceCollection, { ...deviceData });
            const documentId = newDevice.id;
            return documentId;
          } catch (error) {
            console.error('Error adding new Device:', error);
          }
    }

    const navigate =useNavigate();
    const newDevice =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const DeviceDocumentId = await addNewDevice({
            MaTB,
            IP,
            Name,
            TypeDevice,
            UserName,
            Password,
            Service,
            Active: "Đang Hoạt Động",
            Connect: "Kết Nối",
        });
        console.log("thanh cong them ve moi", DeviceDocumentId );
        setDocumentId(String(DeviceDocumentId));

        navigate(`/device`)
    };
    const [documentId, setDocumentId] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const db = getFirestore();
            const docRef = doc(db, 'device', documentId);
            const updatedata = {
              ID: documentId,
            };
            await setDoc(docRef, updatedata, { merge: true });
            console.error('documentId', documentId);
          } catch (error) {
            console.error('Error fetching device:', error);
          }
        };
      
        fetchData();
      }, [documentId]);

    const [MaTB, setMaTB] = useState('');
    const [IP, setIP] = useState('');
    const [Name, setName] = useState('');
    const [TypeDevice, setTypeDevice] = useState('');
    const [Service, setService] = useState('');
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
   
  return (
    <>
        <VerticalMenu content={'Thêm thiết bị'}></VerticalMenu>
        <div className={styles.title}>Quản lý thiết bị</div>
        <div >
            <form className={styles.addDevice} onSubmit={(e)=>newDevice(e)}>
            {/* <form className={styles.addDevice} > */}
                <div className={styles.addDevice_body}>
                    <div className={styles.body_title}>Quản lý thiết bị</div>

                    <div className={styles.body_col}>
                        <div >
                            <div className={styles.body_row}>
                                <label ><b>Mã thiết bị: *</b></label>
                                <input type="text" placeholder="Nhập mã thiết bị"  onChange={(e) => setMaTB(e.target.value)} />
                            </div>
                            <div className={styles.body_row}>
                                <label ><b>Tên thiết bị: *</b></label>
                                <input type="text" placeholder="Nhập tên thiết bị" onChange={(e) => setName(e.target.value)}/>
                            </div>                     
                            <div className={styles.body_row}>
                                <label ><b>Địa chỉ IP: *</b></label>
                                <input type="text" placeholder="Nhập địa chỉ IP" onChange={(e) => setIP(e.target.value)}/>
                            </div>
                        </div>
                        <div >
                            <div className={styles.body_row}>
                                <label ><b>Loại thiết bị: *</b></label>
                                <ReactSelect className={styles.item}  onChange={(e) => setTypeDevice(e?.value ?? '')}  options={options1} />
                            </div>
                            <div className={styles.body_row}>
                                <label ><b>Tên đăng nhập: *</b></label>
                                <input type="text" placeholder="Nhập tài khoản"onChange={(e) => setUserName(e.target.value)} />
                            </div>                     
                            <div className={styles.body_row}>
                                <label ><b>Mật khẩu: *</b></label>
                                <input type="text" placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.last_input}>
                        <label ><b>Dịch vụ sử dụng: *</b></label>
                        <input type="text" placeholder="Nhập dịch vụ sử dụng" onChange={(e) => setService(e.target.value)} />
                    </div>
                    <a>* Là trường thông tin bắt buộc</a>
                </div>
                <div className={styles.device_footer}>
                    <button type="submit" className="btn1">Hủy bỏ</button>
                    <button type="submit" className="btn">Thêm thiết bị</button>  
                </div>

            </form>
        </div>
        
    </>
  );
}

export default AddDevice;
