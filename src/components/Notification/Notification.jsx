import React from "react";
import styles from "./Notification.module.css";


const Notification=(props) => {
    const {data}=props;
    return(
        <div className={styles.mainContainer} style={{backgroundColor: `${data?.bgColor}`}}>
            <img src={data?.icon} alt={`${data?.title}`} />
            <h3 className={styles.title}>{data?.title}</h3>
        </div>
    )
}

export default Notification