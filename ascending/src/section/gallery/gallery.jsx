import GalleryItm from "./galleryItm";


function Gallery(props){
    return (
        <div className="gallery grid grid-cols-4 grid-rows-2 gap-2">
            {props.GalleryItmData.map(item=><GalleryItm key={item.id} GalleryItmData={item}/> )}
{/*         
        <GalleryItm/>
        <GalleryItm/>
        <GalleryItm/>
        <GalleryItm/>
        <GalleryItm/>
        <GalleryItm/>
        <GalleryItm/> */}
      
    </div>
    )
}
export default Gallery;