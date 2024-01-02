import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, logo, menu } from '../assets'
import { auth, provider } from '../firebase/firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authToken, setAuthToken] = useState('')
  const [user, setUser] = useState('')
  const [dropdown, setShowDropdown] = useState(false)

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
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setAuthToken(credential.accessToken)
        const user = result.user;
        setUser(result.user.displayName)
        console.log(user, token)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
  }

return (
  <nav
    className={`w-full flex py-5 top-0 mb-[30px] relative z-20 ${scrolled ? "bg-primary" : "bg-transparent"
      } z-10`}
  >
    <div className='w-full flex justify-start items-center max-w-7xl'>
      <Link
        to='/'
        className='flex items-center gap-2 justify-self-start w-1/2'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
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
          className={`rounded-3xl bg-white px-14 py-2 text-lg w-48 text-black cursor-pointer ${authToken ? 'hidden' : ''}`}
          onClick={() => sign()}
        >
          Sign Up
        </li>
        <li
          className={`rounded-3xl bg-white px-14 py-2 text-lg w-48 text-black cursor-pointer ${authToken ? 'hidden' : ''}`}
        >
          Login
        </li>
        <div className="flex items-center justify-center gap-3 relative">
          <li className={`rounded-full bg-green-300 items-center flex justify-center text-lg w-10 h-10 text-black cursor-pointer ${authToken ? '' : 'hidden'}`}>
            {user[0]}
          </li>
          <IoIosArrowDropdown className={`cursor-pointer ${authToken ? '' : 'hidden'}`} onClick={() => setShowDropdown(!dropdown)} />
          {
            dropdown && (
              <div className="absolute right-0 top-14 border-2 rounded-lg z-20 px-4 py-1">
                <ul className="items-start justify-center flex flex-col">
                  <li className="mb-2 px-2 py-3">
                    Schedule
                  </li>
                  <hr className="mb-2 w-full"></hr>
                  <li className="mb-2 px-2 py-3">
                    Subscriptions
                  </li>
                </ul>
              </div>
            )
          }
        </div>
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
