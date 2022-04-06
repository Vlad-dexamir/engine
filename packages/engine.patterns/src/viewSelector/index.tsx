import { extractProducers } from "@c11/engine.utils";
import { ProducersList, ProducerConfig, ViewInstance } from "@c11/engine.types";

//TODO: allow creation of simpler components in order
//  to have the componentId space:
// const Foo = component(Bar, producers)
// This becomes useless after adding viewId directly on the view

//TODO: think of a root component that sits at the top of the application
// and certain data can go to:
// updateA = update.components[prop.rootId].data.A
export const viewSelector = (
  states: {
    [k: string]: (props: any) => JSX.Element | ViewInstance | null;
  },
  //TODO: add proper type to match states structure
  stateSelector: ({ data }: any) => string,
  producers: ProducersList
) => {
  const Component: view = ({
    _props,
    state = observe.views[prop._viewId].data.state,
  }: any) => {
    if (!state) {
      return;
    }
    const State = states[state];
    if (!State) {
      return;
    }

    return <State {..._props} />;
  };

  const selector: producer = ({
    data = observe.views[prop._viewId].data,
    updateState = update.views[prop._viewId].data.state,
    getState = get.views[prop._viewId].data.state,
  }) => {
    const newState = stateSelector(data || {});

    const activeState = getState.value();

    if (newState === activeState) {
      return;
    }

    if (!newState) {
      // error?
      return;
    }

    if (!states[newState]) {
      // error?
      return;
    }

    updateState.set(newState);
  };

  const producersList = extractProducers(producers);
  Component.producers([...producersList, selector]);

  return (props: any) => <Component {...props} />;
};
