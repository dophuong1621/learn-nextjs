import React from 'react'

function ModalHome({ closeModalHome }: any) {
    return (
        <div className="popup-home" >
            <div className="modal-home el-dialog-550">
                <div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog tw-dialog-trans">
                    <div className="tb-home">
                        <div className="t-color fw-7">
                            <i className="position-relative bx bxs-bell-ring text-xl" style={{ top: 3 }}></i>
                            THÔNG BÁO
                        </div>
                        <button type="button" className="el-dialog__headerbtn" onClick={() => closeModalHome(false)}>
                            <i className="btn-close btn-close-black"></i>
                        </button>
                    </div>
                    <div className="ct-home">
                        <div className="main-ct" style={{ wordBreak: 'break-word' }}>
                            <p style={{ marginLeft: 0, textAlign: 'center' }}>
                                <span className="text-big" style={{ color: 'rgb(2, 132, 199)' }}>
                                    <strong>Hiện Tại Robux tại shop Hiha đã có hàng - Độc Quyền
                                        thị trường</strong>
                                </span>
                            </p>
                            <p style={{ marginLeft: 0, textAlign: 'center' }}>
                                <span className="text-big"
                                    style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(185, 28, 28)' }}>
                                    <strong>10k = 85 Robux</strong>
                                </span>
                            </p>
                            <p style={{ marginLeft: 0, textAlign: 'center' }}>
                                <span className="text-big" style={{ color: 'rgb(2, 132, 199)' }}>
                                    <strong>Mọi người nhanh tay mua nhé - Đơn sẽ được xử lý sớm
                                        nhất</strong>
                                </span>
                            </p>
                            <p style={{ marginLeft: 0, textAlign: 'center' }}>
                                <span className="text-big" style={{ color: 'rgb(2, 132, 199)' }}>
                                    <strong>Sau khi nguồn Robux ổn định sẽ quay về giá
                                        cũ.</strong>
                                </span>
                            </p>
                            <p style={{ marginLeft: 0, textAlign: 'center' }}>
                                <span style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(51, 51, 51)' }}>🥇</span>
                                <span style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(39, 39, 42)' }}>
                                    <strong>HOT :
                                    </strong>
                                </span>
                                <span style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(244, 63, 94)' }}>
                                    <strong>TẶNG MIỄN PHÍ
                                        NGẪU NHIÊN ROBUX VÀ TRÁI ÁC QUỶ XỊN KHI TẠO TÀI KHOẢN Ở SHOP</strong>
                                </span>
                                <span style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(51, 51, 51)' }}>🥇</span>
                            </p>
                        </div>
                    </div>
                    <div className="footer-login">
                        <span className="dialog-footer">
                            <button type="button" className="ttb" onClick={() => closeModalHome(false)}>
                                <span>Tắt thông báo </span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="overlayy" onClick={() => closeModalHome(false)}></div>
        </div>
    )
}

export default ModalHome