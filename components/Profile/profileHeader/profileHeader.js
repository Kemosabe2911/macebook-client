import React from 'react'
import styles from './profileHeader.module.scss'

const profileHeader = ({ BGImg, UserImg, Name, Location, Position }) => {
    return (
        <div className={styles.header}>
            <div className={styles.bgimgContainer}>
                <img src={BGImg} alt="Background Image"></img>
            </div>
            <div className={styles.userHeader}>
                <img src={UserImg} alt="user"></img>
                <address>
                    <p>{Name}</p>
                    <p>{Position}</p>
                    <p>{Location}</p>
                </address>
            </div>
        </div>
    )
}
export default profileHeader

