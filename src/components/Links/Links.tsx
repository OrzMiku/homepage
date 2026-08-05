import styles from "./Links.module.css";

export type Link = {
  text: string;
  url: string;
};

interface IProps {
  links: Array<Link>;
}

function Links({ links }: IProps) {
  return (
    <ul className={styles.links}>
      {links.map((link, index) => {
        const { text, url } = link;
        return (
          <li key={index}>
            <a href={url}>[{text}]</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
