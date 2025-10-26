var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_cheruvnniur0110_2 = new ol.format.GeoJSON();
var features_cheruvnniur0110_2 = format_cheruvnniur0110_2.readFeatures(json_cheruvnniur0110_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheruvnniur0110_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheruvnniur0110_2.addFeatures(features_cheruvnniur0110_2);
var lyr_cheruvnniur0110_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheruvnniur0110_2, 
                style: style_cheruvnniur0110_2,
                popuplayertitle: 'cheruvnniur0110',
                interactive: true,
    title: 'cheruvnniur0110<br />\
    <img src="styles/legend/cheruvnniur0110_2_0.png" /> AVALA<br />\
    <img src="styles/legend/cheruvnniur0110_2_1.png" /> AYOLPADI<br />\
    <img src="styles/legend/cheruvnniur0110_2_2.png" /> CHERUVANNUR<br />\
    <img src="styles/legend/cheruvnniur0110_2_3.png" /> EDACHERICHAL<br />\
    <img src="styles/legend/cheruvnniur0110_2_4.png" /> EDAKKAYIL<br />\
    <img src="styles/legend/cheruvnniur0110_2_5.png" /> KAKKARAMUKKU<br />\
    <img src="styles/legend/cheruvnniur0110_2_6.png" /> KANDEETHAZHA<br />\
    <img src="styles/legend/cheruvnniur0110_2_7.png" /> KUTTOTH<br />\
    <img src="styles/legend/cheruvnniur0110_2_8.png" /> MADATHILMUKKU<br />\
    <img src="styles/legend/cheruvnniur0110_2_9.png" /> MANAVA<br />\
    <img src="styles/legend/cheruvnniur0110_2_10.png" /> MUYIPPOTH<br />\
    <img src="styles/legend/cheruvnniur0110_2_11.png" /> PADINHARAKKARA<br />\
    <img src="styles/legend/cheruvnniur0110_2_12.png" /> PARAPPURAM<br />\
    <img src="styles/legend/cheruvnniur0110_2_13.png" /> PERINCHERIKADAVU<br />\
    <img src="styles/legend/cheruvnniur0110_2_14.png" /> THEKKUMMURI<br />\
    <img src="styles/legend/cheruvnniur0110_2_15.png" /> VENNAROD<br />\
    <img src="styles/legend/cheruvnniur0110_2_16.png" /> VIYYAMCHIRA<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_cheruvnniur0110_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_cheruvnniur0110_2];
lyr_cheruvnniur0110_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_cheruvnniur0110_2.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_cheruvnniur0110_2.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - visible with data', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - visible with data', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_cheruvnniur0110_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});