/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export function CornerBack() {
  return (
    <nav className="corner-back" aria-label="Alphabet home / 返回字母首页">
      <img
        draggable={false}
        src="/images/abc-pro/green-corner-triangle.png"
        alt=""
      />
      <Link href="/" aria-label="Alphabet home / 返回字母首页">
        <img
          draggable={false}
          src="/images/abc-pro/green-corner-button-no-padding.png"
          alt=""
        />
      </Link>
    </nav>
  );
}
