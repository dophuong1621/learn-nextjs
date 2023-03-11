import { useEffect, useState } from 'react'
import BoxLeft from '@/components/layouts/sidebar'
import BtnMenu from '@/components/btn-menu'
import { numb } from '@/helper/formatNumber'
// import * as recharge from './api/recharge'
// import request from '../ultis/request'
import axios from 'axios'

export default function RechargePage() {
    const [isActive, setIsActive] = useState('');
    const [rechargeI, setRechargeI] = useState([]);
    const [formValues, setFormValues] = useState({'id': '454992'});

    const typeRecharge = ['Viettel', 'Vinaphone', 'Mobifone']

    type TypeField = {
        name: string,
        value: string,
    }

    const handleSetFormValues = ({ name, value }: TypeField) => {
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }
    console.log(formValues)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/recharge",
            data: formValues,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(function (res) {
            alert('Nạp thẻ thành công');
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/recharge',
            }).then(res => {
                setRechargeI(res.data);
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/recharge',
        }).then(res => {
            setRechargeI(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <div className="px-2 gap-2 ct d-grid mx-auto">
                <BtnMenu></BtnMenu>
                <BoxLeft></BoxLeft>
                <div className="gc-8 gc-12i">
                    <div className="px-125 py-sm-3 br-025 w-100 mb-3 bg-box p-1r">
                        <div className="pb-2 border-bot-w mb-3">
                            <h2 className="text-lg fw-6 ntc">Nạp Thẻ Cào</h2>
                            <p className="text-xs">
                                Tự động 24/7 - Nhập sai mệnh giá sẽ mất thẻ.
                            </p>
                        </div>
                        <div className="mb-3 error-nt form-nt">
                        </div>
                        <form className="form-nt" onSubmit={handleSubmit} encType="multipart/form-data"
                            id="form_nt">
                            <div className="mb-2">
                                <label className="text-sm">
                                    Nhà mạng <b>(Ưu tiên Viettel, Vinaphone)</b></label>
                                <div className="text-sm gap-2 d-grid grid-temp-col-12 " id="homeNetwork">
                                    <button type="button" className={`fw-7 px-075 br-025 bor-1 gc-4 h-25r bg-box viettel ${isActive === '0' ? 'bor-col-red' : ''}`}
                                        data-type="0" onClick={() => {
                                            handleSetFormValues({ name: 'type_charge', value: '0' })
                                            setIsActive('0')
                                        }}>
                                        <img style={{ filter: `${isActive === '0' ? '' : 'grayscale(100%)'}`, maxWidth: '100%', height: 'auto' }}
                                            src="/image/viettel.png" alt='' />
                                    </button>
                                    <button type="button" className={`fw-7 px-075 br-025 bor-1 gc-4 h-25r bg-box vina ${isActive === '1' ? 'bor-col-red' : ''}`}
                                        data-type="1" onClick={() => {
                                            handleSetFormValues({ name: 'type_charge', value: '1' })
                                            setIsActive('1')
                                        }}>
                                        <img style={{ filter: `${isActive === '1' ? '' : 'grayscale(100%)'}`, maxWidth: '100%', height: 'auto' }}
                                            src="/image/vinaphone.png" alt='' />
                                    </button>
                                    <button type="button" className={`fw-7 px-075 br-025 bor-1 gc-4 h-25r bg-box mobi ${isActive === '2' ? 'bor-col-red' : ''}`}
                                        data-type="2" onClick={() => {
                                            handleSetFormValues({ name: 'type_charge', value: '2' })
                                            setIsActive('2')
                                        }}>
                                        <img style={{ filter: `${isActive === '2' ? '' : 'grayscale(100%)'}`, maxWidth: '100%', height: 'auto' }}
                                            src="/image/mobifone.png" alt='' />
                                    </button>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="text-sm"> Mệnh giá </label>
                                <select className="px-075 bor-1 br-025 w-100 h-25r bor-coler-be price" name="money_received" onChange={(event) => {
                                    const name = (event.target as HTMLSelectElement).name;
                                    const value = (event.target as HTMLSelectElement).value;
                                    handleSetFormValues({ name, value })
                                }}>
                                    <option value="" selected disabled>Chọn mệnh giá</option>
                                    <option className="fw-5 t-color" value="10000">
                                        10,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="20000">
                                        20,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="30000">
                                        30,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="50000">
                                        50,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="100000">
                                        100,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="200000">
                                        200,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="300000">
                                        300,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="500000">
                                        500,000 VNĐ (nhận 100%)
                                    </option>
                                    <option className="fw-5 t-color" value="1000000">
                                        1,000,000 VNĐ (nhận 100%)
                                    </option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="text-sm"> Mã thẻ </label>
                                <input className="px-075 bor-1 br-025 w-100 h-25r bor-coler-be idCard" name="pin" onChange={(event) => {
                                    const name = (event.target as HTMLInputElement).name;
                                    const value = (event.target as HTMLInputElement).value;
                                    handleSetFormValues({ name, value })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label className="text-sm"> Serial thẻ </label>
                                <input className="px-075 bor-1 br-025 w-100 h-25r bor-coler-be seri" name="serial" onChange={(event) => {
                                    const name = (event.target as HTMLInputElement).name;
                                    const value = (event.target as HTMLInputElement).value;
                                    handleSetFormValues({ name, value })
                                }} />
                            </div>
                            <button type="submit" className="br-025 h-25r btn-nt fw-6 text-white">
                                Nạp Thẻ
                            </button>
                        </form>
                    </div>
                    <div className="line-h-175 text-sm py-1 px-075 br-025 my-2 text-br-color bg-box">
                        <div>
                            <p>
                                <span className="t-color">
                                    <strong>
                                        Khi nạp thẻ mua nick tại web shop&nbsp;nạp&nbsp;thẻ không trừ chiết khấu nạp 100k card = 100k tiền shop
                                    </strong>
                                </span>
                            </p>
                            <p>
                                <span className="t-color">
                                    <strong>
                                        Lưu ý: Vui lòng nạp đúng mệnh giá, sai mệnh giá
                                        sẽ không được cộng tiền vào tài khoản.
                                    </strong>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-box br-025 mt-3 w-100">
                        <div className="py-075 px-125 border-bot-w tngn">
                            <h2 className="fw-6 text-lg">Thẻ Nạp Gần Nhất</h2>
                        </div>
                        <div id="list" className="padding-1r p-05r">
                            <table className="w-100">
                                <thead>
                                    <tr className="tr-table-tn fw-6 tb-tn">
                                        <th className="px-2 py-2 ">Thẻ Nạp</th>
                                        <th className="px-2 py-2">
                                            <span className="d-sm-block d-none">Mã thẻ/Seri</span>
                                            <span className="d-block d-sm-none">Chi tiết</span>
                                        </th>
                                        <th className="px-2 py-2 d-sm-block d-none">
                                            M.giá/T.nhận
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="recharge-ct">
                                    {rechargeI.map((x: any, i: any) =>
                                        <tr key={i}>
                                            <th className="px-2 py-2">{typeRecharge[x.type_charge]}</th>
                                            <th className="px-2 py-2">{x.pin + '/' + x.serial}</th>
                                            <th className="px-2 py-2">{numb(x.money_received, { suffix: ' đ' })}</th>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}