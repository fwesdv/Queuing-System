import VerticalMenu from '../../../component/verticalMenu/verticalMenu';
import styles from './account.module.css';
import { Column, useTable } from 'react-table';
import { DatePicker } from 'antd';
import ReactSelect from 'react-select';
import search from '../../../assets/icon/fi_search.png'
import add from '../../../assets/icon/add-square.png'
import arrow from '../../../assets/icon/arrow-right.png'
import { useState } from 'react';

// Định nghĩa kiểu dữ liệu của đối tượng
interface DataObject {
    tenDN :String;
    hoTen:String;
    SDT:String;
    email:String;
    link1:String;
    trangThaiHD:String;
    vaiTro:String;
  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'Tên đăng nhập',
        accessor: 'tenDN',
    },
    {
        Header: 'Họ tên ',
        accessor: 'hoTen',
    },
    {
        Header: 'Số điện thoại',
        accessor: 'SDT' ,
    },
    {
        Header: 'Email',
        accessor: 'email' ,
    },
    {
        Header: 'Vai trò',
        accessor: 'vaiTro' ,
    },   
    {
        Header: 'Trạng thái hoạt động',
        accessor: 'trangThaiHD' ,
    },
    {
        Header: '',
        accessor: 'link1' ,
    },
  ];
  
function Account() {
    const [StartDate, setStartDate] =useState(new Date());
    function onChangeDate(value:any){
        setStartDate(value)
    }
    const options1 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'activate', label: 'Hoạt động' },
        { value: 'shutDown', label: 'Ngưng hoạt động' }
      ]
      const data = [
        { tenDN: 'tuyetnguyen@12', hoTen: 'Nguyen Văn A', SDT: '0919256712', email: 'tuyetnguyen123@gmail.com', vaiTro: 'Kế toán', trangThaiHD: 'Hoạt động', link1: 'Cập nhật' },
        { tenDN: 'tuyetnguyen@12', hoTen: 'Nguyen Văn A', SDT: '0919256712', email: 'tuyetnguyen123@gmail.com', vaiTro: 'Kế toán', trangThaiHD: 'Hoạt động', link1: 'Cập nhật' },
        { tenDN: 'tuyetnguyen@12', hoTen: 'Nguyen Văn A', SDT: '0919256712', email: 'tuyetnguyen123@gmail.com', vaiTro: 'Kế toán', trangThaiHD: 'Hoạt động', link1: 'Cập nhật' },
        { tenDN: 'tuyetnguyen@12', hoTen: 'Nguyen Văn A', SDT: '0919256712', email: 'tuyetnguyen123@gmail.com', vaiTro: 'Kế toán', trangThaiHD: 'Hoạt động', link1: 'Cập nhật' },
        { tenDN: 'tuyetnguyen@12', hoTen: 'Nguyen Văn A', SDT: '0919256712', email: 'tuyetnguyen123@gmail.com', vaiTro: 'Kế toán', trangThaiHD: 'Hoạt động', link1: 'Cập nhật' },
        { tenDN: 'tuyetnguyen@12', hoTen: 'Nguyen Văn A', SDT: '0919256712', email: 'tuyetnguyen123@gmail.com', vaiTro: 'Kế toán', trangThaiHD: 'Hoạt động', link1: 'Cập nhật' },
        { tenDN: 'tuyetnguyen@12', hoTen: 'Nguyen Văn A', SDT: '0919256712', email: 'tuyetnguyen123@gmail.com', vaiTro: 'Kế toán', trangThaiHD: 'Hoạt động', link1: 'Cập nhật' },

      ];
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data });
            
      
  return (
    <>
        <VerticalMenu content={'Quản lý tài khoản'}></VerticalMenu>
        <div className={styles.title}>Danh sách tài khoản</div>
        <a href='/addAccount' className={styles.addButon}>
            <img src={add} alt="" />
            <p>Thêm <br /> dịch vụ</p>
        </a>
        <div className={styles.account}>
            <div className={styles.account_header}>
                <div className={styles.filter}>
                    <div className={styles.header_group}>
                        <div className={styles.label}>Trạng thái hoạt động</div>
                        <ReactSelect className={styles.item} options={options1} />

                    </div>
                </div>
                
                <div className={styles.header_search}>
                    <div className={styles.label}>Từ khoá</div>
                    <input className={styles.item} />
                    <img src={search} alt="" />
                </div>
            </div>

            <div className={styles.account_body}>
                <div className={styles.body_content}>
                    <table {...getTableProps()} className={styles.table}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                            </tr>
                        );
                        })}
                    </tbody>
                    </table> 
                </div>
                
            </div>
            <div className={styles.account_footer}>
                <b>1  2  3  4  5  ...  10</b>
            </div>
        </div>
    </>
  );
}

export default Account;
