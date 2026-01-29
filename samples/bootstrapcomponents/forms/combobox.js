/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"9DF3C48F-ED89-4684-A17C-4D4EEA6536E8","variableType":-4}
 */
var enabled = true;

/**
 * @type {Boolean}
 * @properties={"typeid":35,"uuid":"E076F169-F65F-4C96-B480-92AADB77C025","variableType":-4}
 */
var visible = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"3988CE08-A82A-40BD-AEFB-E5B737DFE8AB"}
 */
var tooltip = 'Customer Information';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"3B5935A5-F5D9-4418-A285-563A663E0864"}
 */
var content = 'Nothing Selected';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"A0DEEE69-18DB-48FF-B842-8488688ED060"}
 */
var text = '';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"4E6CD3C6-8AD5-4C87-B042-0D639F3DA590"}
 */
var placeholder = 'Nothing Entered';

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
 * @properties={typeid:24,uuid:"3D8D9488-CAF9-45D0-A00F-F01B316EDE1C"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.info_label.text = '<b>Text Selected :</b> <br><br> %%text%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b> <br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"039360AA-2F30-409B-BA20-C5A4722901C4"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.combobox_1.addStyleClass('btn btn-success')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"22A23EBA-8648-467B-B7F8-999A586182D6"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.combobox_1.removeStyleClass('btn btn-success')
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
 * @properties={typeid:24,uuid:"202AB481-161D-4BD2-B6A3-3DF04949D42F"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.combobox_1.enabled = (enabled == 0 ? false : true);
	elements.info_label.text = (enabled == 0 ? '<b>Disabled</b> <hr> ' : '<b>Enabled</b> <hr> ')
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *@return {Boolean}
 * @properties={typeid:24,uuid:"75CB543E-B92A-454F-B602-632A3C929F04"}
 */
function onDataChange$visible(oldValue, newValue, event) {
	elements.combobox_1.visible = (visible == 0 ? false : true);
	elements.info_label.text = (visible == 0 ? '<b>Disabled</b> <hr> ' : '<b>Enabled</b> <hr> ')
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A43F69C4-4679-4667-85E7-AF3F6972CF94"}
 */
function onAction(event) {
	elements.info_label.text = '<b>onAction event fired</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8BEFF050-3994-422F-ACA5-E88DFA68943D"}
 */
function onDoubleClick(event) {
	elements.info_label.text = '<b>onDoubleClick event fired</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2F4D7BE1-9F67-4E74-9603-51A1C81830DE"}
 */
function onRightClick(event) {
	elements.info_label.text = '<b>onRightClick event fired</b>'

}
