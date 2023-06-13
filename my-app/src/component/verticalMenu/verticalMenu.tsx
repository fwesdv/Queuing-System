import React, { PureComponent } from 'react'
import "././verticalMenu.css"
import Dashboard from '../../assets/icon/Dashboard.png'
import monitor from '../../assets/icon/monitor.png'
import DichVu from '../../assets/icon/DichVu.png'
import capSo from '../../assets/icon/capSo.png'
import baoCao from '../../assets/icon/baoCao.png'
import log_out from '../../assets/icon/fi_log-out.png'
import setting from '../../assets/icon/setting.png'
import moreVertical from '../../assets/icon/fi_more-vertical.png'
import bell from '../../assets/icon/bell.png'
import avata from '../../assets/avata.png'
import { useParams } from 'react-router-dom'

interface ipop{
    content: String
}
function VerticalMenu ({content}:ipop) {
    
    return (
    <>
      <div className="navBar">
        <div className="vertical-menu">
            <div className="menu-logo">
                <div className=""></div>
            </div>
            <div className="menu-main">
                <div className="">
                    <img src={Dashboard} alt="" />
                    <a href="/dashboard" >Dashboard</a>
                </div>
                <div className="">
                    <img src={monitor} alt="" />
                    <a href="/device">Thiết bị</a>
                </div>
                <div className="">
                    <img src={DichVu} alt="" />
                    <a href="/service">Dịch vụ</a>
                </div>
                <div className="">
                    <img src={capSo} alt="" />
                    <a href="/queueNumber">Cấp số</a>
                </div>
                <div className="">
                    <img src={baoCao} alt="" />
                    <a href="/report">Báo cáo</a>
                </div>

                <div className=" dropup">
                        <img src={setting} alt="" />
                        <a href="#">Cài đặt hệ thống</a>
                        <img src={moreVertical} alt=""className="dropbtn" />

                    <div className="dropup-content">
                        <a href="/role">Quản lý vai trò</a>
                        <a href="/account">Quản lý tài khoản</a>
                        <a href="/userLogs">Nhật ký người dùng</a>
                    </div>
                </div>

                <div className="">
                    <img src={log_out} alt="" />
                    <a href="#">Đăng xuất</a>
                </div> 
            </div>
        </div>
        <div className="topnav">
            <a href="#">{content}</a>
            <div className="information">
                <img src={bell} alt="" />
                <div className="information_text">
                    <img src={avata} alt="" />
                    <div className="">
                        <p >Xin chào</p>
                        <p>Lê Quỳnh Ái Vân</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
    )
}
export default VerticalMenu
