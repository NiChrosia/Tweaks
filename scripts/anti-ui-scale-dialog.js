if (Core.settings.getBool("removeuiscalechangeddialog")) {
    Events.on(ContentInitEvent, () => {
        Core.settings.put("uiscalechanged", false);
    });
}