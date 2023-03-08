import * as React from 'react';
import BtnMenu from '@/components/btn-menu';
import BoxLeft from '@/components/layouts/sidebar';
import Link from 'next/link';

export interface WithdrawItemsProps {
}

export default function WithdrawItems(props: WithdrawItemsProps) {
    return (
        <div>
            <div className="px-2 gap-2 ct d-grid mx-auto">
                <BoxLeft></BoxLeft>
                <BtnMenu></BtnMenu>
                <div className="gc-8 gc-12i">
                    <h2 className="fw-7 text-xl mb-2">RÚT VẬT PHẨM (GAME)</h2>
                    <div className="grid-temp-col-12 d-grid mb-3 bg-box">
                        <button className="fw-8 text-white py-2 border-bot-w-red gc-4 position-relative rut-robux">
                            <span>Rút
                                <span className="d-sm-inline-block d-none">Robux</span><span className="d-sm-none">RB</span></span>
                            <p className="text-sm fw-6 rb">(Robux)</p>
                        </button>
                    </div>
                    <div className="bg-box px-125 py-sm-3 br-025 w-100 mb-3 p-05r">
                        <div className="tw-form-withdraw">
                            <div>
                                <div className="fw-7 pb-2 border-bot-w mb-2">
                                    Hiện có:
                                    <b className="t-color uppercase">
                                        0
                                        RB (Robux)
                                    </b>
                                </div>
                                <div className="gap-3 grid-temp-col-12 d-grid">
                                    <div className="gc-6 gc-12i">
                                        <form className="px-sm-0 px-2">
                                            <div className="mb-3"><label className="fw-6 text-sm d-block mb-2"><b>Bước
                                                1:</b> Chọn hình thức rút vật phẩm
                                            </label>
                                                <div className="el-select" style={{ width: '100%' }}>
                                                    <div className="el-input el-input--suffix">
                                                        <select autoComplete="off" aria-readonly="true"
                                                            placeholder="Chọn hình thức rút vật phẩm." className="el-input__inner">
                                                            <option value="" selected>Chọn hình thức rút vật phẩm.</option>
                                                            <option value="0">Mua Robux bằng Gamepass Sever vip</option>
                                                            <option value="1">Sever Vip Giới Hạn mua 50k, Nên Mua Gamepass</option>
                                                        </select>
                                                        <span className="el-input__suffix"><span className="el-input__suffix-inner"><i
                                                            className="fa fa-arrow-up"></i>

                                                        </span>
                                                        </span>
                                                    </div>
                                                    <div className="el-select-dropdown el-popper"
                                                        style={{ display: 'none', minWidth: 425.6 }}>
                                                        <div className="el-scrollbar" >
                                                            <div className="el-select-dropdown__wrap el-scrollbar__wrap"
                                                                style={{ marginBottom: -16, marginRight: -16 }}>
                                                                <ul className="el-scrollbar__view el-select-dropdown__list">
                                                                    <li className="el-select-dropdown__item"><span>Mua robux Bằng
                                                                        Gamepass
                                                                        Sever Vip </span></li>
                                                                    <li className="el-select-dropdown__item"><span>Sever Vip Giới
                                                                        Hạn mua
                                                                        50k, Nên Mua Gamepass</span></li>
                                                                </ul>
                                                            </div>
                                                            <div className="el-scrollbar__bar is-horizontal">
                                                                <div className="el-scrollbar__thumb"
                                                                    style={{ transform: 'translateX(0%)' }}>
                                                                </div>
                                                            </div>
                                                            <div className="el-scrollbar__bar is-vertical">
                                                                <div className="el-scrollbar__thumb"
                                                                    style={{ transform: 'translateY(0%)' }}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="fw-6 text-sm d-block mb-2"><b>Bước
                                                    2:</b> Chọn gói vật phẩm
                                                </label>
                                                <div className="el-select" style={{ width: '100%' }}>
                                                    <div className="el-input is-disabled el-input--suffix">
                                                        <input type="text" disabled readOnly
                                                            autoComplete="off" placeholder="Chọn gói vật phẩm."
                                                            className="el-input__inner" style={{ backgroundColor: '#f5f7fa', borderColor: ' #e4e7ed', color: '#c0c4cc' }} />
                                                        <span className="el-input__suffix">
                                                            <span className="el-input__suffix-inner">
                                                                <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="el-select-dropdown el-popper"
                                                        style={{ display: 'none', minWidth: 425.6 }}>
                                                        <div className="el-scrollbar" >
                                                            <div className="el-select-dropdown__wrap el-scrollbar__wrap"
                                                                style={{ marginBottom: -16, marginRight: -16 }}>
                                                                <ul className="el-scrollbar__view el-select-dropdown__list">
                                                                    <li className="el-select-dropdown__item"><span>85 RB</span></li>
                                                                    <li className="el-select-dropdown__item"><span>170 RB</span></li>
                                                                    <li className="el-select-dropdown__item"><span>255 RB</span></li>
                                                                    <li className="el-select-dropdown__item"><span>425 RB</span></li>
                                                                    <li className="el-select-dropdown__item"><span>850 RB</span></li>
                                                                    <li className="el-select-dropdown__item"><span>1700 RB</span></li>
                                                                    <li className="el-select-dropdown__item"><span>2550 RB</span></li>
                                                                </ul>
                                                            </div>
                                                            <div className="el-scrollbar__bar is-horizontal">
                                                                <div className="el-scrollbar__thumb"
                                                                    style={{ transform: 'translateX(0%)' }}>
                                                                </div>
                                                            </div>
                                                            <div className="el-scrollbar__bar is-vertical">
                                                                <div className="el-scrollbar__thumb"
                                                                    style={{ transform: 'translateY(0%)' }}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <b className="mb-2">Bước 3:</b>
                                            <div className="mb-2"><label className="fw-6 text-sm d-block mb-2">
                                                Nhập Tài khoản, mật khẩu (Roblox)
                                            </label>
                                                <div className="mb-2 el-input">
                                                    <input type="text" autoComplete="off"
                                                        placeholder="Tên đăng nhập Roblox" className="el-input__inner" />
                                                </div>
                                                <div className="el-input">
                                                    <input type="text" autoComplete="off"
                                                        placeholder="Nhập mật khẩu Roblox" className="el-input__inner" />
                                                </div>
                                            </div>
                                            <div className="mb-2"><label className="fw-6 text-sm d-block mb-2"><b>Hoặc</b></label>
                                                <label className="fw-6 text-sm mb-1 d-block">
                                                    Nhập link Gamepass / Svip
                                                </label>
                                                <div className="el-input">
                                                    <input type="text" autoComplete="off"
                                                        placeholder="Nhập Link Gamepass / SeverVip" className="el-input__inner" />
                                                </div>
                                            </div>
                                            <div className="text-sm py-1 mb-2 t-color">
                                                <b> Vui lòng tắt xác minh 2
                                                    bước
                                                    (xem hướng dẫn). </b>
                                            </div>
                                            <div className="mb-3"><button
                                                className="text-white border rvp fw-6 px-075 w-100 br-025 h-25r">
                                                RÚT VẬT PHẨM
                                            </button></div>
                                        </form>
                                    </div>
                                    <div className="gc-6 text-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-box px-125 py-3 br-025 w-100">
                        <div className="mb-3 pb-2 border-bot-w d-flex justify-content-center align-items-center">
                            <div className="d-inline-block">
                                <h2 className="text-lg fw-6">
                                    Danh Sách Rút Vật Phẩm
                                </h2>
                                <p className="text-sm">
                                    Đơn hàng bị từ chối sẽ tự động hoàn lại tiền shop, dùng điện
                                    thoại vui lòng kéo &quot;bảng danh sách&quot; ngang để xem hết thông
                                    tin.
                                </p>
                            </div>
                            <button type="button" className="text-white fw-6 px-1 rvp ml-2 br-025 position-relative border"
                                style={{ top: -1 }}>
                                <i className="relative bx bx-revision mr-1" style={{ top: 1 }}></i>
                                Làm mới
                            </button>
                        </div>
                        <div>
                            <table id="list" className="w-100">
                                <thead>
                                    <tr className="ttvp fw-6">
                                        <th className="tt py-2 px-2">
                                            Thông tin
                                        </th>
                                        <th className="py-2 px-2"><span>Chi tiết</span></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white tw-border tw-border-t-0 tw-rounded"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
