import './index.css'
import icon_9 from '../../assets/img/Icon-9.svg'
import logo from '../../assets/img/logo_myhart_secundario.png'
import { SidebarData } from './SidebarData'
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { HiMenu } from "react-icons/hi"
import api from '../../services/api';
import { AiOutlineClose } from "react-icons/ai"
import { UserContext } from '../../hooks/UserContext'
import { useContext } from "react"
import { BiLogOut } from 'react-icons/bi'
import { AiFillLock } from 'react-icons/ai'

export default function MenuBarAdmin({ menu, active }) {
    const { value, setValue } = useContext(UserContext)
    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState();
    const tkUser = localStorage.getItem('tk-user')

    async function fetchUser() {

        if (tkUser) {
            await api
                .get(`user`, {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(tkUser)}`,
                    },
                })
                .then(response => {
                    setDataUser(response.data);
                }
                )
        }
        else {
            navigate('/login')
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    async function logout() {
        let tkUser = localStorage.getItem('tk-user')

        if (tkUser) {
            navigate('/login')
            localStorage.removeItem('tk-user')
        } else return 0;
    }

    //  <HiMenu size={30} onClick={() => setMenuOpen(false)} />
    return (
        <>
            <div className="__admin_divisionOptions">
                <div className="__admin_options">
                    <div className="__admin_closeMenu">
                        <AiOutlineClose onClick={() => setValue(false)} />
                    </div>
                    <div className="__admin_logo">
                        <img src={logo} alt="" onClick={() => navigate("/")} />
                    </div>

                    <div className="__admin_nameUser">Administrativo</div>

                    <div className="__admin_nameUser">Olá {dataUser?.name}
                        <br />Seu ID: {dataUser?.id}</div>
                </div>
                <div>
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className="__admin_option" onClick={item.function}>
                                <Link to={menu ? item.path : ""}>
                                    <div className={!menu ? "__admin_linkOption" : "__admin_linkOption disabled"}>
                                        <div className={active === item.title ? "__admin_iconOption_active" : "__admin_iconOption"}>
                                            {item.icon}
                                        </div>

                                        <div className="__admin_optionTitle">
                                            {item.blocked ? <AiFillLock style={{ marginRight: '0.2rem' }} /> : ""} {item.title}

                                        </div>
                                    </div>
                                    {item.dropdown == true && (
                                        <ul className='__admin_menu_ul'>
                                            {item.dropdownItems.map((value, index) => {
                                                return (
                                                    <li className='__admin_menu_li' key={index+1}>{index}</li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </Link>
                            </div>
                        )
                    })}

                    <div className="__admin_option">
                        <div className={"__admin_linkOption"} onClick={logout} >
                            <div className="__admin_iconOption">
                                <BiLogOut />
                            </div>

                            <div className="__admin_optionTitle">
                                Sair
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}