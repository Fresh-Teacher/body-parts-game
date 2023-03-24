/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Forearm extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Forearm", "./Forearm/costumes/Forearm.png", { x: 74, y: 75 })
    ];

    this.sounds = [new Sound("forearm", "./Forearm/sounds/forearm.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("forearm");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("forearm", 2);
  }
}
