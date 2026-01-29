/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"9E0CAE22-2B46-41A2-A82E-72FBF873ABF7"}
 */
var offColor = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"FD92ED09-8500-4253-A17B-023C2AFCB351"}
 */
var onColor = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"AEC9494A-5381-4FA5-AF1F-B8DB852494BC"}
 */
var changeSize = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"B8B38E67-D202-40FD-93FE-3361FD4F09EB"}
 */
var LabelShown = null;

/**
 * @properties={"typeid":35,"uuid":"CBD9FE65-5DCC-40E0-B51C-D3DE686F7827","variableType":-4}
 */
var enabled = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"5137B271-1A17-480C-B2A1-75C585C7A527"}
 */
var labelSwitchButton = "";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"4252AEC7-4D9E-4D61-AF7F-F1E404ABF3F5"}
 */
var offText = "off";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"8145C23D-F991-4EA1-AE41-E3421B7C3882"}
 */
var onText = "";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"E2544F9B-245B-4896-8E1F-D0B0CE12C1BA"}
 */
var iconAwesome = "fas fa-wifi";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D6B86809-2106-461B-A2F9-3C75E719CF89"}
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
 * @properties={typeid:24,uuid:"E6736D93-22DE-49D0-9DAB-01C28434ACA2"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.textboxgroup.faclass = iconAwosome
	return true;
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
 * @properties={typeid:24,uuid:"F1B368A1-4941-4BF2-BC68-3DA4D3F9BD35"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.textboxgroup.enabled = (enabled == 0?false:true);	
	elements.info_label.text = (enabled == 0?'<b>Button disabled</b> <hr> ':'<b>Button enabled</b> <hr> ')
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 * @return {Boolean}
 * @properties={typeid:24,uuid:"A3BE784C-B02F-4C0E-93B5-1933FF7C2D2F"}
 */
function onDataChangeShowText(oldValue, newValue, event) {
	elements.info_label.text = '<b>TextBox text :</b> <br><br> %%theDate%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b> <br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
}
