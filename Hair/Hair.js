/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hair extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Hair", "./Hair/costumes/Hair.png", { x: 75, y: 75 })
    ];

    this.sounds = [new Sound("hair", "./Hair/sounds/hair.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("hair");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("hair", 2);
  }
}
