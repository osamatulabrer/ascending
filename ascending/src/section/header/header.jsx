
import { Button } from "../../component/button";
import Search from "./search";

function Header(props){
    return(
        <div className="flex justify-between items-center pb-7">
            <div className="flex">
                <Button onClick={()=>props.onAcsending()
                } className="btn-success ml-2">ascending</Button>
                <Button onClick={()=>props.onDescending()} className="btn-success ml-2">descending</Button>
                
            
            </div>
           <Search/>
    </div>
    )
}
export default Header;