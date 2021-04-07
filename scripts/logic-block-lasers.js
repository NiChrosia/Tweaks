// Color

const color = Color.valueOf("a794e3")

// Logic Block Laser effect

function logicLasers() {
	let width = Core.graphics.getWidth() / 7.5;
	let height = Core.graphics.getHeight() / 7.4;
	let screenSize = 1 / Vars.renderer.getDisplayScale();
	screenSize = screenSize > 20 ? 1 : screenSize;

	Vars.indexer.eachBlock(Vars.player.team(), Vars.player.x, Vars.player.y, ((screenSize * width + screenSize * height) / 2) * Vars.tilesize, b => b.block.class.getSuperclass() == LogicBlock, b => {
		if (b.block.class.getSuperclass() == LogicBlock) {
			b.links.each(l => {
				let linkBuild = Vars.world.build(l.x, l.y);

				if (linkBuild != null && (Core.settings.getBool("displayinactivelinks") ? true : l.active)) {
					let linkAngle = b.angleTo(linkBuild);
					let blockAngle = linkBuild.angleTo(b);

					let blockOffset = new Vec2;
					blockOffset.trns(linkAngle, 3 * b.block.size);
					let linkOffset = new Vec2;
					linkOffset.trns(blockAngle, 3 * linkBuild.block.size);

					Draw.z(Layer.power);
					Draw.color(color);
					Lines.stroke(1);
					Drawf.laser(b.team, Core.atlas.find("laser"), Core.atlas.find("laser-end"), b.x + blockOffset.x, b.y + blockOffset.y, linkBuild.x + linkOffset.x, linkBuild.y + linkOffset.y, linkAngle, 0.3);
				}
			});
		}
	});
};

let logicLaserEffect = new Effect(10, e => {
	if (Core.settings.getBool("logicblocklasers") && !Vars.state.paused) {
		logicLasers();
	}
});

Events.run(Trigger.update, () => {logicLaserEffect.at(Vars.player.x, Vars.player.y)});