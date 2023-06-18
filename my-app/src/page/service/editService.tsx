import { useNavigate, useParams } from 'react-router-dom';
import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './editService.module.css';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useState } from 'react';

  
function EditService() {

    const  serviceId  =useParams().id;
    const serviceid= String(serviceId)
  const navigate =useNavigate();
  const newservice =async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try {
          const db = getFirestore();
          const docRef = doc(db, 'service', serviceid);
          const updatedata = {
            Name,
            describe,
            MaDV,
            Prefix,
            Reset,
            Surfix,
            autoIncrease,
          };
          await setDoc(docRef, updatedata, { merge: true });
        } catch (error) {
          console.error('Error fetching service:', error);
        }
      console.log("thanh cong");
      navigate(`/service`)
  };


  const [MaDV, setMaDV] = useState('');
  const [describe, setDescribe] = useState('');
  const [Name, setName] = useState('');
  const [Prefix,setPrefix ] = useState(false);
  const [Surfix, setSurfix] = useState(false);
  const [Reset, setReset] = useState(false);
  const [autoIncrease, setAutoIncrease] = useState(false);
  return (
    <>
        <VerticalMenu content={'Cập nhật'}></VerticalMenu>
        <div className={styles.title}>Quản lý dịch vụ</div>
        <div >
            <form className={styles.editService} onSubmit={(e)=>newservice(e)}>
            <div className={styles.editService_body}>
                <div className={styles.body_title}>Thông tin dịch vụ</div>

                <div className={styles.body_col}>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mã dịch vụ: *</b></label>
                            <input type="text" placeholder="Nhập mã "  onChange={(e) => setMaDV(e.target.value)}/>
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên dịch vụ: *</b></label>
                            <input type="text" placeholder="Nhập tên " onChange={(e) => setName(e.target.value)} />
                        </div>                     

                    </div>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mô tả: *</b></label>
                            <textarea placeholder="Mô tả dịch vụ"  onChange={(e) => setDescribe(e.target.value)}/>
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
                <button type="submit" className="btn">Cập nhật</button>  
            </div>
            </form>
        </div>
        
    </>
  );
}

export default EditService;
