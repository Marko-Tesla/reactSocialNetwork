import React from 'react';
import styles from './FormsControls.module.css'

const FormControl = ({input, meta, element, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
         <div>
            {props.children}
         </div>
         <div>
            {hasError && <span>{meta.error}</span>}
         </div>
      </div>
   )
}

export const Textarea = (props) => {
   const {input, meta, child, ...restProps} = props;
   return (<FormControl {...props} ><textarea {...restProps} {...props} {...input} /></FormControl>)
}


export const Input = (props) => {
   const {input, meta, child, ...restProps} = props;
   return (<FormControl {...props} ><input {...restProps} {...props} {...input} /></FormControl>)
}
