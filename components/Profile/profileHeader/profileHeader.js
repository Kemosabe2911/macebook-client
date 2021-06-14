import React from 'react'
import styles from './profileHeader.module.scss'

const profileHeader = ({ BGImg, UserImg, Name, Location, Position, Connections, Batch, Branch }) => {
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
                    <p className={styles.userLocation}>{Location} . Batch of '{Batch} . {Branch}</p>
                    <p className={styles.userConnections}>{Connections} Connections</p>
                </div>
                <div className={styles.userButtons}>
                    <button className={styles.msgButton}>Settings</button>
                    <button className={styles.connectButton}>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}
export default profileHeader

