import ClickAwayListener from '@mui/base/ClickAwayListener';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'FindTheFlag', href: '/findtheflag', current: true },
  { name: 'GuessTheFlag', href: '/guesstheflag', current: false },
  { name: 'FlagQuiz', href: '/flagquiz', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const handleClickAway = () => {
    // console.log('clicked');
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Disclosure as="nav" className="navbar">
        {({ open }) => (
          <>
            <div className="navbar mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <NavLink reloadDocument to="/">
                      <img
                        className="block h-12 w-auto lg:hidden"
                        src={require('./assets/allaboutflags.png')}
                        alt="Your Company"
                      />
                    </NavLink>
                    <NavLink reloadDocument to="/">
                      <img
                        className="hidden h-12 w-auto lg:block"
                        src={require('./assets/allaboutflags.png')}
                        alt="Your Company"
                      />
                    </NavLink>
                  </div>
                  <div className="hidden sm:mx-auto sm:block">
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <NavLink
                          reloadDocument
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? 'bg-gray-900 text-white text-lg '
                                : 'text-lg text-white hover:bg-gray-700 hover:text-white ',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )
                          }
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map(item => (
                  <NavLink
                    reloadDocument
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-gray-900 text-white text-lg'
                          : 'text-lg text-white hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </ClickAwayListener>
  );
}
