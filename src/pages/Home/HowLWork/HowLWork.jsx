import './HowLWork.scss'

const pointsArr =
    [
        {
            title: 'Collecting requirements',
            number: '1',
            text: 'I’ll listen carefully to your goals and gather all the details to ensure the website fits your needs from the start.',
        },
        {
            title: 'Creating a desin layout',
            number: '2',
            text: 'I’ll prepare a clean, user-friendly layout that reflects your brand and provides a smooth experience across all screen sizes.',
        },
        {
            title: 'Website creation',
            number: '3',
            text: 'I’ll build a modern, responsive site with clean code and great performance — tailored to your goals and audience.',
        },
        {
            title: 'Making edits',
            number: '4',
            text: 'After delivery, I’ll adjust anything needed based on your feedback to make sure you’re 100% happy with the result.',
        },
    ]

function HowLWork() {
    return (
        <ul className="points__list container">
            {
                pointsArr.map(item => (
                    <PointsItem title={item.title} number={item.number} text={item.text} />
                ))
            }
        </ul>
    )
}

function PointsItem({title, number, text}){
return(
    <li className='points__item'>
        <div className="points__item-title">
            <span>{number}</span>
            <span>{title}</span>
        </div>
        <div className="points__item-text">{text}</div>
    </li>
)
}

export default HowLWork