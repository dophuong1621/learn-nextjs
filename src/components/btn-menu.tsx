import * as React from 'react';

export interface BtnMenuProps {
}

export default function BtnMenu(props: BtnMenuProps) {
    return (
        <button className="d-sm-none position-fixed text-white h-275 px-075 rounded-r-full fw-7 border menu"
            style={{ zIndex: 101, top: '45%', left: -2, background: '#ff00007a' }}>
            <i className="position-relative bx bx-menu text-xl" style={{ top: -3 }}>
            </i>
            <div className="position-absolute text-xs d-inline-block" style={{ left: 7, top: 23 }}><small>Menu</small>
            </div>
        </button>
    );
}
