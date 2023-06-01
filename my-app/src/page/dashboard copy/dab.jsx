import styles from './dab.module.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

function Dashboard() {
  return (
    <>
      {/* <div className={styles.row}>
        <div className={`${styles.col} ${styles['col-xl-3']} ${styles['col-lg-6']} ${styles['col-sm-6']} ${styles['grid-margin']} ${styles['stretch-card']}`}>
          <div className={styles.card}>
            <div className={styles['card-body']} text-center>
              <h5 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-normal']}`}>Orders</h5>
              <h2 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-bold']}`}>932.00</h2>
              <div className={`${styles.px} ${styles['d-flex']} ${styles['align-items-center']}`}>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="progress-order">
                      <stop offset="0%" stopColor="#1579ff" />
                      <stop offset="100%" stopColor="#7922e5" />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbarWithChildren className={styles['progress-order']} value={70}>
                  <div>
                    <i className={`${styles['mdi']} ${styles['mdi-lightbulb']} ${styles['icon-md']} ${styles['absolute-center']} ${styles['text-dark']}`}></i>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <p className={`${styles.mt} ${styles.mb}-0`}>Completed</p>
              <h3 className={`${styles.mb}-0 ${styles['font-weight-bold']} ${styles.mt}-2 ${styles['text-dark']}`}>5443</h3>
            </div>
          </div>
        </div>
        <div className={`${styles.col} ${styles['col-xl-3']} ${styles['col-lg-6']} ${styles['col-sm-6']} ${styles['grid-margin']} ${styles['stretch-card']}`}>
          <div className={styles.card}>
            <div className={styles['card-body']} text-center>
              <h5 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-normal']}`}>Unique Visitors</h5>
              <h2 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-bold']}`}>756,00</h2>
              <div className={`${styles.px} ${styles['d-flex']} ${styles['align-items-center']}`}>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#b4ec51" />
                      <stop offset="100%" stopColor="#429321" />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbarWithChildren className={styles['progress-visitors']} value={60}>
                  <div>
                    <i className={`${styles['mdi']} ${styles['mdi-account-circle']} ${styles['icon-md']} ${styles['absolute-center']} ${styles['text-dark']}`}></i>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <p className={`${styles.mt} ${styles.mb}-0`}>Increased since yesterday</p>
              <h3 className={`${styles.mb}-0 ${styles['font-weight-bold']} ${styles.mt}-2 ${styles['text-dark']}`}>50%</h3>
            </div>
          </div>
        </div>
        <div className={`${styles.col} ${styles['col-xl-3']} ${styles['col-lg-6']} ${styles['col-sm-6']} ${styles['grid-margin']} ${styles['stretch-card']}`}>
          <div className={styles.card}>
            <div className={styles['card-body']} text-center>
              <h5 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-normal']}`}>Impressions</h5>
              <h2 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-bold']}`}>100,38</h2>
              <div className={`${styles.px} ${styles['d-flex']} ${styles['align-items-center']}`}>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fad961" />
                      <stop offset="100%" stopColor="#f76b1c" />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbarWithChildren className={styles['progress-impressions']} value={90}>
                  <div>
                    <i className={`${styles['mdi']} ${styles['mdi-eye']} ${styles['icon-md']} ${styles['absolute-center']} ${styles['text-dark']}`}></i>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <p className={`${styles.mt} ${styles.mb}-0`}>Increased since yesterday</p>
              <h3 className={`${styles.mb}-0 ${styles['font-weight-bold']} ${styles.mt}-2 ${styles['text-dark']}`}>35%</h3>
            </div>
          </div>
        </div>
        <div className={`${styles.col} ${styles['col-xl-3']} ${styles['col-lg-6']} ${styles['col-sm-6']} ${styles['grid-margin']} ${styles['stretch-card']}`}>
          <div className={styles.card}>
            <div className={styles['card-body']} text-center>
              <h5 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-normal']}`}>Followers</h5>
              <h2 className={`${styles.mb} ${styles['text-dark']} ${styles['font-weight-bold']}`}>4250k</h2>
              <div className={`${styles.px} ${styles['d-flex']} ${styles['align-items-center']}`}>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="progress-followers" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f5515f" />
                      <stop offset="100%" stopColor="#9f041b" />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbarWithChildren className={styles['progress-followers']} value={45}>
                  <div>
                    <i className={`${styles['mdi']} ${styles['mdi-eye']} ${styles['icon-md']} ${styles['absolute-center']} ${styles['text-dark']}`}></i>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <p className={`${styles.mt} ${styles.mb}-0`}>Decreased since yesterday</p>
              <h3 className={`${styles.mb}-0 ${styles['font-weight-bold']} ${styles.mt}-2 ${styles['text-dark']}`}>25%</h3>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
