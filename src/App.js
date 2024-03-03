import React from 'react';
import styles from  './App.module.css';
import Notification from './components/Notification/Notification';


function App() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Notifications</h1>
<div className={styles.notificationsContainer}>
  {notificationData.map((item, index) => {
    return (
      <div key={index} className={styles.notificatiobCon}>
        <Notification data={item} />
        </div>
    )
  })}

</div>


    </div>
  );
}

export default App;


const notificationData=
[
  {
  id : 1,
  title: "Information Message",
  icon: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
  bgColor: "#0b69ff"
},
{
  id : 2,
  title: "Success Message",
  icon: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
  bgColor: " #2dca73"
},  {
  id : 3,
  title: "Warning Message",
  icon: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
  bgColor: " #ffb800"
},  {
  id : 4,
  title: "Error Message",
  icon: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
  bgColor: " #ff0b37"
},

]