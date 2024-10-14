import { Button } from "../../component/button";


function GalleryItm(props){

    let {image,name,category_name} = props.GalleryItmData;
    return(
       
                    <div className="ml-3 border p-2">
                      <img src={image}className="h-60 object-cover" alt="my image" />
                      <h2 className={"font-bold text-2xl py-3"}>{name.toUpperCase()}</h2>
                      <span className="block font-bold pb-2">{category_name}</span>
                      <Button className=" btn-info hover:bg-sky-300">click me</Button>
                    </div>
      
    )
}
export default GalleryItm;