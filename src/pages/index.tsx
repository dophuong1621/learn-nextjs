import { useState, useEffect } from 'react';
import ModalHome from '@/components/modal/home';
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import axios from 'axios'
import { numb, format_money } from '@/helper/formatNumber';
export interface HomePageProps {
}

export default function HomePage(props: HomePageProps) {
  const [active, setActive] = useState('')
  const [modalHome, setModalHome] = useState(true)
  const [topCard, setTopCard] = useState([]);
  const [reputation, setReputation] = useState([]);
  const [superDeliciousAccount, setSuperDeliciousAccount] = useState([]);
  const [openingGame, setOpeningGame] = useState([]);
  const [ortherGame, setOrtherGame] = useState([]);
  const colorTop = ['top1', 'top2', 'top3', 'top4', 'top4']

  // topCard
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/top-card',
      data: null
    }).then(res => {
      setTopCard(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  // robloxReputation
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/robloxReputation',
      data: null
    }).then(res => {
      setReputation(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  //superDeliciousAccount
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/superDeliciousAccount',
      data: null
    }).then(res => {
      setSuperDeliciousAccount(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  //openingGame
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/openingGame',
      data: null
    }).then(res => {
      setOpeningGame(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  //ortherGame
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/ortherGame',
      data: null
    }).then(res => {
      setOrtherGame(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

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
                  {topCard.map((x: any, i: any) => {
                    return <div className="px-2 d-flex justify-content-between align-items-center mb-025" key={i}>
                      <div className="topl d-flex">
                        <i
                          className={`bi-octagon-fill bi position-relative ${colorTop[i] ? colorTop[i] : ''}`}>
                          <span className="text-white nub-top">{i + 1}</span>
                        </i>
                        <span className="nub fw-7">ID {x.idkey}</span>
                      </div>
                      <div className="fw-7 text-lg text-white">
                        <span className="dx w-8r py-1 text-white br-025 text-center d-inline-block text-sm">
                          {numb(x.price)}
                          <span className="text-xs"><small>đ</small>
                          </span>
                        </span>
                      </div>
                    </div>
                  }
                  )}
                  {/* <div className="px-2 d-flex justify-content-between align-items-center mb-025">
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
                  </div> */}
                </div>
                <div className="border-b mt-1 mb-2 mx-auto"></div>
                <div className="ntt">
                  <span className="t-skh pt-1 pb-1 ps-2 pe-2">Sắp tới sẽ có <b className="skh">sự kiện hot,</b> hãy
                    chờ nhé!!!</span>
                </div>
                <Link href="/recharge" className="ntn d-flex justify-content-center">
                  <button className="btn-ntn text-white fw-8 uppercase">Nạp Thẻ Ngay</button>
                </Link>
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
            {reputation.map((x: any, i: any) => {
              return <div className="ct-box bg-box col" key={i}>
                <a href="#" className="tk">
                  <div className="img-tk">
                    <img src={`${x.image}`} className="im-tk" alt='' />
                  </div>
                  <div className="text-tk">
                    <h4 className="title-tk uppercase fw-6">{x.title}</h4>
                    <div className="mb-025 ct-t-tk">
                      <span className="db-tk">Đã bán:
                        <b className="t-color">{format_money(x.params)}</b></span>
                    </div>
                    <div className="sale mt-2">
                      <button className="t-sale">
                        <span>{x.description}</span>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            }
            )}
          </div>
        </div>
        {/* box4 */}
        <div className="box4">
          <div className="text-b4 bg-box box b-shadow">
            <h3 className="uppercase t-box fw-7">danh mục tài khoản siêu ngon</h3>
          </div>
          <div className="ct-tk">
            {superDeliciousAccount.map((x: any, i: any) => {
              return <div className="ct-box bg-box col b-shadow" key={i}>
                <a href="#" className="tk">
                  <div className="img-tk">
                    <img src={`${x.image}`} className="im-tk" alt='' />
                  </div>
                  <div className="text-tk">
                    <h4 className="title-tk uppercase fw-6">{x.title}</h4>
                    <div className="mb-025 ct-t-tk mb-025">
                      <span className="db-tk">Đã bán: <b
                        className="t-color">{format_money(x.params)}</b></span>
                    </div>
                    <div className="sale mt-2">
                      {x.price_old ? (
                        <button className="btn-t-sale">
                          {numb(x.price_old)}
                        </button>
                      ) : (
                        ''
                      )}

                      <button className="t-sale ">
                        {x.description ? x.description : numb(x.price)}
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            }
            )}
          </div>
        </div>
        {/* box5 */}
        <div className="box5">
          <div className="text-b5 bg-box box b-shadow">
            <h3 className="uppercase t-box fw-7">trò chơi khuyến mãi nhân dịp khai trương</h3>
          </div>
          <div className="ct-tk">
            {openingGame.map((x: any, i: any) => {
              return <div className="ct-box bg-box col b-shadow" key={i}>
                <a href="#" className="tk">
                  <div className="img-tk">
                    <img src={`${x.image}`} className="im-tk" alt='' />
                  </div>
                  <div className="text-tk">
                    <h4 className="title-tk uppercase fw-6">{x.title}</h4>
                    <div className="mb-025 ct-t-tk">
                      <span className="db-tk">Đã bán: <b
                        className="t-color">{format_money(x.params)}</b></span>
                    </div>
                    <div className="sale mt-2">
                      <button className="t-sale ">
                        <span>{x.description}</span>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            }
            )}
          </div>
        </div >
        {/* box6 */}
        < div className="box6" >
          <div className="text-b6 bg-box box b-shadow">
            <h3 className="uppercase t-box fw-7">danh mục tài khoản game khác</h3>
          </div>
          <div className="ct-tk">
            {ortherGame.map((x: any, i: any) => {
              return <div className="ct-box bg-box col" key={i}>
                <a href="#" className="tk">
                  <div className="img-tk">
                    <img src={`${x.image}`} className="im-tk" alt='' />
                  </div>
                  <div className="text-tk">
                    <h4 className="title-tk uppercase fw-6">{x.title}</h4>
                    <div className="mb-025 ct-t-tk">
                      <span className="db-tk">Đã bán: <b
                        className="t-color">{format_money(x.params)}</b></span>
                    </div>
                    <div className="sale mt-2">
                      <button className="t-sale">
                        <span>{x.description}</span>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            }
            )}
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
