/**
 * @type {Number}
 *
 * @properties={"typeid":35,"uuid":"EF4E8A30-9CDF-4AF5-A7E8-10AB7385CE02","variableType":4}
 */
var editable = 1;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"9040E520-DC43-49C7-BF6F-CFE3F150144A"}
 */
var placeholderText = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"1B0DAC3B-29CA-481F-827F-CC6ABE1032AC"}
 */
var tooltiptext = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D773B61C-5EAC-430C-8309-1ABD73D0DF31"}
 */
var TextAreaValue = "Your content goes here";

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
 * @properties={typeid:24,uuid:"387FA2BD-2708-429D-B148-69E4CD9FAEEC"}
 */
function onDataChange(oldValue, newValue, event) {

	elements.info_label.text= "<b>onDataChange</b><br>Text was added to the TextArea</br>"
	
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
 * @properties={typeid:24,uuid:"A4D289ED-636E-48D1-B162-A7E131E509D7"}
 */
function onDataChangeEditable(oldValue, newValue, event) {
	if(newValue){
		elements.info_label.text= "<b>The textarea is now editable</b>"			
	}
	else{
		
		elements.info_label.text= "<b>The textarea is no longer editable</b>"				
	}
	elements.textarea_5.editable = newValue
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"55336E6F-7685-4D26-A567-DE10B19FD454"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b><hr>'
	elements.textarea_5.addStyleClass('custom_calendar_style')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D4710134-63ED-4848-BA24-ED4E8F5F267F"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b><hr>'
	elements.textarea_5.removeStyleClass('custom_calendar_style')
}
