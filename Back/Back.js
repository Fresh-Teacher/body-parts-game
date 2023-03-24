/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Back", "./Back/costumes/Back.png", { x: 75, y: 75 })
    ];

    this.sounds = [new Sound("back", "./Back/sounds/back.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("back", 2);
  }

  *whenthisspriteclicked2() {
    yield* this.playSoundUntilDone("back");
  }
}
