import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './device.module.css';
import { Column, useTable } from 'react-table';

import ReactSelect from 'react-select';
import search from '../../assets/icon/fi_search.png'
import add from '../../assets/icon/add-square.png'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { device } from '../../type/Device';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  
 
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
      const [Data, setData] = useState<device[]>([]);

      useEffect(() => {
          const fetchData = async () => {
            try {
              const db = getFirestore();
              const colRef = collection(db, "device");
              const docsSnap = await getDocs(colRef);
        
              const newData: device[] = [];
              docsSnap.forEach(doc => {
                newData.push(doc.data());
                //console.log(doc.id)
              });
        
              setData(prevData => [...prevData, ...newData]);
            } catch (error) {
              console.error('Error fetching device:', error);
            }
          };
          library.add(faCaretRight);
          library.add(faCaretLeft);
          fetchData();
        }, []);
        const navigate =useNavigate();  
        const itemsPerPage = 9; // Số lượng mục trên mỗi trang
        const totalPages = Math.ceil(Data.length / itemsPerPage); // Tổng số trang
        console.log(Data.length)
        const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
        const getItemsForCurrentPage = () => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return Data.slice(startIndex, endIndex);
        };
        const goToPage = (page:number) => {
            setCurrentPage(page);
          };
          
          const renderPagination = () => {
            const pages = [];
            for (let i = 1; i <= totalPages; i++) {
              pages.push(
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={currentPage === i ? "active" : "btn-device"}
                  disabled={currentPage === i}
                >
                  {i}
                </button>
              );
            }
            return pages;
          };

    
  return (
    <>
        <VerticalMenu content={'Thiết bị'}></VerticalMenu>
        <div className={styles.title}>Danh sách thiết bị</div>
        <a href='/addDevice' className={styles.addButon}>
            <img src={add} alt="" />
            <p>Thêm <br /> thiết bị</p>
        </a>

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
                    <table  className={styles.table}>
                    <thead>
                      
                        <tr>
                            <th>Mã Thiết Bị</th>
                            <th >Tên Thiết Bị</th>
                            <th >Địa chỉ Ip</th>
                            <th >Trạng Thái Hoạt Động</th>
                            <th >Trạng Thái Kết Nối</th>
                            <th >Dịch Vụ Sử Dụng</th>
                            <th ></th>
                            <th ></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {getItemsForCurrentPage().map((item, index) => (
                            <tr key={index} className={styles.event}>
                            <td>{item.MaTB}</td>
                            <td>{item.Name}</td>
                            <td>{item.IP}</td>
                            <td>{item.Active}</td>
                            <td>{item.Connect}</td>
                            <td>{item.Service} </td>                         
                            <td><a onClick={() => navigate(`/detailDevice/${item.ID}`)}>Chi tiết</a></td>
                            <td><a onClick={() => navigate(`/updateDevice/${item.ID}`)} >Cập nhật</a></td>
                        </tr>
                        ))}

                    </tbody>
                    </table> 
                </div>
                
            </div>
            <div className={styles.device_footer}>
                <FontAwesomeIcon icon="caret-left" />
                {renderPagination() }
                <FontAwesomeIcon icon="caret-right" />
            </div>
        </div>
    </>
  );
}

export default Device;
