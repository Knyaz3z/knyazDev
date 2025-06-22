import './RecentWork.scss'
import {useState} from "react";
import WorksItem from "../../../components/WorksItem/WorksItem";



function RecentWork() {
    const recentWorkArr = [
        {
            title: 'KASEY PHOTOGRAPHER',
            description: 'A single-page portfolio website for a photographer. ',
            previewLink: '/myworks/kasey.png',
            techStack: 'Tech stack: HTML, SCSS, React, Node.js, JavaScript, PHP',
            id: 1,
        },
        {
            title: 'CURRENT VANDI',
            description: 'A landing page for an electric car rental service.',
            previewLink: '/myworks/carrent.png',
            techStack: 'Tech stack: HTML, SCSS, React, Node.js, JavaScript, PHP',
            id: 2,
        },
    ]
    const [isOpen, setModalOpen] = useState(null);

    const handleClick = (id) => {
        setModalOpen(id);
    }

    const selectedWork = recentWorkArr.find(work => work.id === isOpen);


    return (
        <div className='recent__works container'>
            {
                recentWorkArr.map(item => (
                    <div key={item.id} className='works__preview' onClick={() => handleClick(item.id)}>
                        <RecentWorkItem
                            title={item.title}
                            previewLink={item.previewLink}
                            description={item.description}
                            TechStack={item.techStack}  />
                    </div>


                    )
                )
            }
            {/* Если элемент выбран, показываем модалку */}
            {isOpen !== null && selectedWork && (
                <div className='works container'>
                    <WorksItem
                        title={selectedWork.title}
                        description={selectedWork.description}
                        imgLink={selectedWork.previewLink}
                        techstack={selectedWork.techStack}
                        setModalOpen={setModalOpen}
                    />
                </div>

            )}
        </div>
    )
}

function RecentWorkItem({
                            title,
                            description,
                            TechStack,
                            previewLink,
                        }) {

    return (
        <div className='works__item'>
            <img className='preview__recent' src={previewLink} alt=""/>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
            <p className='techStack'>{TechStack}</p>

        </div>

    )
}

export default RecentWork