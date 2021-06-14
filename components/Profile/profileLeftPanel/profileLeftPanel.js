import React from 'react'
import styles from './ProfileLeftPanel.module.scss'


export default function profileLeftPanel( {About, Skills}) {
    return (
        <div>
            <div className={styles.aboutContainer}>
                <h3>About</h3>
                <p>{About}</p>
            </div>
            <div className={styles.aboutContainer}>
                <h3>Skills</h3>
            </div>
            <div className={styles.aboutContainer}>
                <h3>PEOPLE YOU MAY KNOW</h3>
            </div>
        </div>
    )
}
