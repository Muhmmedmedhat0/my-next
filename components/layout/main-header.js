import React from "react";
import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div  className={classes.logo}>
        <Link href="/">Next Event</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;