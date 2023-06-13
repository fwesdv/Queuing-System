import VerticalMenu from '../../../component/verticalMenu/verticalMenu';
import styles from './role.module.css';
import { Column, useTable } from 'react-table';
import { DatePicker } from 'antd';
import ReactSelect from 'react-select';
import search from '../../../assets/icon/fi_search.png'
import add from '../../../assets/icon/add-square.png'
import { useState } from 'react';

// Định nghĩa kiểu dữ liệu của đối tượng
interface DataObject {
    tenVT :String;
    soND:String;
    moTa:String;
    link1:String;
  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'Tên vai trò',
        accessor: 'tenVT',
    },
    {
        Header: 'Số người dùng ',
        accessor: 'soND',
    },
    {
        Header: 'Mô tả',
        accessor: 'moTa' ,
    },
    {
        Header: '',
        accessor: 'link1' ,
    },
  ];
  
function Role() {
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
        { tenVT: 'Kế toán', soND: '4', moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu', link1: 'Cập nhật' },
        { tenVT: 'Kế toán', soND: '4', moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu', link1: 'Cập nhật' },
        { tenVT: 'Kế toán', soND: '4', moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu', link1: 'Cập nhật' },
        { tenVT: 'Kế toán', soND: '4', moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu', link1: 'Cập nhật' },
        { tenVT: 'Kế toán', soND: '4', moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu', link1: 'Cập nhật' },
        { tenVT: 'Kế toán', soND: '4', moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu', link1: 'Cập nhật' },


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
        <VerticalMenu content={'Quản lý vai trò'}></VerticalMenu>
        <div className={styles.title}>Danh sách vai trò</div>
        <a href='/addRole' className={styles.addButon}>
            <img src={add} alt="" />
            <p>Thêm <br /> vai trò</p>
        </a>
        <div className={styles.role}>
            <div className={styles.role_header}>
                <div className={styles.header_search}>
                    <div className={styles.label}>Từ khoá</div>
                    <input className={styles.item} />
                    <img src={search} alt="" />
                </div>
            </div>

            <div className={styles.role_body}>
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
            <div className={styles.role_footer}>
                <b>1  2  3  4  5  ...  10</b>
            </div>
        </div>
    </>
  );
}

export default Role;
