import Mithril from "mithril";
import gsap from "gsap";

import pklwrksLogo from "../assets/pklwrks-light-tighter.svg";

const C_StartModal = {

	oncreate: (vnode: Mithril.VnodeDOM) => {
		let container = vnode.dom as HTMLElement;

		gsap.set(container, {
			opacity: 0
		});

		gsap.to(container, {
			delay: 1.5,
			duration: 3,
			ease: "sine.inOut",
			opacity: 1,
		});
	},

	view: () => {
		return Mithril("div", {id: "startModal"}, [
			Mithril("img", {src: pklwrksLogo}),
			Mithril("div", {class: "inner"}, [
				Mithril("h1", "pklwrks llc"),
				Mithril("h4", "what: video game / software engineering studio"),
				Mithril("h4", "who: jd@pklwrks.xyz")
			])
		])	
	}

}

export default C_StartModal;