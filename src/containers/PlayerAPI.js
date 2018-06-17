// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

var PlayerAPI = {
    players: [
      { number: 1, name: "Ben Blocker", position: "G" },
      { number: 2, name: "Dave Defender", position: "D" },
      { number: 3, name: "Sam Sweeper", position: "D" },
      { number: 4, name: "Matt Midfielder", position: "M" },
      { number: 5, name: "William Winger", position: "M" },
      { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function () { return this.players },
    get: function (id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    },
    update: function(player){
      let p = this.players.find(player.number);
  
      if(p){
        p.name = player.name;
        p.position = player.position;
      }
    },
    add: function(player){
      let p = this.players.find(player.number);
  
      if(!p){
        p = {
          number: player.number,
          name: player.name,
          position: player.position
        };
        this.players.add(p);
      }
    }
  }

  export default PlayerAPI;