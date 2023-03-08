import * as React from 'react';
import BtnMenu from '@/components/btn-menu';
import BoxLeft from '@/components/layouts/sidebar';

export interface IBuyNickProps {
}

export default function BuyNick(props: IBuyNickProps) {
    return (
        <div>
            <div className="px-2 gap-2 ct d-grid mx-auto">
                <BoxLeft></BoxLeft>
                <BtnMenu></BtnMenu>
                <div className="gc-8 gc-12i">
                    <div className="bg-box py-sm-3 px-125 w-100 br-025 p-05r">
                        <div className="mb-sm-3 mb-2 pb-2 border-bot-w">
                            <h2 className="fw-6 text-lg">Danh Sách Mua Nick</h2>
                            <p className="text-sm">Lịch sử tài khoản game mà bạn đã mua.</p>
                        </div>
                        <div
                            className="br-025 fw-5 lh-175 mb-3 my-2 px-075 py-1 text-base war">
                            <b className="t-color">* Lưu ý: </b>
                            <p>
                                Sau khi mua acc các bạn vui lòng thay đổi ngay email và mật khẩu
                                tài khoản.
                            </p>
                        </div>
                        <div>
                            <table className="rounded-x-025 w-100">
                                <thead>
                                    <tr className="ls-0025 vct fw-6 bor-1 border-b-0">
                                        <th className="px-2 py-2">Thông tin</th>
                                        <th className="px-2 py-2 tw-max-w-sm">Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white tw-border tw-border-t-0 tw-rounded"></tbody>
                            </table>
                            <div className="my-2">
                                <div className="tw-min-w-max">
                                    <section
                                        className="tw-flex tw-justify-between tw-py-1 tw-text-gray-700 tw-font-montserrat tw-select-none">
                                        <ul className="tw-flex tw-items-center">
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
