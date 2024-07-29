const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Charles,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function GHOST_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Charles = Charles({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Charles.ev.on('creds.update', saveCreds)
			Qr_Code_By_Charles.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Charles.sendMessage(Qr_Code_By_France_King.user.id, { text: 'TOPU;;;' + b64data });
	
				   let GHOST_MD_TEXT = `
*𝕰𝖊𝖊𝖞... GHOST MD 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉 𝖙𝖍𝖊 𝖘𝖊𝖘𝖘𝖎𝖔𝖓 𝖎𝖉*
*Wow you choosen GHOST-MD complete the deployment and enyoy the speed*
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

_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Charles.sendMessage(Qr_Code_By_Charles.user.id,{text:GHOST_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Charles.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					GHOST_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await GHOST_MD_QR_CODE()
});
module.exports = router
