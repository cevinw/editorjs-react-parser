import { test as base } from "vitest";
import fs from "node:fs";

async function getTestData() {
  return await JSON.parse(
    fs.readFileSync(__dirname + "/resources/editorjsOutputData.json", "utf8"),
  );
}

const test = base.extend({
  data: getTestData(),
});

export default test;
