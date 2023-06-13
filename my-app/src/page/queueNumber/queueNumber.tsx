import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './queueNumber.module.css';
import { Column, useTable } from 'react-table';
import { DatePicker } from 'antd';
import ReactSelect from 'react-select';
import search from '../../assets/icon/fi_search.png'
import add from '../../assets/icon/add-square.png'
import arrow from '../../assets/icon/arrow-right.png'
import { useState } from 'react';

// Định nghĩa kiểu dữ liệu của đối tượng
interface DataObject {
    STT :String;
    tenDV:String;
    tenKH:String;
    thoiGianCap:String;
    link1:String;
    HD:String;
    trangThai:String;
    nguonCap:String;
  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'STT',
        accessor: 'STT',
    },
    {
        Header: 'Tên khách hàng ',
        accessor: 'tenKH',
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
        Header: 'Hạn sử dụng',
        accessor: 'HD' ,
    },
    {
        Header: 'Trạng thái',
        accessor: 'trangThai' ,
    },
    {
        Header: 'Nguồn cấp',
        accessor: 'nguonCap' ,
    },
    {
        Header: '',
        accessor: 'link1' ,
    },
  ];
  
function QueueNumber() {
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
        { STT: '2010001', tenKH: 'Lê Huỳnh Ái Vân', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', HD: '14:35 - 12/11/2021', link1: 'Chi tiết', trangThai: 'Đang chờ', nguonCap: 'Kiosk'  },
        { STT: '2010001', tenKH: 'Lê Huỳnh Ái Vân', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', HD: '14:35 - 12/11/2021', link1: 'Chi tiết', trangThai: 'Đang chờ', nguonCap: 'Kiosk'  },
        { STT: '2010001', tenKH: 'Lê Huỳnh Ái Vân', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', HD: '14:35 - 12/11/2021', link1: 'Chi tiết', trangThai: 'Đang chờ', nguonCap: 'Kiosk'  },
        { STT: '2010001', tenKH: 'Lê Huỳnh Ái Vân', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', HD: '14:35 - 12/11/2021', link1: 'Chi tiết', trangThai: 'Đang chờ', nguonCap: 'Kiosk'  },
        { STT: '2010001', tenKH: 'Lê Huỳnh Ái Vân', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', HD: '14:35 - 12/11/2021', link1: 'Chi tiết', trangThai: 'Đang chờ', nguonCap: 'Kiosk'  },
        { STT: '2010001', tenKH: 'Lê Huỳnh Ái Vân', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', HD: '14:35 - 12/11/2021', link1: 'Chi tiết', trangThai: 'Đang chờ', nguonCap: 'Kiosk'  },
        { STT: '2010001', tenKH: 'Lê Huỳnh Ái Vân', tenDV: 'Khám tim mạch', thoiGianCap: '14:35 - 07/11/2021', HD: '14:35 - 12/11/2021', link1: 'Chi tiết', trangThai: 'Đang chờ', nguonCap: 'Kiosk'  },


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
        <VerticalMenu content={'Danh sách cấp số'}></VerticalMenu>
        <div className={styles.title}>Quản lý cấp số</div>
        <a href='/newNumber' className={styles.addButon}>
            <img src={add} alt="" />
            <p>Thêm <br /> số mới</p>
        </a>
        <div className={styles.queueNumber}>
            <div className={styles.queueNumber_header}>
                <div className={styles.filter}>
                    <div className={styles.header_group}>
                        <div className={styles.label}>Tên dịch vụ</div>
                        <ReactSelect className={styles.item} options={options1} />
                    </div>
                    <div className={styles.header_group}>
                        <div className={styles.label}>Tình trạng</div>
                        <ReactSelect className={styles.item} options={options2} />
                    </div>                    
                    <div className={styles.header_group}>
                        <div className={styles.label}>Nguồn cấp</div>
                        <ReactSelect className={styles.item} options={options3} />
                    </div>

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

            <div className={styles.queueNumber_body}>
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
            <div className={styles.queueNumber_footer}>
                <b>1  2  3  4  5  ...  10</b>
            </div>
        </div>
    </>
  );
}

export default QueueNumber;
