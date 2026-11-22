#!/usr/bin/env node
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const required = [
  "skill/SKILL.md",
  "skills/frontend-developer/SKILL.md",
  "skills/backend-developer/SKILL.md",
  "skills/supabase-engineering/SKILL.md",
  "skills/fullstack-developer/SKILL.md",
  "skills/quality-assurance/SKILL.md",
  "instructions/frontend-workflow.md",
  "instructions/backend-workflow.md",
  "instructions/supabase-workflow.md",
  "instructions/fullstack-workflow.md",
  "instructions/quality-assurance-workflow.md",
  "references/frontend-engineering-catalog.md",
  "references/backend-engineering-catalog.md",
  "references/supabase-engineering-catalog.md",
  "references/fullstack-engineering-catalog.md",
  "references/quality-assurance-catalog.md",
  "references/quality-gates.md",
  "references/documentation-validation.md",
];
for (const path of required) if (!existsSync(join(root, path))) errors.push(`Missing required file: ${path}`);

for (const path of required.filter((p) => p.endsWith("SKILL.md"))) {
  const body = readFileSync(join(root, path), "utf8");
  const fm = body.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fm || !/^name:\s*\S+/m.test(fm[1]) || !/^description:\s*\S+/m.test(fm[1])) errors.push(`Invalid Skill frontmatter: ${path}`);
}

function walk(dir) {
  let out = [];
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out = out.concat(walk(path));
    else if (extname(path) === ".md") out.push(path);
  }
  return out;
}
const markdown = walk(root);
for (const file of markdown) {
  const source = readFileSync(file, "utf8");
  const relative = file.slice(root.length + 1);
  const links = /\]\(([^)]+)\)/g;
  let match;
  while ((match = links.exec(source))) {
    const raw = match[1].trim();
    if (!raw || /^(https?:|mailto:|#|\/\/)/i.test(raw)) continue;
    const target = raw.split("#")[0].split("?")[0];
    if (!target) continue;
    const resolved = resolve(dirname(file), decodeURIComponent(target));
    if (!(resolved === root || resolved.startsWith(root + "/"))) errors.push(`Link escapes repo: ${relative}: ${raw}`);
    else if (!existsSync(resolved)) errors.push(`Broken link: ${relative}: ${raw}`);
  }
}
const catalogs = [
  ["references/frontend-engineering-catalog.md", 14],
  ["references/backend-engineering-catalog.md", 16],
  ["references/supabase-engineering-catalog.md", 12],
  ["references/fullstack-engineering-catalog.md", 15],
  ["references/quality-assurance-catalog.md", 12],
];
for (const [path, expected] of catalogs) {
  const body = readFileSync(join(root, path), "utf8");
  const actual = (body.match(/^\d+\. \*\*/gm) || []).length;
  if (actual !== expected) errors.push(`Domain count mismatch ${path}: expected ${expected}, got ${actual}`);
}
if (catalogs.reduce((sum, item) => sum + item[1], 0) !== 69) errors.push("Catalog total is not 69");
const main = readFileSync(join(root, "skill/SKILL.md"), "utf8");
for (const token of ["supabase-workflow.md", "quality-assurance-workflow.md", "quality-gates.md", "Specification v1.2"]) {
  if (!main.includes(token)) errors.push(`Main Skill missing: ${token}`);
}
const audit = readFileSync(join(root, "instructions/audit-comprehensive.md"), "utf8");
for (const token of ["docs/audit/history/", "docs/audit/production-readiness.md", "Not Verified", "Not Applicable"]) {
  if (!audit.includes(token)) errors.push(`Audit instructions missing: ${token}`);
}
if (errors.length) {
  console.error(`Documentation validation failed (${errors.length}):`);
  for (const error of errors) console.error("- " + error);
  process.exitCode = 1;
} else {
  console.log(`Documentation validation passed: ${markdown.length} Markdown files, 6 Skills, 69 catalog domains.`);
}
