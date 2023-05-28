import VerticalMenu from "../../component/verticalMenu/verticalMenu";
import './inf_account.css'
function inf_account () {
 
    return (
      <>
        <VerticalMenu content={'Thông tin cá nhân'}></VerticalMenu>
        <div className="inf_account">
          <div className="img_acc">
            <div className="imgAndIcon">
              <div className="img">
                <div className="img_icon">
                  </div>
              </div>
              
            </div>
            <p>Lê Quỳnh Ái Vân</p>
          </div>
          <div className="form_1">
            <div className="labelAndInput">
              <label htmlFor="username"><b>Tên người dùng</b></label>
              <input type="text" placeholder="Lê Quỳnh Ái Vân" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="username"><b>Số điện thoại </b></label>
              <input type="text" placeholder="0767375921" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="username"><b>Email</b></label>
              <input type="text" placeholder="adminSSO1@domain.com" />
            </div>
          </div>
          <div className="form_2">
            <div className="labelAndInput">
                <label htmlFor="username"><b>Tên đăng nhập </b></label>
                <input type="text" placeholder="lequynhaivan01" />
              </div>
              <div className="labelAndInput">
                <label htmlFor="username"><b>Mật khẩu</b></label>
                <input type="text" placeholder="311940211" />
              </div>
              <div className="labelAndInput">
                <label htmlFor="username"><b>Vai trò</b></label>
                <input type="text" placeholder="Kế toán" />
              </div>
          </div>
        </div>
      </>
    )
}

export default inf_account