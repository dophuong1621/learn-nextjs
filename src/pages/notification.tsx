import BtnMenu from '@/components/btn-menu';
import BoxLeft from '@/components/layouts/sidebar';
import * as React from 'react';

export interface INotificationProps {
}

export default function Notification (props: INotificationProps) {
  return (
    <div>
    <div className="px-2 gap-2 ct d-grid mx-auto">
        <BoxLeft></BoxLeft>
        <BtnMenu></BtnMenu>
        <div className="gc-8 gc-12i">
            <div className="grid-temp-col-12 bg-box gap-3 d-grid">
                <div className="gc-12">
                    <div className="py-sm-3 px-125 w-100 br-025 p-1r">
                        <div className="mb-3 pb-2 border-tb">
                            <h2 className="fw-6 text-lg">Thông báo</h2>
                            <p className="text-xs">
                                Những thông báo quá 7 ngày sẽ tự động xóa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
