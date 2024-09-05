import { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`${styles.accordion} ${isActive ? styles.active : ''}`}>
            <div className={styles.accordion_head} onClick={toggleAccordion}>
                <span className={`${styles.accordion_toggler} ${isActive ? styles.active : ''}`}>
                    {isActive ? '×' : '+'}
                </span>
                <h2 className={styles.accordion_title}>{title}</h2>
            </div>
            <div className={`${styles.accordion_body} ${isActive ? styles.active_body : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;
