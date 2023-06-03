import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './detailQN.module.css';
import back from '../../assets/icon/back-square.png'
  
function DetailDevice() {

      
  return (
    <>
        <VerticalMenu content={'Chi tiết thiết bị'}></VerticalMenu>
        <div className={styles.title}>Quản lý cấp số</div>
        <div className={styles.addButon}>
            <img src={back} alt="" />
            <p>Quay lại</p>
        </div>
        <div className={styles.detailDevice}>
            <div>
                <div className={styles.body_title}>Thông tin cấp số</div>
                <div className={styles.body_col}>
                        <div >
                            <div className={styles.body_row}>
                                <b >Họ tên: </b>
                                <a>Nguyễn Thị Dung</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Tên dịch vụ:    </b>
                                <a>Khám tim mạch</a>
                            </div>                     
                            <div className={styles.body_row}>
                                <b >Số thứ tự:</b>
                                <a>2001201</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Thời gian cấp:</b>
                                <a>14:35 - 07/11/2021</a>
                            </div>                            
                            <div className={styles.body_row}>
                                <b >Hạn sử dụng:</b>
                                <a>18:00 - 07/11/2021</a>
                            </div>
                        </div>
                        <div >
                            <div className={styles.body_row}>
                                <b >Nguồn cấp:</b>
                                <a>Kiosk</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Trạng thái:</b>
                                <a>Đang chờ</a>
                            </div>                     
                            <div className={styles.body_row}>
                                <b >Số điện thoại:</b>
                                <a>0948523623</a>
                            </div>
                            <div className={styles.body_row}>
                                <b >Địa chỉ Email:</b>
                                <a>nguyendung@gmail.com</a>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
        
    </>
  );
}

export default DetailDevice;
