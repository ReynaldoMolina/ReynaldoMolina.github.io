import { useState } from "react";
import { headerLinks, contacts } from './data';
import MenuSvg from '../icons/menu.svg?react';
import CloseSvg from '../icons/close.svg?react';

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="flex flex-col max-w-7xl p-7 mx-auto">
      <div className="flex w-full justify-between items-center">
      <a href="/" className="flex items-center text-5xl text-blue-700 dark:text-blue-300 font-semibold">RM</a>
        <HeaderNavDesktop />
        <HeaderToggle openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      {openMenu &&
        <HeaderNav setOpenMenu={setOpenMenu}>
          <HeaderToggle openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </HeaderNav>}
    </header>
  );
}

function HeaderToggle({ openMenu, setOpenMenu }) {
  return (
    <button
      className="flex md:hidden cursor-pointer"
      onClick={() => setOpenMenu(state => !state)}>
      {openMenu ?
        <CloseSvg className="size-9" /> :
        <MenuSvg className="size-9" />
      }
    </button>
  );
}

function HeaderNavDesktop() {
  return (
    <nav className="hidden md:flex items-center gap-10">
      <HeaderItems />
    </nav>
  );
}

function HeaderNav({ children, setOpenMenu }) {
  return (
    <>
      <nav className="flex md:hidden fixed top-0 left-0 flex-col h-full w-full p-7 items-center gap-10 bg-white dark:bg-neutral-800/80 backdrop-blur-2xl z-10">
        <div className="flex w-full justify-between items-center">
          <a href="/" className="flex items-center text-5xl text-blue-700 dark:text-blue-300 font-semibold">RM</a>
          {children}
        </div>
        <HeaderItems setOpenMenu={setOpenMenu} />
      </nav>
    </>
  );
}

function HeaderItems({ setOpenMenu }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        {headerLinks.map((link, index) =>
          <a
            href={link.link}
            className="font-semibold text-center transition text-xl duration-150 text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-300"
            onClick={() => setOpenMenu(false)}
            key={index}
          >{link.name}</a>
        )}
      </div>
      <div className="flex gap-5">
        {contacts.map(({ link, Icon }, index) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
            <Icon className="size-9 opacity-80 hover:scale-110 cursor-pointer transition duration-150" />
          </a>
        ))}
      </div>
    </>
  );
}