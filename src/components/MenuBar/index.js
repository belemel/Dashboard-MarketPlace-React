import './index.css'
import icon_9 from '../../assets/img/Icon-9.svg'
import logo from '../../assets/img/logo_myhart_secundario.png'
import { SidebarData } from './SidebarData'
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'
import { AiOutlineClose } from "react-icons/ai"
import { UserContext } from '../../hooks/UserContext'
import { useContext } from "react"
import { BiLogOut } from 'react-icons/bi'
import {AiFillLock} from 'react-icons/ai'

export default function MenuBar({ menu }) {
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
        console.log("menu---",menu)
        fetchUser();
    }, [])

    async function logout() {
        let tkUser = localStorage.getItem('tk-user')

        if (tkUser) {
            navigate('/login')
            localStorage.removeItem('tk-user')
            localStorage.removeItem('role')
        } else return 0;
    }

    //  <HiMenu size={30} onClick={() => setMenuOpen(false)} />
    return (
        <>
            <div className="__divisionOptions">
                <div className="__options">
                    <div className="__closeMenu">
                        <AiOutlineClose onClick={() => setValue(false)} />
                    </div>
                    <div className="__logo">
                        <img src={logo} alt="" onClick={() => navigate("/")} />
                    </div>

                    <div className="__nameUser">Olá {dataUser?.name}
                        <br />Seu ID: {dataUser?.id}</div>
                </div>
                <div>
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className="__option" onClick={item.function}>
                                <Link to={menu ? item.path : ""}>
                                    <div className={!menu ? "__linkOption" : "__linkOption disabled"}>
                                        <div className="__iconOption">
                                            {item.icon}
                                        </div>

                                        <div className="__optionTitle">
                                            {item.blocked ? <AiFillLock style={{marginRight: '0.2rem'}}/> : !menu ? <AiFillLock style={{marginRight: '0.2rem'}}/> : ""} {item.title}
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        )
                    })}

                    {/* 
                    <div className="__option">
                        <div><img src={icon_2} alt="" /></div>
                        <div className="__optionTitle">Pedidos</div>
                        <div className="__notify"><img src={number} alt="" /></div>
                    </div>
                    <div className="__option">
                        <div><img src={icon_8} alt="" /></div>
                        <div className="__optionTitle">Produtos</div>
                    </div> */}

                    {/* <div className="__option">
                        <div><img src={icon_3} alt="" /></div>
                        <div className="__optionTitle">Comunidade</div>
                        <div className="__arrowOption"><img src={path} alt="" /></div>
                        <div></div>
                    </div> */}

                    {/* <div className="__option">
                        <div><img src={icon_5} alt="" /></div>
                        <div className="__optionTitle">Pagamentos</div>
                    </div> */}

                    {/* <div className="__option">
                        <div><img src={icon_6} alt="" /></div>
                        <div className="__optionTitle">Configuraçãos</div>
                    </div> */}

                    <div className="__option">
                            <div className={"__linkOption"} onClick={logout} >
                                <div className="__iconOption">
                                    <BiLogOut />
                                </div>

                                <div className="__optionTitle">
                                    Sair
                                </div>
                            </div>
                    </div>

                </div>
            </div>


        </>
    )
}