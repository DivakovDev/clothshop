"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { CustomBtn } from "./CustomBtn";
import Image from "next/image";

const navigation = [
  { name: "Women", href: "#"},
  { name: "Men", href: "#"},
  { name: "Kids", href: "#"},
  { name: "Sports", href: "#"},
  { name: "Accessories", href: "#"},
  { name: "Company", href: "#"},
  { name: "Stores", href: "#"},
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const NavigationBar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden md:relative md:inline-block">
                <CustomBtn
                title="Gift Cards"
                containerStyles="text-white py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700"
                btnType="button"
                />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Order dropdown */}
                <Menu as="div" className="hidden md:relative md:inline-block text-left">
                  <div>
                    <Menu.Button className="relative mx-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-72 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-6">
                        <div className="pb-4 border-b-2 text-left">
                          <p className="text-md">Your shopping bag is empty</p>
                        </div>
                        <div className="flex flex-row py-2 text-md justify-between border-b-2">
                          <p>Order value</p>
                          <span>€0.00</span>
                        </div>
                        <div className="flex flex-row py-2 text-lg font-medium rounded-b-lg justify-between">
                          <p>Total</p>
                          <span>€0.00</span>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute text-center right-0 z-10 mt-2 w-64
                     origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="px-5 pt-4 pb-3">
                        <div className="flex flex-row justify-center">
                          <button className="py-2 font-medium px-4 w-full items-center text-white bg-indigo-600 hover:bg-indigo-700">
                            <a href="#">Sign in</a>
                          </button>
                        </div>
                        <div className="mt-2">
                          <p className="text-md">
                            Get in your account and use our prmotions.
                          </p>
                        </div>
                        <a
                          className="text-[11px] text-gray-400 hover:text-black"
                          href=""
                        >
                          Not a member yet? Join here for free!
                        </a>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex justify-center py-4 space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      "text-lg font-normal text-black hover:underline underline-offset-2"
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    "block rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
