import React from 'react'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import "../css/table.css"

export default function Table({data}) {

    function getShortId(id){
        if(id.length>12)
        return `${id.substring(0,5)}..${id.substring(id.length-7,id.length)}`
        
        return id; 
    }
    
    return (
        <div className="table">
                    <div className="head">
                        <p>asset</p>
                        <p>amount</p>
                        <p>user account</p>
                        <p>referral earning</p>
                    </div>   
                    {data.map((ele)=>{
                           return <div className="fields">
                                <div className="field asset">
                                    <img class="img1" src={ele.img}/>
                                    <div>
                                        {ele.asset}
                                        <p>{ele.type}
                                            <span >
                                                <img class="img2" src={ele.chain.img}/>
                                                {ele.chain.name}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="field amount">
                                    {ele.amount} BNB
                                    <p>{ele.state}</p>
                                </div>
                                <div className="field user">
                                    <div>{getShortId(ele.user)}</div>
                                </div>
                                <div className="field ref">
                                    {ele.referral_earnings} BNB
                                    <p>View on BSC Scan 
                                        <LogoutOutlinedIcon className="icon"/>
                                    </p>
                                </div>
                        </div>

                    })}
                    

            </div>
    )
}
