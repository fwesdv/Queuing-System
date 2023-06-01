import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './device.module.css';
import { Column, useTable } from 'react-table';

import ReactSelect from 'react-select';
import search from '../../assets/icon/fi_search.png'
import add from '../../assets/icon/add-square.png'

// Định nghĩa kiểu dữ liệu của đối tượng
interface DataObject {
    maTB :String;
    tenTB:String;
    diaChiIP:String;
    trangThaiHD:String;
    trangThaiKN:String;
    dichVuSD:String;
    link1:String;
    link2:String;
  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'Mã thiết bị',
        accessor: 'maTB',
    },
    {
        Header: 'Tên thiết bị',
        accessor: 'tenTB',
    },
    {
        Header: 'Địa chỉ IP',
        accessor: 'diaChiIP' ,
    },
    {
        Header: 'Trạng thái hoạt động',
        accessor: 'trangThaiHD' ,
    },
    {
        Header: 'Trạng thái kết nối',
        accessor: 'trangThaiKN' ,
    },
    {
        Header: 'Dịch vụ sử dụng',
        accessor: 'dichVuSD' ,
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
  
function Device() {
    const options1 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'activate', label: 'Hoạt động' },
        { value: 'shutDown', label: 'Ngưng hoạt động' }
      ]
      const options2 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'connected', label: 'Kết nối' },
        { value: 'disconnected', label: 'Mất kết nối' }
      ]
      const data = [
        { maTB: 'KIO_01', tenTB: 'Kiosk', diaChiIP: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', trangThaiKN: 'Mất kết nối', dichVuSD: 'Khám tim mạch, Khám mắt...', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maTB: 'KIO_01', tenTB: 'Kiosk', diaChiIP: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', trangThaiKN: 'Mất kết nối', dichVuSD: 'Khám tim mạch, Khám mắt...', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maTB: 'KIO_01', tenTB: 'Kiosk', diaChiIP: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', trangThaiKN: 'Mất kết nối', dichVuSD: 'Khám tim mạch, Khám mắt...', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maTB: 'KIO_01', tenTB: 'Kiosk', diaChiIP: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', trangThaiKN: 'Mất kết nối', dichVuSD: 'Khám tim mạch, Khám mắt...', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maTB: 'KIO_01', tenTB: 'Kiosk', diaChiIP: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', trangThaiKN: 'Mất kết nối', dichVuSD: 'Khám tim mạch, Khám mắt...', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maTB: 'KIO_01', tenTB: 'Kiosk', diaChiIP: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', trangThaiKN: 'Mất kết nối', dichVuSD: 'Khám tim mạch, Khám mắt...', link1: 'Chi tiết', link2: 'Cập nhật' },
        { maTB: 'KIO_01', tenTB: 'Kiosk', diaChiIP: '192.168.1.10', trangThaiHD: 'Ngưng hoạt động', trangThaiKN: 'Mất kết nối', dichVuSD: 'Khám tim mạch, Khám mắt...', link1: 'Chi tiết', link2: 'Cập nhật' },

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
        <VerticalMenu content={'Thiết bị'}></VerticalMenu>
        <div className={styles.title}>Danh sách thiết bị</div>
        <div className={styles.addButon}>
            <img src={add} alt="" />
            <p>Thêm <br /> thiết bị</p>
        </div>
        <div className={styles.device}>
            <div className={styles.device_header}>
                <div className={styles.filter}>
                    <div className={styles.header_group}>
                        <div className={styles.label}>Trạng thái hoạt động</div>
                        <ReactSelect className={styles.item} options={options1} />

                    </div>
                    <div className={styles.header_group}>
                        <div className={styles.label}>Trạng thái kết nối</div>
                        <ReactSelect className={styles.item} options={options2} />
                    </div>
                </div>
                
                <div className={styles.header_search}>
                    <div className={styles.label}>Từ khoá</div>
                    <input className={styles.item} />
                    <img src={search} alt="" />
                </div>
            </div>

            <div className={styles.device_body}>
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
            <div className={styles.device_footer}>
                <b>1  2  3  4  5  ...  10</b>
            </div>
        </div>
    </>
  );
}

export default Device;
