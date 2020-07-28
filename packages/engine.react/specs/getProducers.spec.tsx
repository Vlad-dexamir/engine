import React from "react";
import {
  Get,
  Set,
  Ref,
  Merge,
  Prop,
  Arg,
  view,
  producer,
} from "@c11/engine.macro";
import "@testing-library/jest-dom/extend-expect";
import { Engine } from "../src/engine";

jest.useFakeTimers();

// @ts-ignore

test("Simple load of a react component", () => {
  const defaultState = {
    foo: "123",
  };
  const testProducer: producer = ({ foo = Get.foo }) => {};

  const rootEl = document.createElement("div");
  rootEl.setAttribute("id", "root");
  document.body.appendChild(rootEl);
  const Component: view = ({ foo = Get.foo }) => {
    return <div data-testid="foo">{foo}</div>;
  };
  const prodA: producer = ({
    propValue = Get[Prop.propName],
    setBar = Set.bar,
  }) => {
    setBar(propValue);
  };

  Component.producers = [prodA];
  const engine = new Engine({
    view: {
      element: <Component />,
      root: rootEl,
    },
    state: {
      initial: defaultState,
    },
    producers: {
      list: [testProducer],
    },
  });
  jest.runAllTimers();
  expect(engine.getProducers().length).toBe(3);
});
