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
  chalk.blueBright("[!] this is a tool to encrypt to a 32 characters hash!")
);

let rawI = prompt(`[?] what do you want to encrypt? : `);
// the constant of the encriptation
const encrypter = crypto.createHmac("sha256", "").update(rawI).digest("hex");

console.log((chalk.cyan)`[*] your hash: ${encrypter}`);
