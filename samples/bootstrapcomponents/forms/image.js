/**
 * @properties={"typeid":35,"uuid":"5F1C7B3E-BEF7-469C-BF3E-0C520EFF7502","variableType":-4}
 */
var image = null;

/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"90887C31-8A83-493B-93AC-34B29FEB022B","variableType":-4}
 */
var enabled = true;

/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"FF5045F8-52B1-4C84-9BDD-FC05E8AFEEFF","variableType":-4}
 */
var visible = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"A77EC119-17ED-4A49-8636-443828499A9C"}
 */
var tooltip = "The image container";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"BDB1A636-4E7D-4603-80B9-9C4BDA82E0CE"}
 */
var format = 'MM/dd/yyyy';

/**
 * @type {Date}
 *
 * @properties={"typeid":35,"uuid":"8844865C-13DF-43AB-BBEE-9447E1810599","variableType":93}
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
 * @properties={typeid:24,uuid:"7AE66C92-2BDB-4D54-9A7F-A4B0DE288C1C"}
 */
function onDataChange(oldValue, newValue, event) {
	solutionModel.newMedia("xmedia",newValue)
	elements.image.media = "xmedia"
	elements.info_label.text = '<b>Upload or Download Images</b> <hr> '
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EBBEEE36-467E-45D1-B090-FF28E2973850"}
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
 * @properties={typeid:24,uuid:"0C8D4562-6117-49DA-A086-BA991AE74357"}
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
 * @properties={typeid:24,uuid:"5E8E086E-4D74-4765-82A2-4584E117C052"}
 */
function onDataChange$format(oldValue, newValue, event) {
	elements.image.toolTipText = newValue;
	elements.info_label.text = ("<b>elements.image.toolTipText = "+ newValue+"</b> <hr>")  	
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
 * @properties={typeid:24,uuid:"E41CF825-4B22-478C-BD1E-3745E955B896"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.image.enabled = (enabled == 0?false:true);	
	elements.info_label.text = (enabled == 0?'<b>Disabled</b> <hr> ':'<b>Enabled</b> <hr> ')  	
	return true
}

/**
 * @properties={typeid:24,uuid:"F4067848-A5CA-4467-9FEE-A20FB2B6EA8D"}
 */
function disabledates(){
	var d1 = new Date();
	d1.setDate(d1.getDate()+1)
	elements.calendar_inline.disableDates([d])
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
 * @properties={typeid:24,uuid:"5DC6D71D-D0F4-4F96-B9F5-5CEED9F3BB8C"}
 */
function onDataChange$showCalendarWeeks(oldValue, newValue, event) {
	solutionModel.getForm(controller.getName()).getWebComponent('calendar_inline').setJSONProperty('calendarWeeks',newValue)
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
 * @private
 *
 * @properties={typeid:24,uuid:"5CE1E083-10C8-49C7-8A19-7A20A87281ED"}
 */
function onDataChange$visible(oldValue, newValue, event) {
	/**
	 * @type {Boolean}
	 *
	 * @properties={typeid:35,uuid:"8A6FECA8-D7FE-45D5-807E-33410BBDEABD",variableType:-4}
	 */
		elements.image.visible = (visible == 0?false:true);
		elements.info_label.text = (visible == 0?'<b>image.visible = false</b> <hr> ':'<b>image.visible = true</b> <hr> ')  	
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6FF3F182-4FC7-4846-86BD-3515FDC4D97A"}
 */
function onRotateButton(event) {

	elements.info_label.text = ('image.rotate(90)')  	
		var ximage = plugins.images.getImage("media:///P1051981.jpg")
		ximage = ximage.rotate(90)
	elements.image.media = ximage
}
