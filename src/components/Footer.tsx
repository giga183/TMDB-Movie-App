import { SiInstagram } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white w-full shadow-sm dark:bg-gray-800 sticky bottom-0">
      <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 gap-5">
          <Link to="https://www.themoviedb.org/" className="hover:underline">
            2025 The Movies
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <div className="flex justify-center items-center">
            <li>
              <Link
                to="https://x.com/themoviedb"
                className="hover:underline me-4 md:me-6 flex"
              >
                <BsTwitterX />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/tmdbmovies/"
                className="hover:underline me-4 md:me-6 flex"
              >
                <SiInstagram />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/themoviedb/"
                className="hover:underline me-4 md:me-6 flex"
              >
                <FaFacebook />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
