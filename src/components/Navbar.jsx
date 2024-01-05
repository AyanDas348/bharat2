import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../constants";
import { close, logo, menu } from '../assets'
import { auth } from '../firebase/firebase'
import { signOut } from "firebase/auth";
import { IoIosArrowDropdown } from "react-icons/io";
import Signin from "./Signin";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const authToken = localStorage.getItem('bharat-loginToken')
  const user = localStorage.getItem('bharat-user') || ''
  const [dropdown, setShowDropdown] = useState(false)
  const [popup, setPopup] = useState(false)
  const navigate = useNavigate()
  const uid = localStorage.getItem('bharat-userUID')
  const [menuIcon, setMenuIcon] = useState(true)

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

  const signin = async () => {
    setPopup(true)
  }

  const signOutUser = async () => {
    signOut(auth).then(() => {
      //add toast message
      localStorage.removeItem('bharat-loginToken')
      setShowDropdown(false)
      navigate('/')
    }).catch((error) => {
      console.log(error)
    });
  }

  console.log(menuIcon)

  return (
    <nav
      className={`w-full flex top-0 bg-black relative py-3 z-20 ${scrolled ? "bg-primary" : ""
        } z-10`}
    >
      <div className='w-full flex justify-start items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 justify-center w-1/2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-16 h-16 bg-white object-contain' />
        </Link>

        {/* desktop menu */}
        <ul className='list-none hidden lg:flex flex-row gap-10 justify-end w-full'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title
                ? 'text-[#BCC6CC] transition duration-300 delay-75'
                : 'hover:text-[#BCC6CC] transition duration-300 delay-75'
                } px-14 py-2 rounded-lg text-[18px] font-medium cursor-pointer`}
              onClick={() => navigate(`/${nav.id}`)}
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
            className={`rounded-3xl bg-white px-14 py-2 text-lg w-fit text-black cursor-pointer ${authToken ? 'hidden' : ''}`}
            onClick={() => signin()}
          >
            Sign Up
          </li>
          <li
            className={`rounded-3xl bg-white px-14 py-2 text-lg w-fit text-black cursor-pointer ${authToken ? 'hidden' : ''}`}
          >
            Login
          </li>
          <div className={`flex items-center justify-center gap-3 relative ${authToken ? '' : 'hidden'}`}>
            <li className={`rounded-full bg-green-300 items-center flex justify-center text-lg w-10 h-10 text-black cursor-pointer`}>
              {user[0]}
            </li>
            <IoIosArrowDropdown className={`cursor-pointer text-white ${authToken ? '' : 'hidden'}`} onClick={() => setShowDropdown(!dropdown)} />
            {
              dropdown && (
                <div className="absolute right-0 top-14 border-2 rounded-lg bg-white z-20 px-4 py-1 cursor-pointer">
                  <ul className="items-start justify-center flex flex-col text-black">
                    <li className="mb-2 px-2 py-3" onClick={() => { navigate(`/user/${uid}/schedule`); setShowDropdown(false) }}>
                      Schedule
                    </li>
                    <hr className="mb-2 w-full"></hr>
                    <li className="mb-2 px-2 py-3" onClick={() => { navigate(`/user/${uid}/subscription`); setShowDropdown(false) }}>
                      Subscriptions
                    </li>
                    <hr className="mb-2 w-full"></hr>
                    <li className="mb-2 px-2 py-3" onClick={() => signOutUser()}>
                      Sign Out
                    </li>
                  </ul>
                </div>
              )
            }
          </div>
        </ul>

        {/* mobile menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center z-20 relative'>
          <div className={`${menuIcon ? '' : 'hidden'}`}>
            <button
              onClick={() => setMenuIcon(false)}
              className="mx-3"
            >
              <CiMenuBurger className="text-white h-8 w-8" />
            </button>
          </div>
          <div className={`${menuIcon ? 'hidden' : ''}`}>
            <button
              onClick={() => setMenuIcon(true)}
              className="mx-3"
            >
              <IoCloseOutline className="text-white h-8 w-8" />
            </button>
          </div>

          <div
            className={`${toggle ? 'menu-slide-in' : 'menu-slide-out'
              } p-6 border-t-2 border-b-2 text-black -top-24 bg-white absolute w-full z-10`}
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

      {
        popup && (
          <Signin setPopup={setPopup} />
        )
      }
    </nav>
  );
};

export default Navbar;
