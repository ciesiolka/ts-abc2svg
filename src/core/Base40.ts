/**
 * Base-40 representation of musical pitch
 * @see http://www.ccarh.org/publications/reprints/base40/
 */

const PitchToBase40 = new Int8Array([
  2,   // C
  8,   // D
  14,  // E
  19,  // F
  25,  // G
  31,  // A
  71,  // B
]);

const Base40ToPitch = new Int8Array([
  //    C  
  0, 0, 0, 0, 0, 0,
  //    D
  1, 1, 1, 1, 1, 1,
  //    E
  2, 2, 2, 2, 2,
  //    F
  3, 3, 3, 3, 3, 3,
  //    G
  4, 4, 4, 4, 4, 4,
  //    A
  5, 5, 5, 5, 5, 5,
  //    B
  6, 6, 6, 6, 6,
]);

const Base40ToAccidental = new Int8Array([
  //      C
  -2, -1, 0, 1, 2,
  //          D
  -3, -2, -1, 0, 1, 2,
  //          E
  -3, -2, -1, 0, 1, 2,
  //      F
  -2, -1, 0, 1, 2,
  //          G
  -3, -2, -1, 0, 1, 2,
  //          A
  -3, -2, -1, 0, 1, 2,
  //          B
  -3, -2, -1, 0, 1, 2
]);

const Base40ToMidi = new Int8Array([
  //      C
  -2, -1, 0, 1, 2, 0,
  //    D
  0, 1, 2, 3, 4, 0,
  //    E
  2, 3, 4, 5, 6,
  //    F
  3, 4, 5, 6, 7, 0,
  //    G
  5, 6, 7, 8, 9, 0,
  //    A
  7, 8, 9, 10, 11, 0,
  //      B
  9, 10, 11, 12, 13
]);

/** I don't understand how this was computed. To be described later */
const Base40ToTransposition = new Int8Array([
  36, 1, 2, 3, 8, 2,
  2, 7, 8, 13, 14, 2,
  8, 13, 14, 19, 20, 13, 14, 19, 20, 25,
  2, 19, 24, 25, 30, 31, 2,
  25, 30, 31, 36, 37,
  2, 31, 36, 37, 42, 43
]);

/** I don't understand how this was computed. To be described later */
const Base40ToKeySignature = new Int8Array([
  -2,-7, 0, 7, 2, 88, 0,-5, 2,-3, 4, 88,
	 2,-3, 4,-1, 6,-3, 4,-1, 6, 1,88,-1,-6, 1,-4, 3,88,
	 1,-4, 3,-2, 5,88, 3,-2, 5, 0, 7 
]);

/**
 * In the original code described as
 * interval with sharp to base-40 interval
 * @todo Understand what is that...
 */
const SharpIntervalToBase40 = new Int8Array([
  0, 1, 6, 11, 12, 17, 18, 23, 28, 29, 34, 35
]);

const ConvertPitchToBase40 = (pitch: number, accidental: -2 | -1 | 0 | 1 | 2): number => {
  const basePitch = pitch + 19;  // staff pitch from C-1
  const octave = Math.floor(basePitch / 7);
  const base40 = octave * 40 + PitchToBase40[pitch % 7];
  return base40 + accidental;
}

const ConvertBase40ToPitch = (base40: number): number => {
  const basePitch = Math.floor(base40 / 40);
  return basePitch * 7 + Base40ToPitch[base40 % 40] - 19;
}

const ConvertBase40ToAccidental = (base40: number): number => {
  return Base40ToAccidental[base40 % 40];
}

const ConvertBase40ToMidi = (base40: number): number => {
  const pitch = Math.floor(base40 / 40) * 12;
  return pitch + Base40ToMidi[base40 % 40];
}

export {
  PitchToBase40,
  Base40ToPitch,
  Base40ToAccidental,
  Base40ToMidi,
  Base40ToTransposition,
  Base40ToKeySignature,
  SharpIntervalToBase40,
  ConvertPitchToBase40,
  ConvertBase40ToPitch,
  ConvertBase40ToAccidental,
  ConvertBase40ToMidi
}