import './OrderFiverr.scss'
import {useState} from "react";
import Button from "../../../components/Button/Button";


function OrderFiverr() {
    const [isActive, setIsActive] = useState(0)
    const tablePrice =
        [
            {
                title: 'Basic Web Site',
                price: '$80.00',
                description: 'Single-page website with design.',
                parametrs: {
                    first: '7-day delivery',
                    second: '2 Revisions',
                }
            },
            {
                title: 'Standard Website Package',
                price: '$500.00',
                description: 'Up to 5-page website with basic SEO',
                parametrs: {
                    first: '10-day delivery',
                    second: '5 Revisions',
                }
            },
            {
                title: 'Premium Web Solution',
                price: '$1000.00',
                description: 'Up to 10 pages, advanced SEO',
                parametrs: {
                    first: '30-day delivery',
                    second: 'Unlimited Revisions',
                }
            },
        ]
    return (
        <div className='fiverr__order container'>
            {

                <FiverrItem
                    data={tablePrice[isActive]}
                    isActive={isActive}
                    setIsActive={setIsActive}

                />

            }
        </div>
    )
}

function FiverrItem({data, isActive, setIsActive}) {

    return (
        <>
            <a href=""><img src="/fiverr__logo.png" alt=""/></a>
            <h4 id='order__fiverr-h4'>I will build a responsive, modern and SEO optimized website</h4>
            <div className="fiverr__content container">
                <div className='fiverr__table'>
                    <div className="fiverr__table-menu">
                        <button onClick={() => setIsActive(0)} id='basic'
                                className={`fiverr__table-btn ${isActive === 0 ? 'active' : ''}`}>Basic
                        </button>
                        <button onClick={() => setIsActive(1)} id='standart'
                                className={`fiverr__table-btn ${isActive === 1 ? 'active' : ''}`}>Standart
                        </button>
                        <button onClick={() => setIsActive(2)} id='premium'
                                className={`fiverr__table-btn ${isActive === 2 ? 'active' : ''}`}>Premium
                        </button>
                    </div>
                    <div className="fiverr__table-content">

                        {
                            isActive === 0 && (
                                <>
                                    <div className="fiverr__table-price">
                                        <span>{data.title}</span>
                                        <span>{data.price}</span>
                                    </div>
                                    <p>{data.description}</p>
                                    <div className="fiverr__table-desc">
                                        <span>{data.parametrs.first}&nbsp;</span>
                                        <span>{data.parametrs.second}</span>

                                    </div>
                                </>
                            )
                        }
                        {
                            isActive === 1 && (
                                <>
                                    <div className="fiverr__table-price">
                                        <span>{data.title}</span>
                                        <span>{data.price}</span>
                                    </div>
                                    <p>{data.description}</p>
                                    <div className="fiverr__table-desc">
                                        <span>{data.parametrs.first}&nbsp;</span>
                                        <span>{data.parametrs.second}</span>

                                    </div>
                                </>
                            )
                        }
                        {
                            isActive === 2 && (
                                <>
                                    <div className="fiverr__table-price">
                                        <span>{data.title}</span>
                                        <span>{data.price}</span>
                                    </div>
                                    <p>{data.description}</p>
                                    <div className="fiverr__table-desc">
                                        <span>{data.parametrs.first}&nbsp;</span>
                                        <span>{data.parametrs.second}</span>
                                    </div>
                                </>
                            )
                        }


                        <Button target='_blank' href='https://www.fiverr.com/maxknyaz/develop-responsive-and-user-friendly-websites' title='Order on Fiverr' />

                    </div>
                </div>
                <img className='fiverr__content-img' src="/img_for_fiverr.png" alt=""/>
            </div>
        </>
    )
}

export default OrderFiverr;