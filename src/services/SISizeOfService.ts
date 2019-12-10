import { SIFileSizes as FileSizeEnum } from '../models/FileSizesEnums';
import SizeOf from '../models/SizeOf';
import ISizeOfService from './ISizeOfService';
import SizeOfService from './SizeOfService';

export default class SISizeOfService extends SizeOfService
  implements ISizeOfService {
  protected processSize(): void {
    this.internalSizeOf = new SizeOf(
      this.size / FileSizeEnum.B,
      this.size / FileSizeEnum.KB,
      this.size / FileSizeEnum.MB,
      this.size / FileSizeEnum.GB,
      this.size / FileSizeEnum.TB,
      this.size / FileSizeEnum.PB,
    );
  }
}
