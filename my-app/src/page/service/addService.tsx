import { useNavigate } from 'react-router-dom';
import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './addService.module.css';
import {service} from '../../type/Service';
import { addDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { serviceCollection } from '../../lb/Data';
import { useEffect, useState } from 'react';
  
function AddService(): JSX.Element {

    const addNewService =async(ServiceData: service)=>{ 
        try {
            const newService = await addDoc(serviceCollection, { ...ServiceData });
            const documentId = newService.id;
            return documentId;
          } catch (error) {
            console.error('Error adding new Service:', error);
          }
    }

    const navigate =useNavigate();
    const newService =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const ServiceDocumentId = await addNewService({
            Name,
            describe,
            MaDV,
            Prefix,
            Reset,
            Surfix,
            Active: "Đang Hoạt Động",
            autoIncrease,

        });
        console.log("thanh cong them ve moi", ServiceDocumentId );
        setDocumentId(String(ServiceDocumentId));

        navigate(`/service`)
    };
    const [documentId, setDocumentId] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const db = getFirestore();
            const docRef = doc(db, 'service', documentId);
            const updatedata = {
              ID: documentId,
            };
            await setDoc(docRef, updatedata, { merge: true });
            console.error('documentId', documentId);
          } catch (error) {
            console.error('Error fetching Service:', error);
          }
        };
      
        fetchData();
      }, [documentId]);

    const [MaDV, setMaDV] = useState('');
    const [describe, setDescribe] = useState('');
    const [Name, setName] = useState('');
    const [Prefix,setPrefix ] = useState(false);
    const [Surfix, setSurfix] = useState(false);
    const [Reset, setReset] = useState(false);
    const [autoIncrease, setAutoIncrease] = useState(false);

  return (
    <>
        <VerticalMenu content={'Thêm dịch vụ'}></VerticalMenu>
        <div className={styles.title}>Quản lý dịch vụ</div>
        <div >
            <form className={styles.addService} onSubmit={(e)=>newService(e)}>
            <div className={styles.addService_body}>
                <div className={styles.body_title}>Thông tin dịch vụ</div>

                <div className={styles.body_col}>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mã dịch vụ: *</b></label>
                            <input type="text" placeholder="Nhập mã " onChange={(e) => setMaDV(e.target.value)}/>
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên dịch vụ: *</b></label>
                            <input type="text" placeholder="Nhập tên " onChange={(e) => setDescribe(e.target.value)} />
                        </div>                     

                    </div>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mô tả: *</b></label>
                            <textarea placeholder="Mô tả dịch vụ" onChange={(e) => setName(e.target.value)}/>
                        </div>
                    
                    </div>
                </div>
                <div className={styles.body_buttom}>
                    <b className={styles.body_title}>Quy tắc cấp số</b>
                    <div className={styles.checkbox}>
                        <div> <input type="checkbox" className={styles.type_checkbox} onChange={(e) => setAutoIncrease(e.target.checked)}/> 
                            <span>Tăng tự động từ:</span>
                            <input type="text" className={styles.type_input}  placeholder="0001" />
                            <span className={styles.text} >đến</span>
                            <input type="text" className={styles.type_input} placeholder="9999" />
                        </div>

                        <div className=""><input type="checkbox"  className={styles.type_checkbox} onChange={(e) => setPrefix(e.target.checked)}/> 
                            <span>Prefix:</span>
                            <input type="text" className={styles.type_input} placeholder="0001" />
                            </div>

                        <div className=""><input type="checkbox"  className={styles.type_checkbox} onChange={(e) => setSurfix(e.target.checked)}/> 
                            <span>Surfix:</span>
                            <input type="text" className={styles.type_input} placeholder="0001" />
                            </div>

                        <div className=""><input type="checkbox"  className={styles.type_checkbox} onChange={(e) => setReset(e.target.checked)}/> 
                            <span>Reset mỗi ngày</span>
                            </div>
                    </div>
                    
                </div>
                <a>* Là trường thông tin bắt buộc</a>
            </div>
            <div className={styles.service_footer}>
                <button type="submit" className="btn1">Hủy bỏ</button>
                <button type="submit" className="btn">Thêm dịch vụ</button>  
            </div>
            </form> 
        </div>
        
    </>
  );
}

export default AddService;
