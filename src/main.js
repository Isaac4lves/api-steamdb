const json = require('./data/jogosId.json');

const { getJogos } = require('./services/steamService');
const { formatarJogo } = require('./utils/formatador');

async function main() {
    console.log(json);
    for (const id of json) {
        const jogo = await getJogos(id);
        console.log(`\n# ${id} `);
        console.log(formatarJogo(jogo));
    } 
    
}

main();