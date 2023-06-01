import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './detailDevice.module.css';
import Edit from '../../assets/icon/Edit Square.png'
  
function DetailDevice() {

      
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
                                <a>KIO_01</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Tên thiết bị: </b>
                                <a>Kiosk</a>
                            </div>                     
                            <div className={styles.body_row}>
                                <b >Địa chỉ IP:</b>
                                <a>128.172.308</a>
                            </div>
                        </div>
                        <div >
                            <div className={styles.body_row}>
                                <b >Loại thiết bị: </b>
                                <a>Kiosk</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Tên đăng nhập: </b>
                                <a>Linhkyo011</a>
                            </div>                     
                            <div className={styles.body_row}>
                                <b >Mật khẩu:</b>
                                <a>CMS</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.last_input}>
                        <b ><b>Dịch vụ sử dụng: </b></b>
                        <a>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</a>
                    </div>
            </div>

        </div>
        
    </>
  );
}

export default DetailDevice;
