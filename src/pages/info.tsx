import * as React from 'react';
import BtnMenu from '@/components/btn-menu';
import BoxLeft from '@/components/layouts/sidebar';
import Link from 'next/link';

export interface IInfoProps {
}

export default function Info(props: IInfoProps) {
    return (
        <div>
            <div className="px-2 gap-2 ct d-grid mx-auto">
                <BoxLeft></BoxLeft>
                <BtnMenu></BtnMenu>
                <div className="gc-8 gc-12i">
                    <div className="gap-3 d-grid grid-temp-col-12">
                        <div className="d-sm-none gc-12 d-block">
                            <div className="d-grid grid-temp-col-12 gap-2 padding-05r bg-box br-025">
                                <div className="gc-3 d-flex align-items-center ">
                                    <img src="/image/unknown-avatar.jpg" className="w-100 br-9999 bor-1" alt='' />
                                </div>
                                <div className="gc-9 d-flex align-items-center">
                                    <div className="ms-2">
                                        <p><b>ID:</b> 454992</p>
                                        <p className="text-base"><b>Số dư:</b> <span className="t-color fw-7">0đ</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gc-12">
                            <div className="fw-6 px-075 py-2 bg-box br-025 gap-2 grid-temp-col-12 d-grid mb-1">
                                <div className="gc-5">Tên Tài Khoản</div>
                                <div className="gc-7">
                                    jirim
                                </div>
                            </div>
                            <div className="fw-6 px-075 py-2 bg-box br-025 gap-2 grid-temp-col-12 d-grid mb-1">
                                <div className="gc-5">Số Điện Thoại</div>
                                <div className="gc-7">
                                    0123456789

                                </div>
                            </div>
                            <div className="fw-6 px-075 py-2 bg-box br-025 gap-2 grid-temp-col-12 d-grid mb-1">
                                <div className="gc-5">Email</div>
                                <div className="gc-7">
                                    ———
                                </div>
                            </div>
                            <div className="fw-6 px-075 py-2 bg-box br-025 gap-2 grid-temp-col-12 d-grid mb-1">
                                <div className="gc-5">Ngày Tham Gia</div>
                                <div className="gc-7">
                                    28/02/2023 15:13:16
                                </div>
                            </div>
                            <div className="fw-6 px-075 py-2 bg-box br-025 gap-2 grid-temp-col-12 d-grid mb-1">
                                <div className="gc-5 d-flex align-items-center">Thoát</div>
                                <div className="gc-7">
                                    <button className="fw-7 text-xs py-1 px-2 br-025 text-white dx">
                                        <Link href="" className="text-white">
                                            Đăng xuất
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
