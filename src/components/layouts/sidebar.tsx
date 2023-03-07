import * as React from 'react';

export interface BoxLeftProps {
}

export default function BoxLeft(props: BoxLeftProps) {
    return (
        <div className="d-sm-block d-none ct-l">
            <div className="px-0 py-0 w-100 position-sticky ct-l-2" style={{ zIndex: 200 }}>
                <div className="pb-2 pe-2 gap-2 menu-ava d-grid">
                    <div className="d-flex align-items-center ava">
                        <img className="ava-l w-100 br-9999" src="/image/unknown-avatar.jpg" alt='' />
                    </div>
                    <a href="/img/"></a>
                    <div className="ava-r">
                        <p className="d-flex align-items-center p">
                            <b className="me-1">ID:</b><span id="id-user"> 12314</span>
                            <span className="justify-content-center align-items-center ic-cop d-flex ms-2">
                                <i className="fas fa-copy"></i>
                            </span>
                        </p>
                        <p className="text-sm p"><b>Số dư:</b> <span className="fw-bold t-color">0đ</span></p>
                        <p className="text-sm p"><b>Xu:</b> <span className="fw-bold t-color">0xu</span></p>
                    </div>
                </div>
                <div className="bot-b border-top"></div>
                <div>
                    <div className="tk mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className="br-9999 justify-content-center align-items-center w-175 h-175 d-inline-flex position-absolute bg-color-be bg-par"
                                style={{ top: -2 }}>
                                <i className="fas fa-user user ic-par"></i>
                            </span>
                            <span className="d-block ml-225 text-par">Tài khoản</span>
                        </div>
                        <div className="fw-6 text-sm ml-275 mt-1">
                            <ul><a href="/info"
                                className="py-1 d-block text-black">Thông tin chung
                            </a> <a href="/repassword"
                                className="py-1 d-block text-black">Đổi mật
                                    khẩu</a>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className="br-9999 justify-content-center align-items-center w-175 h-175 d-inline-flex position-absolute bg-color-be bg-par"
                                style={{ top: -2 }}>
                                <i className="bx bxs-bell-ring ic-par"></i>
                            </span>
                            <span className="d-block ml-225 text-par">Thông báo
                            </span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul><a href="/notification"
                                className="text-black py-1 d-block ">Tất cả
                                thông báo
                            </a>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className="br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute bg-color-be bg-par"
                                style={{ top: -2 }}>
                                <i className="bx bxs-game ic-par"></i>
                            </span>
                            <span className="ml-25 d-block text-par">Trò chơi</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul><a href="/withdraw-items"
                                className="text-black py-1 d-block">Rút
                                vật phẩm</a>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className="br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute bg-color-be bg-par"
                                style={{ top: -2 }}>
                                <i className="fa fa-credit-card ic-par"></i>
                            </span>
                            <span className="ml-25 d-block text-par">Giao dịch</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul>
                                <a href="/recharge"
                                    className="text-black py-1 d-block">Nạp
                                    thẻ cào tự động</a>
                                <a className="text-black py-1 d-block atm cursor-pointer">Nạp qua ATM/MOMO</a>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className="br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute bg-color-be bg-par"
                                style={{ top: -2 }}>
                                <i className="fa fa-tag ic-par"></i>
                            </span>
                            <span className="ml-25 d-block text-par">Voucher</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul><a href="/voucher"
                                className="text-black py-1 d-block">Danh sách
                                voucher</a>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className="br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute bg-color-be bg-par"
                                style={{ top: -2 }}>
                                <i className="bx bxs-notepad ic-par"></i>
                            </span>
                            <span className="ml-25 d-block text-par">Lịch sử</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1 ">
                            <ul>
                                <a href="/history/game"
                                    className="text-black py-1 d-block ls-c">Chơi
                                    game</a>
                                <a href="/history/add_card"
                                    className="text-black py-1 d-block ls-c">Nạp
                                    thẻ</a>
                                <a href="/history/transaction"
                                    className="text-black py-1 d-block ls-c">Giao
                                    dịch</a>
                                <a href="/history/buy_nick"
                                    className="text-black py-1 d-block ls-c">Mua
                                    tài khoản (nick)</a>
                                <a href="/history/buy_items"
                                    className="text-black py-1 d-block ls-c">Mua
                                    hòm v.phẩm</a>
                                <a href="/history/service"
                                    className="text-black py-1 d-block ls-c">Mua
                                    vật phẩm (Dịch vụ)</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
