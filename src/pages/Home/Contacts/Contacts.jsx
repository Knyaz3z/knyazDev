import './Contacts.scss'

function Contacts(){
return(
    <div id='contacts' className="contacts container">
        <div className="contacts__email">
            <p>e-mail</p>
            <a href="mailto:knyaz010official@gmail.com">knyaz010official@gmail.com</a>
        </div>
        <div className="contacts__sn">
            <p>social network</p>
            <>
                <a href=""><img src="/whatsapp__logo.png" alt=""/></a>
                <a href=""><img src="/telegram__logo.png" alt=""/></a>
            </>
        </div>
    </div>
)
}

export default Contacts;