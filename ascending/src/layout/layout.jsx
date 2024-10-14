import Header from "../section/header/header";
import Gallery from "../section/gallery/gallery";
import { useEffect, useState } from "react";
import axios from 'axios';


function Layout(){


    let [data,setState] = useState([]);

    useEffect(()=>{

        async function getData() {
            let galleryData = await axios.get('https://course.divinecoder.com/food/random/10')
            setState(galleryData.data)
        }
        getData() ;
        
    },[])

    let ascendigHandler = ()=>{
        let updataData = data.toSorted((a,b) => a.name.localeCompare(b.name))
        setState(updataData);
        
    }

    let descendingHandler = ()=>{
      let updataData = data.toSorted((a,b) => b.name.localeCompare(a.name))
      setState(updataData);
    }
    return(
        <div className="w-full min-h-screen bg-slate-300 py-6">
            <div className="w-10/12 m-auto pb-4 bg-white rounded pt-6">
             <Header onAcsending={ascendigHandler} onDescending={descendingHandler}/>
                {data.length == 0 ?  <span className="loading loading-spinner"></span> : <Gallery GalleryItmData={data}/>}
              
            </div>
        </div>
    )
}
export default Layout;