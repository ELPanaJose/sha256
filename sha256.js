const prompt = require("prompt-sync")();
const figlet = require("figlet");
const chalk = require("chalk");
const crypto = require("crypto");

console.log(
  chalk.greenBright(
    figlet.textSync("welcome to sha256 encrypt!", {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  )
);
console.log(
  chalk.blueBright("[!] this is a tool to encrypt to a various types of hashes!")
);

for (var i = 1; i > 0; i++) {
  let rawI = prompt(`[?] value to encrypt? : `);

  if (rawI == "") {
    console.log("[!] no input!");
  } else {
    const encrypter = crypto
      .createHmac("md5", "")
      .update(rawI)
      .digest("hex");
    console.log(chalk.greenBright`[*] your hash(md5) : ${encrypter}`);

    const encrypters1 = crypto
      .createHmac("sha1", "")
      .update(rawI)
      .digest("hex");
    console.log(chalk.greenBright`[*] your hash(sha1) : ${encrypters1}`);

    const encrypter224 = crypto
      .createHmac("sha224", "")
      .update(rawI)
      .digest("hex");
    console.log(chalk.greenBright`[*] your hash(sha224) : ${encrypter224}`);

    const encrypter2 = crypto
      .createHmac("sha256", "")
      .update(rawI)
      .digest("hex");
    console.log(chalk.greenBright`[*] your hash(sha256) : ${encrypter2}`);

     const encrypter3 = crypto
      .createHmac("sha512", "")
      .update(rawI)
      .digest("hex");
    console.log(chalk.greenBright`[*] your hash(sha512) : ${encrypter3}`);
  }
}
