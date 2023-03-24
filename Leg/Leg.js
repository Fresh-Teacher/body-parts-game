/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Leg extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Leg", "./Leg/costumes/Leg.png", { x: 75, y: 75 })
    ];

    this.sounds = [new Sound("leg", "./Leg/sounds/leg.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("leg");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("leg", 2);
  }
}
