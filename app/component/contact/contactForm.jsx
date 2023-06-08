import React from 'react';
import styles from "../../styles/contact2.module.css";

const ContactForm = () => {
    return (
      <div className={styles.cardForm}>
        <form className={styles.signup}>
          <div className={styles.formTitle}>Contact Form</div>
          <div className={styles.formBody}>
            <div className={styles.row}>
              <input type="text" placeholder="First Name*" className={styles.inputText} />
              <input type="text" placeholder="Last Name*" className={styles.inputText} />
            </div>
            <div className={styles.row}>
              <input type="text" placeholder="Email Address*" className={styles.inputText} />
            </div>
          </div>
          <div className={styles.rule}></div>
          <div className={styles.formFooter}>
            <button className={styles.a}>Send<span className={`${styles.faThumbsUp} fa`}></span></button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  