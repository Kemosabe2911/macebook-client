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
                <div className={styles.userDetails}>
                    <h2>{Name}</h2>
                    <p className={styles.userPosition}>{Position}</p>
                    <p className={styles.userLocation}>{Location}</p>
                </div>
            </div>
        </div>
    )
}
export default profileHeader

