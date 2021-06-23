import React from 'react'
import styles from './profileHeader.module.scss'

const profileHeader = ({ BGImg, UserImg, Name, Location, Position, Connections, Batch, Branch }) => {
    return (
        <div className="container">
            <div className={styles.bgimgContainer}>
                <img src={BGImg} alt="Background Image"></img>
            </div>
            <div className="row position-relative">
                    <div className="col-3 mx-auto">
                        <div className={styles.imgContainer}>
                            <img src={UserImg} alt="user"></img>
                        </div>
                    </div>
                    <div className="col-5">
                        <h2>{Name}</h2>
                        <address className="d-flex flex-column">
                            <span>{Position}</span>
                            <span>{Location} . Batch of '{Batch} . {Branch}</span>
                            <span className={styles.userConnections}>{Connections} Connections</span>
                        </address>
                    </div>
                    <div className="col-4 position-relative align-middle">
                        <div className={styles.btnContainer}>
                            <div className={styles.userButtons}>
                                <button className={styles.msgButton}>Settings</button>
                                <button className={styles.connectButton}>Edit Profile</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default profileHeader

/*

<div className={styles.header}>
            <div className={styles.bgimgContainer}>
                <img src={BGImg} alt="Background Image"></img>
            </div>
            <div className="row d-flex flex-row">
                <div className="cols-3">hello</div>
                <div className="cols-5">world</div>
                <div className="cols-4">css</div>
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


*/