import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="ml-10 sm:ml-5 md:ml-10 lg:ml-20 xl:ml-40">
      <Link href="/">
        <Image
          src="/images/logo/chat-translation_logo.png"
          alt="chat translation logo"
          width={100}
          height={120}
          className="dark:filter dark:invert"
        />
      </Link>
    </div>
  );
}

export default Logo;
