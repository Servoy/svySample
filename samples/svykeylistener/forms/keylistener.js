/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"865436EF-9430-4C49-AC7E-5721FEB6BC59","variableType":-4}
 */
var enabled = true;

/**
 * @properties={"typeid":35,"uuid":"4E666431-4D99-4C6E-82F5-2657B7C7DEFE","variableType":-4}
 */
var editable = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"3F19FA4E-BB6A-4C34-A80E-A81B4A02A39D"}
 */
var placeHolder = 'Please type in';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"C8363EA4-0479-4DD7-9E69-4984730EB435"}
 */
var text = '';

/**
 * @type {Date}
 *
 * @properties={"typeid":35,"uuid":"A4C1FCE4-61D0-4091-A280-E1C18CA2CF7F","variableType":93}
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
 * @properties={typeid:24,uuid:"C8B01D1D-A378-45AA-B7F2-A6FFB21E7C0F"}
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
 * @properties={typeid:24,uuid:"73751B04-4E88-4A25-A5BD-76C17AA627B0"}
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
 * @properties={typeid:24,uuid:"5882A481-B71C-4A48-A675-3A328DDB3021"}
 */
function onDataChange$Editable(oldValue, newValue, event) {
	elements.textbox_2.editable = (editable == 0?false:true);	
	elements.info_label.text = (editable == 0?'<b>Not Editable</b> <hr> ':'<b>Editable</b> <hr> ')  	
	
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"ABA6B243-B220-4CED-AB2C-818AC4DFE24E"}
 */
function onShow(firstShow, event) {
	plugins.keyListener.addKeyListener('keylistener',onKeyTyping)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param k
 *
 * @properties={typeid:24,uuid:"526620A9-01D7-4F6A-A99D-0BB31F8A347F"}
 */
function onKeyTyping(k) {
	elements.info_label.text = k
}
