import { siteName } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© 2026 {siteName}</p>
      <nav aria-label="Footer navigation">
        <a href="#activity-title">
          <span lang="en">Activities</span> · <span lang="zh-CN">学习活动</span>
        </a>
        <a href="#learning-guide">
          <span lang="en">Guide</span> · <span lang="zh-CN">使用指南</span>
        </a>
        <a href="#privacy">
          <span lang="en">Privacy</span> · <span lang="zh-CN">隐私</span>
        </a>
        <a href="#independence">
          <span lang="en">Independence</span> · <span lang="zh-CN">非关联声明</span>
        </a>
      </nav>
    </footer>
  );
}
