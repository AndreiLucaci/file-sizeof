import ISizeOf from './models/ISizeOf';
import IECSizeOfService from './services/IECSizeOfService';
import ISizeOfService from './services/ISizeOfService';
import SISizeOfService from './services/SISizeOfService';

export const sizeof = {
  SI: (input: string | Buffer | number): ISizeOf => {
    const sizeOfService: ISizeOfService = new SISizeOfService(input);

    return sizeOfService.sizeOf();
  },

  IEC: (input: string | Buffer | number): ISizeOf => {
    const sizeOfService: ISizeOfService = new IECSizeOfService(input);

    return sizeOfService.sizeOf();
  },
};
