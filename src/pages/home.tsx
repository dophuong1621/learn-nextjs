import { useState } from "react"

function Home() {

    const [isActive, setIsActive] = useState('');


    return <>
        <button className={`${isActive === 'viettel' ? 'btn-login' : ''}`} onClick={() => setIsActive('viettel')}>
            Vittel
        </button>
        <button className={`${isActive === 'mobi' ? 'btn-login' : ''}`} onClick={() => setIsActive('mobi')}>
            Mobi
        </button>
        <button className={`${isActive === 'vina' ? 'btn-login' : ''}`} onClick={() => setIsActive('vina')}>
            Vina
        </button>
    </>
}

export default Home