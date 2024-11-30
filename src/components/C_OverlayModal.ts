import "../styles/C_OverlayModal.css";

import m from "mithril";
import gsap from "gsap";

interface C_Props {
	modalName: string;
	listItems: Array<{
		href: string;
		linkText: string;
		natureOfWork: string;
	}>;
}

const C_OverlayModal: m.Component<C_Props, {}> = {
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
		return m("div", { id: "clientsModal" }, [
			m("h1", vnode.attrs.modalName),
			m(
				"div",
				{ class: "inner" },
				vnode.attrs.listItems.map((listItem) => {
					return m("a", { href: listItem.href }, listItem.linkText, [
						listItem.natureOfWork ? m("p", listItem.natureOfWork) : null,
					]);
				})
			),
		]);
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

export default C_OverlayModal;
