import { HiMenu } from "react-icons/hi"
import { useContext } from "react"
import { UserContext } from "../../../../hooks/UserContext";
import MenuBar from "../../../../components/MenuBar";
import MyCommunity from "../Component/index";
import './index.css'

export default function Community({menu}) {
  console.log(menu)
  const { value, setValue } = useContext(UserContext)

    return (
        <div className="__container">
        {
        window.innerWidth <= '600' && value == true ? (
          <div className="__menuBar">
            <MenuBar menu={menu} />
          </div>):<>
          
          {window.innerWidth <= '600' && value == false ? (
            <>
          <div className="__menuIsOpen">
            <HiMenu size={30} onClick={() => setValue(true)} />
          </div>
          <div className="__containerCommunity">
            <MyCommunity />
            </div>
         </>  
          ) : 
          <>
        <div className="__menuBar">
            <MenuBar menu={menu}/>
        </div>
        <div className="__containerCommunity">
            <MyCommunity />
        </div>
          
        
          </>
        }
          </>
        }
        
      </div>
    )
}