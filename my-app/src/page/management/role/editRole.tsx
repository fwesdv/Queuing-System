import VerticalMenu from '../../../component/verticalMenu/verticalMenu';
import styles from './editRole.module.css';

  
function EditRole() {

      
  return (
    <>
        <VerticalMenu content={'Thêm vai trò'}></VerticalMenu>
        <div className={styles.title}>Danh sách vai trò</div>
        <div className={styles.editRole}>
            <div className={styles.editRole_body}>
                <div>
                    <div className={styles.body_title}>Thông tin vai trò</div>
                    <div className={styles.body_col}>
                        <div >
                            <div className={styles.body_row}>
                                <label htmlFor="username"><b>Tên vai trò *</b></label>
                                <input type="text" placeholder="Nhập tên vai trò " />
                            </div>
                            <div className={styles.body_row}>
                                <label htmlFor="username"><b>Mô tả: </b></label>
                                <textarea placeholder="Nhập mô tả" />
                            </div>
                            <a>* Là trường thông tin bắt buộc</a>
                        </div>

                        <div >
                            <div className={styles.body_right}>
                            <b >Phân quyền chức năng</b>
                            <div className={styles.checkbox}>
                                <div>
                                    <span className={styles.body_title}>Nhóm chức năng A</span>
                                    <div> <input type="checkbox" className={styles.type_checkbox}/> 
                                        <span>Tất cả</span> 
                                    </div>
                                    <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                                        <span>Chức năng x</span> 
                                    </div>
                                    <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                                        <span>Chức năng y</span>
                                        </div>
                                    <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                                        <span>Chức năng z</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <span className={styles.body_title}>Nhóm chức năng B</span>
                                    <div> <input type="checkbox" className={styles.type_checkbox}/> 
                                        <span>Tất cả</span> 
                                    </div>
                                    <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                                        <span>Chức năng x</span> 
                                    </div>
                                    <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                                        <span>Chức năng y</span>
                                        </div>
                                    <div className=""><input type="checkbox"  className={styles.type_checkbox}/> 
                                        <span>Chức năng z</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.service_footer}>
                <button type="submit" className="btn1">Hủy bỏ</button>
                <button type="submit" className="btn">Thêm</button>  
            </div>
        </div>
        
    </>
  );
}

export default EditRole;
