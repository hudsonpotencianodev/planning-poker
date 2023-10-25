import { Status } from './status';

export interface Game {
  id: string;
  name: string;
  gameType?: GameType;	
  gameStatus: Status;
  createdBy: string;
  createdById: string;
  createdAt: Date;
  updatedAt?: Date;
  canModeratorVote?:boolean
}

export interface NewGame {
  name: string;
  createdBy: string;
  createdAt: Date;
  gameType: GameType;
  canModeratorVote?:boolean;
}

export enum GameType {	
  Fibonacci = 'Fibonacci',	
  ShortFibonacci = 'ShortFibonacci',	
}