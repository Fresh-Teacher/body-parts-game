import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Eyebrow from "./Eyebrow/Eyebrow.js";
import Eye from "./Eye/Eye.js";
import Back from "./Back/Back.js";
import Arm from "./Arm/Arm.js";
import Ear from "./Ear/Ear.js";
import Face from "./Face/Face.js";
import Foot from "./Foot/Foot.js";
import Forearm from "./Forearm/Forearm.js";
import Hair from "./Hair/Hair.js";
import Hand from "./Hand/Hand.js";
import Leg from "./Leg/Leg.js";
import Lips from "./Lips/Lips.js";
import Mouth from "./Mouth/Mouth.js";
import Neck from "./Neck/Neck.js";
import Nose from "./Nose/Nose.js";
import Shoulder from "./Shoulder/Shoulder.js";
import Teeth from "./Teeth/Teeth.js";
import Tongue from "./Tongue/Tongue.js";
import Torso from "./Torso/Torso.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Eyebrow: new Eyebrow({
    x: -164,
    y: 127,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 1
  }),
  Eye: new Eye({
    x: -191,
    y: 101.99999999999999,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: true,
    layerOrder: 2
  }),
  Back: new Back({
    x: 60,
    y: 41,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 15
  }),
  Arm: new Arm({
    x: -53.999999999999986,
    y: -41,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 13
  }),
  Ear: new Ear({
    x: -60,
    y: 110,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 3
  }),
  Face: new Face({
    x: -17.000000000000004,
    y: 116,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 4
  }),
  Foot: new Foot({
    x: 52.00000000000001,
    y: -112,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 5
  }),
  Forearm: new Forearm({
    x: -182,
    y: -64.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 18
  }),
  Hair: new Hair({
    x: 192,
    y: 94,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 6
  }),
  Hand: new Hand({
    x: 55,
    y: -36,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 7
  }),
  Leg: new Leg({
    x: 186.00000000000003,
    y: -37.000000000000014,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 8
  }),
  Lips: new Lips({
    x: -70.99999999999999,
    y: 49.999999999999986,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 9
  }),
  Mouth: new Mouth({
    x: -156,
    y: 31,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 10
  }),
  Neck: new Neck({
    x: -28.00000000000001,
    y: 40.99999999999998,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 11
  }),
  Nose: new Nose({
    x: -48.000000000000014,
    y: 79.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 12
  }),
  Shoulder: new Shoulder({
    x: -8.000000000000005,
    y: -15.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 14
  }),
  Teeth: new Teeth({
    x: -173,
    y: 66,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 16
  }),
  Tongue: new Tongue({
    x: -190,
    y: 27,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 17
  }),
  Torso: new Torso({
    x: -184,
    y: -15.000000000000028,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 19
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
