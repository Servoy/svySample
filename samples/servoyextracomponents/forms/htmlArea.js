/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"7C224C56-61BC-4F51-80EB-5F33E451CF52"}
 */
var offColor = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"7067609B-CCF2-41A9-B0FE-36F80C2EDC79"}
 */
var onColor = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"168D67EF-7CAE-4969-A09E-52ADDE59A751"}
 */
var changeSize = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"40A10C4A-9903-47B1-9A6F-B311171E5A72"}
 */
var LabelShown = null;

/**
 * @properties={"typeid":35,"uuid":"BFD87BEA-301F-451D-A9C4-07EFDCBD172D","variableType":-4}
 */
var enabled = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"95C4B02C-AB5D-4DB9-9127-A66C6E8917A8"}
 */
var labelSwitchButton = "";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"5CAEDA9A-C019-4C11-A663-1A5C44274E54"}
 */
var offText = "off";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"9D110FDC-C9AD-445B-A052-61DE63840AEA"}
 */
var onText = '';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"6C2205E6-A2B4-4688-BC0F-7F69E27BD362"}
 */
var iconAwosome = "";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"B0C57D7F-4246-46DD-BA39-703D46EDF45C"}
 */
var theData = '';

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
 * @properties={typeid:24,uuid:"0E42361E-65F5-4D4D-B21D-8EDA9281E0B6"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.htmlarea_1.enabled = (enabled == 0?false:true);	
	elements.info_label.text = (enabled == 0?'<b>Button disabled</b> <hr> ':'<b>Button enabled</b> <hr> ')
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 * @return {Boolean}
 * @properties={typeid:24,uuid:"24A8B27F-1D4C-4C9D-89D2-2FDB141DBE2B"}
 */
function onDataChangeShowText(oldValue, newValue, event) {
	elements.info_label.text = '<b>TextBox text :</b> <br><br> %%theDate%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b> <br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
}
