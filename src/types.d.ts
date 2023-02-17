export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

export type SubResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description: string;
}>