Events.run(Trigger.update, () => {
    Vars.experimental = Core.settings.getBool("enablecliff")
});