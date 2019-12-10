import { statSync } from 'fs';
import ISizeOf from '../models/ISizeOf';
import ISizeOfService from './ISizeOfService';

export default abstract class SizeOfService implements ISizeOfService {
  protected size: number;
  protected internalSizeOf!: ISizeOf;

  constructor(input: string | Buffer) {
    if (Buffer.isBuffer(input)) {
      this.size = input.byteLength;
    } else {
      this.size = statSync(input).size;
    }

    this.processSize();
  }

  public sizeOf(): ISizeOf {
    return this.internalSizeOf;
  }

  protected abstract processSize(): void;
}
