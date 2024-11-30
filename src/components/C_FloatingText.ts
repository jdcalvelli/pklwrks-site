import "../styles/C_FloatingText.css";

import m from "mithril";
import gsap from "gsap";

interface C_Props {
	floatingText: string;
}

// floating component
const C_FloatingText: m.Component<C_Props, {}> = {
	oncreate: (vnode: m.VnodeDOM<C_Props, {}>) => {
		let element = vnode.dom as HTMLElement;

		gsap.set(element, {
			opacity: 0,
		});

		gsap.to(element, {
			duration: 0.5,
			ease: "sine.inOut",
			opacity: 1,
		});
	},

	view: (vnode: m.VnodeDOM<C_Props, {}>) => {
		return m("h2", { class: "floatingText" }, `${vnode.attrs.floatingText}`);
	},

	onbeforeremove: (vnode: m.VnodeDOM<C_Props, {}>) => {
		let element = vnode.dom as HTMLElement;

		gsap.to(element, {
			duration: 0.5,
			ease: "sine.inOut",
			opacity: 0,
		});

		// promise will cause mithril to wait before removing the element!
		return new Promise((resolve) => {
			setTimeout(resolve, 500); // Match animation duration
		});
	},
};

export default C_FloatingText;
