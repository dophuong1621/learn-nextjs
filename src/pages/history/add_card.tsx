import * as React from 'react';
import BtnMenu from '@/components/btn-menu';
import BoxLeft from '@/components/layouts/sidebar';

export interface IAddCardProps {
}

export default function AddCard(props: IAddCardProps) {
    return (
        <div>
            <div className="px-2 gap-2 ct d-grid mx-auto">
                <BoxLeft></BoxLeft>
                <BtnMenu></BtnMenu>
                <div className="gc-8 gc-12i">
                    <div className="bg-box br-025 py-sm-3 px-125 w-100 p-05r">
                        <div className="border-bot-w mb-sm-3 mb-2 pb-2">
                            <h2 className="text-lg fw-6">Danh Sách Nạp Thẻ</h2>
                            <p className="text-sm">
                                Tháng 02 nạp: 
                                <b> 0đ </b> - Tổng nạp:
                                <b> 0đ </b>
                            </p>
                        </div>
                        <div>
                            <table className="tb-tn w-100">
                                <thead>
                                    <tr className="tr-table-tn fw-6">
                                        <th className="px-2 py-2 ">Thẻ Nạp</th>
                                        <th className="px-2 py-2">
                                            <span className="d-sm-block d-none">Mã thẻ/Seri</span>
                                            <span className="d-sm-none d-block">Chi tiết</span>
                                        </th>
                                        <th className="px-2 py-2 d-sm-block d-none">
                                            M.giá/T.nhận
                                        </th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                            <div className="my-2">
                                <div data-v-05c811c3="" className="tw-min-w-max">
                                    <section data-v-05c811c3=""
                                        className="tw-flex tw-justify-between tw-py-1 tw-text-gray-700 tw-font-montserrat tw-select-none">
                                        <ul data-v-05c811c3="" className="tw-flex tw-items-center">
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
