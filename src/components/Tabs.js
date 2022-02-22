
import Table from './Table'

export default function Tabs({tab,data}) {
    
    switch(tab){
        case 1: 
            return <Table data={data}/>
        case 2:
            return <div style={{textAlign:'center'}}>This tab is still not ready yet</div>
        case 3:
            return <div style={{textAlign:'center'}}>This tab is still not ready yet</div>
        default: 
        return <div style={{textAlign:'center'}}>Default tab</div>
    }
        
}
