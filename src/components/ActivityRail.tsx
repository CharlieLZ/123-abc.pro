/* eslint-disable @next/next/no-img-element */

import type { LearningActivity } from "@/types/learning-activity";

const railActivities: LearningActivity[] = [
  {
    alt: "ABC Song - Learn the Alphabet / 字母歌",
    href: "/h/abcs/song/",
    image: "/images/abc-pro/ButtonABCWhale.png",
  },
  {
    alt: "ABC Song / ABC 字母歌",
    href: "/h/abcs/vfs224126198/",
    image: "/images/abc-pro/ButtonABC.png",
  },
  {
    alt: "ABC Sign Language / 字母手语",
    href: "/h/abcs/sign-abcs/",
    image: "/images/abc-pro/ButtonSign.png",
  },
  {
    alt: "Short-a Song / 短元音 a 歌曲",
    href: "/h/abcs/vfs224132994/",
    image: "/images/abc-pro/ButtonA.png",
  },
  {
    alt: "Short-e Song / 短元音 e 歌曲",
    href: "/h/abcs/vfs224133137/",
    image: "/images/abc-pro/ButtonE.png",
  },
  {
    alt: "Short-i Song / 短元音 i 歌曲",
    href: "/h/abcs/vfs224133580/",
    image: "/images/abc-pro/ButtonI.png",
  },
  {
    alt: "Short-o Song / 短元音 o 歌曲",
    href: "/h/abcs/vfs224136143/",
    image: "/images/abc-pro/ButtonO.png",
  },
  {
    alt: "Short-u Song / 短元音 u 歌曲",
    href: "/h/abcs/vfs224136459/",
    image: "/images/abc-pro/ButtonU.png",
  },
];

export function ActivityRail() {
  return (
    <div className="row-individual activity-rail">
      <div className="rainbow" aria-hidden="true" />
      <div className="rainbow rainbow-2" aria-hidden="true" />

      {railActivities.map((activity) => (
        <a className="w-12p5" href={activity.href} key={activity.alt}>
          <img draggable={false} src={activity.image} alt={activity.alt} />
        </a>
      ))}
    </div>
  );
}
