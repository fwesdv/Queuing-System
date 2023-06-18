import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './detailService.module.css';
import Edit from '../../assets/icon/Edit Square.png'
import back from '../../assets/icon/back-square.png'
import { Column, useTable } from 'react-table';
import { DatePicker } from 'antd';
import ReactSelect from 'react-select';
import search from '../../assets/icon/fi_search.png'
import arrow from '../../assets/icon/arrow-right.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
interface DataObject {
    STT :String;
    trangThaiHD:String;

  }
  
  // Khai báo các cột với kiểu dữ liệu phù hợp
  const columns: Column<DataObject>[] = [
    {
        Header: 'Số thứ tự',
        accessor: 'STT',
    },
    {
        Header: 'Trạng thái hoạt động',
        accessor: 'trangThaiHD' ,
    },
  ];
  
  
function DetailService() {

    const [StartDate, setStartDate] =useState(new Date());
    function onChangeDate(value:any){
        setStartDate(value)
    }
    const options1 = [
        { value: 'all', label: 'Tất cả' },
        { value: 'activate', label: 'Đã hoàn thành' },
        { value: 'shutDown', label: 'Đã thực hiện' },
        { value: 'shutDown', label: 'Vắng' },
      ]
      const data = [
        { STT: 'KIO_01',  trangThaiHD: 'Ngưng hoạt động' },
        { STT: 'KIO_01',  trangThaiHD: 'Ngưng hoạt động' },
        { STT: 'KIO_01',  trangThaiHD: 'Ngưng hoạt động' },
        { STT: 'KIO_01',  trangThaiHD: 'Ngưng hoạt động' },
        { STT: 'KIO_01',  trangThaiHD: 'Ngưng hoạt động' },
        { STT: 'KIO_01',  trangThaiHD: 'Ngưng hoạt động' },
        { STT: 'KIO_01',  trangThaiHD: 'Ngưng hoạt động' },
      ];
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data });


      const  ServiceId  =useParams().id;
      const Serviceid= String(ServiceId)
      console.log(Serviceid,"ServiceId")
      const db = getFirestore();
      useEffect(() => {
        const fetchData = async () => {
          const docRef = doc(db, 'service', Serviceid);
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          console.log(data,"ServiceId")
          if (data) {
            setMaDV(data.MaDV);
              setName(data.Name);
              setAutoIncrease(data.autoIncrease);
              setDescribe(data.describe);
              setPrefix(data.Prefix);
              setSurfix(data.Surfix);
              setReset(data.Reset);
          }
        };
        fetchData();
      }, [db]);



      const [MaDV, setMaDV] = useState('');
      const [describe, setDescribe] = useState('');
      const [Name, setName] = useState('');
      const [Prefix,setPrefix ] = useState(false);
      const [Surfix, setSurfix] = useState(false);
      const [Reset, setReset] = useState(false);
      const [autoIncrease, setAutoIncrease] = useState(false);
      console.log(Prefix,'Prefix');
  return (
    <>
        <VerticalMenu content={'Chi tiết'}></VerticalMenu>
        <div className={styles.addButon}>
            <img src={Edit} alt="" />
            <p>Cập nhật <br /> dịch vụ</p>
        </div>
        <div className={styles.addButon1}>
            <img src={back} alt="" />
            <p>Quay lại</p>
        </div>
        <div className={styles.title}>Quản lý dịch vụ</div>
        <div className={styles.detailService}>

            <div className={styles.left_body}>
            <div className={styles.detailService_body}>
                <div className={styles.body_title}>Thông tin dịch vụ</div>
                <div className={styles.body_col}>
                    <div >
                        <div className={styles.body_row}>
                            <b >Mã dịch vụ: </b>
                            <a>{MaDV}</a>
                        </div>
                        <div className={styles.body_row}>
                            <b >Tên dịch vụ: </b>
                            <a>{Name}</a>
                        </div>                     
                        <div className={styles.body_row}>
                            <b >Mô tả:</b>
                            <a>{describe}</a>
                        </div>
                    </div>
                </div>
                <b className={styles.body_title}>Quy tắc cấp số</b>
                <div className={styles.body_buttom}>
                    
                    <div className={styles.checkbox}>
                        {autoIncrease&&(
                            <div > 
                            <span>Tăng tự động từ:</span>
                            <input type="text" className={styles.type_input}  placeholder="0001" />
                            <span className={styles.text} >đến</span>
                            <input type="text" className={styles.type_input} placeholder="9999" />
                        </div>
                        )}
                        
                        {Prefix && (
                            <div className="">
                                <span>Prefix:</span>
                                <input type="text" className={styles.type_input} placeholder="0001" />
                            </div>
                            )}
                        {Surfix && (
                            <div className="">
                                <span>Surfix:</span>
                                <input type="text" className={styles.type_input} placeholder="0001" />
                            </div>
                            )}
                        {Reset&&(
                            <>
                                <div className="">
                                    <span>Reset mỗi ngày</span>
                                </div>
                                <div className="">
                                    <span>Ví dụ: 201-2001</span>
                                </div>
                            </>
                            )}
                    </div>
                    
                </div>
            </div>
            </div>
            <div className={styles.right_body}>

            <div className={styles.service}>
            <div className={styles.service_header}>
                <div className={styles.header_group}>
                        <div className={styles.label}>Trạng thái</div>
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
            </div>
        </div>
        
    </>
  );
}

export default DetailService;
