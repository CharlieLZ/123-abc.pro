import {
  activityIntroduction,
  learningHighlights,
} from "@/content/site-copy";

export function ActivityIntroduction() {
  return (
    <div className="activity-introduction">
      <h1 id="activity-title">
        <span lang="en">{activityIntroduction.englishTitle}</span>
        <span lang="zh-CN">{activityIntroduction.chineseTitle}</span>
      </h1>
      <p>
        <span lang="en">{activityIntroduction.englishSummary}</span>
        <span lang="zh-CN">{activityIntroduction.chineseSummary}</span>
      </p>
      <ul className="learning-highlights" aria-label="Learning highlights">
        {learningHighlights.map((highlight) => (
          <li key={highlight.english}>
            <span lang="en">{highlight.english}</span>
            <span aria-hidden="true"> · </span>
            <span lang="zh-CN">{highlight.chinese}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
