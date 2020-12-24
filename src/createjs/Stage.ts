import { updateDisplayObjectChildren, ITickerData } from './core';

/**
 * @ognore
 */
declare const window: any;

/**
 * [[https://createjs.com/docs/easeljs/classes/Stage.html | createjs.Stage]]
 */
export class CreatejsStage extends window.createjs.Stage {
	updateForPixi(props: ITickerData) {
		if (this.tickOnUpdate) { this.tick(props); }
		this.dispatchEvent("drawstart");
		updateDisplayObjectChildren(this, props);
		this.dispatchEvent("drawend");
	}
}