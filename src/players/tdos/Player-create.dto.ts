import { Players } from '../models/Players';

export class PlayerCreateDto implements Partial<Players> {
  readonly name: string;
  readonly email: string;
}
