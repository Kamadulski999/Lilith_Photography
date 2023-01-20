import React, { useEffect, useState} from 'react';
import Header from '../components/Header';


const Home = ({modal, setModal}) => {
    const [currentPhoto, setCurrentPhoto] = useState(1);
    setModal(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentPhoto==5){
                setCurrentPhoto(1)
            }else {
                setCurrentPhoto(currentPhoto+1)
                    }                 
            },5000)
            return ()=> clearTimeout(timer)
    },[currentPhoto])
    
    const bgImageStyle = {
        backgroundImage: `url('/photos/main/${currentPhoto}')`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',                
        zIndex: '-1', 
        backgroundRepeat: 'no-repeat',
              
        
    }
    
    return (      <>  
                  
                    <div className="home" style={bgImageStyle}>
                        <Header
                        modal = {modal}
                        setModal = {setModal}
                        ></Header>
                    </div>
                </>
    )
}

export default Home;