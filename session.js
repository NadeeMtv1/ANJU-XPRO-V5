//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01qcENPQ2VpN2R5RXVQSGpNWG5sbmRUeFJFdzVuMHdTM0VnaVNwZEVFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU13WUxOT0QxVE9aNERqKzVVb1Q5MHlMdzZyc2ZxYmRnN1I4aGV4blNUcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTCt2anNuSWYzTnBreWdWWlovVU43bjJWWWlNOFMwWDFFR0R5R2NXLzM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQzZDMUFrWHlPVC9vK0ZsVytxSXRma3Y0MThvM3hlcmxUcDJ2RW5LZFNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDeVR5ZTF6NVdVdkhHSVAxQUMxSyt6ZEtjSThrRHdJSXhTc1RDeUtjbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJandOVFZsWUY0Ukd4NWJKcmpFZ3Z4WXRtbHVkMmkrNmIxNi9COTZyZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUM4alN0Z0pFVUMrZGpMRW1HamRPNUxLcDFNbWFJT1JxbklkeGh1T0hXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzdzbzZHdlRhTWZkMXhLMHpqY0IyZ2pBYzhLbjlzQU5xdXVEU25Tbm8wTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRCWmVCVG1EL2o2L3A4Y2plc2xvbFZJQ1pmQys4aEc2UUxKSG5zZmtpZTZTTGFZZ0FDS0UydlM0WjRwUGczenhtU01iOFBFY3NKQ2pnL3hwcVArMUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IlQ0dEJjR2dEUUx1Q0xhcUxPWXhlRzdESDRnRXBRWkY1b3kxc1YzYTJROWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpXUjhYc2lYVEtxdE9RYldURDljS2ciLCJwaG9uZUlkIjoiZDZkNDUxMGEtOWJhMi00N2EyLTk0ZTEtYjFiYjdmNmYwNWVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo4ZVRMamtMQ0FnVW1sR3JKdzZkbDE3Q0IxYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwU1kzbkNOR3kwSGdqeHgzYWo5RlNQdzZhZUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTI3QjNQVlciLCJtZSI6eyJpZCI6Ijk0Nzc1NzkyMjM5OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXR2IGZpbG1zIiwibGlkIjoiMjM4MzI4Mjg4OTA3Mzk5OjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWFUzYjhIRU9PMzZjTUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQQkhNTnpDK1QwQUJvU0ZLS213bFBGVmMwM0xyWjIzbGpNSTB6dC9XampJPSIsImFjY291bnRTaWduYXR1cmUiOiJPWXRGcFd2VnRVa0tESU5LOFYzOWs5M1VPLzQ5aDFuenRBbWV2dHFJbC9Bc3VYbVVMQkNDR2ZhRWd0a0huRVNKd0VlclgzZmcvMzd3S2xueFZ1bjFDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQjAwb3pGVUpkVXdIQmZxczh1SU42MXA5NFUzaVJaWktmcUhrL0JDaURVaXoyR2tGRHB5MGdhdnBRL2t6YmRxbi9BREU3aXJTOUwvRXhHOEFWZDRTQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NTc5MjIzOTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlR3UnpEY3d2azlBQWFFaFNpcHNKVHhWWE5OeTYyZHQ1WXpDTk03ZjFvNHkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mjg0OTM5MiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCQncifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
