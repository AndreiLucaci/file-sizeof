import { IECFileSizes as FileSizeEnum } from '../models/FileSizesEnums';
import SizeOf from '../models/SizeOf';
import ISizeOfService from './ISizeOfService';
import SizeOfService from './SizeOfService';

export default class IECSizeOfService extends SizeOfService
  implements ISizeOfService {
  protected processSize(): void {
    this.internalSizeOf = new SizeOf(
      this.size / FileSizeEnum.B,
      this.size / FileSizeEnum.KiB,
      this.size / FileSizeEnum.MiB,
      this.size / FileSizeEnum.GiB,
      this.size / FileSizeEnum.TiB,
      this.size / FileSizeEnum.PiB,
    );
  }
}
