import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [dynamicContent, setDynamicContent] = useState();

  function handleSelect(passedDynamicContent) {
    setDynamicContent(passedDynamicContent);
  }

  let content = <p>Please select a topic</p>;

  if (dynamicContent) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[dynamicContent].title}</h3>
        <p>{EXAMPLES[dynamicContent].description}</p>
        <pre>
          <code>{EXAMPLES[dynamicContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton>MON</TabButton>
        <TabButton>TUE</TabButton>
        <TabButton>Settings</TabButton>
        <TabButton>Others</TabButton>
      </menu>
    </Section>
  );
}
