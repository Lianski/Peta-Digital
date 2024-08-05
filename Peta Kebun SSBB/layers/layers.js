var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PERKEBUNANSUMSELDANBABEL_1 = new ol.format.GeoJSON();
var features_PERKEBUNANSUMSELDANBABEL_1 = format_PERKEBUNANSUMSELDANBABEL_1.readFeatures(json_PERKEBUNANSUMSELDANBABEL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERKEBUNANSUMSELDANBABEL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERKEBUNANSUMSELDANBABEL_1.addFeatures(features_PERKEBUNANSUMSELDANBABEL_1);
var lyr_PERKEBUNANSUMSELDANBABEL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERKEBUNANSUMSELDANBABEL_1, 
                style: style_PERKEBUNANSUMSELDANBABEL_1,
                popuplayertitle: "PERKEBUNAN  SUMSEL DAN BABEL",
                interactive: true,
                    title: '<img src="styles/legend/PERKEBUNANSUMSELDANBABEL_1.png" /> PERKEBUNAN  SUMSEL DAN BABEL'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_PERKEBUNANSUMSELDANBABEL_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PERKEBUNANSUMSELDANBABEL_1];
lyr_PERKEBUNANSUMSELDANBABEL_1.set('fieldAliases', {'NOP': 'NOP', 'Tahun': 'Tahun', 'Nama WP': 'Nama WP', 'NPWP': 'NPWP', 'Sektor': 'Sektor', 'Letak OP': 'Letak OP', 'Luas Bumi': 'Luas Bumi', 'Luas Bangu': 'Luas Bangu', 'PBB Teruta': 'PBB Teruta', });
lyr_PERKEBUNANSUMSELDANBABEL_1.set('fieldImages', {'NOP': 'TextEdit', 'Tahun': 'TextEdit', 'Nama WP': 'TextEdit', 'NPWP': 'TextEdit', 'Sektor': 'TextEdit', 'Letak OP': 'TextEdit', 'Luas Bumi': 'TextEdit', 'Luas Bangu': 'TextEdit', 'PBB Teruta': 'TextEdit', });
lyr_PERKEBUNANSUMSELDANBABEL_1.set('fieldLabels', {'NOP': 'inline label - always visible', 'Tahun': 'inline label - always visible', 'Nama WP': 'inline label - always visible', 'NPWP': 'inline label - always visible', 'Sektor': 'inline label - always visible', 'Letak OP': 'inline label - always visible', 'Luas Bumi': 'inline label - always visible', 'Luas Bangu': 'inline label - always visible', 'PBB Teruta': 'inline label - always visible', });
lyr_PERKEBUNANSUMSELDANBABEL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});