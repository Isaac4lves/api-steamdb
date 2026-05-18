function formatarJogo(jogo) {
    return `
    id: ${jogo.steam_appid}
    gratuito: ${jogo.is_free}
    ${jogo.metacritic ? `metacritic: ${jogo.metacritic.score}` : 'metacritic: null'}
    suporte a controle: ${jogo.controller_support}

    titulo: ${jogo.name}
    desenvolvedor: ${jogo.developers[0]}
    distribuidora: ${jogo.publishers[0]}
    gamemode: ${jogo.categories[0].description}

    generos: ${jogo.genres.map(g => `${g.description}`).join(', ')}

    data de lançamento: ${jogo.release_date.date}
    não lançado: ${jogo.release_date.coming_soon}

    plataformas:
        - windows = ${jogo.platforms.windows}
        - linux = ${jogo.platforms.linux}
        - mac = ${jogo.platforms.mac}
    `;
}

module.exports = { formatarJogo };