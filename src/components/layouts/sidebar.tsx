import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ModalAtm from '../modal/atm';
export interface BoxLeftProps {
}

export default function BoxLeft(props: BoxLeftProps) {
    const router = useRouter();
    const [modalAtm, setModalAtm] = useState(false)
    return (
        <div className="d-sm-block d-none ct-l">
            {modalAtm && <ModalAtm closeModalAtm={setModalAtm} />}
            <div className="px-0 py-0 w-100 position-sticky ct-l-2" style={{ zIndex: 200 }}>
                <div className="pb-2 pe-2 gap-2 menu-ava d-grid">
                    <div className="d-flex align-items-center ava">
                        <img className="ava-l w-100 br-9999" src="/image/unknown-avatar.jpg" alt='' />
                    </div>
                    <div className="ava-r">
                        <p className="d-flex align-items-center p">
                            <b className="me-1">ID:</b><span id="id-user"> 454992</span>
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
                                className={`br-9999 justify-content-center align-items-center w-175 h-175 d-inline-flex position-absolute  bg-par ${router.pathname === '/info' || router.pathname === '/repassword' ? 'dx' : 'bg-color-be'}`}
                                style={{ top: -2 }}>
                                <i className={`fas fa-user user ic-par ${router.pathname === '/info' || router.pathname === '/repassword' ? 'text-white' : ''}`}></i>
                            </span>
                            <span className={`d-block ml-25 text-par ${router.pathname === '/info' || router.pathname === '/repassword' ? 't-color' : ''}`}>Tài khoản</span>
                        </div>
                        <div className="fw-6 text-sm ml-275 mt-1">
                            <ul>
                                <Link href="/info" className={`py-1 d-block ${router.pathname === '/info' ? 't-color' : 'text-black'}`}>Thông tin chung </Link>
                                <Link href="/repassword" className={`py-1 d-block ${router.pathname === '/repassword' ? 't-color' : 'text-black'}`}>Đổi mật khẩu</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className={`br-9999 justify-content-center align-items-center w-175 h-175 d-inline-flex position-absolute bg-par ${router.pathname === '/notification' ? 'dx' : 'bg-color-be'}`}
                                style={{ top: -2 }}>
                                <i className={`bx bxs-bell-ring ic-par ${router.pathname === '/notification' ? 'text-white' : ''}`}></i>
                            </span>
                            <span className={`d-block ml-25 text-par ${router.pathname === '/notification' ? 't-color' : 'text-black'}`}>Thông báo
                            </span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul>
                                <Link href="/notification" className={`py-1 d-block  ${router.pathname === '/notification' ? 't-color' : 'text-black'}`}>
                                    Tất cả thông báo
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className={`br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute bg-par ${router.pathname === '/withdraw-items' ? 'dx' : 'bg-color-be'}`}
                                style={{ top: -2 }}>
                                <i className={`bx bxs-game ic-par ${router.pathname === '/withdraw-items' ? 'text-white' : ''}`}></i>
                            </span>
                            <span className={`ml-25 d-block text-par ${router.pathname === '/withdraw-items' ? 't-color' : 'text-black'}`}>Trò chơi</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul>
                                <Link href="/withdraw-items" className={`py-1 d-block ${router.pathname === '/withdraw-items' ? 't-color' : 'text-black'}`}>
                                    Rút vật phẩm
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className={`br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute bg-par ${router.pathname === '/recharge' ? 'dx' : 'bg-color-be'}`}
                                style={{ top: -2 }}>
                                <i className={`fa fa-credit-card ic-par ${router.pathname === '/recharge' ? 'text-white' : ''}`}></i>
                            </span>
                            <span className={`ml-25 d-block text-par ${router.pathname === '/recharge' ? 't-color' : ''}`}>Giao dịch</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul>
                                <Link href="/recharge" className={`py-1 d-block ${router.pathname === '/recharge' ? 't-color' : 'text-black'}`}>Nạp thẻ cào tự động</Link>
                                <span className="text-black py-1 d-block atm cursor-pointer" onClick={() => setModalAtm(true)}>Nạp qua ATM/MOMO</span>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className={`br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute bg-par ${router.pathname === '/voucher' ? 'dx' : 'bg-color-be'}`}
                                style={{ top: -2 }}>
                                <i className={`fa fa-tag ic-par ${router.pathname === '/voucher' ? 'text-white' : ''}`}></i>
                            </span>
                            <span className={`ml-25 d-block text-par ${router.pathname === '/voucher' ? 't-color' : ''}`}>Voucher</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1">
                            <ul>
                                <Link href="/voucher" className={`py-1 d-block ${router.pathname === '/voucher' ? 't-color' : 'text-black'}`}>Danh sách voucher</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-075 parent">
                        <div className="position-relative fw-6">
                            <span
                                className={`br-9999 w-175 h-175 justify-content-center align-items-center d-inline-flex position-absolute  bg-par ${router.pathname.slice(0, router.pathname.lastIndexOf('/')) === '/history' ? 'dx' : 'bg-color-be'}`}
                                style={{ top: -2 }}>
                                <i className={`bx bxs-notepad ic-par ${router.pathname.slice(0, router.pathname.lastIndexOf('/')) === '/history' ? 'text-white' : ''}`}></i>
                            </span>
                            <span className={`ml-25 d-block text-par ${router.pathname.slice(0, router.pathname.lastIndexOf('/')) === '/history' ? 't-color' : 'text-black'}`}>Lịch sử</span>
                        </div>
                        <div className="ml-275 fw-6 text-sm mt-1 ">
                            <ul>
                                <Link href="/history/game" className={` py-1 d-block ls-c ${router.pathname === '/history/game' ? 't-color' : 'text-black'}`}>Chơi game</Link>
                                <Link href="/history/add_card" className={` py-1 d-block ls-c ${router.pathname === '/history/add_card' ? 't-color' : 'text-black'}`}>Nạp thẻ</Link>
                                <Link href="/history/transaction" className={` py-1 d-block ls-c ${router.pathname === '/history/transaction' ? 't-color' : 'text-black'}`}>Giao dịch</Link>
                                <Link href="/history/buy_nick" className={` py-1 d-block ls-c ${router.pathname === '/history/buy_nick' ? 't-color' : 'text-black'}`}>Mua tài khoản (nick)</Link>
                                <Link href="/history/buy_items" className={` py-1 d-block ls-c ${router.pathname === '/history/buy_items' ? 't-color' : 'text-black'}`}>Mua hòm v.phẩm</Link>
                                <Link href="/history/service" className={` py-1 d-block ls-c ${router.pathname === '/history/service' ? 't-color' : 'text-black'}`}>Mua vật phẩm (Dịch vụ)</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
