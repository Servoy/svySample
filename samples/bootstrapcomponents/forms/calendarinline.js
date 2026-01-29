/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"C90610C2-E8BF-4B45-882B-8EE12E6D8253","variableType":-4}
 */
var enabled = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"B2320F2D-4132-4E00-B378-1B2427526268"}
 */
var tooltip = 'The inline calendar';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"498675FF-B933-440B-B6D3-DB332650CFDC"}
 */
var format = 'MM/dd/yyyy';

/**
 * @type {Date}
 *
 * @properties={"typeid":35,"uuid":"D2A2F485-AE9E-446E-8907-A075E60D92B2","variableType":93}
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
 * @properties={typeid:24,uuid:"8F1496BC-B94D-4619-88C7-D686316A4CD0"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.info_label.text = '<b>Date Selected :</b> <br><br> %%theDate%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b><br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"01051653-57FA-46AD-BCC5-2C0F6C5CBAC4"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.calendar_inline.addStyleClass('custom_calendar_style')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"93A5D85A-0284-405A-BC3F-D2638C6F811E"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.calendar_inline.removeStyleClass('custom_calendar_style')
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
 * @properties={typeid:24,uuid:"54F0D49C-605E-4C3E-8E97-82EF6E463DEC"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.calendar_inline.enabled = (enabled == 0 ? false : true);
	elements.info_label.text = (enabled == 0 ? '<b>Disabled</b>' : '<b>Enabled</b>')
	return true
}

/**
 * @properties={typeid:24,uuid:"0697C8D4-A06B-42DE-A1A3-C78FFA33156E"}
 */
function disableDates() {

	var dates = [];
	for (var index = 0; index < 50; index++) {
		var d = new Date();
		d.setDate(d.getDate() + index)
		dates.push(d)
	}
	for (index = 0; index < 50; index++) {
		d = new Date();
		d.setDate(d.getDate() - index)
		dates.push(d)
	}
	elements.calendar_inline.disableDates(dates);
	elements.info_label.text = '<b>Disable 50 dates from past and 50 going forward </b>';
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
 * @properties={typeid:24,uuid:"C7FFB991-3486-406D-A97B-849D93BA3A0F"}
 */
function onDataChange$showCalendarWeeks(oldValue, newValue, event) {
	solutionModel.getForm(controller.getName()).getWebComponent('calendar_inline').setJSONProperty('calendarWeeks', newValue)
	controller.recreateUI();
	return true
}
