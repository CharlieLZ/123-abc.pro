import {
  independenceNotice,
  learningSteps,
  parentGuidance,
  privacyNotice,
} from "@/content/site-copy";

function BilingualParagraph({
  english,
  chinese,
}: Readonly<{ english: string; chinese: string }>) {
  return (
    <p className="bilingual-paragraph">
      <span lang="en">{english}</span>
      <span lang="zh-CN">{chinese}</span>
    </p>
  );
}

export function LearningGuide() {
  return (
    <section className="learning-guide" id="learning-guide" aria-labelledby="guide-title">
      <div className="guide-heading">
        <p className="section-eyebrow">
          <span lang="en">Parent &amp; learner guide</span>
          <span aria-hidden="true"> · </span>
          <span lang="zh-CN">家长与学习者指南</span>
        </p>
        <h2 id="guide-title">Make each practice session calm and useful</h2>
        <p lang="zh-CN">让每次练习短一点、轻松一点，也更有效。</p>
      </div>

      <ol className="learning-steps">
        {learningSteps.map((step) => (
          <li key={step.englishTitle}>
            <h3>
              <span lang="en">{step.englishTitle}</span>
              <span lang="zh-CN">{step.chineseTitle}</span>
            </h3>
            <BilingualParagraph english={step.englishText} chinese={step.chineseText} />
          </li>
        ))}
      </ol>

      <div className="guidance-grid">
        <article aria-labelledby="parent-guidance-title">
          <h3 id="parent-guidance-title">
            <span lang="en">For parents</span>
            <span aria-hidden="true"> · </span>
            <span lang="zh-CN">给家长</span>
          </h3>
          <BilingualParagraph
            english={parentGuidance.english}
            chinese={parentGuidance.chinese}
          />
        </article>

        <article id="privacy" aria-labelledby="privacy-title">
          <h3 id="privacy-title">
            <span lang="en">Privacy</span>
            <span aria-hidden="true"> · </span>
            <span lang="zh-CN">隐私说明</span>
          </h3>
          <BilingualParagraph
            english={privacyNotice.english}
            chinese={privacyNotice.chinese}
          />
        </article>

        <article id="independence" aria-labelledby="independence-title">
          <h3 id="independence-title">
            <span lang="en">Independent project</span>
            <span aria-hidden="true"> · </span>
            <span lang="zh-CN">独立项目声明</span>
          </h3>
          <BilingualParagraph
            english={independenceNotice.english}
            chinese={independenceNotice.chinese}
          />
        </article>
      </div>
    </section>
  );
}
