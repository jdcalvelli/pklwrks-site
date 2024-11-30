import "../styles/C_InfoButton.css";

import m from "mithril";
import gsap from "gsap";
import store from "../stores/store";

import C_FloatingText from "./C_FloatingText";

interface C_Props {
	topStyle: string;
	floatingText: string;
	relatedModal: string;
}

interface C_State {
	isHovered: boolean;
}

const C_InfoButton: m.Component<C_Props, C_State> = {
	oncreate: (vnode: m.VnodeDOM<C_Props, C_State>) => {
		let element = vnode.dom as HTMLElement;

		element.style.top = vnode.attrs.topStyle;

		element.addEventListener("mouseenter", () => {
			gsap.to(element, {
				duration: 0.5,
				ease: "sine.inOut",
				width: 64,
				height: 64,
			});

			vnode.state.isHovered = true;
			m.redraw();
		});

		element.addEventListener("click", () => {
			if (vnode.attrs.relatedModal != store.modalToOpen) {
				store.swapModal(vnode.attrs.relatedModal);
			}
		});

		element.addEventListener("mouseleave", () => {
			gsap.to(element, {
				duration: 0.5,
				ease: "sine.inOut",
				width: 32,
				height: 32,
			});

			vnode.state.isHovered = false;
			m.redraw();
		});
	},

	view: (vnode: m.VnodeDOM<C_Props, C_State>) => {
		return m("div", { id: "infoButton" }, [
			vnode.state.isHovered
				? m(C_FloatingText, { floatingText: vnode.attrs.floatingText })
				: null,
		]);
	},
};

export default C_InfoButton;
