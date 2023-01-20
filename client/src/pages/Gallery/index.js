import React, {useState} from 'react';
import Header from '../../components/Header';
import './gallery.css'
import { useParams, Link } from 'react-router-dom';

const Gallery = ({modal, setModal}) => { 
let {currentGallery} = useParams(); 
 

// photos is the object that contains the list of galleries and the number of photos in that gallery
// number corresponds to the number of photos in each gallery and is used as the index to map the photos
// galleryList is the array used to map the main Gallery page
// galleryPhotoArray creates an array with the urls for each individual photo that is then mapped in the individual gallery page
// label the photos in the galleries with integers, must be sequential
// to add a new gallery in images folder on server, must also add here, MenuItems component, Dropdown component (if you want them in nav menu)
// modal and tempImg are for the lightbox display once a photo is clicked. When modal is true the lightbox modal is displayed and the tempImg is the current image being displayed by the modal

let photos = {"Newborn": 21, "Children" : 28, "Family": 21, "Maternity": 9, "Senior": 22, "Couples": 10, "Santa": 18, "Sunflowers": 13, "Christmas": 14, "Cakesmash": 12, "PurpleClover":10, "Beach":11}
let number = photos[currentGallery]
let galleryList = [...Object.keys(photos)]


const [tempImg, setTempImg] = useState('');

// when an image is clicked record the data of the image clicked and use it to set the state of the tempImg and display the modal
const getImg = (image) => {
    setTempImg(image);
    setModal(true);
    document.body.style="background-color: black;";                          
}
const closeModal = () => {
    setModal(false)
    document.body.style="background-color: white;";
}

// img forward and img back are click handlers for the gallery to move through the gallery
const imgFwd = () => {        
    const id = (tempImg.split('/'))  
// reset gallery once end is reached
    if(id[1] >= number) {
        id[1]=0
    }  
// id[0] is the  gallery and id[1] is the image number (ie for "Newborn/1", id = ["Newborn", "1"])
    setTempImg(id[0]+ "/" + (parseInt(id[1])+1))   
}

const imgBack = () => {   
        const id = (tempImg.split('/'))  
   
    // reset gallery once beginning is reached
    if(id[1] == 1) {
        id[1] = number               
    }    
    setTempImg(id[0]+ "/" + (parseInt(id[1])-1))  
        
   
}

let galleryPhotoArray = []
for(let i = 1; i < number+1; i++) {
let image = `${currentGallery}/${i}`
galleryPhotoArray.push(image)
}

// adjust the size of photo for mobile
let bgSize ={}
if(window.innerWidth<600) {
    bgSize = {
        height: "90vh",
        width: "90vw",
    };
} else {
       bgSize = {
            height: "33vh",
            width: "32vw",
        };
    }


 if(currentGallery) { 
   return(
        <>
        {/* only diplay header when modal is closed    */}
        {!modal && <Header
        modal = {modal}
        setModal = {setModal}
        ></Header>}
        <div className={modal? 'hidden': 'banner'}>{currentGallery}</div> 
        <div className={modal? "modal-open": "modal-closed"}>                     
            <img src={tempImg} className="modal-image"></img>            
                <i className='modal-icon fas fa-times' onClick={()=>closeModal()} />   
                <i className='right-arrow fa-solid fa-arrow-right' onClick={(tempImg)=>imgFwd()} />
                <i className='left-arrow fa-solid fa-arrow-left' onClick={(tempImg)=>imgBack()} />              
             
        </div>   
        <div className={modal? "hidden" : "gallery"}>      
        {galleryPhotoArray.map((image, index)=>{
            return (
                <div className='pics pt-1' key={index} onClick={()=>getImg(image)}>
                    <img src={image} style={{width:'100%'}}></img> 
                </div>
            )
        })}
        </div>
        </>
    );   
 } else {   
    return(
        <>
        <Header
        modal = {modal}
        setModal = {setModal}
        ></Header>
        <div className='gallery'>      
        {galleryList.map((gallery)=>{            
            const bgImageStyle = {
                backgroundImage: `url('/Gallery/${gallery}/1')`,
                display: 'inline-block',
                backgroundSize: 'cover', 
                backgroundPosition: 'center',               
                backgroundRepeat: 'no-repeat',                               
                breakInside: 'avoid-column',
                color: 'white',
                margin: '5px',
                padding: '0 5px',
                borderRadius: '3px',                                             
            }
            
            
            return (               
                <Link to={`/Gallery/${gallery}`}>
                    <div className="gallery gallery-pics" style={Object.assign(bgImageStyle,bgSize)}  key={gallery} > 
                        <p>{gallery}</p> 
                    </div>
                </Link>                          
                )
             })}
        </div>
        </>
       );
    }
 }
    
           

export default Gallery;