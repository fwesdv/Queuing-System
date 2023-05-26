import styles from  './login.module.css'
import { useState } from "react";
import VisibilityOffIcon  from '@mui/icons-material/VisibilityOff';
import VisibilityIcon  from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form';

interface istate{
    user:{
        username: String;
        password: String;
    }
}
const Login: React.FC= ()=>{

    // const [state,steState]=useState<istate>({
    //     user :{
    //         username:'',
    //         password:''
    //     }
    // })
    // const handlechange=(event:React.ChangeEvent<HTMLInputElement>):void=>{
    //     event.preventDefault();
    //     steState({
    //         user :{
    //             ...state.user,
    //             [event.target.id]: event.target.value
    //         }
    //     })
    // }

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

        <div className={styles.login}>
        <form action="" onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.login_main}>
                
                    <div className={styles.menu_logo}>
                        <div ></div>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor="username"><b>Tên đăng nhập *</b></label>
                        <input className={styles.input} id="username"  type="text" placeholder="Enter Username"  {...register('username', { required: true })} />
                        {errors.username && <p className='require_error'>*Chưa nhập user name</p>}
                        <label htmlFor="psw"><b>Mật khẩu *</b></label>
                        <div className={styles.gird_input}>
                            <input className={styles.input} id="password"  type={showPass ? 'text' : 'password'}
                            placeholder="Enter Password" {...register('password', { required: true })}  />
                            <div className={styles.eye}
                                onClick={() => setShowPass(!showPass)}
                                style={{
                                    position: 'absolute',
                                    top: '23px',
                                    right: '10px',
                                }}>
                                {showPass ? <VisibilityIcon /> :<VisibilityOffIcon /> }
                            </div>
                        </div>
                        {errors.password && <p className='require_error'>*Chưa nhập mật khẩu</p>}
                        <a href="/fg_Password" className={styles.fg_password}>Quên mật khẩu?</a>
                    </div>
                    <button type="submit" className={styles.btn}>Đăng nhập</button>
            </div>
            </form>
            {/* <div className={styles."><p className={styles.">{JSON.stringify(state.user)}</p></div> */}
            <div className={styles.login_bg}>
                <div className={styles.login_bg_img}></div>
                <div className={styles.login_bg_text}>
                    Hệ thống
                    <p >QUẢN LÝ XẾP HÀNG</p>
                </div>
            </div>
        </div>
    </>
    )
}
export default Login
