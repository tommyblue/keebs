const options: Options = {
  wallThickness: 4,
  wallShrouding: 0,
  webThickness: 0,
  screwIndices: [-1, -1, -1, -1, -1, -1, -1],
  screwType: "screw insert",
  screwSize: "M3",
  screwCountersink: true,
  rounded: {
    top: { horizontal: 1 / 4, vertical: 1 / 1.5 },
    side: { divisor: 3 },
  },
  connector: "trrs",
  connectorSizeUSB: "average",
  connectorIndex: -1,
  microcontroller: "promicro-usb-c",
  fastenMicrocontroller: true,
  verticalClearance: 0.1,
  clearScrews: true,
  shell: { type: "basic", lip: false },
};
// NOTE: Screws / the connector with
// negative indices are placed automatically.
// In the basic/advanced tab, these values were:
// screwIndices: [17.5, 29.5, 5.5, 23.5, 35.5, 46.5, 11.5]
// connectorIndex: 43.3

const curvature = {
  curvatureOfColumn: 15,
  curvatureOfRow: 5,
  spacingOfRows: 20,
  spacingOfColumns: 20.8,
};

/**
 * Useful for setting a different curvature
 * for the pinky keys.
 */
const pinkyCurvature = {
  ...curvature,
  curvatureOfColumn: 12,
};

/**
 * The plane used to position the upper keys.
 * It's rotated by the tenting and x rotation
 * then translated by the z offset.
 */
const upperKeysPlane = new Trsf()
  .rotate(12, [0, 0, 0], [0, 1, 0], false)
  .rotate(1, [0, 0, 0], [1, 0, 0], false)
  .translate(0, 0, 0, false);

/** Definitions for the upper keys. */
const fingers: Key[] = [
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 2,
      letter: "y",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: -1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 3,
      letter: "h",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: 0,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 4,
      letter: "n",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: 1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 2,
      letter: "u",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: -1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 3,
      home: "index",
      letter: "j",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: 0,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 4,
      letter: "m",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: 1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 2,
      letter: "i",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: -1,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 3,
      home: "middle",
      letter: "k",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 0,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 4,
      letter: ",",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 1,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 2,
      letter: "o",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: -1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 3,
      home: "ring",
      letter: "l",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 0,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 4,
      letter: ".",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 2,
      letter: "p",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 1,
        row: -1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 3,
      home: "pinky",
      letter: ";",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 1,
        row: 0,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 4,
      letter: "/",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 1,
        row: 1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: { profile: "xda", row: 2 },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 2,
        row: -1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: {
      profile: "xda",
      row: 3,
      letter: "'",
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 2,
        row: 0,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: "mx-better",
    keycap: { profile: "xda", row: 4 },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 2,
        row: 1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
];

/**
 * The plane used to position the thumbs.
 * It's defined using a nearby key position,
 * then offset by some amount.
 */
const thumbOrigin = new Trsf()
  .rotate(0, [0, 0, 0], [0, 0, 1])
  .rotate(-9, [0, 0, 0], [1, 0, 0])
  .rotate(32, [0, 0, 0], [0, 1, 0])
  .rotate(-160, [0, 0, 0], [0, 0, 1])
  .translate(-26.2, -27.8, -7.9)
  .translateBy(
    new Trsf()
      .placeOnMatrix({
        ...curvature,
        row: 1,
        column: -2,
      })
      .transformBy(upperKeysPlane)
      .translate(8.75, -8.75, 0)
  )
  .translate(10, -4, 10);

/** The curvature of the thumb cluster. */
const thumbCurvature = {
  curvatureOfRow: 0,
  curvatureOfColumn: 0,
  spacingOfColumns: 20,
  spacingOfRows: 20,
};

const thumbs: Key[] = [
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(28.622222222222224, [0, 0, 0], [1, 0, 0])
      .rotate(-47.977777777777774, [0, 0, 0], [0, 1, 0])
      .rotate(-33.51111111111111, [0, 0, 0], [0, 0, 1])
      .translate(-8, -8.5, -19.9)
      .transformBy(thumbOrigin),
    keycap: { profile: "xda", row: 5 },
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(50.955555555555556, [0, 0, 0], [1, 0, 0])
      .rotate(16.066666666666666, [0, 0, 0], [0, 1, 0])
      .rotate(-98.26666666666667, [0, 0, 0], [0, 0, 1])
      .translate(1.7, -18.9, -3.1)
      .transformBy(thumbOrigin),
    keycap: { profile: "xda", row: 5 },
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(27.333333333333332, [0, 0, 0], [1, 0, 0])
      .rotate(2.3555555555555556, [0, 0, 0], [0, 1, 0])
      .rotate(-87.93333333333334, [0, 0, 0], [0, 0, 1])
      .translate(21.2, -11.6, 6.7)
      .transformBy(thumbOrigin),
    keycap: { profile: "xda", row: 5 },
  },
  {
    type: "trackball",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(-22.355555555555554, [0, 0, 0], [0, 1, 0])
      .rotate(0, [0, 0, 0], [0, 0, 1])
      .translate(23.3, -42, 11.5)
      .transformBy(thumbOrigin),
    size: { radius: 20.9, sides: 20 },
  },
];

const wristRestOrigin = new Trsf()
  .rotate(0, [0, 0, 0], [0, 0, 1])
  .translateBy(
    new Trsf()
      .placeOnMatrix({
        ...curvature,
        row: 1,
        column: -2,
      })
      .transformBy(upperKeysPlane)
      .translate(8.75, -8.75, 0)
  )
  .translate(10, -4, 10);

export default {
  ...options,
  wristRestOrigin,
  keys: [...fingers, ...thumbs],
};
