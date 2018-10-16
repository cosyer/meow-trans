# meow-trans
将中文转换为喵星语

## 安装
```shell
npm install -g meow-trans
```

## 使用

```
Usage: index [options]

Options:
  -h, --help     output usage information
  -V, --version  output the version number
  -e --emoj      使用emoj来替代汉字喵
  -i --stdin     传输标准输入流文本而不是命令行参数
  -c --clip      自动复制到剪贴板（文本过大慎用）
```

## 示例
```
$ meow 你好，世界
喵(ni)喵(hao)，喵(shi)喵(jie)

$ meow -e 你好，世界
 🐱 (ni) 🐱 (hao)， 🐱 (shi) 🐱 (jie)

$ meow --stdin < short_word.txt
Hello。World，喵(ni)喵(hao)喵(shi)喵(jie)。喵(wang)喵(wang)喵(wang)
```
