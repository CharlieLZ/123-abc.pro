#!/usr/bin/env node

import { auditStaticAssets } from "./static-asset-audit.mjs";

const rootPath = process.argv[2];
if (!rootPath) throw new Error("Static root argument is required, for example: public or out");

const report = await auditStaticAssets(rootPath);
console.log(
  JSON.stringify({
    files: report.files,
    documents: report.documents,
    inspectedReferences: report.inspectedReferences,
    issues: report.issues.length,
  }),
);

if (report.issues.length) {
  console.error(JSON.stringify(report.issues.slice(0, 100), null, 2));
  throw new Error(`Static asset verification failed with ${report.issues.length} issue(s)`);
}
