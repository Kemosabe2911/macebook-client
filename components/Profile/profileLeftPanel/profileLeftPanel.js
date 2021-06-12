import React from 'react'
import styles from './ProfileLeftPanel.module.scss'


export default function profileLeftPanel( {About, Skills}) {
    return (
        <div>
            <div className={styles.aboutContainer}>
                <h3>About</h3>
                <p>{About}</p>
            </div>
            <h3>{About}</h3>
            <p>Hello</p>
        </div>
    )
}
