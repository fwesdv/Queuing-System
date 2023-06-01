import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './addDevice.module.css';

  
function Device() {

      
  return (
    <>
        <VerticalMenu content={'Thêm thiết bị'}></VerticalMenu>
        <div className={styles.title}>Quản lý thiết bị</div>
        <div className={styles.addDevice}>
            <div className={styles.addDevice_body}>
                <div className={styles.body_title}>Quản lý thiết bị</div>

                <div className={styles.body_col}>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mã thiết bị: *</b></label>
                            <input type="text" placeholder="Nhập mã thiết bị" />
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên thiết bị: *</b></label>
                            <input type="text" placeholder="Nhập tên thiết bị" />
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Địa chỉ IP: *</b></label>
                            <input type="text" placeholder="Nhập địa chỉ IP" />
                        </div>
                    </div>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Loại thiết bị: *</b></label>
                            <input type="text" placeholder="Chọn loại thiết bị" />
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên đăng nhập: *</b></label>
                            <input type="text" placeholder="Nhập tài khoản" />
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mật khẩu: *</b></label>
                            <input type="text" placeholder="Nhập mật khẩu" />
                        </div>
                    </div>
                </div>
                <div className={styles.last_input}>
                    <label htmlFor="username"><b>Dịch vụ sử dụng: *</b></label>
                    <input type="text" placeholder="Nhập dịch vụ sử dụng" />
                </div>
                <a>* Là trường thông tin bắt buộc</a>
            </div>
            <div className={styles.device_footer}>
                <button type="submit" className="btn1">Hủy bỏ</button>
                <button type="submit" className="btn">Thêm thiết bị</button>  
            </div>
        </div>
        
    </>
  );
}

export default Device;
