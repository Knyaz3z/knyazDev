import './MyWorks.scss'
import {useState} from "react";
import techStack from "../Home/TechStack/TechStack";
import WorksItem from "../../components/WorksItem/WorksItem";

function MyWorks() {
    const worksItem =
        [
            {
                title: 'KASEY PHOTOGRAPHER',
                description: 'A single-page portfolio website for a photographer. Built with responsive layout, smooth hover animations, and a modal image viewer. The content is structured using reusable components for scalability. ',
                imgLink: '/myworks/kasey.png',
                techStack: 'Tech stack: HTML, SCSS, React, Node.js, JavaScript, PHP'
            },
            {
                title: 'CURRENT VANDI',
                description: 'A landing page for an electric car rental service with animated elements and an interactive user interface. Includes a stylized section with key info and a dynamic car image. The design is responsive and visually engaging across devices.',
                imgLink: '/myworks/carrent.png',
                techStack: 'Tech stack: HTML, SCSS, React, Node.js, JavaScript, PHP'
            },
            {
                title: 'Nutricionist',
                description: 'A promo website for a personal nutrition coach, focused on clear structure and content readability. Features responsive layout, grid-based block structure, and custom fonts and visuals to strengthen the brand identity.',
                imgLink: '/myworks/Nutricionist.png',
                techStack: 'Tech stack: HTML, SCSS, React, Node.js, JavaScript, PHP'
            },
            {
                title: 'Suhov-vedet',
                description: 'A single-page website for a professional event host in Moscow. Features a responsive design, engaging hero section, and clear service presentation. Includes contact form integration and SEO-friendly content to highlight 10 years of experience.',
                imgLink: '/myworks/suhov-vedet.ru.png',
                techStack: 'Tech stack: HTML, SCSS, React, Node.js, JavaScript, PHP'
            },
        ]
    const [isOpen, setModalOpen] = useState(null)
    return (
        <div className="works container">
            <div onClick={() => setModalOpen(0)} className='works__kasey box'>
                <h5>KASEY PHOTOGRAPHER</h5>
                <img src="/Arrow.png" alt="" className="works__kasey-arrow"/>
            </div>
            <div onClick={() => setModalOpen(1)} className="works__car-rent box">
                <div className="works__car-rent-desc">
                    <h2>CURRENT VANDI</h2>
                    <h2>e-cars rent</h2>
                </div>
                <img className='works__car-rent-car' src="/my__works-car.png" alt=""/>
                <img src="/Arrow-white.png" alt="" className="works__car-rent-arrow"/>
            </div>
            <div onClick={() => setModalOpen(2)} className="works__nutri box">
                <div className="works__nutri-head">
                    <h2>Nutricionist</h2>
                </div>
                <img className='sheets' src="/sheets.png" alt=""/>
                <img className='works__nutri-arrow' src="/Arrow.png" alt=""/>
            </div>
            <div onClick={() => setModalOpen(3)} className='works__kasey box'>
                <h5>SUHOV-VEDET</h5>
                <img src="/Arrow.png" alt="" className="works__kasey-arrow"/>
            </div>

            {
                isOpen !== null &&
                (
                    <WorksItem
                        title={worksItem[isOpen].title}
                        description={worksItem[isOpen].description}
                        imgLink={worksItem[isOpen].imgLink}
                        techstack={worksItem[isOpen].techStack}
                        setModalOpen={setModalOpen}/>
                )
            }

        </div>
    )
}

export default MyWorks;