import getCategories from "@/utils/getCategories";
import Link from "next/link";

const Header = async () => {
  const categoies = await getCategories();
  return (
    <div className="navbar fixed top-0 z-50 shadow bg-base-100 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">হোম</Link>
            </li>
            <li>
              <Link href="/about">আমাদের সম্পর্কে</Link>
            </li>
            <li>
              <Link href="/contact">যোগাযোগ</Link>
            </li>
            <li>
              <Link href="/blog">ব্লগ</Link>
            </li>
            {/* {categoies.map((cat, index) => {
              return (
                <li key={index}>
                  <Link href={`/category/${cat.id}`}>{cat.name}</Link>
                </li>
              );
            })} */}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          ব্লগ অ্যাপ্লিকেশন
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href="/about">আমাদের সম্পর্কে</Link>
          </li>
          <li>
            <Link href="/contact">যোগাযোগ</Link>
          </li>
          <li>
            <Link href="/blog">ব্লগ</Link>
          </li>
          {/* {categoies.map((cat, index) => {
            return (
              <li key={index}>
                <Link href={`/category/${cat.id}`}>{cat.name}</Link>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
