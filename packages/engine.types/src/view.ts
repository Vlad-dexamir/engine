import {
  ProducersList,
  StructOperation,
  ProducerInstance,
  ProducerMeta,
} from "./producer";

export interface RenderConfig {
  element: any;
  root: any;
}

export interface ViewConfig {
  sourceId: string;
  buildId: string;
  meta: ProducerMeta;
  props: StructOperation;
  fn: ViewFn;
}
export type RootElement = HTMLElement | null;
export interface ViewInstance {
  id: string;
  sourceId: string;
  producers: ProducerInstance[];
}
export interface RenderInstance {
  unmount: () => RenderInstance;
  mount: () => RenderInstance;
  getRoot: () => RootElement;
}

export type ViewFn<ExternalProps = {}> = (
  props: any
) => React.ReactElement<ExternalProps> | null;

export type ViewExtra = {
  producers: (producers: ProducersList) => void;
};

export type View<ExternalProps = {}> = ViewFn<ExternalProps> & ViewExtra;

export type ViewsList =
  | View
  | View[]
  | ViewsList[]
  | { [k: string]: ViewsList };
