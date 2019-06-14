window.onload = function() {
    console.log('Starting map -->');
    loadMap();
};

function loadMap() {
    var mymap = L.map('mapid').setView([40.8783942,14.4282348], 8);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoibmljb2xhZGlsZW8iLCJhIjoiY2p3c3ZkNW9vMDhrdDN5a2JibWJ5bTR5NSJ9.iFo-EQ6eNz6Y6oL2H3Nw5Q'
    }).addTo(mymap);
    var geojsonFeature = {
        "type": "FeatureCollection",
        "name": "CentralineMonitoraggioQualitaAria",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
            { "type": "Feature", "properties": { "Name": "Napoli NA01 Oss. Astronomico", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "NA01 Osservatorio Astronomico", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 40.8637, "LONG": 14.25451 }, "geometry": { "type": "Point", "coordinates": [ 14.254512, 40.863695, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Napoli NA02 Osp. Santobono", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "NA02 Ospedale Santobono", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.84937, "LONG": 14.23111 }, "geometry": { "type": "Point", "coordinates": [ 14.231109, 40.849368, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Napoli NA06 Museo Nazionale", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "NA06 Museo Nazionale", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.85416, "LONG": 14.25133 }, "geometry": { "type": "Point", "coordinates": [ 14.251332, 40.854159, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Napoli NA07 Ferrovia", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "NA07 Ferrovia", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Aggiuntivo", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.85416, "LONG": 14.27174 }, "geometry": { "type": "Point", "coordinates": [ 14.271738, 40.854161, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Napoli NA08 Osp. N. Pellegrini", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "NA08 Ospedale Nuovo Pellegrini", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.87233, "LONG": 14.27546 }, "geometry": { "type": "Point", "coordinates": [ 14.275463, 40.872328, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Napoli NA09 via Argine", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "NA09 Via Argine", "ZONA": "Sub-urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Sub-urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.86387, "LONG": 14.34136 }, "geometry": { "type": "Point", "coordinates": [ 14.341356, 40.863874, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Napoli Parco Virgiliano", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "Parco Virgiliano", "ZONA": "Sub-urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Sub-urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.79864, "LONG": 14.17968 }, "geometry": { "type": "Point", "coordinates": [ 14.179681, 40.798636, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Napoli via Epomeo", "ZONE_CODE": "IT1507", "COMUNE": "Napoli", "NOME_PROG": "Epomeo (Tirrenopower)", "ZONA": "Urbana", "STAZIONE": "Fondo Industriale", "UBICAZIONE": "Urbana Fondo Industriale", "GESTIONE": "Tirreno Power", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.84493, "LONG": 14.20567 }, "geometry": { "type": "Point", "coordinates": [ 14.20567, 40.844933, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Acerra Zona Industriale", "ZONE_CODE": "IT1507", "COMUNE": "Acerra", "NOME_PROG": "Acerra Z.I.", "ZONA": "Sub-urbana", "STAZIONE": "Industriale", "UBICAZIONE": "Sub-urbana Industriale", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.97961, "LONG": 14.40101 }, "geometry": { "type": "Point", "coordinates": [ 14.401014, 40.979613, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Pomigliano d'Arco Area ASI", "ZONE_CODE": "IT1507", "COMUNE": "Pomigliano d'Arco", "NOME_PROG": "Area ASI", "ZONA": "Sub-urbana", "STAZIONE": "Industriale", "UBICAZIONE": "Sub-urbana Industriale", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.92084, "LONG": 14.38494 }, "geometry": { "type": "Point", "coordinates": [ 14.384944, 40.920841, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Portici Parco Reggia", "ZONE_CODE": "IT1507", "COMUNE": "Portici", "NOME_PROG": "Parco Reggia", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 40.81588, "LONG": 14.34928 }, "geometry": { "type": "Point", "coordinates": [ 14.349277, 40.815877, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Pozzuoli Zona Villa Avellino", "ZONE_CODE": "IT1507", "COMUNE": "Pozzuoli", "NOME_PROG": "Villa Avellino", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.82293, "LONG": 14.12253 }, "geometry": { "type": "Point", "coordinates": [ 14.122528, 40.822926, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Volla via Filichito", "ZONE_CODE": "IT1507", "COMUNE": "Volla", "NOME_PROG": "Volla (Tirrenopower)", "ZONA": "Sub-urbana", "STAZIONE": "Fondo Industriale", "UBICAZIONE": "Sub-urbana Fondo Industriale", "GESTIONE": "Tirreno Power", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.88637, "LONG": 14.34999 }, "geometry": { "type": "Point", "coordinates": [ 14.34999, 40.886372, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "S. Vitaliano Scuola Marconi", "ZONE_CODE": "IT1507", "COMUNE": "S.Vitaliano", "NOME_PROG": "Scuola Elementare Marconi", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.92433, "LONG": 14.48139 }, "geometry": { "type": "Point", "coordinates": [ 14.481393, 40.924329, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Caserta CE51 Ist. Manzoni", "ZONE_CODE": "IT1507", "COMUNE": "Caserta", "NOME_PROG": "CE51 Istituto Manzoni", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 41.07869, "LONG": 14.33838 }, "geometry": { "type": "Point", "coordinates": [ 14.338375, 41.078687, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Caserta CE52 Sc. De Amicis", "ZONE_CODE": "IT1507", "COMUNE": "Caserta", "NOME_PROG": "CE52 Scuola De Amicis", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 41.07693, "LONG": 14.3312 }, "geometry": { "type": "Point", "coordinates": [ 14.331199, 41.076934, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Maddaloni CE54 Sc. Settembrini", "ZONE_CODE": "IT1507", "COMUNE": "Maddaloni", "NOME_PROG": "CE54 Scuola Settembrini", "ZONA": "Sub-urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Sub-urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 41.04592, "LONG": 14.37808 }, "geometry": { "type": "Point", "coordinates": [ 14.378081, 41.045916, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Casoria Scuola Palizzi", "ZONE_CODE": "IT1507", "COMUNE": "Casoria", "NOME_PROG": "Scuola Palizzi (CAM)", "ZONA": "Sub-urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Sub-urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 40.91464, "LONG": 14.2986 }, "geometry": { "type": "Point", "coordinates": [ 14.298595, 40.914637, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Torre Annunziata Sc. Pascoli", "ZONE_CODE": "IT1507", "COMUNE": "Torre Annunziata", "NOME_PROG": "Scuola Media Pascoli", "ZONA": "Sub-urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Sub-urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Non Previsto", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 40.76054, "LONG": 14.43813 }, "geometry": { "type": "Point", "coordinates": [ 14.438133, 40.760542, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Aversa Scuola Cirillo", "ZONE_CODE": "IT1507", "COMUNE": "Aversa", "NOME_PROG": "Scuola Cirillo", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Aggiuntivo", "PM2_5": "Aggiuntivo", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.9755, "LONG": 14.2114 }, "geometry": { "type": "Point", "coordinates": [ 14.211404, 40.975496, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Acerra Scuola Caporale", "ZONE_CODE": "IT1507", "COMUNE": "Acerra", "NOME_PROG": "Scuola Caporale", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.94046, "LONG": 14.37019 }, "geometry": { "type": "Point", "coordinates": [ 14.370191, 40.940463, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Teverola via San Lorenzo", "ZONE_CODE": "IT1508", "COMUNE": "Teverola", "NOME_PROG": "Teverola (SET)", "ZONA": "Sub-urbana", "STAZIONE": "Industriale", "UBICAZIONE": "Sub-urbana Industriale", "GESTIONE": "SET", "PM10": "Monitorato", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.99094, "LONG": 14.20275 }, "geometry": { "type": "Point", "coordinates": [ 14.202747, 40.990941, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Marcianise Regi Lagni", "ZONE_CODE": "IT1508", "COMUNE": "Marcianise", "NOME_PROG": "Marcianise (SET)", "ZONA": "Sub-urbana", "STAZIONE": "Fondo Industriale", "UBICAZIONE": "Sub-urbana Fondo Industriale", "GESTIONE": "SET", "PM10": "Monitorato", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 40.99465, "LONG": 14.28723 }, "geometry": { "type": "Point", "coordinates": [ 14.287231, 40.994652, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Avellino AV41 Sc. V Circolo", "ZONE_CODE": "IT1508", "COMUNE": "Avellino", "NOME_PROG": "AV41 Scuola V Cimarosa", "ZONA": "Sub-urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Sub-urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Aggiuntivo", "PM2_5": "Aggiuntivo", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 40.92307, "LONG": 14.78674 }, "geometry": { "type": "Point", "coordinates": [ 14.786743, 40.92307, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Avellino Scuola Alighieri", "ZONE_CODE": "IT1508", "COMUNE": "Avellino", "NOME_PROG": "Scuola Alighieri", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.91874, "LONG": 14.78545 }, "geometry": { "type": "Point", "coordinates": [ 14.785454, 40.91874, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Nocera Inferiore Sc. Solimena", "ZONE_CODE": "IT1508", "COMUNE": "Nocera Inf.", "NOME_PROG": "Scuola Solimene", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.74027, "LONG": 14.64346 }, "geometry": { "type": "Point", "coordinates": [ 14.643457, 40.740265, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Benevento Zona Industriale", "ZONE_CODE": "IT1508", "COMUNE": "Benevento", "NOME_PROG": "Benevento Z.I.", "ZONA": "Sub-urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Sub-urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 41.14688, "LONG": 14.83613 }, "geometry": { "type": "Point", "coordinates": [ 14.836134, 41.14688, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Benevento BN32 Via Mustilli", "ZONE_CODE": "IT1508", "COMUNE": "Benevento", "NOME_PROG": "BN32 Via Flora", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 41.13145, "LONG": 14.78939 }, "geometry": { "type": "Point", "coordinates": [ 14.789388, 41.131449, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Benevento Campo Sportivo", "ZONE_CODE": "IT1508", "COMUNE": "Benevento", "NOME_PROG": "Campo Sportivo", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 41.11566, "LONG": 14.77994 }, "geometry": { "type": "Point", "coordinates": [ 14.77994, 41.11566, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Battipaglia Parco Fiume", "ZONE_CODE": "IT1508", "COMUNE": "Battipaglia", "NOME_PROG": "Parco Fiume", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.61107, "LONG": 14.97584 }, "geometry": { "type": "Point", "coordinates": [ 14.975843, 40.61107, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Polla Area Tritovagliatore", "ZONE_CODE": "IT1508", "COMUNE": "Polla", "NOME_PROG": "Area tritovagliatore", "ZONA": "Sub-urbana", "STAZIONE": "Industriale", "UBICAZIONE": "Sub-urbana Industriale", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.48691, "LONG": 15.528 }, "geometry": { "type": "Point", "coordinates": [ 15.527995, 40.486909, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Cava dei Tirreni Stadio", "ZONE_CODE": "IT1508", "COMUNE": "Cava dei Tirreni", "NOME_PROG": "Stadio", "ZONA": "Sub-urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Sub-urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.711, "LONG": 14.70245 }, "geometry": { "type": "Point", "coordinates": [ 14.702449, 40.710999, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Salerno SA22 Osp. Via Vernieri", "ZONE_CODE": "IT1508", "COMUNE": "Salerno", "NOME_PROG": "SA22 Ospedale Via Vernieri", "ZONA": "Urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 40.68221, "LONG": 14.7663 }, "geometry": { "type": "Point", "coordinates": [ 14.766295, 40.682214, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Salerno SA23 Scuola Conti", "ZONE_CODE": "IT1508", "COMUNE": "Salerno", "NOME_PROG": "SA23 Scuola O. Conti", "ZONA": "Sub-urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Sub-urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Aggiuntivo", "PM2_5": "Aggiuntivo", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 40.69535, "LONG": 14.77752 }, "geometry": { "type": "Point", "coordinates": [ 14.777522, 40.695351, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Salerno Parco Mercatello", "ZONE_CODE": "IT1508", "COMUNE": "Salerno", "NOME_PROG": "Parco Mercatello", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.66143, "LONG": 14.80451 }, "geometry": { "type": "Point", "coordinates": [ 14.804505, 40.661425, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "S. Felice a Cancello C. Scolastico", "ZONE_CODE": "IT1508", "COMUNE": "San Felice a C.", "NOME_PROG": "Complesso scolastico", "ZONA": "Sub-urbana", "STAZIONE": "Traffico", "UBICAZIONE": "Sub-urbana Traffico", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.99045, "LONG": 14.424 }, "geometry": { "type": "Point", "coordinates": [ 14.423996, 40.990452, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Solofra Zona Industriale", "ZONE_CODE": "IT1508", "COMUNE": "Solofra", "NOME_PROG": "Solofra Zona Industriale", "ZONA": "Sub-urbana", "STAZIONE": "Industriale", "UBICAZIONE": "Sub-urbana Industriale", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Monitorato", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 40.83548, "LONG": 14.82469 }, "geometry": { "type": "Point", "coordinates": [ 14.824687, 40.835482, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Sparanise Ferrovia", "ZONE_CODE": "IT1508", "COMUNE": "Sparanise", "NOME_PROG": "Sparanise (Calenia)", "ZONA": "Sub-urbana", "STAZIONE": "Industriale", "UBICAZIONE": "Sub-urbana Industriale", "GESTIONE": "Calenia", "PM10": "Monitorato", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Monitorato", "LAT": 41.18522, "LONG": 14.09216 }, "geometry": { "type": "Point", "coordinates": [ 14.09216, 41.185222, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Pignataro M. Area Industriale", "ZONE_CODE": "IT1508", "COMUNE": "Pignataro M.", "NOME_PROG": "Pignataro M.(Calenia)", "ZONA": "Sub-urbana", "STAZIONE": "Fondo Industriale", "UBICAZIONE": "Sub-urbana Fondo Industriale", "GESTIONE": "Calenia", "PM10": "Monitorato", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Monitorato", "BENZENE": "Non Previsto", "O3": "Non Previsto", "SO2": "Non Previsto", "LAT": 41.16849, "LONG": 14.1508 }, "geometry": { "type": "Point", "coordinates": [ 14.150802, 41.168491, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "San Gregorio Matese Lago", "ZONE_CODE": "IT1509", "COMUNE": "S. Gregorio M.", "NOME_PROG": "Matese", "ZONA": "Rurale", "STAZIONE": "Fondo", "UBICAZIONE": "Rurale Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 41.41719, "LONG": 14.41163 }, "geometry": { "type": "Point", "coordinates": [ 14.411627, 41.417193, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Ottati Alburni", "ZONE_CODE": "IT1509", "COMUNE": "Ottati", "NOME_PROG": "Alburni", "ZONA": "Rurale", "STAZIONE": "Fondo", "UBICAZIONE": "Rurale Fondo", "GESTIONE": "ARPAC", "PM10": "Monitorato", "PM2_5": "Monitorato", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Monitorato", "LAT": 40.4706, "LONG": 15.29872 }, "geometry": { "type": "Point", "coordinates": [ 15.298723, 40.470596, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Ariano Irpino Stadio", "ZONE_CODE": "IT1509", "COMUNE": "Ariano Irpino", "NOME_PROG": "Villa Comunale", "ZONA": "Urbana", "STAZIONE": "Fondo", "UBICAZIONE": "Urbana Fondo", "GESTIONE": "ARPAC", "PM10": "Non Previsto", "PM2_5": "Non Previsto", "NOX_NO2": "Monitorato", "CO": "Non Previsto", "BENZENE": "Non Previsto", "O3": "Monitorato", "SO2": "Non Previsto", "LAT": 41.15607, "LONG": 15.09668 }, "geometry": { "type": "Point", "coordinates": [ 15.096684, 41.156068, 0.0 ] } }
            ]
        };
    L.geoJSON(geojsonFeature, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<div class="leaflet-popup-content" style="width:300px;">' +
                            '<table class="marker-properties"><tbody><tr><td style="font-weight:bold">' + feature.properties.Name +'</td></tr>' + 
                            '<tr><td>COMUNE:</td><td>' + feature.properties.COMUNE +'</td></tr>' + 
                            '<tr><td>BENZENE:</td><td>' + feature.properties.BENZENE +'</td></tr>' + 
                            '<tr><td>OZONO:</td><td>' + feature.properties.O3 +'</td></tr>' + 
                            '<tr><td>CO:</td><td>' + feature.properties.CO +'</td></tr>' + 
                            '<tr><td>NO2:</td><td>' + feature.properties.NOX_NO2 +'</td></tr>' + 
                            '<tr><td>SO2:</td><td>' + feature.properties.SO2 +'</td></tr>' + 
                            '<tr><td>PM10:</td><td>' + feature.properties.PM10 +'</td></tr>' + 
                            '<tr><td>PM2.5:</td><td>' + feature.properties.PM2_5 +'</td></tr></tbody></table></div>' )
            }
    }).addTo(mymap);
}

function switchData(event) {
    let urlBase = 'https://raw.githubusercontent.com/nicoladileo/AURA_Dataset/master/';
    path1 = '';
    path2 = '';
    if (event.target.id === 'benzeneBtn') {
        jQuery("#selezionato").html('Inquinante: Benzene (µg/m<sup>3</sup>)');
        path1 = 'benzene.csv';
        path2 = 'benzene2.csv';
    }    
    else if (event.target.id === 'monossidoBtn') {
        jQuery("#selezionato").html('Inquinante: Monossido di carbonio (mg/m<sup>3</sup>)');
        path1 = 'co.csv';
        path2 = 'co2.csv';
    } 
    else if (event.target.id === 'azotoBtn') {
        jQuery("#selezionato").html('Inquinante: Biossido di azoto (µg/m<sup>3</sup>)');
        path1 = 'no2.csv';
        path2 = 'no22.csv';
    }
    else if (event.target.id === 'zolfoBtn') {
        jQuery("#selezionato").html('Inquinante: Biossido di zolfo (µg/m<sup>3</sup>)');
        path1 = 'so2.csv';
        path2 = 'so22.csv';
    }
    else if (event.target.id === 'pmTenBtn') {
        jQuery("#selezionato").html('Inquinante: PM10 (µg/m<sup>3</sup>)');
        path1 = 'pm10.csv';
        path2 = 'pm102.csv';
    }
    else if (event.target.id === 'pmTwoBtn') {
        jQuery("#selezionato").html('Inquinante: PM2.5 (µg/m<sup>3</sup>)');
        path1 = 'pm2.csv';
        path2 = 'pm22.csv';
    }

    var chart = c3.generate({
        bindto: '#primoQuadri',
        data: {
            url: urlBase + path1,
            type: 'bar'
        },
        zoom: {
            enabled: true
        },
        bar: {
            width: {
                ratio: 0.5 
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Maggio 2018', 'Giugno 2018','Luglio 2018','Agosto 2018']
            }
        }
    });
    var chart = c3.generate({
        bindto: '#secondoQuadri',
        data: {
            url: urlBase + path2,
            type: 'bar'
        },
        zoom: {
            enabled: true
        },
        bar: {
            width: {
                ratio: 0.5 
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Settembre 2018', 'Ottobre 2018','Novembre 2018','Dicembre 2018']
            }
        }
    });
}