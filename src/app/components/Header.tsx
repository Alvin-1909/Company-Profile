import React from "react";

interface HeaderProps {
  logoUrl: string;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, name }) => (
  <header>
    <img src={logoUrl} alt={name} width={150} />
    <h1>{name}</h1>
  </header>
);

export default Header;
