enum Constants {
  /**
   * Basic note lenght (semibreve or whole note)
   * in clock ticks with 384 PPQN resolution
   * (as defined by MIDI)
   * @see http://midi.teragonaudio.com/tutr/seqppqn.htm
   * @todo rename BLEN to BASIC_LENGTH
   */
  BLEN = 1536,
}

enum SymbolType {
  BAR = 0,
  CLEF = 1,
  CUSTOS = 2,
  /**
   * Sequence Marker
   * @todo rename to SEQUENCE_MARKER
   */
  SM = 3,
  GRACE = 4,
  KEY = 5,
  METER = 6,
  /**
   * Multi Measure Rest
   * @todo rename to MULTI_MEASURE_REST
   */
  MREST = 7,
  NOTE = 8,
  PART = 9,
  REST = 10,
  /** @todo rename to Y_SPACE */
  SPACE = 11,
  STAVES = 12,
  /** 
   * String Break
   * @todo rename to STRING_BREAK
   */
  STRBRK = 13,
  TEMPO = 14,
  BLOCK = 15,
  REMARK = 16,
};

enum NoteHead {
  FULL = 0,
  EMPTY = 1,
  OVAL = 2,
  /** @todo rename to OVAL_BARS */
  OVALBARS = 3,
  SQUARE = 4,
}

/**
 * @todo remove SL_ prefix
 */
enum SlurTiePosition {
  SL_ABOVE = 0x01,
  SL_BELOW = 0x02,
  SL_AUTO = 0x03,
  SL_HIDDEN = 0x04,
  SL_DOTTED = 0x08,
  /** @todo rename ALIGNMENT_MASK */
  SL_ALI_MASK = 0x70,
  SL_ALIGN = 0x10,
  SL_CENTER = 0x20,
  SL_CLOSE = 0x40
};

/** @todo - replace with direct enum calls (TS provides ability to get key name from value) */
const SymbolName: { [key in SymbolType ]: string } = {
  [SymbolType.BAR]: 'bar',
  [SymbolType.CLEF]: 'clef',
  [SymbolType.CUSTOS]: 'custos',
  [SymbolType.SM]: 'sequence_marker',
  [SymbolType.GRACE]: 'grace',
  [SymbolType.KEY]: 'key',
  [SymbolType.METER]: 'meter',
  [SymbolType.MREST]: 'multi_measure_rest',
  [SymbolType.NOTE]: 'note',
  [SymbolType.PART]: 'part',
  [SymbolType.REST]: 'rest',
  [SymbolType.SPACE]: 'y_space',
  [SymbolType.STAVES]: 'staves',
  [SymbolType.STRBRK]: 'string_break',
  [SymbolType.TEMPO]: 'tempo',
  [SymbolType.BLOCK]: 'block',
  [SymbolType.REMARK]: 'remark'
} as const;

const KeysTable = [
  new Int8Array([-1, -1, -1, -1, -1, -1, -1]),  // 7 flat signs
  new Int8Array([-1, -1, -1, 0, -1, -1, -1]),  // 6 flat signs
  new Int8Array([0, -1, -1, 0, -1, -1, -1]),  // 5 flat signs
  new Int8Array([0, -1, -1, 0, 0, -1, -1]),  // 4 flat signs
  new Int8Array([0, 0, -1, 0, 0, -1, -1]),  // 3 flat signs
  new Int8Array([0, 0, -1, 0, 0, 0, -1]),  // 2 flat signs
  new Int8Array([0, 0, 0, 0, 0, 0, -1]),  // 1 flat signs
  new Int8Array([0, 0, 0, 0, 0, 0, 0]),  // no accidental
  new Int8Array([0, 0, 0, 1, 0, 0, 0]),  // 1 sharp signs
  new Int8Array([1, 0, 0, 1, 0, 0, 0]),  // 2 sharp signs
  new Int8Array([1, 0, 0, 1, 1, 0, 0]),  // 3 sharp signs
  new Int8Array([1, 1, 0, 1, 1, 0, 0]),  // 4 sharp signs
  new Int8Array([1, 1, 0, 1, 1, 1, 0]),  // 5 sharp signs
  new Int8Array([1, 1, 1, 1, 1, 1, 0]),  // 6 sharp signs
  new Int8Array([1, 1, 1, 1, 1, 1, 1]),  // 7 sharp signs
];

const ChordAlias = {
  "maj": "",
  "min": "m",
  "-": "m",
  "°": "dim",
  "+": "aug",
  "+5": "aug",
  "maj7": "M7",
  "Δ7": "M7",
  "Δ": "M7",
  "min7": "m7",
  "-7": "m7",
  "ø7": "m7b5",
  "°7": "dim7",
  "min+7": "m+7",
  "aug7": "+7",
  "7+5": "+7",
  "7#5": "+7",
  "sus": "sus4",
  "7sus": "7sus4"
} as const;

export {
  Constants,
  SymbolType,
  SlurTiePosition,
  SymbolName,
  KeysTable
};