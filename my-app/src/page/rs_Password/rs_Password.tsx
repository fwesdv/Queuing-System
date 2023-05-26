import "./rs_Password.css"
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
const Fg_Password: React.FC= ()=>{

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
        <div className="login">
        <form action="" onSubmit={handleSubmit(onSubmit)} >
            <div className="login_main">
                
                    <div className="menu-logo">
                        <div className=""></div>
                    </div>
                    <div className="container">
                        <p > Đặt lại mật khẩu</p>
                        <label htmlFor="username"><p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p></label>
                        <input className="input" id="username"  type="text" placeholder="Enter Username"  {...register('username', { required: true })} />
                        {errors.username && <p className='require_error'>*Chưa nhập user name</p>}
                    </div>
                    <div className="gr_btn">
                        <button type="submit" className="btn1">Hủy</button>
                        <button type="submit" className="btn">Đăng nhập</button>
                    </div>        
            </div>
            </form>
            {/* <div className=""><p className="">{JSON.stringify(state.user)}</p></div> */}
            <div className="login_bg">
                <div className="login_bg_img"></div>
            </div>
        </div>
    </>
    )
}
export default Fg_Password
