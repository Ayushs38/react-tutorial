import React from 'react';

function Header() {

  const NavItems = [
    {
      link: "#",
      name: "Home",
     
    },
    {
      link: "#",
      name: "About Us"
    },
    {
      link: "#",
      name: "Service"
    },
    {
      link: "#",
      name: "Gallery"
    },
    {
      link: "#",
      name: "Contact"
    },
  ];

  return (
    <>
      <div>
        <span>Logo</span>
        <nav>
          <ul >
            {
            NavItems.map((janvi) => (
              <li>
                <a href={janvi.link}>{janvi.name}</a>
              </li>
            ))
          }
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
