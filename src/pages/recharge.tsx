import * as React from 'react';
import BoxLeft from '@/components/layouts/sidebar';

export interface RechargePageProps {
}

export default function RechargePage(props: RechargePageProps) {
    return (
        <div>
            <div className="px-2 gap-2 ct d-grid mx-auto">
            {/* @include('users.btn-menu') */}
                <BoxLeft></BoxLeft>
                <div className="gc-8 gc-12i">
                    <div className="px-125 py-sm-3 br-025 w-100 mb-3 bg-box p-1r">
                        <div className="pb-2 border-bot-w mb-3">
                            <h2 className="text-lg fw-6 ntc">Nạp Thẻ Cào</h2>
                            <p className="text-xs">
                                Tự động 24/7 - Nhập sai mệnh giá sẽ mất thẻ.
                            </p>
                        </div>
                        <div className="mb-3 error-nt form-nt">
                        </div>
                        <form className="form-nt" action="{{ route('rechargePrs') }}" method="POST" encType="multipart/form-data"
                            id="form_nt">
                            <div className="mb-2">
                                <label className="text-sm">
                                    Nhà mạng <b>(Ưu tiên Viettel, Vinaphone)</b></label>
                                <div className="text-sm gap-2 d-grid grid-temp-col-12 " id="homeNetwork">
                                    <button type="button" className="fw-7 px-075 br-025 bor-1 gc-4 h-25r bg-box viettel"
                                        data-type="0">
                                        <img style={{ filter: 'grayscale(100%)', maxWidth: '100%', height: 'auto' }}
                                            src="assetsU/image/viettel.png" alt='' />
                                    </button>
                                    <button type="button" className="fw-7 px-075 br-025 bor-1 gc-4 h-25r bg-box vina"
                                        data-type="1">
                                        <img style={{ filter: 'grayscale(100%)', maxWidth: '100%', height: 'auto' }}
                                            src="assetsU/image/vinaphone.png" alt='' />
                                    </button>
                                    <button type="button" className="fw-7 px-075 br-025 bor-1 gc-4 h-25r bg-box mobi"
                                        data-type="2">
                                        <img style={{ filter: 'grayscale(100%)', maxWidth: '100%', height: 'auto' }}
                                            src="assetsU/image/mobifone.png" alt='' />
                                    </button>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="text-sm"> Mệnh giá </label>
                                <select className="px-075 bor-1 br-025 w-100 h-25r bor-coler-be price" name="money_received">
                                    <option value="" selected disabled>Chọn mệnh giá</option>
                                    <option className="fw-5 t-color" value="10000">
                                        10,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="20000">
                                        20,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="30000">
                                        30,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="50000">
                                        50,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="100000">
                                        100,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="200000">
                                        200,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="300000">
                                        300,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="500000">
                                        500,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="1000000">
                                        1,000,000 VNĐ (nhận 100%)
                                    </option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="text-sm"> Mã thẻ </label>
                                <input className="px-075 bor-1 br-025 w-100 h-25r bor-coler-be idCard" name="pin" />
                            </div>
                            <div className="mb-3">
                                <label className="text-sm"> Serial thẻ </label>
                                <input className="px-075 bor-1 br-025 w-100 h-25r bor-coler-be seri" name="serial" />
                            </div>
                            <button type="submit" className="br-025 h-25r btn-nt fw-6 text-white">
                                Nạp Thẻ
                            </button>
                        </form>
                    </div>
                    <div className="line-h-175 text-sm py-1 px-075 br-025 my-2 text-br-color bg-box">
                        <div>
                            <p><span style={{color:'rgb(220, 38, 38);'}}><strong>Khi nạp thẻ mua nick tại web
                                shop&nbsp;nạp&nbsp;thẻ không trừ chiết khấu nạp 100k card = 100k tiền
                                shop</strong></span></p>
                            <p><span style={{color:'rgb(220, 38, 38);'}}><strong>Lưu ý: Vui lòng nạp đúng mệnh giá, sai mệnh giá
                                sẽ không được cộng tiền vào tài khoản.</strong></span></p>
                        </div>
                    </div>
                    <div className="bg-box br-025 mt-3 w-100">
                        <div className="py-075 px-125 border-bot-w tngn">
                            <h2 className="fw-6 text-lg">Thẻ Nạp Gần Nhất</h2>
                        </div>
                        <div id="list" className="padding-1r p-05r">
                            <table className="w-100">
                                <thead>
                                    <tr className="tr-table-tn fw-6 tb-tn">
                                        <th className="px-2 py-2 ">Thẻ Nạp</th>
                                        <th className="px-2 py-2">
                                            <span className="d-sm-block d-none">Mã thẻ/Seri</span>
                                            <span className="d-block d-sm-none">Chi tiết</span>
                                        </th>
                                        <th className="px-2 py-2 d-sm-block d-none">
                                            M.giá/T.nhận
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="recharge-ct">
                                    {/* <tr @foreach ($recharge as $rc)>
                                    <th className="px-2 py-2">{{ $type[$rc->type_charge] }}</th>
                                    <th className="px-2 py-2">{{ $rc->pin . '/' . $rc->serial }}</th>
                                    <th className="px-2 py-2">{{ number_format($rc->money_received, 0, '.', '.') }} đ</th>
                                </tr @endforeach> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
