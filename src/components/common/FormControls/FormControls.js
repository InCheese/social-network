import styles from "./FormControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + "" + (hasError ? styles.error : "")}>
      {hasError && <span>{meta.error}</span>}
      <div>
        <textarea {...input} {...meta} />
      </div>
    </div>
  );
};
