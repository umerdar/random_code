function AppController() {
	console.log("hello world")
}


function makeDeck(n) {

  var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "J", "Q", "K"]
  var suits = ["C", "D", "H", "S"]
  var x, y, z
  var m

  m = value.length * suits.length

  this.cards = [n * m]

  for (x=0;x<n;x++)
    for (y=0;y<suits.length;y++)
      for (z=0;z<value.length;z++)
        this.cards[x * m + y * value.length + z] =
          new Card(value[z], suits[y])
}

function shuffle(n) {

  var x, y, z
  var temp

  for (x=0;x<n;x++)
    for (y=0;y<this.cards.length; y++) {
      z = Math.floor(Math.random() * this.cards.length)
      temp = this.cards[y]
      this.cards[y] = this.cards[z]
      this.cards[z] = temp
    }
}

function() {
	var app = angular.module('deck', []);
	app.controller('AppController', function(){


	})
}


