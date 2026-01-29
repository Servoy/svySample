/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"A455E534-E55A-46C7-8A9E-D089C5444AE7","variableType":-4}
 */
var enabled = true;

/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"4D17B121-D068-4A77-93D9-E7C9D4A7D999","variableType":-4}
 */
var visible = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"998D4E59-1ADD-4232-9824-F245E6537EF3"}
 */
var tooltip = 'Unread Notifications';

/**
 * @type {Number}
 *
 * @properties={"typeid":35,"uuid":"916E632F-0F96-42AC-A5BB-84FDCDCC4116","variableType":4}
 */
var content = 10;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"000A73D8-3B3C-4A5B-9F6A-30CEB8045780"}
 */
var text = 'Unread Notifications';

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"75557559-C1C2-414E-8D91-5D124CEF0BAC"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b><hr>'
	if (content > 0) {
		elements.badge_1.addStyleClass('btn-danger')
	} else {
		elements.badge_1.addStyleClass('btn-success')

	}

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5D1126CD-C9BF-4E83-A93A-1C27A267E7DB"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b><hr>'
	elements.badge_1.removeStyleClass('btn-danger')
	elements.badge_1.removeStyleClass('btn-success')
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
 * @properties={typeid:24,uuid:"AF28C396-2F45-490B-998E-5489D22E9211"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.badge_1.enabled = (enabled == 0 ? false : true);
	elements.info_label.text = (enabled == 0 ? '<b>Disabled</b><hr>' : '<b>Enabled</b><hr>')
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *@return {Boolean}
 * @properties={typeid:24,uuid:"CB73411C-9B48-427E-8FF0-FED3A645C2FD"}
 */
function onDataChange$visible(oldValue, newValue, event) {
	elements.badge_1.visible = (visible == 0 ? false : true);
	elements.info_label.text = (visible == 0 ? '<b>Disabled</b><hr>' : '<b>Enabled</b><hr>')
	return true
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C0C610DA-6A5A-4BB2-98B9-6999BB6C50F9"}
 */
function onAction_inncreaseNotification(event) {
	content += 1;
}

/**

 * @protected
 *
 * @properties={typeid:24,uuid:"64E8EDA3-A067-4C22-A289-AC80BD9147B4"}
 */
function onAction_badgebutton() {
	elements.badge_1.displayType = 'BUTTON';
}

/**

 * @protected
 *
 * @properties={typeid:24,uuid:"BD5A0416-F925-4AB8-B069-80B2D6003552"}
 */
function onAction_badgeLabel() {
	elements.badge_1.displayType = 'LABEL';

}
