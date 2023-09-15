import { SymbolType } from "./enums/Constants"
import { ScanBuffer } from "./helpers/ScanBuffer"

type MeterNumericSymbol = {
  bot: number,
  top: number
}

type Meter = {
  type: SymbolType.METER,
  /**
   * Measure Duration
   * @todo rename to measure_duration
   */
  wmeasure: number,
  /**
   * List of measure symbols
   * @todo rename to meter_symbols
   */
  a_meter: MeterNumericSymbol[]
}

export class Abc {
  public meter: Meter = {
    type: SymbolType.METER,
    wmeasure: 1,  // no M:
    a_meter: []
  };
  public info = {};
  public parse = {
    ctx: {},
    prefix: '%',
    state: 0,
    ottava: [],
    line: new ScanBuffer('')
  }
}