import React from "react";
import SwitchTheme from "../SwitchTheme";
import Link from "next/link";
import { getFeaturedEvents } from "@/dummy-data";

const Header = () => {
  const events = getFeaturedEvents();
  return (
    <header className="navbar bg-base-300 p-2">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Featured Events
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                {events.map((event) => {
                  return (
                    <li key={event.id}>
                      <Link href={`/events/${event.id}`}> {event.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link href="/events">Browse Events</Link>
            </li>
            <li>
              <Link href="/static">Static page</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-semibold text-primary  ">
          Next js
        </a>
      </div>
      <div className="navbar-center hidden lg:flex p-2">
        <ul className="menu menu-horizontal px-1 text-accent text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Featured Events
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 text-accent">
              {events.map((event) => {
                return (
                  <li key={event.id}>
                    <Link href={`/events/${event.id}`}> {event.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <Link href="/events">Browse Events</Link>
          </li>
          <li>
            <Link href="/static">Static page</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SwitchTheme />
        <a className="btn btn-secondary">Get started</a>
      </div>
    </header>
  );
};

export default Header;
