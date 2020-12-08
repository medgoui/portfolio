import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [isActive, setIsActive] = useState({
        name: false,
        email: false,
        phone: false,
        message: false
    });

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_c6yll2o', 'template_8aefvqd', e.target, 'user_aq0IK4DKmarWB6ncfGTS3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
    }

    const handleTextChange = text => {
        setName(text);
        if (text !== '') {
            setIsActive({ ...isActive, name: true });
        } else {
            setIsActive({ ...isActive, name: false });
        }
    }

    const handleEmailChange = text => {
        setEmail(text);
        if (text !== '') {
            setIsActive({ ...isActive, email: true });
        } else {
            setIsActive({ ...isActive, email: false });
        }
    }

    const handlePhoneChange = text => {
        setPhone(text);
        if (text !== '') {
            setIsActive({ ...isActive, phone: true });
        } else {
            setIsActive({ ...isActive, phone: false });
        }
    }

    const handleMessageChange = text => {
        setMessage(text);
        if (text !== '') {
            setIsActive({ ...isActive, message: true });
        } else {
            setIsActive({ ...isActive, message: false });
        }
    }

    return (
        <div className="contact__container" id="contact">
            <h2 className="contact__title">CONTACT ME</h2>
            <div className="star__style">
                <i className="fa fa-star"></i>
            </div>
            <form className="form__container" onSubmit={sendEmail}>
                <div className="form__item">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => handleTextChange(e.target.value)}
                    />
                    <label className={isActive.name ? "Active" : ""} htmlFor="name">Name</label>
                </div>
                <div className="form__item">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                    />
                    <label className={isActive.email ? "Active" : ""} htmlFor="email">Email</label>
                </div>
                <div className="form__item">
                    <input
                        type="tel"
                        name="tel"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                    />
                    <label className={isActive.phone ? "Active" : ""} htmlFor="tel">Phone Number</label>
                </div>
                <div className="form__item">
                    <input
                        value={message}
                        name="message"
                        onChange={(e) => handleMessageChange(e.target.value)}
                    />
                    <label className={isActive.message ? "Active" : ""} htmlFor="message">Message</label>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;