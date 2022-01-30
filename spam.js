const axios = require("axios");

const headers = {
	Authorization: "your auth from discord"
};

const data = {
	content: "ab yeah kam kr rha hai !! hope no one kick me out",
	nonce: Math.round(Math.random() * 10000000000000000),
	tts: false
};

let count = 0;
const type = [
	"rock chalk",
	"knoll",
	"texas tech",
	"ochai",
	"exhausted",
	"flowers",
	"ruth ozark",
	"adam fox",
	"maybe",
	"cavs",
	"kansas basketball",
	"gun",
	"loser",
	"good",
	"morning",
	"its tuesday",
	"goodnight",
	"bed",
	"riiight",
	"fist",
	"meow"
];

const test = () => {
	count = count + 1;
	data.nonce = Math.random() * 10000000000000000;
	const typeVal = Math.round(Math.random() * type.length);

	setTimeout(() => {
		(async () => {
			try {
				const gif = await axios.get(
					`https://g.tenor.com/v1/random?q=${type[typeVal]}&key=GTGMA5S0JN40&limit=1`
				);

				data.content = gif.data.results[0].itemurl;

				const call = await axios.post(
					"https://discord.com/api/v9/channels/881513607458852875/messages",
					data,
					{ headers }
				);

				console.log(count);
				test();
			} catch (error) {
				// console.log(error);
				console.log(count);
				test();
			}
		})();
	}, 3000);
};

test();
