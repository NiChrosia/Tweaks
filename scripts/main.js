require("logic-block-lasers")
require("anti-ui-scale-dialog")

Events.on(ClientLoadEvent, () => {
    const addCheck = (key, default_value) => {
		Vars.ui.settings.graphics.checkPref(key, Core.settings.getBool(key));
		Core.settings.defaults(key, default_value);
	}
	addCheck("removeuiscalechangeddialog", false)
    addCheck("logicblocklasers", false);
	addCheck("displayinactivelinks", false);

    Log.info("Mod [accent]Tweaks[] loaded successfully.");
});