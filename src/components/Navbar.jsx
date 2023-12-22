import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../Context';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, linkedin, github_logo, gmail, jp, en } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const changeLanguage = () => {
    const newLang = language === 'en' ? 'jp' : 'en';
    setLanguage(newLang);
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        <div className='flex items-center gap-2'>
          <a href="https://www.linkedin.com/in/kotaro-ito-839037265/" target='_blank'>
            <img
              src={linkedin}
              className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
            />
          </a>

          <a href="https://github.com/KotaroIto15" target='_blank'>
            <img
              src={github_logo}
              className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
            />
          </a>

          <a href="mailto:agkito34@gmail.com" target='_blank'>
            <img
              src={gmail}
              className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
            />
          </a>
        </div>

        <ul className="list-none hidden sm:flex flex-row items-center gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li
            key={"language"}
            className={`text-eerieBlack hover:text-taupe text-[21px] font-medium font-mova 
              uppercase tracking-[3px] cursor-pointer nav-links`}
            onClick={() => changeLanguage()}
          >
            <div className='sm:flex items-center'>
              <span>{language === "en" ? "日本語" : "EN"}</span>
              <img src={language === "en" ? jp : en} className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain" />
            </div>
          </li>
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                      } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
