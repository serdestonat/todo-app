import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/checkit.png" width={120} height={90}></Image>
      </div>
    </nav>
  );
};

export default Navbar;
