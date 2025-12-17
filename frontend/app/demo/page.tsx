import fs from "fs";
import path from "path";

export default function DemoPage() {
  const htmlPath = path.join(process.cwd(), "public/demo/index.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
