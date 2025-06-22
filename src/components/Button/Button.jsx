import './Button.scss'

function Button({
                    title,
                    type,
                    href,
                    target,
                    widthW,
                }) {
    return (
        <div className={`button ${widthW}`}><a target={target} href={href}>{title}</a></div>
    )
}

export default Button;