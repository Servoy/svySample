/**
 * @type {Number}
 *
 * @properties={"typeid":35,"uuid":"88DFF7A2-B44A-4CD5-B219-2FD3879E5C78","variableType":4}
 */
var enabled = 1;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"9A0DFC57-B051-4B97-BD88-B158A54E1583"}
 */
var tooltip = "This is a tooltip";

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E962BEF3-46E0-41F1-A0C9-FB3F3C0DB070"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	if(elements.choicegroup_1.valuelist=="choicegroup"){
		
		elements.choicegroup_1.valuelist="choicegroup2"
	    elements.info_label.text="Valuelist has been changed!"
		}
		else{
			elements.choicegroup_1.valuelist="choicegroup"
			elements.info_label.text="Valuelist has been changed again!!"
		}
	

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B3A21406-45EB-4DB3-A63C-062083391256"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.choicegroup_1.addStyleClass('custom_calendar_style')

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D77BDB6F-7117-4A09-9BC1-CEBB6FB366DC"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.choicegroup_1.removeStyleClass('custom_calendar_style')
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
 * @properties={typeid:24,uuid:"7AFBF8A6-0850-4AB3-B8D4-39846559194E"}
 */
function onDataChangeEnabled(oldValue, newValue, event) {
	if(newValue){
		elements.choicegroup_1.enabled = true
		elements.info_label.text = '<b>Choice group is now enabled</b><hr>'		
	}
	else{
		elements.choicegroup_1.enabled = false
		elements.info_label.text = '<b>Choice group is now disabled</b><hr>'			
	}
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
 * @properties={typeid:24,uuid:"1D239EEB-1553-49D9-94E3-2ED7D5805B68"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.info_label.text = '<b>Selection has changed</b><hr>'
	return true
}
