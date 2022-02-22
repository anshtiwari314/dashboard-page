import React,{useState,useEffect} from 'react'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import money from '../assets/11.png'
import '../css/sectionB.css';
import Table from './Table';
import Tabs from './Tabs';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';

import oval from '../assets/oval.png'

export default function SectionB() {
    const [tab,setTab] = useState(1)
    let [data,setData] = useState([]) 
    useEffect(()=>{

        async function set(){
        let temp = await axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
        setData( temp.data.data)
        }
        set();
    },[])
    
    return (
        <div className="containter">
            <div className="nav">
                
                <div class="sec">
                <h5>Section </h5>
                </div>
                <div className="wallet">
                    
                    <div className="wrapper">
                        <div className="icons">
                            <AccountBalanceWalletOutlinedIcon className="icon"/>
                        </div>
                        <div class="money">
                            <p>0.2 $XYZ </p>
                        </div>
                        <div class="tier">
                            <p>Tier 1</p>
                        </div>   
                    </div>                
                </div>
            </div>
            
            
            <div className="ads">
                <div className="divA">
                    <p>Lorem ispum is simple dummy text of 
                        the printing and type setting industry</p>
                    <button>Tutorial</button>
                </div>
                <img src={money} />
                <div class="divB"><ClearIcon className="icon"/></div>
            </div>

            <div className="rewards">
                <div>
                    <h4>Your rewards</h4>
                    <div className="currency">
                        <div><h2>$ 0.26231428</h2></div>
                        <a className="link">
                            <span className="icons"><ExitToAppOutlinedIcon className="icon"/></span>
                            <span>Custom link</span>
                        </a>
                    </div>
                    <div className="wrap">
                        <div className="wrapper">
                            <p>$40 avax</p>
                            <p>$10 bnb</p>
                            <p>$210 btc</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="referral">
                <div className="wrap">
                    <div className="childA">
                        <span><img src={oval} className="icon"/></span>
                        <div>12.5% of fee</div>
                    </div>
                    <div className="childB">
                        <p>Your Referral Link For xyz</p>
                    </div>
                    <div className="copy">
                        <div>https://unityexchange.design</div>
                        <span><ContentCopyOutlinedIcon className="icon"/></span>
                    </div>
                </div>

                <div className="wrap">
                    <div className="childA">
                        <span><img src={oval} className="icon"/></span>
                        <div>12.5% of fee</div>
                    </div>
                    <div className="childB">
                        <p>Your Referral Link For xyz</p>
                    </div>
                    <div className="copy">
                        <div>https://unityexchange.design</div>
                        <span><ContentCopyOutlinedIcon className="icon"/></span>
                    </div>
                </div>

            </div>
            
            <div class="tabs">
                <div class="wrap">
                    <div onClick={()=>setTab(1)} class={tab==1?`active`:''}>First Tab</div>
                    <div onClick={()=>setTab(2)} class={tab==2?`active`:''}>Second Tab</div>
                    <div onClick={()=>setTab(3)} class={tab==3?`active`:''}>Third Tab</div>
                </div>
            </div>
            <Tabs tab={tab} data={data}/>
            
        </div>
    )
}
