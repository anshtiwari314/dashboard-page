import React,{useState} from 'react'
import { Drawer } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import PieChartSharpIcon from '@mui/icons-material/PieChartSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import CloudUploadSharpIcon from '@mui/icons-material/CloudUploadSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import '../css/sectionA.css'
export default function SectionA() {
    const [open,setOpen] = useState(false)
    return (
        
        <div class="container">
            <div onClick={()=>setOpen(prev=>!prev)} className="hamburger">
                <MenuSharpIcon className="icon"/>
            </div>

            <div className={open?`cont active`:`cont`}>
                <div class="head">
                    <div class="icon1">N</div>
                    <p>Name</p>
                    <ArrowBackSharpIcon 
                    onClick={()=>setOpen(prev=>!prev)}
                    className="icon2"/>
                </div>
                <div class="list">
                    <a>
                        <GridViewIcon className="icon"/>
                        <p>Home</p>
                    </a>
                    <a>
                        <BarChartIcon className="icon"/>
                        <p>Section 1</p>
                    </a>
                    <a>
                        <SendSharpIcon className="icon"/>
                        <p>Section 2</p>
                    </a>
                    <a>
                        <CloudUploadSharpIcon className="icon"/>
                        <p>Section 3</p>
                    </a>
                    <a>
                        <MonetizationOnSharpIcon className="icon"/>
                        <p>Section 4</p>
                    </a>
                    <a>
                        <BarChartIcon className="icon"/>
                        <p>Section 5</p>
                    </a>
                    <a>
                        <PieChartSharpIcon className="icon"/>
                        <p>Section 6</p>
                    </a>
                    <a>
                        <AttachMoneySharpIcon className="icon"/>
                        <p>Section 7</p>
                    </a>
                    <a>
                        <ShareSharpIcon className="icon"/>
                        <p>Section 8</p>
                    </a>
                    <a>
                        <ArticleSharpIcon className="icon"/>
                        <p>Documentation</p>
                    </a>
                </div>

                <div className="details">
                    <div className="div1">
                        <div class="icon1">N</div>
                        <p class="p1">$0.90</p>
                    </div>
                    <p class="p2">Buy $XYZ</p>
                </div>
                <div className="foot">
                    <LanguageSharpIcon className="icon1"/>
                    <div>
                        <DarkModeIcon className="icon2"/>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        
       
    )
        
   
}
