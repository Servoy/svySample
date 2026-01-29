/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"0B83BAD5-7FE6-43FD-A82D-CBD6408DC56C","variableType":-4}
 */
var visible = true;

/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"BC6E4661-4707-4A8A-B699-F9EF46115BF2","variableType":-4}
 */
var enabled = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"33549CE0-4625-4983-8AA0-B21E392F86CE"}
 */
var tooltip = 'Spinner component';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"F8E95BE4-C92E-446C-B7E1-ED84479EFFEA"}
 */
var text = 'S - Servoy';

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
 * @properties={typeid:24,uuid:"C2C52787-63E4-41D5-952C-7361C11CF096"}
 */
function onDataChange(oldValue, newValue, event) {
	text = newValue
	elements.info_label.text = '<b>onDataChange</b><br> from: ' + oldValue + '<br>to: ' + newValue;
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"93B67960-ADDD-47CB-A3E3-7C95C261AEFD"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b><hr>'
	elements.spinnertext.addStyleClass('custom_spinner_style')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5431F5F7-A16F-4F40-9778-2EE9520B6C3F"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b><hr>'
	elements.spinnertext.removeStyleClass('custom_calendar_style')
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
 * @properties={typeid:24,uuid:"9D547F1C-2F85-4BDB-95C4-1427B4CE3EAF"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
		elements.spinnertext.enabled = (enabled == 0?false:true);	
		elements.info_label.text = (enabled == 0?'<b>Disabled</b> <hr> ':'<b>Enabled</b> <hr> ')  	
		return true
	}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"11C68C4A-E79E-437A-BDB5-8C32CF2EA4EC"}
 */
function onAction(event) {
	elements.info_label.text = '<b>onAction event fired+' + text + '</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FA1D4F94-4822-4C0A-9DC7-3992CEE31E47"}
 */
function onDoubleClick(event) {
	elements.info_label.text = '<b>onDoubleClick event fired</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"663337D3-D620-4B49-9347-8A00DD5C303E"}
 */
function onRightClick(event) {
	elements.info_label.text = '<b>onRightClick event fired</b>'

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
 * @properties={typeid:24,uuid:"86C1C505-E7FF-4DB2-A3CF-16C990E9D14D"}
 */
function onDataChange$toolTip(oldValue, newValue, event) {
		elements.spinnertext.toolTipText = newValue;
		elements.info_label.text = ("<b>New tooltip = "+ newValue+"</b> <hr>")  	
		return true
	}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"E75CB2F9-CA7F-43B8-AC8F-787ACD00E25C"}
 */
function onDataChange$visible(oldValue, newValue, event) {
		/**
		 * @type {Boolean}
		 *
		 * @properties={typeid:35,uuid:"8A6FECA8-D7FE-45D5-807E-33410BBDEABD",variableType:-4}
		 */
			elements.spinnertext.visible = (visible == 0?false:true);
			elements.info_label.text = (visible == 0?'<b>visible = false</b> <hr> ':'<b>visible = true</b> <hr> ')  	
		return true
	}
