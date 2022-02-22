import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import "../css/sectionC.css"

export default function SectionC() {
    return (
        <div className="wrapper">
            <div class="wrap">
                <div className="cont">
                    <img class="icon1" 
                        src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png"/>
                    <p>Avalanche</p>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="wallet">
                    <AccountBalanceWalletOutlinedIcon className="icon1"/>
                    <p>0XF6..1353</p>
                    <KeyboardArrowDownIcon/>
                </div>
            </div>
            <div class="wrapB">
                <div class="divA">
                    <ArrowBackOutlinedIcon className="icon"/>
                    <p>Custom link</p>
                </div>
                <div class="divB">
                    <p>https://testnet.xyz.xyz/trade?ref=</p>
                    <div>
                        <input type="text" placeholder="Enter"/>
                    </div>
                </div>
                <div class="divC">
                    <div >
                        <ExitToAppOutlinedIcon className="icon"/>
                        <p>Custom link</p>
                    </div>
                    <div >
                        <ExitToAppOutlinedIcon className="icon"/>
                        <p>Cancel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
