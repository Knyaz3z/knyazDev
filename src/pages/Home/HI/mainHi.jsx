import './mainHi.scss'
import Button from '/src/components/Button/Button'

function MainHi() {
    return (
        <>
            <div className='main__hi container'>
                <h2>Hi, my name is <span>Max</span></h2>
                <h1>I’m Web Developer and Web Designer</h1>
            </div>
            <div className="main__desc container">
                <div className="main__desc-item"><Button widthW='widthmax' target='_parent' href='#contacts' title='Get in touch' /></div>
                <div className="main__desc-item"><span>React & Node.js</span><p>Tech stack</p></div>
                <div className="main__desc-item"><span>Design + Frontend</span><p>Type</p></div>
                <div className="main__desc-item"><span>English & Russian</span><p>Languages</p></div>
            </div>
        </>

    )
}

export default MainHi;