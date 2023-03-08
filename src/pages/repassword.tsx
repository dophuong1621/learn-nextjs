import * as React from 'react';
import BoxLeft from '@/components/layouts/sidebar';
import BtnMenu from '@/components/btn-menu';

export interface RePasswordProps {
}

export default function RePassword (props: RePasswordProps) {
  return (
    <div>
        <div className="px-2 gap-2 ct d-grid mx-auto">
            <BoxLeft></BoxLeft>
            <BtnMenu></BtnMenu>
            <div className="gc-8 gc-12i">
                <div className="py-sm-3 px-125 w-100 br-025 bg-box p-1r">
                    <div className="pb-2 border-bot-w mb-3">
                        <h2 className="fw-6 text-lg dmk">Đổi Mật Khẩu</h2>
                        <p className="text-xs">
                            Để bảo mật tài khoản, vui lòng không chia sẻ cho người khác.
                        </p>
                    </div>
                    <form className="mkht" action="{{ route('repass') }}" method="POST">
                            {/* <div className="mb-3" style={{maxWidth: '24rem'}}>
                                <span className="py-2 px-075 br-025 text-sm w-100 d-block fw-6 bg-color bor-1-red t-color">
                                </span>
                            </div>
                            <div className="mb-3" style={{maxWidth: '24rem'}}>
                                <span className="py-2 px-075 br-025 text-sm w-100 d-block fw-6 bg-greenn bor-1-green text-white">
                                </span>
                            </div> */}
                        <div className="mb-2">
                            <label className="text-sm">
                                Mật khẩu hiện tại
                            </label>
                            <input type="password" className="px-075 bor-1 w-100 h-25r br-025" name="currentPass" />
                        </div>
                        <div className="mb-2">
                            <label className="text-sm">
                                Mật khẩu mới
                            </label>
                            <input type="password" className="px-075 bor-1 w-100 h-25r br-025" name="password" />
                        </div>
                        <div className="mb-3">
                            <label className="text-sm">
                                Nhập lại mật khẩu mới
                            </label>
                            <input type="password" className="px-075 bor-1 w-100 h-25r br-025" name="rePassword" />
                        </div>
                        <button type="submit" className="text-white dx fw-6 px-2r br-025 h-25r">
                            Xác Nhận
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
