import { useState } from 'react'

function ModalLogin({ closeModalLogin }: any) {
    const [contentLogin, setContentLogin] = useState('login')
    return (
        <div className="popup-login" style={{ zIndex: 1005 }}>
            <div className="modal-login" style={{ marginTop: '15vh' }}>
                <div className="login-header">
                    <span className="login-title"></span>
                    <button type="button" className="login-headerbtn" onClick={() => closeModalLogin(false)}>
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
                        <div className={`mt-125r sigin ${contentLogin === 'register' ? 'd-none' : ''}`}>
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
                                    className="border-1 t-color br-025 h-275r px-075 fw-6 w-100 dx text-white mb-075" >
                                    <span className="position-relative" > ĐĂNG NHẬP </span>
                                </button>
                                <button type="button"
                                    className="border-1 border-gray br-025 h-275r px-075 fw-6 w-100 bg-box text-gray ct-regis" onClick={() => setContentLogin('register')}>
                                    <span className="position-relative"> Tạo tài khoản </span>
                                </button>
                            </form>
                        </div>
                        <div className={`mt-125r sigup ${contentLogin === 'login' ? 'd-none' : ''}`} >
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
                                    className="border-1 border-gray br-025 h-275r px-075 fw-6 w-100 bg-box text-gray ct-login" onClick={() => setContentLogin('login')}>
                                    <span className="position-relative"> Đăng nhập </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin