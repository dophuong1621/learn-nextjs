import { ReactNode, useState } from 'react'

function ModalAtm({ closeModalAtm }: any) {
    const [contentAtm, setContentAtm] = useState('')
    return (
        <div className="load-atm">
            <div className="modal-atm" style={{ zIndex: 1010 }}>
                <div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog el-dialog-450 tw-dialog-trans">
                    <div className="el-dialog__header">
                        <div className="text-white fw-6">
                            NẠP TIỀN - CHUYỂN KHOẢN QUA
                        </div>
                        <button type="button" aria-label="Close" className="el-dialog__headerbtn" onClick={() => closeModalAtm(false)}>
                            <i className="el-dialog__close el-icon btn-close btn-close-white"></i>
                        </button>
                    </div>
                    <div className="el-dialog__body">
                        <div className="my-3" style={{ wordBreak: 'break-word' }}>
                            <div className="d-grid grid-temp-col-12 gap-3">
                                <div className="gc-6 gc-12i">
                                    <button className="px-3 align-items-center br-025 w-100 d-flex h-3r border bank" onClick={() => setContentAtm('atm')}>
                                        <img className="w-15 lazyLoad isLoaded" src="/image/bank.png" alt='' />
                                        <span className="ml-05 fw-6 text-bank">Ngân Hàng (ATM)</span>
                                    </button>
                                </div>
                                <div className="gc-6 gc-12i">
                                    <button className="px-3 align-items-center br-025 w-100 d-flex h-3r border momo" onClick={() => setContentAtm('momo')}>
                                        <img className="w-15 lazyLoad isLoaded" src="/image/momo.png" alt='' />
                                        <span className="ml-05 fw-6 text-momo">Ứng dụng MOMO</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className={`mt-3 ct-nt ${contentAtm === 'atm' || contentAtm === 'momo' ? 'd-none' : ''}`} >
                                    <div className="text-sm fw-6">
                                        <p>
                                            <span>
                                                <i className="bx bx-caret-right"></i>
                                            </span> Hệ thống nạp <b className="t-color">ATM/MOMO tự động 24/24</b>, Nạp 100k
                                            nhận
                                            110k tiền shop
                                        </p>
                                        <p>
                                            <span>
                                                <i className="bx bx-caret-right"></i>
                                            </span>
                                            <b> Lưu ý: </b> Chuyển tiền
                                            nhanh 24/7 để tránh bị treo, chậm
                                            tiền! Nếu gửi đúng stk và nội dung mà 30p không nhận được tiền
                                            hoặc chuyển ghi sai nội dung vui lòng liên hệ page để được hỗ
                                            trợ.
                                        </p>
                                    </div>
                                </div>
                                <div className={`mt-3 ct-nt ${contentAtm === 'atm' || contentAtm === 'momo' ? 'd-none' : ''}`}>
                                    <label className="uppercase t-color fw-7 text-sm d-block mb-2">
                                        Quy Đổi Tiền Nạp ATM/MOMO
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="box-40">
                                            <div className="w-100 position-relative">
                                                <label className="d-inline-block position-absolute text-xs fw-5"
                                                    style={{ left: 10, top: 6 }}>
                                                    Số tiền bạn chuyển
                                                </label>
                                                <input type="number" placeholder=""
                                                    className="pt-075 px-2 h-3r br-025 border-w-2-gray w-100 text-sm fw-6" />
                                            </div>
                                            <span className="mt-1 position-absolute text-xs d-block fw-6">
                                                <i className="position-relative fw-5 bx bx-subdirectory-right"
                                                    style={{ top: 1 }}></i>
                                                0đ</span>
                                        </div>
                                        <div className="box-20">
                                            <i className="bx bx-transfer-alt text-lg"></i>
                                        </div>
                                        <div className="box-40">
                                            <div className="w-100 position-relative">
                                                <label className="d-inline-block position-absolute text-xs fw-5"
                                                    style={{ left: 10, top: 6 }}>
                                                    Tiền nhận trên shop
                                                </label>
                                                <input readOnly placeholder=""
                                                    className="pt-075 px-2 h-3r br-025 border-w-2-gray w-100 text-sm fw-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* content popup atm */}
                                <div className="mt-3" id="ct-bank" style={{ display: `${contentAtm === 'atm' ? 'block' : 'none'}` }}>
                                    <div>
                                        <div>
                                            <div className="text-sm t-color line-h-15">
                                                <p>
                                                    <span className="text-black">
                                                        <strong>THÔNG TIN TÀI KHOẢN NGÂN HÀNG</strong>
                                                    </span>
                                                </p>
                                                <p>
                                                    <strong>CHỦ TÀI KHOẢN: </strong>
                                                    <span>
                                                        <strong>TRẦN VIỆT TÙNG</strong>
                                                    </span>
                                                </p>
                                                <p>
                                                    <strong>NGÂN HÀNG : </strong>
                                                    <span>
                                                        <strong>VIETCOMBANK</strong>
                                                    </span>
                                                </p>
                                                <p>
                                                    <strong>SỐ TÀI KHOẢN : </strong>
                                                    <span>
                                                        <strong>0451000413951</strong>
                                                    </span>
                                                </p>
                                            </div>
                                            <button
                                                className="text-white uppercase fw-7 text-xs px-2 br-025 h-15r mt-1 bg-gray border-0">
                                                Copy số tài khoản
                                            </button>
                                        </div>
                                        <div className="border-bot-w my-075"></div>
                                        <div className="my-2">
                                            <p className="fw-6 text-sm mb-1">
                                                Nội dung chuyển khoản:
                                            </p>
                                            <div className="position-relative">
                                                <input readOnly value="nap1650845"
                                                    className="t-color fw-8 text-lg px-075 bor-col-red border-dashed w-100 bor-w-2 br-025 h-25r" />
                                                <button
                                                    className="text-white fw-6 text-sm py-1 px-3 dx br-025 align-items-center d-flex h-15r position-absolute"
                                                    style={{ top: 8, right: 8 }}>
                                                    COPY NỘI DUNG
                                                </button>
                                            </div>
                                            <div className="mt-2 fw-6 text-sm">
                                                <i className="ml-075 bx bxs-upvote"></i> Khi chuyển khoản qua Ngân hàng (ATM)
                                                bạn
                                                cần ghi nội dung
                                                <b className="mx-1 t-color">nap1650845 </b>bên trên.
                                            </div>
                                            <div className="mt-1 text-sm fw-6 t-color">
                                                <i>{`Lưu ý: Sau khi chuyển khoản xong, hãy chờ "vài phút" rồi ấn `}<b>
                                                    {`"Xác nhận. Tôi đã chuyển"`}</b>.
                                                </i>
                                            </div>
                                            <button className="my-2 h-25r fw-6 br-025 text-white px-075 border-0 bg-green"
                                                style={{ backgroundColor: '#1a9d60' }}>
                                                Xác nhận. Tôi đã chuyển
                                            </button>
                                            <div className="mt-1 fw-6 text-sm t-color">
                                                <i>
                                                    <p>
                                                        {`Giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không được xử lý
                                                tự động. Hãy liên hệ Fanpage để được hỗ trợ.`}
                                                    </p>
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* content popup momo */}
                                <div className="mt-3" id="ct-momo" style={{ display: `${contentAtm === 'momo' ? 'block' : 'none'}` }}>
                                    <div>
                                        <div>
                                            <div className="text-sm t-color-momo line-h-15">
                                                <p><strong>THÔNG TIN VÍ MOMO</strong></p>
                                                <p><strong>CHỦ TÀI KHOẢN: </strong>
                                                    <span className="t-color">
                                                        <strong>TRẦN VIỆT TÙNG</strong>
                                                    </span>
                                                </p>
                                                <p><strong>&#xFEFF;VÍ MOMO: </strong>
                                                    <span className="t-color"><strong>0398793456</strong>
                                                    </span>
                                                </p>
                                            </div>
                                            <button
                                                className="text-white uppercase fw-7 text-xs px-2 br-025 h-15r mt-1 bg-gray border-0">
                                                Copy số tài khoản ví MOMO
                                            </button>
                                        </div>
                                        <div className="border-bot-w my-075"></div>
                                        <div className="my-2">
                                            <p className="fw-6 text-sm mb-1">
                                                Nội dung <b className="t-color">ghi chú</b> khi chuyển:
                                            </p>
                                            <div className="position-relative">
                                                <input readOnly value="nap1650845"
                                                    className="t-color-momo fw-8 text-lg px-075 bor-col-red border-dashed w-100 bor-w-2 br-025 h-25r" />
                                                <button
                                                    className="text-white fw-6 text-sm py-1 px-3 bg-momo br-025 align-items-center d-flex h-15r position-absolute border-0"
                                                    style={{ top: 8, right: 8 }}>
                                                    COPY NỘI DUNG
                                                </button>
                                            </div>
                                            <div className="mt-2 fw-6 text-sm">
                                                <i className="ml-075 bx bxs-upvote"></i> Khi chuyển khoản qua
                                                ví Momo bạn
                                                cần ghi nội dung ghi chú
                                                <b className="mx-1 t-color-momo">nap1650845 </b>
                                                bên trên.
                                            </div>
                                            <div className="mt-1 fw-6 text-sm t-color">
                                                <p>
                                                    Lưu ý: Nếu quá 30 phút không nhận được tiền, vui lòng liên hệ page
                                                    hỗ trợ!
                                                </p>
                                                <i>{`- Giao dịch chuyển sai "Nội dung ghi chú" sẽ không
                                            được xử lý tự
                                            động. Hãy liên hệ Fanpage để được hỗ trợ.`} </i>
                                            </div>
                                        </div>
                                        <div className="border-bot-w my-075"></div>
                                        <div className="mt-1">
                                            <p className="fw-6 text-sm mb-1">
                                                Vui lòng chuyển trên 5000đ để được cộng tự động.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlayy" onClick={() => closeModalAtm(false)}></div>
        </div>
    )
}

export default ModalAtm