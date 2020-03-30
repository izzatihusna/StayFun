var links = ["https://worms.zone/game/web/", "https://gartic.io/", "https://robofight.io/", "https://www.creatur.io/",
    "http://www.friv.com/z/games/snakesandladders/game.html?Desktop-x-x-f-x-x-xx", "http://www.friv.com/z/flashx/papaspizzeria/game.html?Desktop-x-x-f-x-x-xx",
    "https: //www.seaofthieves.com/", "https://www.forzamotorsport.net/en-us/games/fh4", "https://www.amazon.com/Hasbro-Gaming-C1009-Monopoly-Classic/dp/B01MU9K3XU",
    "https://skyegrid.id/games/gta-v"
];
var games = ["Worm Zone", "Gartic.io", "RoboFight.io", "Creatur.io", "Snakeladders", "Papa's Pizzeria", "Seaofthethieves", "Forza Horizon 4", "Monopoly classic", "GTA 5"];


var neoList = document.getElementById("myList");

function createList() {
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        const game = games[index];

        var newList = document.createElement("li");
        var a = document.createElement("a");
        var txt = document.createTextNode(game);

        a.appendChild(txt);
        a.title = game;
        a.href = link;
        newList.appendChild(a);
        neoList.appendChild(newList);
    }

}
createList();