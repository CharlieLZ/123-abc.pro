/* eslint-disable @next/next/no-img-element */

import type { LearningActivity } from "@/types/learning-activity";

const letterActivities: LearningActivity[] = Array.from(
  { length: 26 },
  (_, index) => {
    const lowerCaseLetter = String.fromCharCode(97 + index);
    const upperCaseLetter = lowerCaseLetter.toUpperCase();

    return {
      alt: `Letter ${upperCaseLetter} / 字母 ${upperCaseLetter}`,
      href: `/h/abcs/letter-${lowerCaseLetter}/`,
      image: `/images/abc-pro/btn_${lowerCaseLetter}.png`,
    };
  },
);

const promotionActivities = {
  colors: {
    alt: "Colors / 颜色",
    href: "/h/colors/?sn=abcs",
    image: "/images/abc-pro/ad_more_colors.png",
  },
  mathSongs: {
    alt: "Math Songs / 数学歌曲",
    href: "/h/mathsongs/?sn=abcs",
    image: "/images/abc-pro/ad_more_number.png",
  },
} satisfies Record<string, LearningActivity>;

interface ActivityLinkProps {
  activity: LearningActivity;
  className: string;
}

function ActivityLink({ activity, className }: ActivityLinkProps) {
  return (
    <a className={className} href={activity.href}>
      <img draggable={false} src={activity.image} alt={activity.alt} />
    </a>
  );
}

export function AlphabetBoard() {
  return (
    <div className="row-individual alphabet-board">
      {letterActivities.slice(0, 4).map((activity) => (
        <ActivityLink
          key={activity.alt}
          activity={activity}
          className="w-16p6"
        />
      ))}

      <ActivityLink
        activity={promotionActivities.colors}
        className="w-33 p-10 sm-display-none"
      />

      {letterActivities.slice(4, 8).map((activity) => (
        <ActivityLink
          key={activity.alt}
          activity={activity}
          className="w-16p6"
        />
      ))}

      <ActivityLink
        activity={promotionActivities.mathSongs}
        className="w-33 p-10 sm-display-none"
      />

      {letterActivities.slice(8).map((activity) => (
        <ActivityLink
          key={activity.alt}
          activity={activity}
          className="w-16p6"
        />
      ))}

      <ActivityLink
        activity={promotionActivities.colors}
        className="w-100 p-10 sm-display-block"
      />
      <ActivityLink
        activity={promotionActivities.mathSongs}
        className="w-100 p-10 sm-display-block"
      />
    </div>
  );
}
