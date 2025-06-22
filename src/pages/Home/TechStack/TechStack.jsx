import './TechStack.scss'

const imgLink = [
    {
        title: 'HTML5 & CSS',
        imgLink:'techStackImg/HTML5-logo.png' ,
    },
    {
        title: 'JavaScript',
        imgLink: 'techStackImg/JS-logo.png',
    },
    {
        title: 'TypeScript',
        imgLink: 'techStackImg/TS-logo.png',
    },
    {
        title: 'SCSS',
        imgLink: 'techStackImg/SASS-logo.png',
    },
    {
        title: 'Node.js',
        imgLink: 'techStackImg/Nodejs-logo.png',
    },
    {
        title: 'React',
        imgLink: 'techStackImg/React-logo.png',
    },
]

function TechStack() {
    return (
        <div className="tech__list container">
            {
                imgLink.map(item => (
                    <StackItem imgLink={item.imgLink} title={item.title}/>
                ))
            }
        </div>
    )
}

function StackItem({imgLink, title}) {
    return (
    <div className="stack-item ">
        <div className="item-tech-wrapper">
            <img className="item-tech" src={imgLink} alt={title} />
        </div>
        <p>{title}</p>
    </div>
    )
}

export default TechStack