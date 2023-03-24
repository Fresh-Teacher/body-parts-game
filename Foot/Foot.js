/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Foot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Foot", "./Foot/costumes/Foot.png", { x: 75, y: 75 })
    ];

    this.sounds = [new Sound("foot", "./Foot/sounds/foot.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("foot");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("foot", 2);
  }
}
