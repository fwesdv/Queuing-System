import VerticalMenu from '../../../component/verticalMenu/verticalMenu';
import styles from './userLogs.module.css';
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
    thơiGianTD:String;
    IPThucHien:String;
    thaoTacTH:String;
  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'Tên đăng nhập',
        accessor: 'tenDN',
    },
    {
        Header: 'Thời gian tác động ',
        accessor: 'thơiGianTD',
    },
    {
        Header: 'IP thực hiện',
        accessor: 'IPThucHien' ,
    },
    {
        Header: 'Thao tác thực hiện',
        accessor: 'thaoTacTH' ,
    }
  ];
  
function UserLogs() {
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
        { tenDN: 'tuyetnguyen@12', thơiGianTD: '01/12/2021 15:12:17', IPThucHien: '192.168.3.1', thaoTacTH: 'Cập nhật thông tin dịch vụ DV_01' },
        { tenDN: 'tuyetnguyen@12', thơiGianTD: '01/12/2021 15:12:17', IPThucHien: '192.168.3.1', thaoTacTH: 'Cập nhật thông tin dịch vụ DV_01' },
        { tenDN: 'tuyetnguyen@12', thơiGianTD: '01/12/2021 15:12:17', IPThucHien: '192.168.3.1', thaoTacTH: 'Cập nhật thông tin dịch vụ DV_01' },
        { tenDN: 'tuyetnguyen@12', thơiGianTD: '01/12/2021 15:12:17', IPThucHien: '192.168.3.1', thaoTacTH: 'Cập nhật thông tin dịch vụ DV_01' },
        { tenDN: 'tuyetnguyen@12', thơiGianTD: '01/12/2021 15:12:17', IPThucHien: '192.168.3.1', thaoTacTH: 'Cập nhật thông tin dịch vụ DV_01' },
        { tenDN: 'tuyetnguyen@12', thơiGianTD: '01/12/2021 15:12:17', IPThucHien: '192.168.3.1', thaoTacTH: 'Cập nhật thông tin dịch vụ DV_01' },
       
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
        <VerticalMenu content={'Nhật ký hoạt động'}></VerticalMenu>

        <div className={styles.userLogs}>
            <div className={styles.userLogs_header}>
                <div className={styles.filter}>
                    <div className={styles.header_group}>
                        <div className={styles.label}>Chọn thời gian</div>
                        <div className={styles.item_date}> 
                            <DatePicker className={styles.dateStart} onChange={onChangeDate} format="DD/MM/YYYY" />
                            <img src={arrow} alt="" />
                            <DatePicker className={styles.dateEnd} onChange={onChangeDate} format="DD/MM/YYYY" />
                        </div>
                       
                    </div>
                </div>
                
                <div className={styles.header_search}>
                    <div className={styles.label}>Từ khoá</div>
                    <input className={styles.item} />
                    <img src={search} alt="" />
                </div>
            </div>

            <div className={styles.userLogs_body}>
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
            <div className={styles.userLogs_footer}>
                <b>1  2  3  4  5  ...  10</b>
            </div>
        </div>
    </>
  );
}

export default UserLogs;
