/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"15A4AF8B-6323-4C19-B014-BE99A01427D5","variableType":-4}
 */
var enabled = true;

/**
 * @properties={"typeid":35,"uuid":"263894B7-CF60-4B3E-A89C-0BC1C7BBD9DC","variableType":-4}
 */
var calendarEnabled = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"6BEF8B6F-23CB-4D68-8110-DDE4DB1D9C5E"}
 */
var tooltip = 'The calendar';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"50F1DDB0-AAE4-4EB7-8083-3F6E0EA11AF9"}
 */
var format = 'MM/dd/yyyy';

/**
 * @type {Date}
 *
 * @properties={"typeid":35,"uuid":"D7B4B531-E5E4-4ACB-B2E5-D6EE0BD25E0C","variableType":93}
 */
var theDate = new Date();

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
 * @properties={typeid:24,uuid:"F4F50BDC-DA44-48FE-886F-B93C3457CB52"}
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
 * @properties={typeid:24,uuid:"3EAFECFC-7A26-46F3-98EF-B61458DB1572"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.calendar.addStyleClass('custom_calendar_style')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"85A5A96D-A25F-4513-8747-C37ABAA0E20C"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.calendar.removeStyleClass('custom_calendar_style')
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
 * @properties={typeid:24,uuid:"409AF75A-4CAC-4341-A330-DAA9188B9557"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.calendar.enabled = (enabled == 0 ? false : true);
	elements.info_label.text = (enabled == 0 ? '<b>Disabled</b>' : '<b>Enabled</b>')
	return true
}

/**
 * @properties={typeid:24,uuid:"551715C3-DD44-4BE9-B2E7-CC679145916A"}
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
	elements.calendar.disableDates(dates);
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
 * @properties={typeid:24,uuid:"42E3EAE4-4195-4AD0-A01E-34B6094EA52D"}
 */
function onDataChange$showCalendarWeeks(oldValue, newValue, event) {
	solutionModel.getForm(controller.getName()).getWebComponent('calendar').setJSONProperty('calendarWeeks', newValue)
	controller.recreateUI();
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
 * @properties={typeid:24,uuid:"936C8151-20D5-420C-82C4-43F1A45F31A8"}
 */
function onDataChangeVisible(oldValue, newValue, event) {
	elements.calendar.visible = (calendarEnabled == 0 ? false : true);
	elements.info_label.text = (calendarEnabled == 0 ? '<b>Not Visible</b>' : '<b>Visible</b>')
	return true
}
