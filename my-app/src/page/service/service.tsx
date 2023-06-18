import VerticalMenu from '../../component/verticalMenu/verticalMenu';
import styles from './service.module.css';
import { DatePicker } from 'antd';
import ReactSelect from 'react-select';
import search from '../../assets/icon/fi_search.png'
import add from '../../assets/icon/add-square.png'
import arrow from '../../assets/icon/arrow-right.png'
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { service } from '../../type/Service';
 
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

            
      const [Data, setData] = useState<service[]>([]);

      useEffect(() => {
          const fetchData = async () => {
            try {
              const db = getFirestore();
              const colRef = collection(db, "service");
              const docsSnap = await getDocs(colRef);
        
              const newData: service[] = [];
              docsSnap.forEach(doc => {
                newData.push(doc.data());
                //console.log(doc.id)
              });
        
              setData(prevData => [...prevData, ...newData]);
            } catch (error) {
              console.error('Error fetching Service:', error);
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
                  className={currentPage === i ? "active" : "btn-Service"}
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
  
                    <table  className={styles.table}>
                    <thead>
                      
                        <tr>
                            <th>Mã dịch vụ</th>
                            <th >Tên dịch vụ </th>
                            <th >Mô tả</th>
                            <th >Trạng thái hoạt động</th>
                            <th ></th>
                            <th ></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {getItemsForCurrentPage().map((item, index) => (
                            <tr key={index} className={styles.event}>
                            <td>{item.MaDV}</td>
                            <td>{item.Name}</td>
                            <td>{item.describe}</td>
                            <td>{item.Active}</td>                       
                            <td > <a onClick={() => navigate(`/detailService/${item.ID}`)}>Chi tiết</a></td>
                            <td><a onClick={() => navigate(`/editService/${item.ID}`)} >Cập nhật</a></td>
                        </tr>
                        ))}

                    </tbody>
                    </table> 
                </div>
                
            </div>
            <div className={styles.service_footer}>
                <FontAwesomeIcon icon="caret-left" />
                {renderPagination() }
                <FontAwesomeIcon icon="caret-right" />
            </div>

        </div>
    </>
  );
}

export default Service;
