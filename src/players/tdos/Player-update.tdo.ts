import { Players } from '../models/Players';

export class PlayerUpdateDto implements Partial<Players> {
  readonly name?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly ranking?: string;
  readonly positionRanking?: number;
  readonly urlPhotoPlayer?: string;
}
