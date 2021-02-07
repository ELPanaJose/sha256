const prompt = require("prompt-sync")({ sigint: true });
const figlet = require("figlet");
const chalk = require("chalk");
const crypto = require("crypto");

const encrypter = crypto.createHmac("sha256", "").update("").digest("hex");

console.log(
  chalk.greenBright(
    figlet.textSync("welcome to sha256 encrypt!", {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: true,
    })
  )
);
console.log(
  chalk.blueBright("[*] this is a tool to encrypt to a 64 characters hash!")
);

let rawI = prompt(`[?] what do you want to encrypt? : `);

console.log((chalk.cyan)`[*] your hash: ${encrypter}`);
