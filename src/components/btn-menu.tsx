import { useState } from 'react';
import SidebarMenu from './modal/menu';

export interface BtnMenuProps {
}

export default function BtnMenu(props: BtnMenuProps) {
    const [sidebarMenu, setSidebarMenu] = useState(false)
    return (
        <div className="d-sm-none">
            {sidebarMenu && <SidebarMenu closeSidebarMenu={setSidebarMenu} />}
            <button className="fw-7 position-fixed text-white h-275 px-075 rounded-r-full  border menu"
                style={{ zIndex: 101, top: '45%', left: -2, background: '#ff00007a' }} onClick={() => setSidebarMenu(true)}>
                <i className="position-relative bx bx-menu text-xl" style={{ top: -3 }}>
                </i>
                <div className="position-absolute text-xs d-inline-block" style={{ left: 7, top: 23 }}>
                    <small>Menu</small>
                </div>
            </button>
        </div>

    );
}
