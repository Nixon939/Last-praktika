ymaps.ready(init);
var cnt=0;
var x0=55.790927;
var y0=49.114453;
var zoom0=18;
var objLineString=new Object();
var arrayShowSegments =[];
var arrayAllSegments=[
[55.7907909999963, 49.114689],
[55.7906309999963, 49.115019],
[55.7904659999963, 49.115370],
[55.7903079999963, 49.115692],
[55.7901639999963, 49.115982],
[55.7900279999963, 49.116313],
[55.7898429999963, 49.116621],
[55.7899619999963, 49.116786],
[55.7901129999963, 49.116998],
[55.7902579999963, 49.117200],
[55.7903979999963, 49.117401],
[55.7905549999963, 49.117654],
];
var x0= arrayAllSegments[3][0];
var y= arrayAllSegments[3] [1];
function init() {
	var lineStringGeometry =new
	ymaps.geometry.LineString(arrayShowSegments);
	objLineString= lineStringGeometry;
	console.log("Test ymaps: ready...");
	console.log("arrayAllSegments= "+ arrayAllSegments);
	console.log("arrayShowSegments ="+ arrayShowSegments);
	console.log("lineStringGeometry =" +lineStringGeometry.getCoordinates());
	arrayShowSegments.push(arrayAllSegments[cnt]);
	console.log("Added 1st node: "+" cnt="+cnt);
	console.log("lineStringGeometry="+
	lineStringGeometry.getCoordinates());
	console.log("arrayShowSegments="+arrayShowSegments);
	cnt++
	arrayShowSegments.push(arrayAllSegments[cnt]);
	console.log("Added 2nd node:"+"cnt="+cnt);
	console.log("LineStringGeometry ="+ lineStringGeometry.getCoordinates());
	console.log("arrayShowSegments=" +arrayShowSegments);
	var polylineGreen5=new ymaps.Polyline(lineStringGeometry, {},{
		strokeColor:"#00FF00",
		strokeOpacity:0.35,
		strokeWidth: 5,
	}
	);
	var map1=new ymaps.Map("map",{ center:[x0,y0], zoom:zoom0});
	console.log("Center of the map1: ["+x0+","+y0+"].");
	map1.geoObjects.add(polylineGreen5);
	console.log("Show 1st segment of the map1.");
}
function onClickAddSegment() {
	cnt++;
	if (cnt>= arrayAllSegments.length) {
		cnt= arrayAllSegments.length;
		console.log("Warning! Reached last node of track: cnt="+cnt);
	}
	arrayShowSegments.push(arrayAllSegments[cnt]);
	console.log("Clicked button: Add Segment: "+" cnt="+cnt);
	console.log("arrayShowSegments="+arrayShowSegments);
	return false;
}
