import React from "react";
import UseStateDemo from "./use-state";
import Layout from "../../components/common/layout";
import Selector, {SelectorOptions} from "../../components/common/selector";
import UseReducerDemo from "./use-reducer";
import UseEffectDemo from "./use-effect";
import UseRefDemo from "./use-ref";
import UseLayoutEffectDemo from "./use-layout-effect";

const hooksOptions:SelectorOptions[] = [
  {
    value: "use-state",
    label: "Use State"
  },
  {
    value: "use-reducer",
    label: "Use Reducer"
  },
  {
    value: "use-effect",
    label: "Use Effect"
  },
  {
    value: "use-layout-effect",
    label: "Use Layout Effect"
  },
  {
    value: "use-ref",
    label: "Use Ref"
  },
];

const getHookLabel = (value:any) => hooksOptions.find((opt)=>opt.value===value)?.label;

const topicSwitcher = (topic: string) => {
  switch(topic) {
  case"use-reducer":
    return <UseReducerDemo />;
  case"use-effect":
    return <UseEffectDemo />;
  case"use-layout-effect":
    return <UseLayoutEffectDemo />;
  case"use-ref":
    return <UseRefDemo />;
  case "use-state":
  default:
    return <UseStateDemo />;
  }
};

export default function Hooks() {
  const [topic, setTopic] = React.useState(hooksOptions[0].value);
  return (
    <Layout>
      <div>
        <h1>You are working with {getHookLabel(topic)} Hook</h1>
        <Selector selectedValue={topic}  onChangeCallback={setTopic} options={hooksOptions} />
        {topicSwitcher(topic)}
      </div>
    </Layout>
  );
}