/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"881C43C7-5057-438F-BD1A-6CE65910659B","variableType":-4}
 */
var enabled = true;

/**
 * @properties={"typeid":35,"uuid":"1BB20A85-D700-4C43-9555-974F4CF9C63B","variableType":-4}
 */
var editable = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"8DD7D65C-A9C3-4535-B49E-DF02BCC09C9F"}
 */
var placeHolder = 'Please type in';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D9820A5A-45FA-456E-93DE-0FC198345DD4"}
 */
var text = '';

/**
 * @type {Date}
 *
 * @properties={"typeid":35,"uuid":"613CF3A0-17B2-41DD-939D-28155C27EDC2","variableType":93}
 */
var theDate;

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
 * @properties={typeid:24,uuid:"B1ABA986-5296-47EE-B794-277FD0029C56"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.info_label.text = '<b>TextBox text :</b> <br><br> %%theDate%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b> <br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
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
 * @properties={typeid:24,uuid:"052E1531-E69A-4424-94D9-F0C01443461D"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.textbox_2.enabled = (enabled == 0?false:true);	
	elements.info_label.text = (enabled == 0?'<b>Disabled</b> <hr> ':'<b>Enabled</b> <hr> ')  	
	return true
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"B75AD9CA-0253-489B-9385-338ACFD75781"}
 */
function onDataChange$Editable(oldValue, newValue, event) {
	elements.textbox_2.editable = (editable == 0?false:true);	
	elements.info_label.text = (editable == 0?'<b>Not Editable</b> <hr> ':'<b>Editable</b> <hr> ')  	
	
	return true
}
