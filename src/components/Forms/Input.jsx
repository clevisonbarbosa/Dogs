import React from 'react'
import styles from './Input.module.css'

const  Input = ({label, type, name, value, onChange, error, onblur}) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input 
        className={styles.input} 
        id={name} 
        name={name} 
        type={type} 
        value={value}
        onBlur={onblur}
        onChange={onChange}
        />
        {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input
