const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "224669094865";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/7tpZ1yB/1729116929210.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_06_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrQ1M3UlR1N1dqdGcwRDZPRC8relpKVUNDYkpwZkFFTmFGN2F6MmhFYnVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3SXdJUnVEclJjS05OWlUtM0ZnWkhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4ZTEzYmQ5LTc4OWItNGEyZi05OTFlLWM4MTQzOGVjMjdhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAzMSxcbiAgICAgIDIyNixcbiAgICAgIDEyMSxcbiAgICAgIDIyNCxcbiAgICAgIDk2LFxuICAgICAgMTAzLFxuICAgICAgOTcsXG4gICAgICA5MSxcbiAgICAgIDksXG4gICAgICA5MSxcbiAgICAgIDgwLFxuICAgICAgMzYsXG4gICAgICA0MyxcbiAgICAgIDEwNCxcbiAgICAgIDY3LFxuICAgICAgMTE0LFxuICAgICAgMzksXG4gICAgICA5NyxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDE1OSxcbiAgICAgIDgsXG4gICAgICA2NyxcbiAgICAgIDEwMCxcbiAgICAgIDUwLFxuICAgICAgMTA4LFxuICAgICAgMTMyLFxuICAgICAgMTA5LFxuICAgICAgNjIsXG4gICAgICAxNjUsXG4gICAgICA3MyxcbiAgICAgIDIwNixcbiAgICAgIDE4MyxcbiAgICAgIDE0NSxcbiAgICAgIDEzOCxcbiAgICAgIDIwMSxcbiAgICAgIDEzNixcbiAgICAgIDksXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDNEZaVlFGV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI0NjY5MDk0ODY1OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjQyMjM1NjU5ODM4ODM6MjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi5LqXS82czaHJqsm0yaLjgqYg8J+FsPCfhb3wn4W+8J+FvfCfhojwn4W88J+FvvCfhoTwn4aC4oCO8J+SoFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puV2dzc0dFTU9sbkxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZzhQc29tdTFpbmt0VDFmMHo2cnBzQU9Ic1hubml0NURnTzZXdDNvNmtXTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMZWVITnZibkEzejdtbnJseHpkY2tKS1FRY2xXRVZvS3VleFhTbWZiZE84YlpTRlhrSDQwVVdNZk1qTXF6V2JmajI1V3VBV1RJdjExZUkxRGRwUWJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTc0V3ay9Ld3g1UndjV1JwNUZjaFJLbVZrandsTDErQ2x1K1kyMGpUZzNyeGZWWVcwck5rTjJHdG9NMkpacTF2eTQrUkdwNnFscEV6ditVSU9QTENEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjQ2NjkwOTQ4NjU6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjEzOTU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGMyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwMGsxYTNXSmVDa0VTTWE5azE5dEMvUFZ5aytEUFFhMmZndTluczNwdUJNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3Njc5NDI5MzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDYxMzk2MTM4MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "‎彡[ᴀɴᴏɴʏᴍᴏᴜs]彡",
  ownername:process.env.OWNER_NAME|| "‎亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
