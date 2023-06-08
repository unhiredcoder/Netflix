import React from 'react';
import ContactCard from './contactCard';
import styles from "../../styles/contact2.module.css";
import ContactForm from './contactForm';
import Footer from '../footer';
const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Contact Us</h1>
                <ContactCard />
                <ContactForm />
                <Footer/>

            </div>

        </>
    );
};

export default Contact;