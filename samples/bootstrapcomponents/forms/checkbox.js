/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"169082AC-F8D9-4AC5-9DEB-679D3A88A615","variableType":-4}
 */
var enabled = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"CE6ACA0D-43C7-4F11-A9EB-D92261792E12"}
 */
var tooltip = 'The checkbox tooltip';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"125B6A82-DF8A-42CC-B318-18944145C8EC"}
 */
var text = 'The checkbox';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D3B9F635-74AD-4349-B414-10B9A563EE89"}
 */
var selectedValue = "1";

/**
 * @type {Number}
 *
 * @properties={"typeid":35,"uuid":"4BEB0093-32E4-4503-A0D0-CF7D893A88D7","variableType":4}
 */
var value = 0;

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
 * @properties={typeid:24,uuid:"712B0942-C691-4978-9287-194A9CFF637F"}
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
 * @properties={typeid:24,uuid:"930C65E7-94E6-4977-81DD-A5665160A50A"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b><hr>'
	elements.checkbox.addStyleClass('custom_calendar_style')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6D6AFABC-71C7-44DF-BC45-7B84C8D476AB"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b><hr>'
	elements.checkbox.removeStyleClass('custom_calendar_style')
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
 * @properties={typeid:24,uuid:"D60848B1-36FE-4D38-BFFF-7D4AE9AD8983"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.checkbox.enabled = (enabled == 0?false:true);	
	elements.info_label.text = (enabled == 0?'<b>Disabled</b><hr>':'<b>Enabled</b><hr>')  	
	return true
}
