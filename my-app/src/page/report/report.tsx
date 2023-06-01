import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './report.module.css';
import { Column, useTable } from 'react-table';
import { DatePicker } from 'antd';
import ReactSelect from 'react-select';

import download from '../../assets/icon/document-download.png'
import arrow from '../../assets/icon/arrow-right.png'
import { useState } from 'react';

// Định nghĩa kiểu dữ liệu của đối tượng
interface DataObject {
    STT :String;
    tenDV:String;
    thoiGianCap:String;
    link1:String;
    tinhTrang:String;
  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'STT',
        accessor: 'STT',
    },
    {
        Header: 'Tên dịch vụ ',
        accessor: 'tenDV' ,
    },
    {
        Header: 'Thời gian cấp',
        accessor: 'thoiGianCap' ,
    },
    {
        Header: 'Tình trạng',
        accessor: 'tinhTrang' ,
    },
    {
        Header: '',
        accessor: 'link1' ,
    },
  ];
  
function Report() {
    const [StartDate, setStartDate] =useState(new Date());
    function onChangeDate(value:any){
        setStartDate(value)
    }
    const options2 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'activate', label: 'Đang chờ' },
        { value: 'shutDown', label: 'Đã sử dụng' },
        { value: 'shutDown', label: 'Bỏ qua' },
      ]
      const options3 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'activate', label: 'Kiosk' },
        { value: 'shutDown', label: 'Hệ thống' },
      ]
      const options1 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'connected', label: 'Khám sản - Phụ khoa' },
        { value: 'disconnected', label: 'Khám răng hàm mặt' },
        { value: 'disconnected', label: 'Khám tai mũi họng' },
      ]
      const data = [
        { STT: '2010001', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', link1: 'Chi tiết', tinhTrang: 'Đang chờ' },
        { STT: '2010001', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', link1: 'Chi tiết', tinhTrang: 'Đang chờ' },
        { STT: '2010001', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', link1: 'Chi tiết', tinhTrang: 'Đang chờ' },
        { STT: '2010001', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', link1: 'Chi tiết', tinhTrang: 'Đang chờ' },
        { STT: '2010001', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', link1: 'Chi tiết', tinhTrang: 'Đang chờ' },
        { STT: '2010001', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', link1: 'Chi tiết', tinhTrang: 'Đang chờ' },
    
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
        <VerticalMenu content={'Lập báo cáo'}></VerticalMenu>
        
        <div className={styles.addButon}>
            <img src={download} alt="" />
            <p>Tải về</p>
        </div>
        <div className={styles.report}>
            <div className={styles.report_header}>
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
                

            </div>

            <div className={styles.report_body}>
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
            <div className={styles.report_footer}>
                <b>1  2  3  4  5  ...  10</b>
            </div>
        </div>
    </>
  );
}

export default Report;
