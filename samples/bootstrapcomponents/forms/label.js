/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"652058A0-D992-490F-ABFF-3CE807FD3CD9","variableType":-4}
 */
var enabled = true;

/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"219949F0-472B-403F-A8E7-2A0676D1A6BC","variableType":-4}
 */
var visible = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"6AA2DC86-2D82-4D04-915A-C5406A6B1F9F"}
 */
var tooltip = 'The label';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"E4241B62-564B-4AB5-A6A2-86AD244B5D66"}
 */
var text = 'The label';

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3E2278DC-0FBD-4BB0-95DB-109AA271456A"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.info_label.text = '<b>Date Selected :</b><br><br> %%text%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b><br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FB21AF5B-F523-4732-AD52-2D6B0B19AB81"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b><hr>'
	elements.label_3.addStyleClass('btn-success')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"320BC16F-6B03-4A83-BE6E-138BEDC8F3BC"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b><hr>'
	elements.label_3.removeStyleClass('btn-success')
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F7E6F916-6265-4D45-958D-154324F85E54"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.label_3.enabled = (enabled == 0 ? false : true);
	elements.info_label.text = (enabled == 0 ? '<b>Disabled</b><hr>':'<b>Enabled</b><hr>')
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *@return {Boolean}
 * @properties={typeid:24,uuid:"62A9E3F0-27FB-44A6-8D46-C7C2E14968A5"}
 */
function onDataChange$visible(oldValue, newValue, event) {
	elements.label_3.visible = (visible == 0 ? false : true);
	elements.info_label.text = (visible == 0 ? '<b>Disabled</b><hr>':'<b>Enabled</b><hr>')
	return true
}
