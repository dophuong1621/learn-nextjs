import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';


class HeaderComponent extends Component {
    render() {
        return (
            <header className="b-shadow">
                <nav className="m-width">
                    <div className="container-h">
                        <div className="header d-flex">
                            <div className="h-left d-flex flex-item-cent">
                                <div>
                                <Link href="/home" className="h-image">
                                    <Image src="https://cdns.diongame.com/static/image-87a3f611-cc43-4bc6-a047-a5de520ad6b6.png"
                                        className="h-Image1" alt="" fill/>
                                    <Image src="https://cdns.diongame.com/static/image-49572b34-c8b0-40df-8d04-13c44741d328.png"
                                        className="h-Image2" alt='' fill/>
                                </Link>
                                </div>
                                <a href="recharge"
                                    className="d-none d-sm-flex ml-25r fw-7 px-075 text-sm align-items-center cursor-pointer t-color">
                                    <span
                                        className="d-inline-flex align-items-center justify-content-center h-15r w-175r br-025 ic-color me-2 bg-color">
                                        <i className="text-lg bx bx-dollar"></i></span>

                                    NẠP THẺ
                                </a>
                                <a
                                    className="atm d-none d-sm-flex ml-05r fw-7 px-075 text-sm align-items-center cursor-pointer t-color">
                                    <span
                                        className="d-inline-flex align-items-center justify-content-center h-15r w-175r br-025 ic-color me-2 bg-color">
                                        <i className="text-lg bx bx-credit-card-front"></i></span>
                                    NẠP ATM/MOMO
                                </a>
                            </div>
                            {/* @if (session()->get('username')) */}
                            <div className="d-flex flex-wrap align-items-center">
                                <Link href="/notification" className="h-25r me-sm-3 text-2xl br-05 justify-content-center align-items-center w-25r d-flex position-relative mr-075">
                                    <i className="bx bxs-bell">
                                    </i>
                                </Link>
                                <div className="">
                                    <span>
                                        <div role="tooltip" className="el-popover el-popper dropmenu dropdown">
                                            <div>
                                                <div className="border-bot-w d-grid grid-temp-col-12 gap-2 padding-05r">
                                                    <div className="gc-2 d-flex align-items-center">
                                                        <Image src="/assetsU/image/unknown-avatar.jpg" className="w-100 br-05" fill alt='' />
                                                    </div>
                                                    <div className="gc-9">
                                                        <p><b>ID:</b> 123456</p>
                                                        <p><b>Số dư:</b> <span className="t-color fw-7">0đ</span></p>
                                                        <p><b>Xu khóa:</b> <span className="t-color fw-7">0xu</span></p>
                                                    </div>
                                                </div>
                                                <div className="text-sm">
                                                    <span className="mt-2 t-color fw-7 text-sm d-block px-075">
                                                        TÀI KHOẢN
                                                    </span>
                                                    <div className="px-2">
                                                        <Link href="/info" className="fw-6 d-block py-1 px-075 text-black">
                                                        <i className="position-relative bx bx-chevron-right" />
                                                            Thông tin chung
                                                        </Link>
                                                    </div>
                                                    <span className="t-color fw-7 text-sm my-1 d-block px-075">
                                                        <i className="position-relative bx bxs-dollar-circle" style={{top:1}}></i>
                                                        NẠP TIỀN
                                                    </span>
                                                    <div className="px-2">
                                                        <Link href="/recharge" className="fw-6 d-block py-1 px-075 text-black">
                                                            <i className="position-relative bx bx-chevron-right"
                                                                style={{top:1}}></i>
                                                            Nạp thẻ cào (tự động)
                                                        </Link>
                                                        <a className="fw-6 d-block py-1 px-075 cursor-pointer atm text-black">
                                                            <i className="position-relative bx bx-chevron-right"
                                                                style={{top:1}}></i>
                                                            Nạp ATM/MOMO (tự động)
                                                        </a>
                                                    </div>
                                                    <span className="t-color fw-7 text-sm my-1 d-block px-075">
                                                        LỊCH SỬ
                                                    </span>
                                                    <div className="px-2">
                                                        <Link href="/history/game" className="fw-6 d-block py-1 px-075 text-black">
                                                            <i className="position-relative bx bx-chevron-right"
                                                                style={{top:1}}></i>
                                                            Lịch sử chơi game
                                                        </Link>
                                                        <Link href="/history/buy_nick" className="fw-6 d-block py-1 px-075 text-black">
                                                            <i className="position-relative bx bx-chevron-right"
                                                                style={{top:1}}></i>
                                                            Lịch sử mua nick
                                                        </Link>
                                                        <Link href="/history/buy_items"
                                                            className="fw-6 d-block py-1 px-075 text-black">
                                                            <i className="position-relative bx bx-chevron-right"
                                                                style={{top:1}}></i>
                                                            Lịch sử mua v.phẩm
                                                        </Link>
                                                    </div>
                                                    <span className="t-color fw-7 text-sm my-1 d-block px-075">
                                                        KHÁC
                                                    </span>
                                                    <div className="px-2">
                                                        <Link href="/voucher" className="fw-6 d-block py-1 px-075 text-black">
                                                            <i className="position-relative bx bx-chevron-right"
                                                                style={{top:1}}></i>
                                                            Voucher
                                                            <span
                                                                className="position-relative text-xs px-2 d-inline-block br-025 tw-bg-red-600 text-white fw-5 dx"
                                                                style={{top:-1}}>
                                                                Mới
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="px-2">
                                                        <Link href="/withdraw-items" className="fw-6 d-block py-1 px-075 text-black">
                                                            <i className="position-relative bx bx-chevron-right"
                                                                style={{top:1}}></i>
                                                            Rút vật phẩm (Robux)
                                                        </Link>
                                                    </div>
                                                    <div className="padding-05r">
                                                        <Link href="{{ route('logout') }}" className="text-white">
                                                            <button className="text-white dx fw-6 text-center py-1 br-025 w-100">
                                                                Đăng xuất
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="el-popover__reference-wrapper">
                                            <button
                                                className="pl-075 h-25r text-sm fw-6 br-05 align-items-center d-flex position-relative dx pr-2 h-25r btn-inf h2r"
                                                style={{minWidth:'4rem'}} aria-describedby="el-popover-1422" tabIndex={0}>
                                                <span>
                                                    <Image src="/assetsU/image/unknown-avatar.jpg"
                                                        className="d-none d-sm-block bor-1 w-15r br-05" fill alt=''/>
                                                </span>
                                                <span className="d-none d-sm-block position-relative ms-1 text-white"
                                                    style={{top:-1}}>|</span>
                                                <span className="ms-sm-1 fw-7 text-white"> 0đ</span>
                                                <i className="text-lg position-absolute bx bx-caret-down-circle text-white top-down"
                                                    style={{top:8}}>
                                                </i>
                                            </button>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/* @else */}
                            <div className="h-right d-flex none">
                                <button className="btn-login bg-color">
                                    <span className="ct-btn-login">
                                        <span className="ic-btn-login">
                                            <i className="fas fa-user"></i>
                                            <span className="t-btn-login uppercase">Đăng Nhập</span>
                                        </span>
                                    </span>
                                </button>
                            </div>
                            {/* @endif */}
                        </div>
                    </div>
                </nav>
            </header>
            // <div className="navbar">
            //     <div className="header">
            //         <div className="col-1">
            //             <div className="menu">
            //                 <div>
            //                         <Link href="/User">Users</Link>
            //                 </div>
            //                 <div>
            //                     <Link href="/nonUser">Non Users</Link>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
export default HeaderComponent