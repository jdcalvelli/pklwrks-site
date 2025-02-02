import "../styles/C_StartModal.css";
import pklwrksLogo from "../assets/pklwrks-light-tighter.svg";

import m from "mithril";
import gsap from "gsap";

const C_StartModal: m.Component<{}, {}> = {
	oncreate: (vnode: m.VnodeDOM) => {
		let element = vnode.dom as HTMLElement;

		gsap.set(element, {
			opacity: 0,
		});

		gsap.to(element, {
			delay: 1,
			duration: 4,
			ease: "sine.inOut",
			opacity: 1,
		});
	},

	view: () => {
		return m("div", { id: "startModal" }, [
			m("img", { src: pklwrksLogo }),
			m("div", { class: "inner" }, [
				m("h1", "pklwrks LLC"),
				m("h4", "what: software and video game engineering"),
				m("h4", "who: jd@pklwrks.dev"),
			]),
		]);
	},
};

export default C_StartModal;
