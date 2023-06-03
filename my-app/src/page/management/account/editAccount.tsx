import { useState } from 'react';
import VerticalMenu from '../../../component/verticalMenu/verticalMenu';
import styles from './editAccount.module.css';
import ReactSelect from 'react-select';
import VisibilityIcon  from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form';
import VisibilityOffIcon  from '@mui/icons-material/VisibilityOff';
function EditAccount() {
    const options1 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'activate', label: 'Hoạt động' },
        { value: 'shutDown', label: 'Ngưng hoạt động' }
      ]
    const options2 = [
        { value: 'activate', label: 'Kế toán' },
        { value: 'shutDown', label: 'Quản lý' },
        { value: 'shutDown', label: 'Admin' },
      ]
      const [showPassRe_enter, setShowPassRe_enter] = useState(false);
      const [showPass, setShowPass] = useState(false);
      const onSubmit  = (e:any) => {
          e.preventDefault();
  
      };
      const {
          register,
          handleSubmit,
          formState: { errors },
      } = useForm();
  return (
    <>
        <VerticalMenu content={'Thêm tài khoản'}></VerticalMenu>
        <div className={styles.title}>Quản lý tài khoản</div>
        <div className={styles.editAccount}>
            <div className={styles.editAccount_body}>
                <div className={styles.body_title}>Thông tin tài khoản</div>
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.body_col}>
                    
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Họ tên *</b></label>
                            <input type="text" placeholder="Nguyen Van A" />
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Số điện thoại *</b></label>
                            <input type="text" placeholder="0902345678" />
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Email *</b></label>
                            <input type="text" placeholder="NguyenA154@gmail.com" />
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Vai trò *</b></label>
                            <ReactSelect className={styles.item} options={options1} />
                        </div>
                    </div>
                    <div >
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tên đăng nhập: *</b></label>
                            <input type="text" placeholder="tuyetnguyen123" />
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Mật khẩu: *</b></label>
                            <div className={styles.gird_input}>
                            <input className={styles.input}   type={showPass ? 'text' : 'password'}
                            placeholder="Enter Password" {...register('password', { required: true })}  />
                            <div className={styles.eye}
                                onClick={() => setShowPass(!showPass)}>
                                {showPass ? <VisibilityIcon /> :<VisibilityOffIcon /> }
                            </div>
                        </div>
                        </div>                     
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Nhập lại mật khẩu: *</b></label>
                            <div className={styles.gird_input}>
                            <input className={styles.input} type={showPassRe_enter? 'text' : 'password'}
                            placeholder="Enter Password" {...register('passwordRe_enter', { required: true })}  />
                            <div className={styles.eye}
                                onClick={() => setShowPassRe_enter(!showPassRe_enter)}>
                                {showPassRe_enter? <VisibilityIcon /> :<VisibilityOffIcon /> }
                            </div>
                        </div>
                        </div>
                        <div className={styles.body_row}>
                            <label htmlFor="username"><b>Tình trạng *</b></label>
                            <ReactSelect className={styles.item} options={options2} />
                        </div>
                    </div>
                    </div>
                </form>
                <a>* Là trường thông tin bắt buộc</a>
            </div>
            <div className={styles.editAccount_footer}>
                <button type="submit" className="btn1">Hủy bỏ</button>
                <button type="submit" className="btn">Thêm thiết bị</button>  
            </div>
        </div>
        
    </>
  );
}

export default EditAccount;
