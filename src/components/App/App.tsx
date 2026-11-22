import Bio from "../Bio/Bio";
import Links, { type Link } from "../Links/Links";
import Logo from "../Logo/Logo";
import styles from "./App.module.css";

function App() {
  const socialLinks: Link[] = [
    {
      text: "github",
      url: "https://github.com/OrzMiku",
    },
    {
      text: "bilibili",
      url: "https://space.bilibili.com/402606447",
    },
    {
      text: "x",
      url: "https://x.com/real_orzmiku",
    },
  ];
  const projectLinks: Link[] = [
    {
      text: "neovim-config",
      url: "https://github.com/OrzMiku/neovim-config",
      description: "我的 Neovim 配置",
    },
    {
      text: "dotfiles",
      url: "https://github.com/OrzMiku/dotfiles",
      description: "我的开发环境配置文件",
    },
    {
      text: "lunarfox",
      url: "https://github.com/OrzMiku/lunarfox",
      description: "兼顾性能和原版体验的 Minecraft 模组整合包",
    },
  ];
  const friendLinks: Link[] = [
    {
      text: "浮生若梦",
      url: "https://fufu.ink",
      description: "浮生若梦的个人主页",
    },
  ];

  return (
    <div className={styles.app}>
      <Logo title="OrzMiku" />
      <Bio content="求知若渴，虚心若愚" />
      <section className={styles.linkSection} aria-labelledby="social">
        <h2 id="social">social</h2>
        <Links links={socialLinks} />
      </section>
      <section className={styles.linkSection} aria-labelledby="projects">
        <h2 id="projects">projects</h2>
        <Links links={projectLinks} />
      </section>
      <section className={styles.linkSection} aria-labelledby="friends">
        <h2 id="friends">friends</h2>
        <Links links={friendLinks} />
      </section>
    </div>
  );
}

export default App;
