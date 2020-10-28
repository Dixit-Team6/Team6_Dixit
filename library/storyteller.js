let _storyTellerChangeListener = function(gameID) {        
    
            let name = snap.val().name
            console.log("storyTeller name", name);
            gamePage.updateStoryteller(name);
        })

    })
}

let _playerJoin = function(playerInfo, gameID) {
    let gameName;
    
    let id = playerInfo.key;
    let avatar = playerInfo.avatar;
    let color = playerInfo.color;
    let name = playerInfo.name;
    gamePage.makeScoreboardPlayerDiv(id, color)
    gamePage.addAvatar(name, avatar, color, id)
}