import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './addService.module.css';

  
function AddService() {

      
  return (
    <>
        <VerticalMenu content={'Thêm dịch vụ'}></VerticalMenu>
        <div className={styles.title}>Quản lý dịch vụ</div>
        <div className={styles.addService}>
            <div className={styles.addService_body}>
                <div className={styles.body_title}>Thông tin dịch vụ</div>

                <div className={styles.body_col}>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mã dịch vụ: *</b></label>
                            <input type="text" placeholder="Nhập mã " />
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên dịch vụ: *</b></label>
                            <input type="text" placeholder="Nhập tên " />
                        </div>                     

                    </div>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Loại thiết bị: *</b></label>
                            <textarea placeholder="Chọn loại thiết bị" />
                        </div>
                    
                    </div>
                </div>
                <div className={styles.body_buttom}>
                    <b className={styles.body_title}>Quy tắc cấp số</b>
                    <div className={styles.checkbox}>
                        <div> <input type="checkbox" className={styles.type_checkbox}/> 
                            <span>Tăng tự động từ:</span>
                            <input type="text" className={styles.type_input}  placeholder="0001" />
                            <span className={styles.text} >đến</span>
                            <input type="text" className={styles.type_input} placeholder="9999" />
                        </div>

                        <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                            <span>Prefix:</span>
                            <input type="text" className={styles.type_input} placeholder="0001" />
                            </div>

                        <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                            <span>Surfix:</span>
                            <input type="text" className={styles.type_input} placeholder="0001" />
                            </div>

                        <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                            <span>Reset mỗi ngày</span>
                            </div>
                    </div>
                    
                </div>
                <a>* Là trường thông tin bắt buộc</a>
            </div>
            <div className={styles.service_footer}>
                <button type="submit" className="btn1">Hủy bỏ</button>
                <button type="submit" className="btn">Thêm thiết bị</button>  
            </div>
        </div>
        
    </>
  );
}

export default AddService;
