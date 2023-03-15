import Header from "./Header";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact(){

    const [state, handleSubmit] = useForm("mbjekwrp");
    if (state.succeeded) {
        return (
            <section  className="confimation">
                <Header/>
                <article>
                    <h2>Vielen Dank! Wir antworten so schnell wie möglich auf Ihr Anliegen.</h2>
                </article>
            </section>
        )
    }

    return(
        <main className="contact">
            <Header/>
            <section className="section contactOne">
                <form onSubmit={handleSubmit} >
                    <div className="formItem">                
                        <label htmlFor="organization">Organization</label>
                        <div className="line2"/>
                        <input 
                            id="organization"
                            type="text"
                            name="organization"
                            placeholder="Insert Companyname" 
                        />
                        <ValidationError 
                            prefix="Organization" 
                            field="organization"
                            errors={state.errors}
                        />
                    </div>
                    <div className="formItem">                
                        <label htmlFor="fullname">Fullname</label>
                        <div className="line2"/>
                        <input 
                            id="fullname"
                            type="text"
                            name="fullname"
                            placeholder="Insert your name"
                            required
                        />
                        <ValidationError 
                            prefix="Fullname" 
                            field="fullname"
                            errors={state.errors}
                        />

                    </div>
                    <div className="formItem">
                        <label htmlFor="Email">E-mail</label>
                        <div className="line2"/>
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            placeholder="gandalf@mustermann.com"
                            required
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="formItem">                
                        <label htmlFor="phone">Phone</label>
                        <div className="line2"/>
                        <input 
                            id="phone"
                            name="phone" 
                            type="text" 
                            placeholder="optinal"
                        />
                        <ValidationError 
                            prefix="Phone" 
                            field="phone"
                            errors={state.errors}
                        />
                            
                    </div>
                    <div className="formItem">
                        <label htmlFor="Text">Your Message</label>
                        <div className="line2"/>
                        <input 
                            id="message"
                            name="message" 
                            type="text" 
                            placeholder="Tell us what you need..."
                            required
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className="btnSec">
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>                    
                    </div>

                </form>

            </section>
        </main>
    )
}

export default Contact;
