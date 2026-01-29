/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"3DE38A29-ADCD-491F-849F-6E2DD753AEAB","variableType":-4}
 */
var enabled = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"2A1ACB92-24FB-4B53-86A4-E1A7356FDA05"}
 */
var tooltip = 'The button';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"E9B3EC7F-7836-4AB5-AE19-F0773F6E9956"}
 */
var text = 'The button';

/**
 * @type {Date}
 *
 * @properties={"typeid":35,"uuid":"723F87A3-18A4-4955-813C-085C697F3776","variableType":93}
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
 * @properties={typeid:24,uuid:"A1065DC6-16C0-45AB-AC13-486ADFA4106C"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.info_label.text = '<b>Date Selected :</b><br><br> %%theDate%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b><br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CF951E48-292E-4EE0-A5B6-FCF4B1278490"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b><hr>'
	elements.button.addStyleClass('custom_calendar_style')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"60C306C8-B27A-4558-8AF0-1E741E6AA66F"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b><hr>'
	elements.button.removeStyleClass('custom_calendar_style')
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
 * @properties={typeid:24,uuid:"0EB112D1-A460-43DA-82D1-E15F892BAB7D"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.button.enabled = (enabled == 0?false:true);	
	elements.info_label.text = (enabled == 0?'<b>Disabled</b><hr> ':'<b>Enabled</b><hr>')  	
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"549DA24F-8427-4B57-A581-CD3640B60BBA"}
 */
function onAction(event) {
	elements.info_label.text = '<b>onAction event fired</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DB356240-E9E4-4AB9-A5F4-19FC1D8CFE9A"}
 */
function onDoubleClick(event) {
	elements.info_label.text = '<b>onDoubleClick event fired</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E7757FF6-4FFB-4552-BA90-17CAAE4EB025"}
 */
function onRightClick(event) {
	elements.info_label.text = '<b>onRightClick event fired</b>'

}
