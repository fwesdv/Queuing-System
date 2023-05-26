import styles from  './nw_Password.module.css'
import { useState } from "react";
import VisibilityOffIcon  from '@mui/icons-material/VisibilityOff';
import VisibilityIcon  from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form';

const Login: React.FC= ()=>{


    const [showPassOld, setShowPassOld] = useState(false);
    const [showPassNew, setShowPassNew] = useState(false);
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
        <div className={styles.login}>
        <form action="" onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.login_main}>
                
                    <div className={styles.menu_logo}>
                        <div ></div>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor="username"><b>Mật khẩu</b></label>
                        <div className={styles.gird_input}>
                            <input className={styles.input} id="passwordOld"  type={showPassOld ? 'text' : 'password'}
                            placeholder="Enter Password" {...register('passwordOld', { required: true })}  />
                            <div className={styles.eye}
                                onClick={() => setShowPassOld(!showPassOld)} >
                                {showPassOld ? <VisibilityIcon /> :<VisibilityOffIcon /> }
                            </div>
                        </div>
                        {errors.username && <p className='require_error'>*Chưa nhập user name</p>}
                        
                        <label htmlFor="psw"><b>Nhập lại mật khẩu </b></label>
                        <div className={styles.gird_input}>
                            <input className={styles.input} id="passwordNew"  type={showPassNew ? 'text' : 'password'}
                            placeholder="Enter Password" {...register('passwordNew', { required: true })}  />
                            <div className={styles.eye}
                                onClick={() => setShowPassNew(!showPassNew)}>
                                {showPassNew ? <VisibilityIcon /> :<VisibilityOffIcon /> }
                            </div>
                        </div>
                        {errors.password && <p className='require_error'>*Chưa nhập mật khẩu</p>}
                        
                    </div>
                    <button type="submit" className={styles.btn}>Xác nhận</button>
            </div>
            </form>
           
            <div className={styles.login_bg}>
                <div className={styles.login_bg_img}></div>
            </div>
        </div>
    </>
    )
}
export default Login
