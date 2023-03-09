import { useState } from 'react';
import ModalHome from '@/components/modal/home';
import Marquee from "react-fast-marquee";
export interface HomePageProps {
}

export default function HomePage(props: HomePageProps) {
  const [active, setActive] = useState('')
  const [modalHome, setModalHome] = useState(true)
  return (
    <div className="main-content">
      {modalHome && <ModalHome closeModalHome={setModalHome} />}
      <div className="content">
        {/* box1 */}
        <div className="box1">
          <div className="img-home">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1" style={{ backgroundColor: 'white' }}>
                </button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src="https://cdns.diongame.com/static/image-3659d247-c6ef-4b72-87ef-9bce6e327f8e.jpeg"
                    className="d-block w-100 img-h " alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="bxh-home">
            <div className="title-h d-flex fw-7 bg-box">
              <div className={`top-nap pb-1 pe-1 ps-1 ${active === 'sk' ? 'bg-box-gray' : ''}`} onClick={() => setActive('tn')}>
                <span className={`t-top uppercase  fw-8 ${active === 'sk' ? 'text-black' : 't-color'}`}>Top Nạp T.2</span>
                <div className="tc d-flex justify-content-center">
                  <button className={`t-tc uppercase fw-7 text-white pe-2 ps-2 ${active === 'sk' ? '' : 'tc-a'}`}>Thẻ cào</button>
                </div>
              </div>
              <div className={`sk-new d-flex ${active === 'sk' ? 'bg-box' : 'bg-box-gray'}`} onClick={() => setActive('sk')}>
                <i className={`fa-gift fa gift`}></i>
                <button className={`uppercase text-lg fw-8 t-sm border-0 ${active === 'sk' ? 'bg-box t-color' : 'bg-box-gray'}`}>Sự kiện mới</button>
              </div>
            </div>
            <div className="content-h pt-2 pb-2 bg-box position-relative">
              <div className={`t-ct-h d-flex justify-content-center ${active === 'sk' ? '' : 'd-none'} `} >Chưa có thông báo mới</div>
              <div className={`nt-ct-h ${active === 'sk' ? 'd-none' : ''}`}>
                <div className="nt-top overflow-auto mb-3">
                  <div className="px-2 d-flex justify-content-between align-items-center mb-025">
                    <div className="topl d-flex">
                      <i
                        className="bi-octagon-fill bi position-relative top1">
                        <span className="text-white nub-top">1</span>
                      </i>
                      <span className="nub fw-7">ID 1633630</span>
                    </div>
                    <div className="fw-7 text-lg text-white">
                      <span className="dx w-8r py-1 text-white br-025 text-center d-inline-block text-sm">
                        3,300,000
                        <span className="text-xs"><small>đ</small>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="px-2 d-flex justify-content-between align-items-center mb-025">
                    <div className="topl d-flex">
                      <i className="bi-octagon-fill bi top2 position-relative">
                        <span
                          className="text-white nub-top">2</span></i>
                      <span className="nub fw-7">ID 1640365</span>
                    </div>
                    <div className="fw-7 text-lg text-white">
                      <span className="dx w-8r py-1 text-white br-025 text-center d-inline-block text-sm">
                        1,820,000
                        <span className="text-xs"><small>đ</small></span></span>
                    </div>
                  </div>
                  <div className="px-2 d-flex justify-content-between align-items-center mb-025">
                    <div className="topl d-flex">
                      <i className="bi-octagon-fill bi top3 position-relative">
                        <span
                          className="text-white nub-top">3</span></i>
                      <span className="nub fw-7">ID 1615702</span>
                    </div>
                    <div className="fw-7 text-lg text-white">
                      <span className="dx w-8r py-1 text-white br-025 text-center d-inline-block text-sm">
                        1,600,000
                        <span className="text-xs"><small>đ</small></span></span>
                    </div>
                  </div>
                  <div className="px-2 d-flex justify-content-between align-items-center mb-025">
                    <div className="topl d-flex">
                      <i className="bi-octagon-fill bi top4 position-relative"><span
                        className="text-white nub-top">4</span></i>
                      <span className="nub fw-7">ID 1532890</span>
                    </div>
                    <div className="fw-7 text-lg text-white">
                      <span className="dx w-8r py-1 text-white br-025 text-center d-inline-block text-sm">
                        1,400,000
                        <span className="text-xs"><small>đ</small></span></span>
                    </div>
                  </div>
                  <div className="px-2 d-flex justify-content-between align-items-center mb-025">
                    <div className="topl d-flex">
                      <i className="bi-octagon-fill bi top4 position-relative">
                        <span
                          className="text-white nub-top">5</span></i>
                      <span className="nub fw-7">ID 1556165</span>
                    </div>
                    <div className="fw-7 text-lg text-white">
                      <span className="dx w-8r py-1 text-white br-025 text-center d-inline-block text-sm">
                        1,360,000
                        <span className="text-xs"><small>đ</small></span></span>
                    </div>
                  </div>
                </div>
                <div className="border-b mt-1 mb-2 mx-auto"></div>
                <div className="ntt">
                  <span className="t-skh pt-1 pb-1 ps-2 pe-2">Sắp tới sẽ có <b className="skh">sự kiện hot,</b> hãy
                    chờ nhé!!!</span>
                </div>
                <div className="ntn d-flex justify-content-center">
                  <button className="btn-ntn text-white fw-8 uppercase">Nạp Thẻ Ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* box2 */}
        <div className="box2 bg-box box b-shadow">
          <div className="mar">
            <span className="ring ">
              <i className="bx bxs-bell-ring"></i>
            </span>
            <span className="text-mar fw-7">
              <Marquee gradientWidth={0} speed={50}>
                <strong>HIHAROBUX.COM - Khai Trương Tặng Robux, Random Gamepass, Trái ác quỷ v.v ở góc trái
                  màn hình - Bán robux hỗ trợ nhanh nhất thị trường</strong>
              </Marquee>
            </span>
          </div>
        </div>
        {/* box3 */}
        <div className="box3">
          <div className="text-b3 bg-box box b-shadow">
            <h3 className="uppercase t-box fw-7">dịch vụ roblox uy tín</h3>
          </div>
          <div className="ct-tk">
            <div className="ct-box bg-box col">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-276ce799-cb65-49fe-bcfd-698b74f65041.gif" className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">dịch vụ mua roblox uy tín</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b
                      className="t-color">11k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale">
                      <span>Rẻ nhất thị trường</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            < div className="ct-box bg-box col">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-fef42ab4-6850-47ac-97fc-2b17d262d4bb.gif"
                    className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">robux chính hãng và premium</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b className="t-color">3.3k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale">
                      <span>Duyệt đơn siêu tốc</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            <div className="ct-box bg-box col">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-9971a5d0-96f1-4912-8f1e-aa7582c41a98.gif"
                    className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">gamepass roblox</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b className="t-color">64.6k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale">
                      <span>Mua game pass siêu nhanh</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* box4 */}
        <div className="box4">
          <div className="text-b4 bg-box box b-shadow">
            <h3 className="uppercase t-box fw-7">danh mục tài khoản siêu ngon</h3>
          </div>
          <div className="ct-tk">
            <div className="ct-box bg-box col b-shadow">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-d5695765-46bc-40c8-bee5-a9ca2ca4b5b1.gif" className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">Acc blox tự chọn</h4>
                  <div className="mb-025 ct-t-tk mb-025">
                    <span className="db-tk">Đã bán: <b
                      className="t-color">119.7k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="btn-t-sale">
                      700.000đ
                    </button>
                    <button className="t-sale ">
                      900.000đ
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* box5 */}
        <div className="box5">
          <div className="text-b5 bg-box box b-shadow">
            <h3 className="uppercase t-box fw-7">trò chơi khuyến mãi nhân dịp khai trương</h3>
          </div>
          <div className="ct-tk">
            <div className="ct-box bg-box col b-shadow">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-3b242b5c-46af-489a-9b3e-381fd9ce988e.gif" className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">Vòng quay nổ hũ</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b
                      className="t-color">81.3k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale ">
                      <span>12.000 tỉ lệ trúng roblox siêu cao</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            < div className="ct-box bg-box col b-shadow">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-a2a7b13a-6d42-427b-876f-abed673c0f8b.gif"
                    className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">Lật thẻ vui vẻ</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b className="t-color">54.3k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale ">
                      <span> 9,000đ Lật thẻ cơ hội trúng 2000 Robux </span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            <div className="ct-box bg-box col b-shadow">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-143ee6f3-78ab-4414-b725-2fe5459ffb7c.gif"
                    className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">Máy đào robux</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b className="t-color">32.9k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale ">
                      <span> 18,000đ Đào Robux Siêu Lời </span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            <div className="ct-box bg-box col b-shadow">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-8cec02f2-286a-47f4-b5a9-ac0338c5a3b7.gif"
                    className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">Máy gắp Robux</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b className="t-color">32.4k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale ">
                      <span>20.000đ</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div >
        {/* box6 */}
        < div className="box6" >
          <div className="text-b6 bg-box box b-shadow">
            <h3 className="uppercase t-box fw-7">danh mục tài khoản game khác</h3>
          </div>
          <div className="ct-tk">
            <div className="ct-box bg-box col">
              <a href="#" className="tk">
                <div className="img-tk">
                  <img src="https://cdns.diongame.com/static/image-91c07ba2-9d01-4fdf-aec9-913f39c215ae.gif" className="im-tk" alt='' />
                </div>
                <div className="text-tk">
                  <h4 className="title-tk uppercase fw-6">danh mục game liên quân</h4>
                  <div className="mb-025 ct-t-tk">
                    <span className="db-tk">Đã bán: <b
                      className="t-color">23.9k</b></span>
                  </div>
                  <div className="sale mt-2">
                    <button className="t-sale">
                      <span>Siêu giảm giá</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div >
        {/* animation  */}
        < div className={`${active === 'close' ? 'd-none' : ''}`}>
          <div className="position-fixed d-inline animation" style={{ bottom: 20, left: 20, zIndex: 100 }}>
            <a>
              <img src="https://cdns.diongame.com/static/image-abe06c17-1fcf-4919-9021-50368f514235.gif"
                className="h-16r cursor-pointer" alt='' />
            </a>
            <button
              className="position-absolute h-15r w-15r d-flex align-items-center justify-content-center br-025 dx text-white close"
              style={{ left: 0, top: 0, zIndex: 101 }} onClick={() => setActive('close')}>
              <i className="bx bx-x"></i>
            </button>
          </div>
        </div >
      </div >
    </div >
  );
}
