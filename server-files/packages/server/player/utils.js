function setPlayerModel(player){
    player.model = Math.round(Math.random()) ? mp.joaat('a_m_m_hasjew_01') : mp.joaat('s_m_y_mime');
}

let ind = 0;
function setPlayerName(player){
    player.name = 'Bobby' + ind;
    ind = ind + 1;
}

module.exports = {
    setPlayerModel,
    setPlayerName
}