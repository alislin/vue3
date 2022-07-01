
export interface RootState {
  id: string;
  name: string;
}

export interface BaseState extends RootState {
  /** 用户权限 */
  count: number;
}

export interface CountState {
  count: number;
}