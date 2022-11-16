// @src/components/PopUpForm.jsx

import React from "react";
import styles from "./PopUpForm.module.css";
import { RiCloseLine } from "react-icons/ri";

const PopUpForm = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.PopUpForm}>
          <div className={styles.PopUpFormHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.PopUpFormContent}>
            Are you sure you want to delete the item?
          </div>
          <div className={styles.PopUpFormActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpForm;