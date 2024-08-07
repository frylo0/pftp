const process = require('process');
const { deploy } = require('../lib/index.js');
const { credentials, folders } = require('./credentials.js');

async function main() {
	await deploy({
		...credentials,
		...folders,

		progress: 'bar',

		excludeRegExp: [
			/./ // Exclude everything making mirror disabled
		],

		includeForceRegExp: [
			/index\.html$/,
		],
	});
}

main()
	.then(() => process.exit())
	.catch((error) => console.error(error));
