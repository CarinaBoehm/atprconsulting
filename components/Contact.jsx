import Header from "./Header";
import {useState} from 'react'

function Contact(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        //prevents to rerender the page
            e.preventDefault();
        
            let res = await fetch("https://httpbin.org/post",{
                method: "POST",
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    text: text
                })
            });
            if(res.status === 200){
            setFirstName("");  
            setLastName("");
            setEmail("");
            setText("");
            }
        }

    return(
        <main className="contact">
            <Header/>
            <section className="section contactOne">
                <form onSubmit={handleSubmit}>
                    <div className="formItem">                
                        <label htmlFor="Firma">Organization</label>
                        <div className="line2"/>
                        <input 
                            id="LastName"  
                            type="text"
                            value={lastName} 
                            placeholder="Insert Companyname"
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                            autoComplete="family-name" 
                        />
                    </div>
                    <div className="formItem">                
                        <label htmlFor="Fullname">Fullname</label>
                        <div className="line2"/>
                        <input 
                            id="FirstName" 
                            type="text" 
                            value={firstName} 
                            placeholder=""
                            onChange={(event) => {I
                                setFirstName(event.target.value);
                            }} 
                            autoComplete="given-name"/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="Email">E-mail</label>
                        <div className="line2"/>
                        <input 
                            id="Email" 
                            type="email"
                            value={email}
                            placeholder="gandalf@mustermann.com"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            autoComplete="email" 
                        />
                    </div>
                    <div className="formItem">                
                        <label htmlFor="FirstName">Phone</label>
                        <div className="line2"/>
                        <input 
                            id="FirstName" 
                            type="text" 
                            placeholder="optinal"
                            value={firstName} 
                            onChange={(event) => {I
                                setFirstName(event.target.value);
                            }} 
                            autoComplete="given-name"/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="Text">Your Message</label>
                        <div className="line2"/>
                        <input 
                            id="text" 
                            type="text" 
                            placeholder="Tell us what you need..."
                            value={text} 
                            onChange={(event) => {
                                setText(event.target.value);
                            }}
                            autoComplete="text"
                        />
                    </div>
                    <div className="btnSec">
                        {/* <p>If you want you can call us: <a href="">015788804193</a> <span>weekdays 8-16Uhr</span> </p> */}
                        <input className="submitBtn" type="submit" value="Submit" />
                    </div>

                </form>

            </section>
        </main>
    )
}

export default Contact;
