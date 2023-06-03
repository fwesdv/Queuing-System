import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './newNumber.module.css';
import ReactSelect from 'react-select';
  
function NewNumber() {

      const options1 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'connected', label: 'Khám sản - Phụ khoa' },
        { value: 'disconnected', label: 'Khám răng hàm mặt' },
        { value: 'disconnected', label: 'Khám tai mũi họng' },
      ]

            
      
  return (
    <>
        <VerticalMenu content={'Danh sách cấp số'}></VerticalMenu>
        <div className={styles.title}>Quản lý cấp số</div>

        <div className={styles.newNumber}>
           <div className={styles.body}>
                <div className={styles.body_title}>CẤP SỐ MỚI</div>
                <div className={styles.header_group}>
                        <div className={styles.label}>Dịch vụ khách hàng lựa chọn</div>
                        <ReactSelect className={styles.item} options={options1} />
                </div>
                <div className={styles.footer}>
                    <button type="submit" className="btn1">Hủy bỏ</button>
                    <button type="submit" className="btn">Thêm thiết bị</button>  
                </div>
           </div>
        </div>
    </>
  );
}

export default NewNumber;
