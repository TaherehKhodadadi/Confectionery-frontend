import React from "react";
import Assets from "../../../Assets";
import styles from "./styles.module.scss";


export default function SignIn() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
             <img src={Assets.Images.Signin}/>
            </div>
            <div className={styles.right}>

            </div>
        </div>
    )

};