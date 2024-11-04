import m from "mithril";

interface store {
	modalToOpen: string | null;
	swapModal: (arg: string | null) => void;
}

const store: store = {
	modalToOpen: null,
	swapModal: (arg) => {
		store.modalToOpen = arg;
		m.redraw();
	}
}

export default store;