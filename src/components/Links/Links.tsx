import styles from "./Links.module.css";

export type Link = {
  text: string;
  url: string;
  description?: string;
};

interface IProps {
  links: Array<Link>;
}

function Links({ links }: IProps) {
  return (
    <ul className={styles.links}>
      {links.map((link, index) => {
        const { text, url, description } = link;
        return (
          <li key={index}>
            <a href={url}>[{text}]</a>
            {description && <p className={styles.description}>{description}</p>}
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
