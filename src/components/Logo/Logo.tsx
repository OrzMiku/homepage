import styles from "./Logo.module.css";

interface IProps {
  title: string;
}

function Logo({ title }: IProps) {
  return <div className={styles.logo}>{title}</div>;
}

export default Logo;
