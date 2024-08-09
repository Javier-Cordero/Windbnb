import { useState } from 'react';
import './Modal.css'
export const Modal = ({ toggleModal, data, setStays }) => {
    const [ver, serVer] = useState(true)
    const [selected, setSelected] = useState(null)
    const [countAdult, setCountAdult] = useState(0)
    const [countChildren, setCountChildren] = useState(0)
    const toggleLocation = () => { serVer(true) }
    const toggleGuest = () => { serVer(false) }
    const handleSelect = (stay) => { setSelected(stay) }
    const sumarAdult = () => { if (countAdult < 14) setCountAdult(countAdult + 1) }
    const restarAdult = () => { if (countAdult > 0) setCountAdult(countAdult - 1) }
    const sumarChildren = () => { if (countChildren < 14) setCountChildren(countChildren + 1) }
    const restarChildren = () => { if (countChildren > 0) setCountChildren(countChildren - 1) }
    const result = countAdult + countChildren
    const city = []
    data.forEach((stay) => { if (!city.includes(stay.city)) city.push(stay.city) })
    const filterStays = data.filter((stay) => stay.city === selected && stay.maxGuests >= result)
    const handleClick = () => {
        toggleModal();
        setStays(filterStays);
    };
    return (
        <div className='Modal'>
            <div className='container-modal'>
                <button className='location1-modal' onClick={toggleLocation}>
                    <p>location</p>
                    <span>{selected ? selected + ', Finland' : 'Add location'}</span>
                </button>
                <button className='guest1-modal' onClick={toggleGuest}>
                    <p>guest</p>
                    <span>{result === 0 ? 'add guest' : result}</span>
                </button>
                <button className='search-modal' onClick={handleClick}>
                    <img src='/lupa.svg' alt='icono de busqueda' />
                    <span>Search</span>
                </button>
                {ver ?
                    <section className='location2-modal'>
                        {city.map((ciudad, i) => (
                            <div className='option-location' key={i}>
                                <img src='/map.svg' alt="" />
                                <span onClick={() => handleSelect(ciudad)}>{`${ciudad}, Finland`}</span>
                            </div>
                        ))}
                    </section> :
                    <section className='guest2-modal'>
                        <div className='option1-guest'>
                            <span>Adult</span>
                            <span>Ages 13 or above</span>
                            <div className='adult-guest'>
                                <button onClick={restarAdult}>-</button>
                                <p>{countAdult}</p>
                                <button onClick={sumarAdult}>+</button>
                            </div>
                        </div>
                        <div className='option2-guest'>
                            <span>Children</span>
                            <span>Ages 2-12</span>
                            <div className='children-guest'>
                                <button onClick={restarChildren}>-</button>
                                <p>{countChildren}</p>
                                <button onClick={sumarChildren}>+</button>
                            </div>
                        </div>
                    </section>
                }
            </div>
        </div>
    )
}