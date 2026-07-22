import { ActivityRail } from "@/components/ActivityRail";
import { ActivityIntroduction } from "@/components/ActivityIntroduction";
import { ActivityBranding } from "@/components/ActivityBranding";
import { AlphabetBoard } from "@/components/AlphabetBoard";
import { CornerBack } from "@/components/CornerBack";
import { LearningGuide } from "@/components/LearningGuide";
import { RotateHint } from "@/components/RotateHint";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to activities · 跳到学习活动
      </a>
      <CornerBack />

      <main id="main-content">
        <section className="activity-stage" aria-labelledby="activity-title">
          <ActivityIntroduction />
          <div className="rows-container">
            <AlphabetBoard />
            <ActivityRail />
          </div>
          <ActivityBranding />
          <RotateHint />
        </section>

        <LearningGuide />
      </main>

      <SiteFooter />
    </>
  );
}
