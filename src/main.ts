import "./style.css";

import Mithril from "mithril";

import C_StartModal from "./components/C_StartModal";
import C_BackgroundSketch from "./components/C_BackgroundSketch";

const C_App = {
  view: () => {
    return Mithril("main", [
      Mithril(C_StartModal),
      Mithril(C_BackgroundSketch)
    ])
  }
}

Mithril.mount(document.body, C_App);