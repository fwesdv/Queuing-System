import { useState } from "react";
import AppWebsiteVisits from "../../component/AppWebsiteVisits/AppWebsiteVisits";
import VerticalMenu from "../../component/verticalMenu/verticalMenu";
import styles from './dashboard.module.css';
import { Grid } from '@mui/material';
import dashboard1 from '../../assets/icon/dashboard1.png'
import dashboard2 from '../../assets/icon/dashboard2.png'
import dashboard3 from '../../assets/icon/dashboard3.png'
import dashboard4 from '../../assets/icon/dashboard4.png'
import monitor1 from '../../assets/icon/monitor1.png'
function Dashboard () {
    
    const [selectedChartLabel, setSelectedChartLabel] = useState('');
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        // setState([selectedValue]);
        setSelectedChartLabel(selectedValue);
      };
    
    return (
      <>

      
        <VerticalMenu content={'Dashboard'}></VerticalMenu>
        <div className={styles.dashboard}>
          <div className={styles.dashboard_left}>
            <p className={styles.left_content}>Biểu đồ cấp số</p>
            <div className={styles.dashboard_header}>
              <div className={styles.item_header}>
                <div className={styles.item_content}>
                  <img src={dashboard1} alt="" />
                  <b>Số thứ tự đã cấp</b>
                </div>
                <div className={styles.item_value}>
                  <b>4.221 </b>
                  <div className=""><b> 32,41%</b></div>
                </div>
              </div>

              <div className={styles.item_header}>
                <div className={styles.item_content}>
                  <img src={dashboard2} alt="" />
                  <b>Số thứ tự đã sử dụng</b>
                  </div>
                <div className={styles.item_value}>
                  <b>3.721</b>
                  <div className=""><b> 32,41%</b></div>
                </div>
              </div>

              <div className={styles.item_header}>
                <div className={styles.item_content}>
                  <img src={dashboard3} alt="" />
                  <b>Số thứ tự đang chờ</b>
                </div>
                <div className={styles.item_value}>
                  <b>468 </b>
                  <div className=""><b> 32,41%</b></div>
                </div>
              </div>

              <div className={styles.item_header}>
                <div className={styles.item_content}>
                  <img src={dashboard4} alt="" />
                  <b>Số thứ tự đã bỏ qua</b>
                </div>
                <div className={styles.item_value}>
                  <b>32 </b>
                  <div className=""><b> 22,41%</b></div>
                </div>
              </div>
            </div>
            <div className={styles.dashboard_body}>
              <div className={styles.view}>
                    <p>Xem theo</p>
                    <select name="select" id="select" onChange={handleSelectChange}>
                        <option value="Ngày" >Ngày</option>
                        <option value="Tuần">Tuần</option>
                        <option value="Tháng">Tháng</option>
                        
                    </select>
                </div>
              <Grid item xs={12} md={6} lg={8}>
                  
                  <AppWebsiteVisits
                    title="Bảng thống kê theo ngày"
                    subheader={
                      selectedChartLabel === 'Ngày' ? 'Tháng 11/2021' :
                      selectedChartLabel === 'Tuần' ? 'Tháng 11/2021' :
                      selectedChartLabel === 'Tháng' ? 'Năm 2021' :
                      ''
                    }
                    chartLabels={selectedChartLabel === 'Ngày' ? [
                      '01',
                      '13',
                      '19',
                      '31',
                    ] : selectedChartLabel === 'Tuần' ? [
                      'Tuần 1',
                      'Tuần 2',
                      'Tuần 3',
                      'Tuần 4',
                    ] : selectedChartLabel === 'Tháng' ? [
                      ' 1',
                      ' 2',
                      ' 3',
                      ' 4',
                      ' 5',
                      ' 6',
                      ' 7',
                      ' 8',
                      ' 9',
                      ' 10',
                      ' 11',
                      ' 12',
                    ] : []}
                    chartData={[
                      {
                        name: '',
                        type: 'area',
                        fill: 'gradient',
                        data: selectedChartLabel === 'Ngày' ? [
                          2800,
                          3500,
                          4221,
                          3000,
                        ] : selectedChartLabel === 'Tuần' ? [
                          2000,
                          3000,
                          2500,
                          4000,
                        ] : selectedChartLabel === 'Tháng' ? [
                          2000,
                          4500,
                          3800,
                          4700,
                          1300,
                          1700,
                          4200,
                          3700,
                          2800,
                          1900,
                          3100,
                          4100,
                        ] : [],
                      }
                      
                    ]}
                  />
                </Grid>
            </div>
          </div>

          <div className={styles.dashboard_right}>
            <div className="">
              <p className={styles.right_content}>Tổng quan</p>
              <div className={styles.right_list}>
                <div className={styles.right_item}>
                  <div className={styles.item_1}></div>
                  <div className={styles.item_2}>
                      <b>4.221</b><br />
                      <div className={styles.item_icon}>
                        <img src={monitor1} alt="" />
                        <b>Thiết bị</b>
                      </div>
                      
                  </div>
                  <div className={styles.item_3}>
                    <div className="">
                      Đang hoạt động
                      <b> 3.799</b>
                    </div>
                    <div className="">
                      Ngưng hoạt động
                      <b> 422</b>
                    </div>
                  </div>
                </div>

                <div className={styles.right_item}>
                <div className={styles.item_1}></div>
                  <div className={styles.item_2}>
                      <b>4.221</b><br />
                      <div className={styles.item_icon}>
                        <img src={monitor1} alt="" />
                        <b>Thiết bị</b>
                      </div>
                      
                  </div>
                  <div className={styles.item_3}>
                    <div className="">
                      Đang hoạt động
                      <b> 3.799</b>
                    </div>
                    <div className="">
                      Ngưng hoạt động
                      <b> 422</b>
                    </div>
                  </div>
                </div>

                <div className={styles.right_item}>
                <div className={styles.item_1}></div>
                  <div className={styles.item_2}>
                      <b>4.221</b><br />
                      <div className={styles.item_icon}>
                        <img src={monitor1} alt="" />
                        <b>Thiết bị</b>
                      </div>
                      
                  </div>
                  <div className={styles.item_3}>
                    <div className="">
                      Đang hoạt động
                      <b> 3.799</b>
                    </div>
                    <div className="">
                      Ngưng hoạt động
                      <b> 422</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right_date}></div>
            </div>
          </div>
        </div>
          
      </>
    )
}

export default Dashboard