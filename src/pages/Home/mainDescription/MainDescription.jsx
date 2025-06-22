import './MainDescription.scss'

function MainDescription() {
    return (
        <div className='main__description container'>
            <img className='myPhoto' src="/myPhoto.png" alt=""/>
            <div className='description--content'>
                <p className='desc__zag'>Hi, glad to see you!<br></br><br></br><br></br></p>
                <p className='desc__text'>I’m a freelance frontend developer. I’m focused on building clean, responsive, and user-friendly
                    websites for individuals and small businesses. <br></br><br></br>

                    My background includes organizing events and working closely with clients, which taught me how to
                    understand goals and deliver value — not just code. Now I bring that same mindset into web
                    development.<br></br><br></br>

                    I enjoy working with modern instruments to create perfect, mobile-ready websites. Whether it’s a
                    landing page, a multi-page business site, or a custom interface, I aim to make things work smoothly
                    and look great.<br></br><br></br>

                    My long-term goal is to work with international clients and grow as a developer in the global
                    freelance space. If you're looking for someone who cares about both design and functionality — let’s
                    connect!</p>
            </div>
        </div>
    )
}

export default MainDescription;