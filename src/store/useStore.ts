import { InjectionKey } from 'vue';
import { useStore as baseUseStore, Store } from 'vuex';
import { modules } from "./modules";
import { BaseState } from './RootState';

type modulesState = {
  [key in keyof typeof modules]: Exclude<Exclude<typeof modules[key]['state'], undefined>, () => any>
}
export const key: InjectionKey<Store<BaseState>> = Symbol();
export function useStore() {
  return baseUseStore<BaseState>(key);
}


