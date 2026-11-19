import styles from "./Bio.module.css";

interface IProps {
  content: string;
}

function Bio({ content }: IProps) {
  return <div className={styles.bio}>{content}</div>;
}

export default Bio;
