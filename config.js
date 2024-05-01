const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708366518";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_58_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5zWVVpRDlKcHZidnJ4T3Bhb2ZveGozTHZtb0orNzRSODZ0NzA3d1p4SDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFJd1R3OVBDVGotenNUbGJFNFcteGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTYwMTYxNTEtNzNjMS00YzkxLTkwMmItNzNhNzUxODI4MjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDExMCxcbiAgICAgIDYxLFxuICAgICAgMjMxLFxuICAgICAgMjA4LFxuICAgICAgNzEsXG4gICAgICAxMDEsXG4gICAgICA4MCxcbiAgICAgIDY1LFxuICAgICAgNzQsXG4gICAgICAyNDksXG4gICAgICA2OCxcbiAgICAgIDIzNSxcbiAgICAgIDEzOCxcbiAgICAgIDc3LFxuICAgICAgMTU5LFxuICAgICAgNSxcbiAgICAgIDE4OSxcbiAgICAgIDU1LFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxMDksXG4gICAgICA3NCxcbiAgICAgIDEwNSxcbiAgICAgIDEzMSxcbiAgICAgIDIzMSxcbiAgICAgIDEsXG4gICAgICAyMSxcbiAgICAgIDE2OSxcbiAgICAgIDcyLFxuICAgICAgMjQ2LFxuICAgICAgMjM2LFxuICAgICAgMTU1LFxuICAgICAgMTU0LFxuICAgICAgMTI2LFxuICAgICAgMjAzLFxuICAgICAgMTIwLFxuICAgICAgMTMzLFxuICAgICAgMTk0LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDc3QjdGVkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwODM2NjUxODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjg0MTg0NDM5Mjc3NjA6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTYW1YXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGk4NmRvREVNU0l5TEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLS0pxUHFiUzVmTHVmeUNjUkhMWWtaRDdvdkk4a25lSWdvUVJNN1dBQ2tRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhJMERiWXZnSnRYdDNFeFRMbXpkdzIrTml6dkNweURaV2lGZHNTOWJ2UDJveGZRRE5WaUhsL3lPYTFSUWlmYThHRVI1dVBKK0M5MkdpVWRLbnZ5V0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlxZXY1QUhjbTF5YW8wYTM3WnNkeHNoYlhGb3NmQU9CVVVkK25SVWFCT1dSQy95Vm9jWUVpbFRHQld3WklLL3JOeVY2ZlVtczc5OEkxT3VrM1lzcmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODM2NjUxODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0NTUzOTI3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "samu",
  ownername:process.env.OWNER_NAME|| "It'x samu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
