import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { headerLinks } from '@/assets/data/headerLinks';
import ContactLinks from './about/ContactLinks';
import type { SetStateBoolean } from '@/types/types';

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="flex flex-col max-w-7xl p-7 mx-auto">
      <div className="flex w-full justify-between items-center">
        <a
          href="/"
          className="flex items-center text-5xl text-blue-600 dark:text-blue-300 font-semibold"
        >
          RM
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <NavItems setOpenMenu={setOpenMenu} />
        </nav>
        <MenuToggle openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      {openMenu && (
        <NavMenu setOpenMenu={setOpenMenu}>
          <MenuToggle openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </NavMenu>
      )}
    </header>
  );
}

function MenuToggle({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: SetStateBoolean;
}) {
  return (
    <button
      className="flex md:hidden cursor-pointer"
      onClick={() => setOpenMenu((state) => !state)}
    >
      {openMenu ? <X className="size-9" /> : <Menu className="size-9" />}
    </button>
  );
}

function NavMenu({
  children,
  setOpenMenu,
}: {
  children: React.ReactNode;
  setOpenMenu: SetStateBoolean;
}) {
  return (
    <>
      <nav className="flex md:hidden fixed top-0 left-0 flex-col h-full w-full p-7 items-center gap-10 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-2xl z-10">
        <div className="flex w-full justify-between items-center">
          <a
            href="/"
            className="flex items-center text-5xl text-blue-600 dark:text-blue-300 font-semibold"
          >
            RM
          </a>
          {children}
        </div>
        <NavItems setOpenMenu={setOpenMenu} />
      </nav>
    </>
  );
}

function NavItems({ setOpenMenu }: { setOpenMenu: SetStateBoolean }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        {headerLinks.map(({ link, name }) => (
          <a
            href={link}
            className="font-semibold text-center transition text-xl duration-150 text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-300"
            onClick={() => setOpenMenu(false)}
            key={name}
          >
            {name}
          </a>
        ))}
      </div>
      <ContactLinks />
    </>
  );
}
