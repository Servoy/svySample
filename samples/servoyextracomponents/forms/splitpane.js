/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"A60F0B10-0BB4-4888-98B2-8F60C9124A89","variableType":-4}
 */
var enabled = true;

/**
 * @type {Boolean}
 * @properties={"typeid":35,"uuid":"5925C669-3330-444C-9E5E-AC734DC7AC27","variableType":-4}
 */
var visible = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"CE7C1F58-3789-4CEE-AE3A-697B4E799F8A"}
 */
var tooltip = 'The inline calendar';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"6A467C71-A74E-4946-BD63-4F3D2969C81F"}
 */
var format = 'MM/dd/yyyy';

/**
 * @type {Date}
 *
 * @properties={"typeid":35,"uuid":"8ED691E5-8C92-42EE-922A-586266E22A49","variableType":93}
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
 * @properties={typeid:24,uuid:"ADB005F7-89F5-4F9B-ACC9-F51D7D37DF52"}
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
 * @properties={typeid:24,uuid:"A31EDE07-C8AF-4304-B720-B1EB5623D42B"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.splitpane_1.addStyleClass('border border-success')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E6015B5A-E919-41AC-A1F7-706AC1A733E6"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.splitpane_1.removeStyleClass('border border-success')
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
 * @properties={typeid:24,uuid:"FFA2AD58-607D-4E50-BBC3-E8A7D97657E1"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.splitpane_1.enabled = (enabled == 0 ? false : true);
	elements.info_label.text = (enabled == 0 ? '<b>Disabled</b>' : '<b>Enabled</b>')
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 * @return {Boolean}
 * @properties={typeid:24,uuid:"3042042D-4AC0-4EA1-857A-8D4E07137999"}
 */
function onDataChange$visible(oldValue, newValue, event) {
	elements.splitpane_1.visible = (visible == 0 ? false : true);
	elements.info_label.text = (visible == 0 ? '<b>Disabled</b>' : '<b>Enabled</b>')
	return true
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"602ED7C7-D8F0-4239-8AEB-719B999553F0"}
 */
function onAction_changesplitpane1(event) {
	elements.splitpane_1.pane1.containsFormId = forms.textBoxGroup;
	elements.info_label.text = '<b>Changed top split pane</b><hr>'	

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2C02CD2D-48AD-47D2-BAAF-ABF5AB6DBB54"}
 */
function onAction_changesplitpane2(event) {
	elements.splitpane_1.pane2.containsFormId = forms.spinner;
	elements.info_label.text = '<b>Changed bottom split pane</b><hr>'		

}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5E431C93-4382-474A-8E7D-65309655DDB3"}
 */
function onAction_showInitialContainedForms(event) {
	elements.splitpane_1.pane1.containsFormId = forms.splitpane1;
	elements.splitpane_1.pane2.containsFormId = forms.splitpane2;
	elements.info_label.text = '<b>Split pane content reset</b><hr>'		

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param dataTarget
 *
 * @properties={typeid:24,uuid:"AB2FDDBD-18AC-489D-BC8E-BEB9385521F4"}
 */
function onAction_position(event, dataTarget) {
	forms.splitpane2.elements.label_3.visible = false;
	forms.splitpane2.elements.label_4.visible = false;
	forms.splitpane2.elements.label_5.visible = false;
	forms.splitpane2.elements.label_6.visible = false;
	forms.splitpane2.elements.label_7.visible = true;
	forms.splitpane2.elements.label_8.visible = true;
	forms.splitpane2.elements.label_9.visible = true;
	forms.splitpane2.elements.label_10.visible = true;
	forms.splitpane1.elements.label_1.addStyleClass('btn-primary')
	forms.splitpane1.elements.label_2.removeStyleClass('btn-primary')
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param dataTarget
 *
 * @properties={typeid:24,uuid:"D0FBD7F7-71A6-404E-9674-7AF461B7A202"}
 */
function onAction_direction(event, dataTarget) {
	forms.splitpane2.elements.label_3.visible = true;
	forms.splitpane2.elements.label_4.visible = true;
	forms.splitpane2.elements.label_5.visible = true;
	forms.splitpane2.elements.label_6.visible = true;
	forms.splitpane2.elements.label_7.visible = false;
	forms.splitpane2.elements.label_8.visible = false;
	forms.splitpane2.elements.label_9.visible = false;
	forms.splitpane2.elements.label_10.visible = false;
	forms.splitpane1.elements.label_1.removeStyleClass('btn-primary')
	forms.splitpane1.elements.label_2.addStyleClass('btn-primary')

}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"21279E89-665C-4A4A-8A4F-097970D5D34A"}
 */
function onAction_revertinteraction(event) {
	forms.splitpane2.elements.label_3.visible = true;
	forms.splitpane2.elements.label_4.visible = true;
	forms.splitpane2.elements.label_5.visible = true;
	forms.splitpane2.elements.label_6.visible = true;
	forms.splitpane2.elements.label_7.visible = true;
	forms.splitpane2.elements.label_8.visible = true;
	forms.splitpane2.elements.label_9.visible = true;
	forms.splitpane2.elements.label_10.visible = true;
	forms.splitpane1.elements.label_1.removeStyleClass('btn-primary')
	forms.splitpane1.elements.label_2.removeStyleClass('btn-primary')


}
