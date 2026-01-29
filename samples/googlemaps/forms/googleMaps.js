/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"608C4040-732A-41D0-97ED-DBE9C55626A3"}
 */
var apiKEY = "";

/**
 * @properties={typeid:35,uuid:"78A307AE-63FB-4795-B7F4-4FA36EDAF6F0",variableType:-4}
 */
var routeDetails = null;

/**
 * @param {CustomType<googlemaps-svy-G-Maps.marker>} marker
 * @param {CustomType<googlemaps-svy-G-Maps.latLng>} latLng
 *
 * @properties={typeid:24,uuid:"0408CA95-6F22-446C-8DD8-93BBB52E0627"}
 */
function onMarkerGeocoded(marker, latLng) {
	elements.info_label.text = 'Marker ' + marker.markerId + ' geocoded as [' + latLng.lat + ', ' + latLng.lng + ']'
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0F9E3108-D09B-47D2-96A3-B5F51AF47161"}
 */
function onAction(event) {
	var servoyMarker = elements.googlemaps_1.createMarker('svyMarker', 'Calea Aradului 11, Timișoara 300254', 'Servoy B.V.');
	//servoyMarker.iconMedia = 'media:///servoy_marker.png';
	elements.googlemaps_1.addMarker(servoyMarker);

}

/**
 * @param {JSEvent} event
 * @param {CustomType<googlemaps-svy-G-Maps.latLng>} [latLng]
 *
 * @properties={typeid:24,uuid:"8ED5F1C5-C763-4A44-956E-473B21461D40"}
 */
function onMapEvent(event, latLng) {
	elements.info_label.text = 'Map event "' + event.getType() + '" detected ' + (latLng ? ' at ' + latLng.lat + ', ' + latLng.lng : '')
	
	if (event.getType() === 'click') {
		var markerToAdd = elements.googlemaps_1.createMarker(application.getUUID(), latLng);
		markerToAdd.title = latLng ? ' at ' + latLng.lat + ', ' + latLng.lng : ''
		elements.googlemaps_1.addMarker(markerToAdd);
	} else if (event.getType() === 'rightclick') {
		var popup = plugins.window.createPopupMenu();
		popup.addMenu('Hello');
		popup.addMenu('World');
		popup.show(event.getX(), event.getY());
	}
}

/**
 * @param {JSEvent} event
 * @param {Number} markerIndex
 * @param {CustomType<googlemaps-svy-G-Maps.latLng>} [latLng]
 *
 * @properties={typeid:24,uuid:"5C343263-4E53-4AE9-A388-B342E8A876AB"}
 */
function onMarkerEvent(event, markerIndex, latLng) {
	if (!(markerIndex >= 0)) {
		return;
	}
	
	var marker = elements.googlemaps_1.getMarker(markerIndex);
	
	elements.info_label.text = 'Marker event "' + event.getType() + '" detected for marker with markerId "' + marker.markerId + '"' + (latLng ? ' at ' + latLng.lat + ', ' + latLng.lng : '')
	elements.info_label.text = 'Marker is ' + JSON.stringify(marker, null, 4)
	
	if (event.getType() === 'dblclick') {
		if (marker.markerId && marker.userObject) {
			//record
			var selectedIndexes = foundset.getSelectedIndexes();
			if (selectedIndexes.length > 1) {
				selectedIndexes.splice(markerIndex, 1);
				foundset.setSelectedIndexes(selectedIndexes);
			}
		} else {
			//manually added
			elements.googlemaps_1.removeMarker(markerIndex);
		}
	} else if (event.getType() === 'rightclick') {
		var popup = plugins.window.createPopupMenu();
		popup.addMenu(marker.title);
		popup.addSeparator();
		popup.addMenu('Foo');
		popup.addMenu('Bar');
		popup.show(event.getX(), event.getY());
	}

}

/**
 * @param {CustomType<googlemaps-svy-G-Maps.routeResult>} route
 *
 * @properties={typeid:24,uuid:"E6C756B2-5850-4D6A-80F9-166CE7E9B196"}
 */
function onRouteChanged(route) {
	var routeDetailsArray = [];
	if (route) {
		routeDetailsArray.push('Total distance: ' + utils.numberFormat(Math.ceil(route.total_distance / 1000), i18n.getDefaultNumberFormat()) + ' km');
		routeDetailsArray.push('Total duration: ' + Math.ceil(route.total_duration / 60) + ' minutes');
		routeDetailsArray.push('');
		var legs = route.legs;
		for (var l = 0; l < legs.length; l++) {
			routeDetailsArray.push('Leg ' + (l + 1) + ' distance: ' + utils.numberFormat(Math.ceil(legs[l].distance_meters / 1000), i18n.getDefaultNumberFormat()) + ' km');
			routeDetailsArray.push('Leg ' + (l + 1) + ' duration: ' + legs[l].duration);
		}
		routeDetails = routeDetailsArray.join('<br>');
	} else {
		routeDetails = null;
	}

}

/**
 * @param {JSEvent} event
 *
 * @param {Number} markerIndex
 *
 * @properties={typeid:24,uuid:"C6562BE9-5B78-4522-B837-8BA31B3E4487"}
 */
function onActionRemoveMarker(event,markerIndex) {
		elements.googlemaps_1.removeAllMarkers();
		elements.info_label.text = "Removed all markers"
}
