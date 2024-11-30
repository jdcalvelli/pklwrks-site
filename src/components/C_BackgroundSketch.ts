import "../styles/C_BackgroundSketch.css";

import m from "mithril";
import p5 from "p5";
import { GridElement } from "../classes/GridElement";
import store from "../stores/store";

const C_BackgroundSketch: m.Component<{}, {}> = {
	oncreate: (vnode: m.VnodeDOM) => {
		// element to put the sketch into!
		let element = vnode.dom as HTMLElement;

		element.addEventListener("click", () => {
			if (store.modalToOpen != null) {
				store.swapModal(null);
			}
		});

		// make a new p5 sketch
		new p5((p: p5) => {
			let rows: number;
			let cols: number;
			let spacingX: number;
			let spacingY: number;
			let gridElements: GridElement[][];

			p.setup = () => {
				p.createCanvas(p.windowWidth, p.windowHeight);

				spacingX = p.windowWidth / 16;
				spacingY = p.windowHeight / 16;
				rows = p.windowWidth / spacingX;
				cols = p.windowHeight / spacingY;
				gridElements = new Array(rows)
					.fill(null)
					.map(() => new Array(cols).fill(null));

				let currentRow: number = 0;
				let currentCol: number = 0;

				for (let xPixel = 0; xPixel < p.windowWidth; xPixel += spacingX) {
					for (let yPixel = 0; yPixel < p.windowHeight; yPixel += spacingY) {
						gridElements[currentRow][currentCol] = new GridElement(
							xPixel,
							yPixel,
							p.PI,
							p.random(0, 1)
						);
						currentCol++;
					}
					currentCol = 0;
					currentRow++;
				}
			};

			p.draw = () => {
				p.background("#212121");

				let currentRow = 0;
				let currentCol = 0;

				for (let xPixel = 0; xPixel < p.windowWidth; xPixel += spacingX) {
					for (let yPixel = 0; yPixel < p.windowHeight; yPixel += spacingY) {
						let currentGridElement = gridElements[currentRow][currentCol];
						let distToMouse = p.dist(
							currentGridElement.x,
							currentGridElement.y,
							p.mouseX,
							p.mouseY
						);

						if (
							p.mouseX &&
							p.mouseY &&
							distToMouse < ((spacingX + spacingY) / 2) * 3
						) {
							currentGridElement.rot = p.atan2(
								p.mouseY - currentGridElement.y,
								p.mouseX - currentGridElement.x
							);
						} else {
							currentGridElement.rot = 0;
						}
						gridElements[currentRow][currentCol].draw(p, spacingX, spacingY);
						currentCol++;
					}
					currentCol = 0;
					currentRow++;
				}
			};
		}, element);
	},

	view: () => m("#background-sketch"),
};

export default C_BackgroundSketch;
