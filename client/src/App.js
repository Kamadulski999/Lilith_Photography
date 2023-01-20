import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';




function App() { 

// modal state controls display of the lightbox feature when an image is clicked inside the galleries 
// It is passed as a prop to each page to ensure that the modal state is false any time a new page renders
// Without this, navigating from the Gallery page while he modal is open to another page using the navbar and then returning to the gallery page caused a bug that displayed an empty modal


const [modal, setModal] = useState(false); 

  return (      
  <Router>     
      <Routes>
               <Route
                path="/"
                 element={<Home
                  modal = {modal}
                  setModal = {setModal}
                  ></Home>}
              />
               <Route
                path="/About"
                 element={<About
                  modal = {modal}
                  setModal = {setModal}
                  ></About>}
              />
              <Route
                path="/Gallery"
                 element={<Gallery
                 modal = {modal}
                 setModal = {setModal}
                 ></Gallery>}
              />
               <Route
                path="/Gallery/:currentGallery"
                element={<Gallery
                modal = {modal}
                setModal = {setModal}
                ></Gallery>}
                />
                <Route
                path="/Contact"
                 element={<Contact
                  modal = {modal}
                  setModal = {setModal}
                  ></Contact>}
              />
               <Route
                path="*"
                 element={<Home
                  modal = {modal}
                  setModal = {setModal}
                 ></Home>}
              />
 
    </Routes>            
 </Router>
  );
}

export default App;
