import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './updateDevice.module.css';
import ReactSelect from 'react-select';
  
function Device() {
    const options1 = [
        { value: 'all', label: 'Kiosk' },
        { value: 'activate', label: 'Display counter' },
      ]
      
  return (
    <>
        <VerticalMenu content={'Cập nhật thiết bị'}></VerticalMenu>
        <div className={styles.title}>Quản lý thiết bị</div>
        <div className={styles.updateDevice }>
            <div className={styles.updateDevice_body}>
                <div className={styles.body_title}>Quản lý thiết bị</div>

                <div className={styles.body_col}>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mã thiết bị: *</b></label>
                            <input type="text" value="KIO_01" />
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên thiết bị: *</b></label>
                            <input type="text" value="Kiosk" />
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Địa chỉ IP: *</b></label>
                            <input type="text" value="128.172.308" />
                        </div>
                    </div>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Loại thiết bị: *</b></label>
                            <ReactSelect className={styles.input} options={options1} />   
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên đăng nhập: *</b></label>
                            <input type="text" value="Linhkyo011" />
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mật khẩu: *</b></label>
                            <input type="text" value="CMS" />
                        </div>
                    </div>
                </div>
                <div className={styles.last_input}>
                    <label htmlFor="username"><b>Dịch vụ sử dụng: *</b></label>
                    <input type="text" value="Khám tim mạch" />
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
