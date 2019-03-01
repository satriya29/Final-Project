var planets1 = {
	"name": "Tatooine",
	"rotation_period": "23",
	"orbital_period": "304",
	"diameter": "10465",
	"climate": "arid",
	"gravity": "1 standard",
	"terrain": "desert",
	"surface_water": "1",
	"population": "200000",
	"residents": [
		"https://swapi.co/api/people/1/",
		"https://swapi.co/api/people/2/",
		"https://swapi.co/api/people/4/",
		"https://swapi.co/api/people/6/",
		"https://swapi.co/api/people/7/",
		"https://swapi.co/api/people/8/",
		"https://swapi.co/api/people/9/",
		"https://swapi.co/api/people/11/",
		"https://swapi.co/api/people/43/",
		"https://swapi.co/api/people/62/"
	],
	"films": [
		"https://swapi.co/api/films/5/",
		"https://swapi.co/api/films/4/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/",
		"https://swapi.co/api/films/1/"
	],
	"created": "2014-12-09T13:50:49.641000Z",
	"edited": "2014-12-21T20:48:04.175778Z",
	"url": "https://swapi.co/api/planets/1/"
}
var planets2 = {
"name": "Alderaan",
"rotation_period": "24",
"orbital_period": "364",
"diameter": "12500",
"climate": "temperate",
"gravity": "1 standard",
"terrain": "grasslands, mountains",
"surface_water": "40",
"population": "2000000000",
"residents": [
    "https://swapi.co/api/people/5/",
    "https://swapi.co/api/people/68/",
    "https://swapi.co/api/people/81/"
],
"films": [
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/1/"
],
"created": "2014-12-10T11:35:48.479000Z",
"edited": "2014-12-20T20:58:18.420000Z",
"url": "https://swapi.co/api/planets/2/"
}

var planets3 = {
	"name": "Yavin IV",
	"rotation_period": "24",
	"orbital_period": "4818",
	"diameter": "10200",
	"climate": "temperate, tropical",
	"gravity": "1 standard",
	"terrain": "jungle, rainforests",
	"surface_water": "8",
	"population": "1000",
	"residents": [],
	"films": [
		"https://swapi.co/api/films/1/"
	],
	"created": "2014-12-10T11:37:19.144000Z",
	"edited": "2014-12-20T20:58:18.421000Z",
	"url": "https://swapi.co/api/planets/3/"
}

var planets4 = {
	"name": "Hoth",
	"rotation_period": "23",
	"orbital_period": "549",
	"diameter": "7200",
	"climate": "frozen",
	"gravity": "1.1 standard",
	"terrain": "tundra, ice caves, mountain ranges",
	"surface_water": "100",
	"population": "unknown",
	"residents": [],
	"films": [
		"https://swapi.co/api/films/2/"
	],
	"created": "2014-12-10T11:39:13.934000Z",
	"edited": "2014-12-20T20:58:18.423000Z",
	"url": "https://swapi.co/api/planets/4/"
}
var planets5 = {
	"name": "Dagobah",
	"rotation_period": "23",
	"orbital_period": "341",
	"diameter": "8900",
	"climate": "murky",
	"gravity": "N/A",
	"terrain": "swamp, jungles",
	"surface_water": "8",
	"population": "unknown",
	"residents": [],
	"films": [
		"https://swapi.co/api/films/2/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/"
	],
	"created": "2014-12-10T11:42:22.590000Z",
	"edited": "2014-12-20T20:58:18.425000Z",
	"url": "https://swapi.co/api/planets/5/"
}

var planets6 ={
	"name": "Bespin",
	"rotation_period": "12",
	"orbital_period": "5110",
	"diameter": "118000",
	"climate": "temperate",
	"gravity": "1.5 (surface), 1 standard (Cloud City)",
	"terrain": "gas giant",
	"surface_water": "0",
	"population": "6000000",
	"residents": [
		"https://swapi.co/api/people/26/"
	],
	"films": [
		"https://swapi.co/api/films/2/"
	],
	"created": "2014-12-10T11:43:55.240000Z",
	"edited": "2014-12-20T20:58:18.427000Z",
	"url": "https://swapi.co/api/planets/6/"
}

var planets7 ={
	"name": "Endor",
	"rotation_period": "18",
	"orbital_period": "402",
	"diameter": "4900",
	"climate": "temperate",
	"gravity": "0.85 standard",
	"terrain": "forests, mountains, lakes",
	"surface_water": "8",
	"population": "30000000",
	"residents": [
		"https://swapi.co/api/people/30/"
	],
	"films": [
		"https://swapi.co/api/films/3/"
	],
	"created": "2014-12-10T11:50:29.349000Z",
	"edited": "2014-12-20T20:58:18.429000Z",
	"url": "https://swapi.co/api/planets/7/"
}

var hasil = document.getElementById("planet1");
hasil.innerHTML = ("<td>") + planets1.name + ("</td>") +
    ("<td>") + planets1.rotation_period + ("</td>") +
    ("<td>") + planets1.orbital_period + ("</td>") +
    ("<td>") + planets1.diameter + ("</td>") +
    ("<td>") + planets1.climate + ("</td>") +
    ("<td>") + planets1.gravity + ("</td>") +
    ("<td>") + planets1.terrain + ("</td>") +
    ("<td>") + planets1.surface_water + ("</td>") +
    ("<td>") + planets1.population + ("</td>") +
    ("<td>") + planets1.residents.slice (1,2)+ ("</td>") +
    ("<td>") + planets1.films.slice (2,3) + ("</td>") +
    ("<td>") + planets1.created + ("</td>") +
    ("<td>") + planets1.edited + ("</td>") +
    ("<td>") + planets1.url + ("</td>");


    var hasil = document.getElementById("planet2");
    hasil.innerHTML = ("<td>") + planets2.name + ("</td>") +
        ("<td>") + planets2.rotation_period + ("</td>") +
        ("<td>") + planets2.orbital_period + ("</td>") +
        ("<td>") + planets2.diameter + ("</td>") +
        ("<td>") + planets2.climate+ ("</td>") +
        ("<td>") + planets2.gravity + ("</td>") +
        ("<td>") + planets2.terrain.slice (0,10) + ("</td>") +
        ("<td>") + planets2.surface_water + ("</td>") +
        ("<td>") + planets2.population + ("</td>") +
        ("<td>") + planets2.residents.slice (0,1)+ ("</td>") +
        ("<td>") + planets2.films.slice (1,2) + ("</td>") +
        ("<td>") + planets2.created + ("</td>") +
        ("<td>") + planets2.edited + ("</td>") +
        ("<td>") + planets2.url + ("</td>");

        var hasil = document.getElementById("planet3");
        hasil.innerHTML = ("<td>") + planets3.name + ("</td>") +
            ("<td>") + planets3.rotation_period + ("</td>") +
            ("<td>") + planets3.orbital_period + ("</td>") +
            ("<td>") + planets3.diameter + ("</td>") +
            ("<td>") + planets3.climate.slice (11,19)+ ("</td>") +
            ("<td>") + planets3.gravity + ("</td>") +
            ("<td>") + planets3.terrain.slice (0,6) + ("</td>") +
            ("<td>") + planets3.surface_water + ("</td>") +
            ("<td>") + planets3.population + ("</td>") +
            ("<td>") + planets3.residents + ("</td>") +
            ("<td>") + planets3.films + ("</td>") +
            ("<td>") + planets3.created + ("</td>") +
            ("<td>") + planets3.edited + ("</td>") +
            ("<td>") + planets3.url + ("</td>");

         var hasil = document.getElementById("planet4");
         hasil.innerHTML = ("<td>") + planets4.name + ("</td>") +
            ("<td>") + planets4.rotation_period + ("</td>") +
            ("<td>") + planets4.orbital_period + ("</td>") +
            ("<td>") + planets4.diameter + ("</td>") +
            ("<td>") + planets4.climate + ("</td>") +
            ("<td>") + planets4.gravity + ("</td>") +
            ("<td>") + planets4.terrain.slice (8,17)+ ("</td>") +
            ("<td>") + planets4.surface_water + ("</td>") +
            ("<td>") + planets4.population + ("</td>") +
            ("<td>") + planets4.residents + ("</td>") +
            ("<td>") + planets4.films + ("</td>") +
            ("<td>") + planets4.created + ("</td>") +
            ("<td>") + planets4.edited + ("</td>") +
            ("<td>") + planets4.url + ("</td>");

         var hasil = document.getElementById("planet5");
         hasil.innerHTML = ("<td>") + planets5.name + ("</td>") +
            ("<td>") + planets5.rotation_period + ("</td>") +
            ("<td>") + planets5.orbital_period + ("</td>") +
            ("<td>") + planets5.diameter + ("</td>") +
            ("<td>") + planets5.climate + ("</td>") +
            ("<td>") + planets5.gravity + ("</td>") +
            ("<td>") + planets5.terrain.slice (0,5) + ("</td>") +
            ("<td>") + planets5.surface_water + ("</td>") +
            ("<td>") + planets5.population + ("</td>") +
            ("<td>") + planets5.residents + ("</td>") +
            ("<td>") + planets5.films.slice (0,1) + ("</td>") +
            ("<td>") + planets5.created + ("</td>") +
            ("<td>") + planets5.edited + ("</td>") +
            ("<td>") + planets5.url + ("</td>");

        var hasil = document.getElementById("planet6");
        hasil.innerHTML = ("<td>") + planets6.name + ("</td>") +
            ("<td>") + planets6.rotation_period + ("</td>") +
            ("<td>") + planets6.orbital_period + ("</td>") +
            ("<td>") + planets6.diameter + ("</td>") +
            ("<td>") + planets6.climate + ("</td>") +
            ("<td>") + planets6.gravity.slice (0,13)+ ("</td>") +
            ("<td>") + planets6.terrain + ("</td>") +
            ("<td>") + planets6.surface_water + ("</td>") +
            ("<td>") + planets6.population + ("</td>") +
            ("<td>") + planets6.residents + ("</td>") +
            ("<td>") + planets6.films + ("</td>") +
            ("<td>") + planets6.created + ("</td>") +
            ("<td>") + planets6.edited + ("</td>") +
            ("<td>") + planets6.url + ("</td>");

         var hasil = document.getElementById("planet7");
         hasil.innerHTML = ("<td>") + planets7.name + ("</td>") +
            ("<td>") + planets7.rotation_period + ("</td>") +
            ("<td>") + planets7.orbital_period + ("</td>") +
            ("<td>") + planets7.diameter + ("</td>") +
            ("<td>") + planets7.climate + ("</td>") +
            ("<td>") + planets7.gravity+ ("</td>") +
            ("<td>") + planets7.terrain.slice (0,7) + ("</td>") +
            ("<td>") + planets7.surface_water + ("</td>") +
            ("<td>") + planets7.population + ("</td>") +
            ("<td>") + planets7.residents + ("</td>") +
            ("<td>") + planets7.films + ("</td>") +
            ("<td>") + planets7.created + ("</td>") +
            ("<td>") + planets7.edited + ("</td>") +
            ("<td>") + planets7.url + ("</td>");