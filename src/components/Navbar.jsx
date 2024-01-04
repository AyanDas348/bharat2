import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, logo, menu } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex top-0 relative z-20 ${scrolled ? "bg-transparent" : "bg-transparent"
        } z-10`}
    >
      <div className='w-full flex justify-start items-center'>
        <Link
          to='/'
          className='flex items-center gap-2 justify-self-start w-1/2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-20 bg-white h-20 object-contain' />
        </Link>

        {/* desktop menu */}
        <ul className='list-none hidden lg:flex flex-row gap-10 justify-self-end'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title
                ? 'text-[#BCC6CC] transition duration-300 delay-75'
                : 'hover:text-[#BCC6CC] transition duration-300 delay-75'
                } px-14 py-2 rounded-lg text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link
                to={`/${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`${active === nav.title ? 'text-[#BCC6CC]' : 'text-[#BCC6CC]'}`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
          <li
            className="rounded-3xl bg-white px-14 py-2 text-lg w-48 text-black"
          >
            Sign Up
          </li>
          <li
            className="rounded-3xl bg-white px-14 py-2 text-lg text-black"
          >
            Login
          </li>
        </ul>


        {/* mobile menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${toggle ? 'menu-slide-in' : 'menu-slide-out'
              } p-6 border-t-2 border-b-2 text-white absolute w-full z-10`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-secondary'
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={`/${nav.id}`} onClick={() => setActive(nav.title)}>
                    {nav.title}
                  </Link>
                </li>
              ))}
              <li
                key={'signup'}
                className={`font-poppins font-medium cursor-pointer text-[16px]`}
              >
                Sign Up
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px]`}
              >
                Login
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
