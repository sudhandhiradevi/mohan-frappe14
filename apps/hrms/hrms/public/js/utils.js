frappe.provide("hrms");
frappe.provide("hrms.utils");

$.extend(hrms, {
    proceed_save_with_reminders_frequency_change: () => {
		frappe.ui.hide_open_dialog();
		frappe.call({
			method: 'hrms.hr.doctype.hr_settings.hr_settings.set_proceed_with_frequency_change',
			callback: () => {
				cur_frm.save();
			}
		});
	}
})