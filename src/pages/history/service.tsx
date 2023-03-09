import BtnMenu from '@/components/btn-menu';
import BoxLeft from '@/components/layouts/sidebar';
import * as React from 'react';

export interface IServiceProps {
}

export default function Service(props: IServiceProps) {
    return (
        <div>
            <div className="px-2 gap-2 ct d-grid mx-auto">
                <BoxLeft></BoxLeft>
                <BtnMenu></BtnMenu>
                <div className="gc-8 gc-12i">
                    <div className="bg-box py-sm-3 px-125 w-100 br-025 p-05r">
                        <div className="mb-2 mb-sm-3 pb-2 border-bot-w">
                            <h2 className="fw-6 text-lg">Danh Sách Mua Vật Phẩm (Dịch Vụ)</h2>
                            <p className="text-sm">Đơn hàng bị từ chối sẽ tự động hoàn lại tiền shop, dùng điện thoại vui lòng kéo
                                &quot;bảng danh sách&quot; ngang để xem hết thông tin.</p>
                        </div>
                        <div>
                            <div className="fw-6 my-2 t-color">
                                Vui lòng đợi shop duyệt đơn tối đa 48 tiếng.
                            </div>
                            <div className="el-table el-table--fit el-table--enable-row-hover" style={{ width: '100%' }}>
                                <div className="hidden-columns">
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="el-table__header-wrapper">
                                    <table cellSpacing={0} cellPadding={0} border={0} className="el-table__header"
                                        style={{ width: 867 }}>
                                        <colgroup>
                                            <col className="el-table_1_column_1" width="747" />
                                            <col className="el-table_1_column_2" width="120" />
                                            <col className="gutter" width="0" />
                                        </colgroup>
                                        <thead className="has-gutter">
                                            <tr className="">
                                                <th rowSpan={1} colSpan={1}
                                                    className="el-table_1_column_1 is-leaf el-table__cell">
                                                    <div className="cell">THÔNG TIN</div>
                                                </th>
                                                <th colSpan={1} rowSpan={1}
                                                    className="el-table_1_column_2 is-leaf el-table__cell">
                                                    <div className="cell">TRẠNG THÁI</div>
                                                </th>
                                                <th className="el-table__cell gutter" style={{ width: 0, display: 'none' }}></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="el-table__body-wrapper is-scrolling-none">
                                    <table cellSpacing={0} cellPadding={0} border={0} className="el-table__body"
                                        style={{ width: 867 }}>
                                        <colgroup>
                                            <col className="el-table_1_column_1" width="747" />
                                            <col className="el-table_1_column_2" width="120" />
                                        </colgroup>
                                        <tbody>
                                        </tbody>
                                    </table>
                                    <div className="el-table__empty-block no-data" style={{ height: '100 %', width: 867 }}><span
                                        className="el-table__empty-text">Không có dữ liệu</span></div>
                                </div>
                                <div className="el-table__column-resize-proxy" style={{ display: 'none' }}></div>
                            </div>
                            <div className="my-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
