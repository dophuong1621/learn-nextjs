import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';


class FooterComponent extends Component {
    render() {
        return <>
            <footer>
                <section className="bg-blackk text-center text-white ft">
                    <div className="content-ft">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 fw-7">
                            <span className="sp-ft-1">
                                <Image src="https://cdns.diongame.com/static/image-87a3f611-cc43-4bc6-a047-a5de520ad6b6.png"
                                    className="img-ft" alt="" width={143} height={48} />
                                <span className="text-uppercase">hiharobux.com - shop acc roblox chính chủ stream oops hiha</span>
                            </span>
                            <p className="mar-p d-none d-md-block">
                                <Link href="#" className="pri">Privacy Policy</Link>
                            </p>
                            <p className="mar-p d-none d-md-block">
                                <Link href="#" className="pri">Terms of Service</Link>
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ft-t-2">
                            <h2 className="t1-ft2 fw-7 mb-2">Về chúng tôi</h2>
                            <p className="t2-ft2 fw-5 mb-2">Chúng tôi luôn lấy uy tín đặt trên hàng đầu đối với khách hàng, hy vọng chúng tôi
                                sẽ được phục vụ các bạn. Cám ơn!</p>
                            <span className="fw-6">Thời gian hỗ trợ:</span><br />
                            <span className="fw-5">Sáng: 7h30 -{'>'} 11h30 | Chiều: 13h00 -{'>'} 21h00</span>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ft-t-3 fw-6">
                            <h5 className="t1-ft3 mb-2">HIHAROBUX.COM</h5>
                            <span>HỆ THỐNG BÁN ACC TỰ ĐỘNG <br />ĐẢM BẢO UY TÍN VÀ CHẤT LƯỢNG.</span><br />
                            <Link href="https://www.messenger.com/t/112515915054238">
                                <Image src="https://cdns.diongame.com/static/messenger-01.svg" style={{ maxWidth: 220 }} height={68} width={220} alt="" />
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="text-center ft2">
                    <Link className="text-white fw-5" href="https://mdbootstrap.com/">
                        hiharobux.com - [Version v3.1]
                    </Link>
                </div>
            </footer>
        </>
    }
}
export default FooterComponent