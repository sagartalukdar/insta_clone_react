import { AiFillCiCircle, AiFillCompass, AiFillHome, AiFillMessage, AiFillNotification, AiFillPlusCircle, AiFillProfile, AiOutlineCompass, AiOutlineHome, AiOutlineMessage, AiOutlineNotification, AiOutlinePlus, AiOutlineProfile, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";


export const menu=[
    {
        title:"Home",
        icon:<AiOutlineHome/>,
        activeIcon:<AiFillHome/>
    },
    {
        title:"Search",
        icon:<AiOutlineSearch/>,
        activeIcon:<AiOutlineSearch/>
    },
    {
        title:"Explore",
        icon:<AiOutlineCompass/>,
        activeIcon:<AiFillCompass/>
    },
    {
        title:"Reels",
        icon:<RiVideoLine/>,
        activeIcon:<RiVideoFill/>
    },
    {
        title:"Message",
        icon:<AiOutlineMessage/>,
        activeIcon:<AiFillMessage/>
    },
    {
        title:"Notification",
        icon:<AiOutlineNotification/>,
        activeIcon:<AiFillNotification/>
    },
    {
        title:"Create",
        icon:<AiOutlinePlus/>,
        activeIcon:<AiFillPlusCircle/>
    },
    {
        title:"Profile",
        icon:<AiOutlineUser/>,
        activeIcon:<FaCircleUser/>
    }
]