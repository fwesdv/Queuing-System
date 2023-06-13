import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './service.module.css';
import { Column, useTable } from 'react-table';
import { DatePicker } from 'antd';
import ReactSelect from 'react-select';
import search from '../../assets/icon/fi_search.png'
import add from '../../assets/icon/add-square.png'
import arrow from '../../assets/icon/arrow-right.png'
import { useState } from 'react';

// Định nghĩa kiểu dữ liệu của đối tượng
interface DataObject {
    maDV :String;
    tenDV:String;
    moTa:String;
    trangThaiHD:String;
    link1:String;
    link2:String;
  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'Mã dịch vụ',
        accessor: 'maDV',
    },
    {
        Header: 'Tên dịch vụ ',
        accessor: 'tenDV',
    },
    {
        Header: 'Mô tả',
        accessor: 'moTa' ,
    },
    {
        Header: 'Trạng thái hoạt động',
        accessor: 'trangThaiHD' ,
    },
    {
        Header: '',
        accessor: 'link1' ,
    },
    {
        Header: '',
        accessor: 'link2' ,
    },
  ];
  
function Service() {
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
        { maDV: 'KIO_01', tenDV: 'Kiosk', moTa: 'Mô tả dịch vụ 1', trangThaiHD: 'Ngưng hoạt động', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maDV: 'KIO_01', tenDV: 'Kiosk', moTa: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maDV: 'KIO_01', tenDV: 'Kiosk', moTa: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maDV: 'KIO_01', tenDV: 'Kiosk', moTa: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maDV: 'KIO_01', tenDV: 'Kiosk', moTa: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maDV: 'KIO_01', tenDV: 'Kiosk', moTa: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maDV: 'KIO_01', tenDV: 'Kiosk', moTa: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', link1: 'Chi tiết', link2: 'Cập nhật' },

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
        <VerticalMenu content={'Quản lý dịch vụ'}></VerticalMenu>
        <div className={styles.title}>Quản lý dịch vụ</div>
        <a href="/addService" className={styles.addButon}>
            <img src={add} alt="" />
            <p>Thêm <br /> dịch vụ</p>
        </a>
        <div className={styles.service}>
            <div className={styles.service_header}>
                <div className={styles.filter}>
                    <div className={styles.header_group}>
                        <div className={styles.label}>Trạng thái hoạt động</div>
                        <ReactSelect className={styles.item} options={options1} />

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

            <div className={styles.service_body}>
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
            <div className={styles.service_footer}>
                <b>1  2  3  4  5  ...  10</b>
            </div>
        </div>
    </>
  );
}

export default Service;
