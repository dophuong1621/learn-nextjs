import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import ModalAtm from './atm'

function SidebarMenu({ closeSidebarMenu }: any) {
    const router = useRouter()
    const [modalAtm, setModalAtm] = useState(false)

    return (
        <div className="btn-menu-left" >
            {modalAtm && <ModalAtm closeModalAtm={setModalAtm} />}
            <div className="modal-menu el-drawer__open"style={{ zIndex: 1011 }}>
                <div className="modal-contentt ltr" style={{ width: 280 }}>
                    <header id="btn-menu-title" className="btn-menu-header">
                        <div>
                            <b>DANH MỤC MENU</b>
                        </div>
                        <button type="button" className="btn-close-menu" onClick={() => closeSidebarMenu(false)}>
                            <i className="btn-close btn-close-black"></i>
                        </button>
                    </header>
                    <section className="btn-menu-body">
                        <div style={{ maxHeight: '95vh', overflow: 'hidden auto' }}>
                            <div className="w-100 padding-05r position-sticky " style={{ zIndex: 200, top: '5rem' }}>
                                <div className="d-grid grid-temp-col-12 gap-2 pe-2 pb-2">
                                    <div className="gc-3 d-flex align-items-center">
                                        <img className="w-100 br-9999 border-w-1" src="/image/unknown-avatar.jpg" alt='' />
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
                                        <div className="position-relative fw-6">
                                            <span
                                                className={`h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-par ${router.pathname === '/info' || router.pathname === '/repassword' ? 'dx' : 'bg-color-be'}`}
                                                style={{ top: -2 }}>
                                                <i className={`text-lg bx bxs-user ic-par ${router.pathname === '/info' || router.pathname === '/repassword' ? 'text-white' : ''}`}></i>
                                            </span>
                                            <span className={`ml-25r d-block text-par ${router.pathname === '/info' || router.pathname === '/repassword' ? 't-color' : ''}`}>Tài khoản</span>
                                        </div>
                                        <div className="ml-275 mt-1 text-sm fw-6">
                                            <ul>
                                                <Link href="/info" className={`d-block py-1 ${router.pathname === '/info' ? 't-color' : 'text-black'}`}>Thông tin chung</Link>
                                                <Link href="/repassword" className={`d-block py-1 ${router.pathname === '/repassword' ? 't-color' : 'text-black'}`}>Đổi mật khẩu</Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-075 parent">
                                        <div className="position-relative fw-6">
                                            <span
                                                className={`h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-par ${router.pathname === '/notification' ? 'dx' : 'bg-color-be'}`}
                                                style={{ top: -2 }}>
                                                <i className={`text-lg bx bxs-bell ic-par ${router.pathname === '/notification' ? 'text-white' : ''}`}></i>
                                            </span>
                                            <span className={`ml-25r d-block text-par ${router.pathname === '/notification' ? 't-color' : 'text-black'}`}>Thông báo </span>
                                        </div>
                                        <div className="ml-275 mt-1 text-sm fw-6">
                                            <ul>
                                                <Link href="/notification" className={`d-block py-1 ${router.pathname === '/notification' ? 't-color' : 'text-black'}`}>
                                                    Tất cả thông báo
                                                </Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-075 parent">
                                        <div className="position-relative fw-6">
                                            <span
                                                className={`h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-par ${router.pathname === '/withdraw-items' ? 'dx' : 'bg-color-be'}`}
                                                style={{ top: -2 }}>
                                                <i className={`text-lg bx bxs-game ic-par ${router.pathname === '/withdraw-items' ? 'text-white' : ''}`}></i>
                                            </span>
                                            <span className={`ml-25r d-block text-par ${router.pathname === '/withdraw-items' ? 't-color' : 'text-black'}`}>Trò chơi
                                            </span>
                                        </div>
                                        <div className="ml-275 mt-1 text-sm fw-6">
                                            <ul>
                                                <Link href="/withdraw-items" className={`d-block py-1 ${router.pathname === '/withdraw-items' ? 't-color' : 'text-black'}`}>
                                                    Rút vật phẩm
                                                </Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-075 parent">
                                        <div className="position-relative fw-6">
                                            <span
                                                className={`h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-par ${router.pathname === '/recharge' ? 'dx' : 'bg-color-be'}`}
                                                style={{ top: -2 }}>
                                                <i className={`text-lg bx bxs-wallet-alt ic-par ${router.pathname === '/recharge' ? 'text-white' : ''}`}></i>
                                            </span>
                                            <span className={`ml-25r d-block text-par ${router.pathname === '/recharge' ? 't-color' : 'text-black'}`}>Giao dịch
                                            </span>
                                        </div>
                                        <div className="ml-275 mt-1 text-sm fw-6">
                                            <ul>
                                                <Link href="/recharge" className={`d-block py-1 ${router.pathname === '/recharge' ? 't-color' : 'text-black'}`}>Nạp thẻ cào tự động</Link>
                                                <a className="cursor-pointer d-block py-1 atm text-black" onClick={() => setModalAtm(true)}>Nạp qua ATM/MOMO</a>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-075 parent">
                                        <div className="position-relative fw-6">
                                            <span
                                                className={`h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-par ${router.pathname === '/voucher' ? 'dx' : 'bg-color-be'}`}
                                                style={{ top: -2 }}>
                                                <i className={`text-lg bx bxs-purchase-tag-alt ic-par ${router.pathname === '/voucher' ? 'text-white' : ''}`}></i>
                                            </span>
                                            <span className={`ml-25r d-block text-par ${router.pathname === '/voucher' ? 't-color' : ''}`}>Voucher
                                            </span>
                                        </div>
                                        <div className="ml-275 mt-1 text-sm fw-6">
                                            <ul>
                                                <Link href="/voucher" className={`d-block py-1 ${router.pathname === '/voucher' ? 't-color' : 'text-black'}`}>Danh sách voucher</Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-075 parent">
                                        <div className="position-relative fw-6">
                                            <span
                                                className={`h-175r w-175r br-9999 d-inline-flex justify-content-center align-items-center position-absolute bg-par ${router.pathname.slice(0, router.pathname.lastIndexOf('/')) === '/history' ? 'dx' : 'bg-color-be'}`}
                                                style={{ top: -2 }}>
                                                <i className={`text-lg bx bxs-notepad ic-par ${router.pathname.slice(0, router.pathname.lastIndexOf('/')) === '/history' ? 'text-white' : ''}`}></i>
                                            </span>
                                            <span className={`ml-25r d-block text-par ${router.pathname.slice(0, router.pathname.lastIndexOf('/')) === '/history' ? 't-color' : 'text-black'}`}>Lịch sử</span>
                                        </div>
                                        <div className="ml-275 mt-1 text-sm fw-6">
                                            <ul>
                                                <Link href="/history/game" className={`d-block py-1 ${router.pathname === '/history/game' ? 't-color' : 'text-black'}`}>Chơi game</Link>
                                                <Link href="/history/add_card" className={`d-block py-1 ${router.pathname === '/history/add_card' ? 't-color' : 'text-black'}`}>Nạp thẻ</Link>
                                                <Link href="/history/transaction" className={`d-block py-1 ${router.pathname === '/history/transaction' ? 't-color' : 'text-black'}`}>Giao dịch</Link>
                                                <Link href="/history/buy_nick" className={`d-block py-1 ${router.pathname === '/history/buy_nick' ? 't-color' : 'text-black'}`}>Mua tài khoản (nick)</Link>
                                                <Link href="/history/buy_items" className={`d-block py-1 ${router.pathname === '/history/buy_items' ? 't-color' : 'text-black'}`}>Mua hòm v.phẩm</Link>
                                                <Link href="/history/service" className={`d-block py-1 ${router.pathname === '/history/service' ? 't-color' : 'text-black'}`}>Mua vật phẩm (Dịch vụ)</Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="overlayy" onClick={() => closeSidebarMenu(false)}></div>
        </div >
    )
}

export default SidebarMenu