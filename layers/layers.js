var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Schools_1 = new ol.format.GeoJSON();
var features_Schools_1 = format_Schools_1.readFeatures(json_Schools_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_1.addFeatures(features_Schools_1);cluster_Schools_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Schools_1
});
var lyr_Schools_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Schools_1, 
                style: style_Schools_1,
                interactive: true,
                title: '<img src="styles/legend/Schools_1.png" /> Schools'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Schools_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Schools_1];
lyr_Schools_1.set('fieldAliases', {'name': 'name', 'pluscodes': 'pluscodes', });
lyr_Schools_1.set('fieldImages', {'name': 'TextEdit', 'pluscodes': 'TextEdit', });
lyr_Schools_1.set('fieldLabels', {'name': 'no label', 'pluscodes': 'no label', });
lyr_Schools_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});