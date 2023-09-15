const ZeroCharCode = '0'.charCodeAt(0);
const NineCharCode = '9'.charCodeAt(0);

export class ScanBuffer {
  private buffer: string;
  private pointer: number;
  public constructor(buffer: string) {
    this.buffer = buffer;
    this.pointer = 0;
  }

  /**
   * 
   * @returns character at current position or '' if the position is behind the buffer.
   */
  public char(): string {
    return this.buffer.charAt(this.pointer);
  }

  public next_char(): string {
    ++this.pointer;
    return this.buffer.charAt(this.pointer);
  }

  public get_int(): number {
    let value = 0;
    while (this.is_digit()) {
      value * 10 + +this.char();
      ++this.pointer;
    }
    return value;
  }

  private char_code(): number {
    return this.buffer.charCodeAt(this.pointer);
  }

  private is_digit(): boolean {
    return this.char_code() >= ZeroCharCode && this.char_code() <= NineCharCode
  }
}