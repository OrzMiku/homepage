import Bio from "../Bio/Bio";
import Links, { type Link } from "../Links/Links";
import Logo from "../Logo/Logo";
import styles from "./App.module.css";

function App() {
  const links: Link[] = [
    { text: "github", url: "https://github.com/OrzMiku" },
    {
      text: "neovim-config",
      url: "https://github.com/OrzMiku/neovim-config",
    },
    {
      text: "dotfiles",
      url: "https://github.com/OrzMiku/dotfiles",
    },
    {
      text: "lunarfox",
      url: "https://github.com/OrzMiku/lunarfox",
    },
  ];
  return (
    <div className={styles.app}>
      <Logo title="OrzMiku" />
      <Bio content="求知若渴，虚心若愚" />
      <Links links={links} />
    </div>
  );
}

export default App;
