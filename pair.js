const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Charles,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Ghost_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Charles = Charles({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Charles.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Charles.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Charles.ev.on('creds.update', saveCreds)
            Pair_Code_By_Charles.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Charles.sendMessage(Pair_Code_By_Charles.user.id, { text: ''+ b64data });

               let Ghost_MD_TEXT = `
*𝕰𝖊𝖊𝖞... 𝕲𝖍𝖔𝖘𝖙 𝖉𝖒𝖍 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉 𝖙𝖍𝖊 𝖘𝖊𝖘𝖘𝖎𝖔𝖓 𝖎𝖉*
*Wow you choosen Ghost-MD complete the deployment and enyoy the speed*
____________________________________
╔════◇
║『 *GHOST MD IS READY TO DEPLOY』
║ YOUR SESSION IS READY. COPY IT  
║ AND HOST IT ON YOUR WEB.
╚════════════════════╝
╔═════◇
║ 『••• OWNER INFO •••』

║ ❒ 𝐎wner: _https://wa.me/2348033282342_

║ ❒ 𝐑𝐞𝐩𝐨: _https://github.com/Toputech/Topu-ai_

║ ❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/DolMGDAhrYa6iWnwaCfcSv_

║ ❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VaYYdDj8KMqtKBq8M20G_
║ 
╚════════════════════╝ 
 *©CHARLES TECH*
___________________________________

Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Charles.sendMessage(Pair_Code_By_Charles.user.id,{text:GHOST_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Charles_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GHOST_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await GHOST_MD_PAIR_CODE()
});
module.exports = router
