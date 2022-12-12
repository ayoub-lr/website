import React from "react";
import { Contactsection, ContactTitle, Span, Form, Forminput,Inputtext, Inputemail, Inputsub, Textarea, Inputsubmit} from './style.js'

const Contact =() =>{
return(
    <Contactsection>
    <div className="container">
        <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
        <Form>
            <Forminput>
                <Inputtext placeholder="Your Name" />
                <Inputemail placeholder="Your Email" />
            </Forminput>
            <Inputsub placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <Inputsubmit value="Send Message" />
        </Form>
    </div>
</Contactsection>

)
}


export default Contact