require("logic-block-lasers");
require("anti-ui-scale-dialog");
require("enable-console");
require("enable-cliff")

Events.on(ClientLoadEvent, () => {
    const addGraphicsCheck = (key, defaultValue) => {
		Vars.ui.settings.graphics.checkPref(key, Core.settings.getBool(key));
	};

	const addGameCheck = (key, defaultValue) => {
    		Vars.ui.settings.game.checkPref(key, Core.settings.getBool(key));
    	};

	const addGameSlider = (name, defaultValue, min, max, step, processor) => {
        Vars.ui.settings.game.sliderPref(name, defaultValue, min, max, step, processor);
    };

	addGameCheck("removeuiscalechangeddialog", false)
    addGraphicsCheck("logicblocklasers", false);
	addGraphicsCheck("displayinactivelinks", false);
	addGameCheck("enableconsole", true);
	addGameCheck("enablecliff", true);
	addGameSlider("maxmapsize", 500, 100, 100000, 100, s => s)

    Log.info("Mod [accent]Tweaks[] loaded successfully.");
});