import React from "react";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <section>
      <h2 className="font-semibold">
        {title} <span className="text-[#6E7373]">/ {subtitle}</span>
      </h2>
    </section>
  );
};

export default Header;
