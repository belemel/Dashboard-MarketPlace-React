import {IoIosNotificationsOutline} from 'react-icons/io'
import './Navbar.css'

export default function Navbar({title, subtitle}){

    return(
        <div className="__navbar">
            <div className="__navbar_header">
                <span className="__navbar_title">{title}</span>
                <span className="__navbar_subtitle">{subtitle}</span>
            </div>
            <div className="__navbar_notifications">
                <IoIosNotificationsOutline className='__navbar_notifications_icon' />
                <span className='__navbar_notifications_span'>Uma das suas indicações está incompleta</span>
            </div>
        </div>
    )
}