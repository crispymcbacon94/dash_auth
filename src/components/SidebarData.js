import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData=[
    {
        title: "Home",
        path:"/home",
        icons:<AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "User",
        path:"/user",
        icons:<AiIcons.AiOutlineUser />,
        cName: "nav-text",
    },
    {
        title: "Devices",
        path:"/devices",
        icons:<MdIcons.MdOutlineOnDeviceTraining />,
        cName: "nav-text",
    },
]