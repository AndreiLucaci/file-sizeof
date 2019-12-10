import ISizeOf from './ISizeOf';

export default class SizeOf implements ISizeOf {
  public B: number;
  public KB: number;
  public MB: number;
  public GB: number;
  public TB: number;
  public PB: number;

  public constructor(
    B: number = 0.0,
    KB: number = 0.0,
    MB: number = 0.0,
    GB: number = 0.0,
    TB: number = 0.0,
    PB: number = 0.0,
  ) {
    this.B = B;
    this.KB = KB;
    this.MB = MB;
    this.GB = GB;
    this.TB = TB;
    this.PB = PB;
  }
}
