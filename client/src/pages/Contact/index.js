import React, {useState} from "react";
import './contact.css'
import contact from  '../../lib/contact.jpg'
import email from '../../icons/email.png'
import facebook from '../../icons/Facebook_icon.svg'
import instagram from '../../icons/instagram-round-color-icon.svg'
import Header from "../../components/Header";





async function postData(url = '', data = {}) {
        const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
            },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    });
        return response; 
    }

    const Contact = ({setModal}) => {
        const [text, setText] = useState('');
        setModal(false);
     
        const handleText = (e) => {
         setText(e.target.value)            
        }
         
         const onSubmit = (e) => {                
                      
             e.preventDefault();
             const {name, email, phone,option, message} = e.target.elements
             let contactObj = {
                 name: name.value,
                 email: email.value,
                 phone: phone.value,  
                 option: option.value,         
                 message: message.value
             }
             console.log(contactObj)
             postData('../../send_mail', contactObj)
             .then((data) => {
                name.value ='';
                email.value = '';
                phone.value = '';
                option.value = '';
                setText('Message sent!');
               console.log(data); 
             });
                    
         }
     
         return (
             <>
             <Header />
                 <div className="container">
                 <div id="banner">
                     <span className="connect">Let's Connect!</span>
                 </div>
                 <div className="row" id="contact-page">
                     <div className="col-12 col-lg-5 contact-pic"><img id="contact-pic"src={contact}></img></div>
                         <div className="col-12" id="contact-footer">
                         <a href="https://www.facebook.com/LilithPhotography34/"><img src={facebook} className="facebook footer-icon"></img></a>
                         <a href="https://www.instagram.com/lilithphotography/?hl=en"><img src={instagram} className="instagram footer-icon"></img></a> 
                         <a href="mailto:shellyk@lilithphotography.com"><img src={email} className="email footer-icon"></img></a>         
                     </div>       
                 <div className="col-12 col-lg-5" id="contact-form">                           
                         <form onSubmit={onSubmit}>
                         <div className="mb-3">
                             <label className="form-label" htmlFor="name">
                                 Name 
                             </label>
                             <input className="form-control" type="text" id="name" required />
                         </div>
                             <div className="mb-3">
                             <label className="form-label" htmlFor="email">
                                 Email
                             </label>
                             <input className="form-control" type="email" id="email" required />
                             </div>
                             <div className="mb-3">
                             </div>
                             <div className="mb-3">
                             <label className="form-label" htmlFor="phone">
                                Phone (XXX) XXX-XXXX
                             </label>
                             <input className="form-control" type="tel" id="phone" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" required />
                             </div>
                             <div className="mb-3">
                                 Type of Session<br></br>
                                 <input type="radio" id="Children" name="option" value="Children" />
                                 <label htmlFor="Children">Children </label>
                                 <input type="radio" id="Newborn" name="option" value="Newborn" />
                                 <label htmlFor="Newborn">Newborn </label>
                                 <input type="radio" id="Family" name="option" value="Family" />
                                 <label htmlFor="Family">Family </label><br></br>
                                 <input type="radio" id="Maternity" name="option" value="Maternity" />
                                 <label htmlFor="Maternity">Maternity </label>
                                 <input type="radio" id="Senior" name="option" value="Senior" />
                                 <label htmlFor="Senior">Senior </label>
                                 <input type="radio" id="Other" name="option" value="Other" />
                                 <label htmlFor="Other">Other </label>
                             </div>
     
     
     
     
     
                             <div className="mb-3">
                             <label className="form-label" htmlFor="message">
                                 Message
                             </label>
                             <textarea value={text} onChange={handleText} className="form-control" id="message">{text}</textarea>
                             </div>
                             <button className="btn btn-danger" type="submit" onSubmit={onSubmit}> 
                             Send
                             </button>
                         </form>
                         </div>   
                         
         </div>
         </div>
             
            
            
        </>
         )
     }
     
     export default Contact