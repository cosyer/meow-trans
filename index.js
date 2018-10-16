#!/usr/bin/env node

const pinyin = require("pinyin");
const program = require("commander");

const translate = require("./translator");

program
  .version("0.0.5")
  .description("把你的话都变成喵星语吧🐱")
  .option("-e --emoj", "使用emoj来替代汉字喵")
  .option("-i --stdin", "传输标准输入流文本而不是命令行参数")
  .option("-c --clip", "自动复制到剪贴板（文本过大慎用）")
  .parse(process.argv);

const word = !program.emoj;
const clip = program.clip;

if (program.stdin) {
  process.stdin.setEncoding("utf-8");

  process.stdin.on("readable", () => {
    let chunk = process.stdin.read();
    if (chunk !== null) {
      translate(chunk, word, clip);
    }
  });
} else {
  if (program.args.length > 0) {
    translate(program.args[0], word, clip);
    process.stdout.write(`\n`);
  } else program.outputHelp();
}
