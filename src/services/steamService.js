const axios = require('axios');

async function getJogos(jogoId) {
    try {
        const { data } = await axios.get(
            `https://store.steampowered.com/api/appdetails?appids=${jogoId}`
        );

        return data[jogoId].data;

    } catch (error) {
        console.error('Erro no Request:', error.message);
    }
}

module.exports = { getJogos };