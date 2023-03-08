import Link from 'next/link';
import * as React from 'react';

export interface IModalProps {
}

export default function Modal(props: IModalProps) {
    return (
        <div>
            {/* popup atm */}
            <div className="load-atm" style={{ display: 'none' }}>
                <div className="modal-atm" style={{ zIndex: 1002 }}>
                    <div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog tw-dialog-trans"
                        style={{ marginTop: '15vh' }}>
                        <div className="el-dialog__header">
                            <div className="text-white fw-6">
                                NẠP TIỀN - CHUYỂN KHOẢN QUA
                            </div>
                            <button type="button" aria-label="Close" className="el-dialog__headerbtn">
                                <i className="el-dialog__close el-icon btn-close btn-close-white"></i>
                            </button>
                        </div>
                        <div className="el-dialog__body">
                            <div className="my-3" style={{ wordBreak: 'break-word' }}>
                                <div className="d-grid grid-temp-col-12 gap-3">
                                    <div className="gc-6 gc-12i">
                                        <button className="px-3 align-items-center br-025 w-100 d-flex h-3r border bank">
                                            <img className="w-15 lazyLoad isLoaded" src="/assetsU/image/bank.png" alt='' />
                                            <span className="ml-05 fw-6 text-bank">Ngân Hàng (ATM)</span>
                                        </button>
                                    </div>
                                    <div className="gc-6 gc-12i">
                                        <button className="px-3 align-items-center br-025 w-100 d-flex h-3r border momo">
                                            <img className="w-15 lazyLoad isLoaded" src="/assetsU/image/momo.png" alt='' />
                                            <span className="ml-05 fw-6 text-momo">Ứng dụng MOMO</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-3 ct-nt">
                                        <div className="text-sm fw-6">
                                            <p>
                                                <span>
                                                    <i className="bx bx-caret-right"></i>
                                                </span> Hệ thống nạp <b className="t-color">ATM/MOMO tự động 24/24</b>, Nạp 100k
                                                nhận
                                                110k tiền shop
                                            </p>
                                            <p>
                                                <span>
                                                    <i className="bx bx-caret-right"></i>
                                                </span>
                                                <b> Lưu ý: </b> Chuyển tiền
                                                nhanh 24/7 để tránh bị treo, chậm
                                                tiền! Nếu gửi đúng stk và nội dung mà 30p không nhận được tiền
                                                hoặc chuyển ghi sai nội dung vui lòng liên hệ page để được hỗ
                                                trợ.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3 ct-nt">
                                        <label className="uppercase t-color fw-7 text-sm d-block mb-2">
                                            Quy Đổi Tiền Nạp ATM/MOMO
                                        </label>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="box-40">
                                                <div className="w-100 position-relative">
                                                    <label className="d-inline-block position-absolute text-xs fw-5"
                                                        style={{ left: 10, top: 6 }}>
                                                        Số tiền bạn chuyển
                                                    </label>
                                                    <input type="number" placeholder=""
                                                        className="pt-075 px-2 h-3r br-025 border-w-2-gray w-100 text-sm fw-6" />
                                                </div>
                                                <span className="mt-1 position-absolute text-xs d-block fw-6">
                                                    <i className="position-relative fw-5 bx bx-subdirectory-right"
                                                        style={{ top: 1 }}></i>
                                                    0đ</span>
                                            </div>
                                            <div className="box-20">
                                                <i className="bx bx-transfer-alt text-lg"></i>
                                            </div>
                                            <div className="box-40">
                                                <div className="w-100 position-relative">
                                                    <label className="d-inline-block position-absolute text-xs fw-5"
                                                        style={{ left: 10, top: 6 }}>
                                                        Tiền nhận trên shop
                                                    </label>
                                                    <input readOnly placeholder=""
                                                        className="pt-075 px-2 h-3r br-025 border-w-2-gray w-100 text-sm fw-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* content popup atm */}
                                    <div className="mt-3" id="ct-bank" style={{ display: 'none' }}>
                                        <div>
                                            <div>
                                                <div className="text-sm t-color line-h-15">
                                                    <p>
                                                        <span className="text-black">
                                                            <strong>THÔNG TIN TÀI KHOẢN NGÂN HÀNG</strong>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <strong>CHỦ TÀI KHOẢN: </strong>
                                                        <span>
                                                            <strong>TRẦN VIỆT TÙNG</strong>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <strong>NGÂN HÀNG : </strong>
                                                        <span>
                                                            <strong>VIETCOMBANK</strong>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <strong>SỐ TÀI KHOẢN : </strong>
                                                        <span>
                                                            <strong>0451000413951</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                                <button
                                                    className="text-white uppercase fw-7 text-xs px-2 br-025 h-15r mt-1 bg-gray border-0">
                                                    Copy số tài khoản
                                                </button>
                                            </div>
                                            <div className="border-bot-w my-075"></div>
                                            <div className="my-2">
                                                <p className="fw-6 text-sm mb-1">
                                                    Nội dung chuyển khoản:
                                                </p>
                                                <div className="position-relative">
                                                    <input readOnly value="nap1650845"
                                                        className="t-color fw-8 text-lg px-075 bor-col-red border-dashed w-100 bor-w-2 br-025 h-25r" />
                                                    <button
                                                        className="text-white fw-6 text-sm py-1 px-3 dx br-025 align-items-center d-flex h-15r position-absolute"
                                                        style={{ top: 8, right: 8 }}>
                                                        COPY NỘI DUNG
                                                    </button>
                                                </div>
                                                <div className="mt-2 fw-6 text-sm">
                                                    <i className="ml-075 bx bxs-upvote"></i> Khi chuyển khoản qua Ngân hàng (ATM)
                                                    bạn
                                                    cần ghi nội dung
                                                    <b className="mx-1 t-color">nap1650845 </b>bên trên.
                                                </div>
                                                <div className="mt-1 text-sm fw-6 t-color">
                                                    <i>Lưu ý: Sau khi chuyển khoản xong, hãy chờ "vài phút" rồi ấn <b>"Xác nhận.
                                                        Tôi
                                                        đã chuyển"</b>.
                                                    </i>
                                                </div>
                                                <button className="my-2 h-25r fw-6 br-025 text-white px-075 border-0 bg-green"
                                                    style={{ backgroundColor: '#1a9d60' }}>
                                                    Xác nhận. Tôi đã chuyển
                                                </button>
                                                <div className="mt-1 fw-6 text-sm t-color">
                                                    <i>
                                                        <p>
                                                            Giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không được xử lý
                                                            tự động. Hãy liên hệ Fanpage để được hỗ trợ.
                                                        </p>
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* content popup momo */}
                                    <div className="mt-3" id="ct-momo" style={{ display: 'none' }}>
                                        <div>
                                            <div>
                                                <div className="text-sm t-color-momo line-h-15">
                                                    <p><strong>THÔNG TIN VÍ MOMO</strong></p>
                                                    <p><strong>CHỦ TÀI KHOẢN: </strong>
                                                        <span className="t-color">
                                                            <strong>TRẦN VIỆT TÙNG</strong>
                                                        </span>
                                                    </p>
                                                    <p><strong>&#xFEFF;VÍ MOMO: </strong>
                                                        <span className="t-color"><strong>0398793456</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                                <button
                                                    className="text-white uppercase fw-7 text-xs px-2 br-025 h-15r mt-1 bg-gray border-0">
                                                    Copy số tài khoản ví MOMO
                                                </button>
                                            </div>
                                            <div className="border-bot-w my-075"></div>
                                            <div className="my-2">
                                                <p className="fw-6 text-sm mb-1">
                                                    Nội dung <b className="t-color">ghi chú</b> khi chuyển:
                                                </p>
                                                <div className="position-relative">
                                                    <input readOnly value="nap1650845"
                                                        className="t-color-momo fw-8 text-lg px-075 bor-col-red border-dashed w-100 bor-w-2 br-025 h-25r" />
                                                    <button
                                                        className="text-white fw-6 text-sm py-1 px-3 bg-momo br-025 align-items-center d-flex h-15r position-absolute border-0"
                                                        style={{ top: 8, right: 8 }}>
                                                        COPY NỘI DUNG
                                                    </button>
                                                </div>
                                                <div className="mt-2 fw-6 text-sm">
                                                    <i className="ml-075 bx bxs-upvote"></i> Khi chuyển khoản qua
                                                    ví Momo bạn
                                                    cần ghi nội dung ghi chú
                                                    <b className="mx-1 t-color-momo">nap1650845 </b>
                                                    bên trên.
                                                </div>
                                                <div className="mt-1 fw-6 text-sm t-color">
                                                    <p>
                                                        Lưu ý: Nếu quá 30 phút không nhận được tiền, vui lòng liên hệ page
                                                        hỗ trợ!
                                                    </p>
                                                    <i>- Giao dịch chuyển sai "Nội dung ghi chú" sẽ không
                                                        được xử lý tự
                                                        động. Hãy liên hệ Fanpage để được hỗ trợ.
                                                    </i>
                                                </div>
                                            </div>
                                            <div className="border-bot-w my-075"></div>
                                            <div className="mt-1">
                                                <p className="fw-6 text-sm mb-1">
                                                    Vui lòng chuyển trên 5000đ để được cộng tự động.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* btn-menu */}
            <div className="btn-menu-left" style={{ zIndex: 1001, display: 'none' }}>
                <div className="modal-menu el-drawer__open">
                    <div className="modal-contentt ltr" style={{ width: 280 }}>
                        <header id="btn-menu-title" className="btn-menu-header">
                            <div>
                                <b>DANH MỤC MENU</b>
                            </div>
                            <button type="button" className="btn-close-menu">
                                <i className="btn-close btn-close-black"></i>
                            </button>
                        </header>
                        <section className="btn-menu-body">
                            <div style={{ maxHeight: '95vh', overflow: 'hidden auto' }}>
                                <div className="w-100 padding-05r position-sticky " style={{ zIndex: 200, top: '5rem' }}>
                                    <div className="d-grid grid-temp-col-12 gap-2 pe-2 pb-2">
                                        <div className="gc-3 d-flex align-items-center">
                                            <img className="w-100 br-9999 border-w-1" src="/assetsU/image/unknown-avatar.jpg" alt='' />
                                        </div>
                                        <div className="gc-9">
                                            <p className="d-flex align-items-center">
                                                <b className="me-1">ID: </b>454992
                                                <span
                                                    className="w-1 h-1 d-flex align-items-center justify-content-center ms-2 cursor-pointer">
                                                    <i className="bx bxs-copy"></i>
                                                </span>
                                            </p>
                                            <p className="text-sm"><b>Số dư:</b> <span className="t-color fw-7">0đ</span></p>
                                            <p className="text-sm"><b>Xu:</b> <span className="t-color fw-7">0xu</span></p>
                                        </div>
                                    </div>
                                    <div className="mb-3 bor-w75-gray"></div>
                                    <div>
                                        <div className="mb-075 parent">
                                            <div className="position-relative fw-6"><span
                                                className="h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-color-be bg-par"
                                                style={{ top: -2 }}>
                                                <i className="text-lg bx bxs-user ic-par"></i>
                                            </span>
                                                <span className="ml-25r d-block text-par">Tài khoản</span>
                                            </div>
                                            <div className="ml-275 mt-1 text-sm fw-6">
                                                <ul>
                                                    <Link href="/info"
                                                        className="d-block py-1 text-black">Thông
                                                        tin chung</Link>
                                                    <Link href="/repassword"
                                                        className="d-block py-1 text-black">Đổi
                                                        mật khẩu</Link>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mb-075 parent">
                                            <div className="position-relative fw-6">
                                                <span
                                                    className="h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-color-be bg-par"
                                                    style={{ top: -2 }}>
                                                    <i className="text-lg bx bxs-bell ic-par"></i>
                                                </span>
                                                <span className="ml-25r d-block text-par">Thông báo
                                                </span>
                                            </div>
                                            <div className="ml-275 mt-1 text-sm fw-6">
                                                <ul>
                                                    <Link href="/notification"
                                                        className="d-block py-1 text-black">Tất
                                                        cả thông báo
                                                    </Link>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mb-075 parent">
                                            <div className="position-relative fw-6"><span
                                                className="h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-color-be bg-par"
                                                style={{ top: -2 }}>
                                                <i className="text-lg bx bxs-game ic-par"></i>
                                            </span>
                                                <span className="ml-25r d-block text-par">Trò chơi
                                                </span>
                                            </div>
                                            <div className="ml-275 mt-1 text-sm fw-6">
                                                <ul>
                                                    <a href="/withdraw-items"
                                                        className="d-block py-1 {{ request()->is('withdraw-items') ? 't-color' : 'text-black' }}">Rút
                                                        vật phẩm</a>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mb-075 parent">
                                            <div className="position-relative fw-6">
                                                <span
                                                    className="h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-color-be bg-par"
                                                    style={{ top: -2 }}>
                                                    <i className="text-lg bx bxs-wallet-alt ic-par"></i>
                                                </span>
                                                <span className="ml-25r d-block text-par">Giao dịch
                                                </span>
                                            </div>
                                            <div className="ml-275 mt-1 text-sm fw-6">
                                                <ul>
                                                    <Link href="/recharge"
                                                        className="d-block py-1 text-black">Nạp
                                                        thẻ cào tự động</Link>
                                                    <a className="cursor-pointer d-block py-1 atm text-black">Nạp qua
                                                        ATM/MOMO</a>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mb-075 parent">
                                            <div className="position-relative fw-6">
                                                <span
                                                    className="h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-color-be bg-par"
                                                    style={{ top: -2 }}>
                                                    <i className="text-lg bx bxs-purchase-tag-alt ic-par"></i>
                                                </span>
                                                <span className="ml-25r d-block text-par">Voucher
                                                </span>
                                            </div>
                                            <div className="ml-275 mt-1 text-sm fw-6">
                                                <ul>
                                                    <a href="/voucher"
                                                        className="d-block py-1 text-black">Danh
                                                        sách voucher</a>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mb-075 parent">
                                            <div className="position-relative fw-6">
                                                <span
                                                    className="h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-color-be bg-par"
                                                    style={{ top: -2 }}>
                                                    <i className="text-lg bx bxs-notepad ic-par"></i>
                                                </span>
                                                <span className="ml-25r d-block text-par">Lịch sử</span>
                                            </div>
                                            <div className="ml-275 mt-1 text-sm fw-6">
                                                <ul>
                                                    <Link href="/history/game" className="d-block py-1 text-black">Chơi game</Link>
                                                    <Link href="/history/add_card" className="d-block py-1 text-black' }}">Nạp thẻ</Link>
                                                    <Link href="/history/transaction" className="d-block py-1 text-black">Giao dịch</Link>
                                                    <Link href="/history/buy_nick" className="d-block py-1 text-black">Mua tài khoản (nick)</Link>
                                                    <Link href="/history/buy_items" className="d-block py-1 text-black">Mua hòm v.phẩm</Link>
                                                    <Link href="/history/service" className="d-block py-1 text-black' }}">Mua vật phẩm (Dịch vụ)</Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >

            {/* popup - home */}
            <div className="popup-home" style={{ zIndex: 1002, display: 'none' }}>
                <div className="modal-home" style={{ marginTop: '15vh' }}>
                    <div className="tb-home">
                        <div className="t-color fw-7">
                            <i className="position-relative bx bxs-bell-ring text-xl" style={{ top: 3 }}></i>
                            THÔNG BÁO
                        </div>
                        <button type="button" className="el-dialog__headerbtn">
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
                            <button type="button" className="ttb">
                                <span>Tắt thông báo </span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            {/* popup - login */}
            <div className="popup-login" style={{ zIndex: 1005, display: 'none' }}>
                <div className="modal-login" style={{ marginTop: '15vh' }}>
                    <div className="login-header">
                        <span className="login-title"></span>
                        <button type="button" className="login-headerbtn">
                            <i className="login-close el-dialog__close el-icon btn-close"></i>
                        </button>
                    </div>
                    <div className="login-body">
                        <div className="w-100">
                            <img className="h-4r mx-auto"
                                src="https://cdns.diongame.com/static/image-87a3f611-cc43-4bc6-a047-a5de520ad6b6.png" alt='' />
                            <h3 className="text-center text-lg fw-7 tw-text-blue mb-2r">
                                ĐĂNG NHẬP TÀI KHOẢN
                            </h3>
                            {/* <div className="mb-3 error-login">
                                    <div className="t-color fw-6 text-sm py-2 px-3 bg-color br-025 w-100 d-block bor-1-red">
                                    </div>
                                </div> */}
                            <button className="border-w-1 bg-blue br-025 h-275r px-075 fw-6 w-100 bor-col-blue text-white"
                                style={{ border: 0 }}>
                                <span className="ml-2r position-relative">
                                    <i className="position-absolute bx bxl-facebook-circle text-2xl"
                                        style={{ top: -3, left: -30 }}></i>
                                    Đăng nhập bằng Facebook
                                </span>
                            </button>
                            <div className="mt-125r sigin">
                                <form action="{{ route('login') }}" method="POST" encType="multipart/form-data"
                                    id="form_login">
                                    <div className="mt-2 mb-075">
                                        <label className="d-block fw-6 text-sm text-blue">
                                            Tài khoản *
                                        </label>
                                        <input className="w-100 border-1 bor-col-blue br-025 h-275r px-075 fw-6" name="username"
                                            id="username" />
                                    </div>
                                    <div className="mb-075">
                                        <label className="d-block fw-6 text-sm text-blue">
                                            Mật khẩu *
                                        </label>
                                        <input type="password" className="w-100 border-1 bor-col-blue br-025 h-275r px-075 fw-6"
                                            name="password" id="password" />
                                    </div>
                                    <div className="text-end mb-2 text-blue text-sm fw-6">
                                        <a> Quên mật khẩu </a>
                                    </div>
                                    <button type="submit"
                                        className="border-1 t-color br-025 h-275r px-075 fw-6 w-100 dx text-white mb-075">
                                        <span className="position-relative"> ĐĂNG NHẬP </span>
                                    </button>
                                    <button type="button"
                                        className="border-1 border-gray br-025 h-275r px-075 fw-6 w-100 bg-box text-gray ct-regis">
                                        <span className="position-relative"> Tạo tài khoản </span>
                                    </button>
                                </form>
                            </div>
                            <div className="mt-125r sigup" style={{ display: 'none' }}>
                                <form action="" method="POST" encType="multipart/form-data">
                                    <div className="mt-2 mb-075 d-grid grid-temp-col-12 gap-2">
                                        <div className="gc-7">
                                            <label className="d-block fw-6 text-sm text-blue">
                                                Tên tài khoản *
                                            </label>
                                            <input name="username" type="text"
                                                className="w-100 border-w-1 bor-1-col-blue br-025 h-275r px-075 fw-6" />
                                        </div>
                                        <div className="gc-5">
                                            <label className="d-block fw-6 text-sm text-blue">
                                                Số điện thoại *
                                            </label>
                                            <input type="number" name="phone"
                                                className="w-100 border-w-1 bor-1-col-blue br-025 h-275r px-075 fw-6" />
                                        </div>
                                    </div>
                                    <div className="mb-075">
                                        <label className="d-block fw-6 text-sm text-blue">
                                            Mật khẩu *
                                        </label>
                                        <input id="password" type="password" name="password"
                                            className="w-100 border-w-1 bor-1-col-blue br-025 h-275r px-075 fw-6" />
                                    </div>
                                    <div className="mb-075">
                                        <label className="d-block fw-6 text-sm text-blue">
                                            Nhập lại mật khẩu *
                                        </label>
                                        <input type="password" className="w-100 border-w-1 bor-1-col-blue br-025 h-275r px-075 fw-6" />
                                    </div>
                                    <button type="submit"
                                        className="border-1 t-color br-025 h-275r px-075 fw-6 w-100 dx text-white mb-075">
                                        <span className="position-relative"> ĐĂNG KÝ </span>
                                    </button>
                                    <button type="button"
                                        className="border-1 border-gray br-025 h-275r px-075 fw-6 w-100 bg-box text-gray ct-login">
                                        <span className="position-relative"> Đăng nhập </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
