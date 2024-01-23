import styles from "./index.module.css";

function TraditionalButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, ...restProps } = props;
  return (
    <button
      className={`${className} ${styles.traditionalButton}`}
      {...restProps}
    />
  );
}

export { TraditionalButton };
