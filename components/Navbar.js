import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <Link href="/"><a className="navbar-brand">BitPrice</a></Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
        </li>
        <li className="nav-item">
          <Link href="#"><a className="nav-link">Link</a></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
