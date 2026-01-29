/**
 * @param menuItemId
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A696586D-9252-43C9-B42D-90FD9E029CCA"}
 */
function onMenuItemSelected(menuItemId, event) {
	if (!forms[menuItemId]) return false;
	elements.navbar.containedForm = menuItemId;
	return true;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0C0410C1-9FE7-4CF4-A810-6F5210C24FD9"}
 */
function onLoad(event) {
	var components_menu = [{
			id: 'badge',
			text: "Badge",
			styleClass: "sn-large",
			iconStyleClass: ""
		}, {
			id: 'button',
			text: "Button",
			styleClass: "sn-large",
			iconStyleClass: ""
		}, {
			id: 'calendar',
			text: "Calendar",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'calendarinline',
			text: "Calendar Inline",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'checkbox',
			text: "Checkbox",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'choicegroup',
			text: "Choice group",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'combobox',
			text: "Combobox",
			styleClass: "sn-large",
			iconStyleClass: ""
		}, {
			id: 'dataLabel',
			text: "Datalabel",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'dropdown',
			text: "Dropdown",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'groupbuttons',
			text: "Group Buttons",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'image',
			text: "Image",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'label',
			text: "Label",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'switchButton',
			text: "Switch",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'spinner',
			text: "Spinner",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'splitpane',
			text: "Split pane",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'textarea',
			text: "Text Area",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'textbox',
			text: "Textbox",
			styleClass: "sn-large",
			iconStyleClass: ""
		},{
			id: 'textBoxGroup',
			text: "Textbox Group",
			styleClass: "sn-large",
			iconStyleClass: ""
		} ];
	
	var advanced_menu = [{
		id: 'chart',
		text: "ChartJS",
		styleClass: "sn-large",
		iconStyleClass: ""
	},{
		id: 'datagrid',
		text: "Data Grid",
		styleClass: "sn-large",
		iconStyleClass: ""
	},{
		id: 'powergrid',
		text: "Power Grid",
		styleClass: "sn-large",
		iconStyleClass: ""
	},{
		id: 'googleMaps',
		text: "Google Maps",
		styleClass: "sn-large",
		iconStyleClass: ""
	} ,{
		id: 'navbar',
		text: "Navbar",
		styleClass: "sn-large",
		iconStyleClass: ""
	} ];
	
	var services_menu = [{
		id: 'keylistener',
		text: "KeyListener",
		styleClass: "sn-large",
		iconStyleClass: ""
	} ];
	
	var api_menu = [{
		id: 'dialogs',
		text: "Dialogs",
		styleClass: "sn-large",
		iconStyleClass: ""
	} ];
	
	var menu = [{
		id: 'components',
		text: "Components",
		styleClass: "sn-large",
		iconStyleClass: "",
		menuItems : components_menu
	},
	{
		id: 'advanced',
		text: "Advanced Components",
		styleClass: "sn-large",
		iconStyleClass: "",
		menuItems : advanced_menu
	},
	{
		id: 'services',
		text: "Services",
		styleClass: "sn-large",
		iconStyleClass: "",
		menuItems : services_menu
	},
	{
		id: 'apis',
		text: "API's",
		styleClass: "sn-large",
		iconStyleClass: "",
		menuItems : api_menu
	}]

	elements.navbar.setRootMenuItems(menu);
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E21D9822-3AD0-4CAC-BF83-A03F73CDB34A"}
 */
function onActionHelp(event) {
	toggleHelp()
}

/**
 * @properties={typeid:24,uuid:"865805EA-3F09-4212-9015-F4AB366B50C8"}
 */
function toggleHelp(){
	elements.formcontainer_2.visible = !elements.formcontainer_2.visible
	elements.button_help.visible = !elements.button_help.visible		
}
