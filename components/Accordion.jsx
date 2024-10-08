import { useState } from 'react';
import styles from './Accordion.module.css';
import Image from 'next/image';

const Accordion = ({ title, description, listItems, imageUrl, imageAlt }) => {
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
                <p className={styles.accordion_description}>{description}</p>
                {listItems && (
                    <ul className={styles.accordion_list}>
                        {listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={500}
                        height={100}
                        style={{ marginTop: '10px' }}
                        className='shadow-xl border border-1 border-gray-600 rounded-md'
                    />
                )}
            </div>
        </div>
    );
};

export default Accordion;
