import React from 'react';
import Link from 'next/link';

const links = [
  // { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/williamli/coronavirus-hk-dashboard', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = (props) => (
  <nav>
    <ul>
      <li>
        { props.locale === 'zh-HK' ?
            <Link href="/en-HK">
              <a>View in English</a>
            </Link>
          : <Link href="/zh-HK">
              <a>以繁體中文閱讀</a>
            </Link>
        }
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a target="_blank" href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        padding: 0 1rem;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
