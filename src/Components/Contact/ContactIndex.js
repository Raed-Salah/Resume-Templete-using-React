import React from 'react';
import {ContactSection, Title, ContactForm, FormInput, TextInput,
     EmailInput, SubInput, TextArea, SubmitInput} from './ContactStyle.js';
import Footer from './../Footer/FooterIndex';

const Contact = () => {
    return(
        <React.Fragment>
            <ContactSection>
            <div className="container">
                <Title> Drop Me A line </Title>
                <ContactForm action="">
                    <FormInput>
                        <TextInput type="text" placeholder="Your name " />
                        <EmailInput type="email" placeholder=" Your email " />
                    </FormInput>
                    <SubInput type="text" class="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="your message ...."></TextArea>
                    <SubmitInput type="submit" value="send Message" />
                </ContactForm>
            </div>
            </ContactSection>
            <Footer />
        </React.Fragment>
    )
}

export default Contact;