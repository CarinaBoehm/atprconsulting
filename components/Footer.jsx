import {Link} from 'react-router-dom'

function Footer(){
    return(
        <footer>
            <div className='footerLogo'>
                <p>atpr-consulting</p> 
                <span>Mobiltelefon: +49 (0) 1578 880 4193 </span>
                </div>
            <ul>
                <li><Link className='footerItem' to="/datenschutz">Datenschutz</Link></li>
                <li><Link className='footerItem' to="/impressum">Impressum</Link></li>
                <li><Link className='footerItem' to="/contact">Kontakt</Link></li>
            </ul>
        </footer>
    )
}

export default Footer