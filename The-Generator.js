var tops = ['pink top', 'black jeans', 'white tank top', 'black tank top', 'white long sleeve shirt',
'black long sleeve shirt', 'red tank top', 'red long sleeve shirt', 'pink halter top', 'burgundy fuzzy sweater',
'blue and green plaid flannel', 'green and black stipped sweater', 'black and white srtiped top', 'purple blouse',
'red ruffle blouse', 'white button down', 'navy blue cut out sweater' ];

var bottoms = [ 'camo pants', 'black slacks', 'tan pants', 'light wash jeans', 'dark wash jeans', 'dark wash ripped jeans',
'light wash ripped jeans', 'black ripped jeans', 'black shorts', 'black jeans', 'navy pencil skirt',
'leather leggings', 'grey tweed zip back skirt', 'black and white jumpsuit'];

var shoes = ['gold strappy sandals', 'timberlands', 'black combat boots', 'red flats', 'tan sandals', 'black flats',
'white pumps', 'black nikes', 'gray nikes', 'white converse'];

var accessories = ['gold chain', 'red jacket', 'navy blazer', 'black hoodie', 'tennis bracelet', 'lavender hat',
'wide black belt', 'diamond necklace']

// not sure if I shouuld make this randomOutfit variable not completely sure
function newOutfit(){
  var randomNumbertop = Math.floor(Math.random() *(tops.length));
  document.getElementById("tops").innerHTML = tops[randomNumbertop];

  var randomNumberbottoms = Math.floor(Math.random() *(bottoms.length));
  document.getElementById("bottoms").innerHTML = bottoms[randomNumberbottoms];

  var randomNumbershoes = Math.floor(Math.random() *(shoes.length));
  document.getElementById("shoes").innerHTML = shoes[randomNumbershoes];

  var randomNumberaccessories = Math.floor(Math.random() *(accessories.length));
  document.getElementById("accessories").innerHTML = accessories[randomNumberaccessories];
}
