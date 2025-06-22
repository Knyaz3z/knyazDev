import './WorksItem.scss'

function WorksItem({title, imgLink, description, setModalOpen, techstack}) {

    return (
        <div onClick={() => setModalOpen(null)} className="works__modal-over">
            <div onClick={(e) => e.stopPropagation()} className="works__modal-content">
                <h2 className="works__modal-title">{title}</h2><br/>
                <div className="works__modal-description">{description}</div>
                <br/>
                <p>{techstack}</p>
                <img src={imgLink} alt="" className="works__modal-img"/>
                <p onClick={() => setModalOpen(null)} className='close__modal'>&times;</p>
            </div>

        </div>
    )
}

export default WorksItem;