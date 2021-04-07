Events.run(Trigger.update, () => {
    Vars.enableConsole = Core.settings.getBool("enableconsole")
});