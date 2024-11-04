import "./style.css";
import games from "./data/gamesList.json";
import clients from "./data/clientList.json";

import m from "mithril";
import store from "./stores/store";

import C_StartModal from "./components/C_StartModal";
import C_InfoButton from "./components/C_InfoButton";
import C_OverlayModal from "./components/C_OverlayModal";
import C_BackgroundSketch from "./components/C_BackgroundSketch";

const C_App: m.Component<{}, {}> = {
  view: () => {
    return m("main", [
      m(C_StartModal),
      m(C_InfoButton, {topStyle: "15%", floatingText: "games", relatedModal: "games"}),
      m(C_InfoButton, {topStyle: "85%", floatingText: "clients", relatedModal: "clients"}),
      store.modalToOpen == "clients" ? m(C_OverlayModal, {modalName: "our clients", listItems: clients.clientList}) : null,
      store.modalToOpen == "games" ? m(C_OverlayModal, {modalName: "our games", listItems: games.gamesList}) : null,
      m(C_BackgroundSketch)
    ])
  }
}

m.mount(document.body, C_App);