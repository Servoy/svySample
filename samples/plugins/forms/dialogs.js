/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"30D26743-56A2-40E8-975D-5D32A7F986B0"}
 */
function onAction$standard(event) {
	elements.info_label.text = 'Showing a dialog'
	plugins.dialogs.showInfoDialog('INFO', 'Hey there, this is a dialog!')
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0C935CCB-46FE-418F-A510-0910489EA63F"}
 */
function onAction$question(event) {
	elements.info_label.text = 'Showing a question dialog'
	var answer = plugins.dialogs.showQuestionDialog('Question', 'How are you?', 'Good', 'Very Good');
	if (answer) {
		elements.info_label.text += '<br><br>You answered : ' + answer
	} else {
		elements.info_label.text += "<br><br>You didn't pick an option."
	}
}
