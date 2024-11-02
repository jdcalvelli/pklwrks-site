import Mithril from "mithril";
import p5 from "p5";

 import { GridElement } from "../classes/GridElement";

const C_BackgroundSketch = {

	oncreate: (vnode : Mithril.VnodeDOM) => {

		// container to put the sketch into!
		let container = vnode.dom as HTMLElement;

		// make a new p5 sketch
		new p5((p: p5) => {

			let rows: number;
			let cols: number;
			let spacing: number = 64;
			let gridElements: GridElement[][];

			p.setup = () => {
				p.createCanvas(4096, 4096);

				rows = p.width / spacing;
				cols = p.height / spacing;
				gridElements = new Array(rows).fill(null).map(() => new Array(cols).fill(null));


				let currentRow: number = 0;
				let currentCol: number = 0;

				for (let xPixel = 0; xPixel < p.width; xPixel += spacing) {
					for (let yPixel = 0; yPixel < p.height; yPixel += spacing) {
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
			}

			p.draw = () => {
				p.background("#212121");

				let currentRow = 0;
				let currentCol = 0;

				for (let xPixel = 0; xPixel < p.width; xPixel += spacing) {
					for (let yPixel = 0; yPixel < p.height; yPixel += spacing) {

						let currentGridElement = gridElements[currentRow][currentCol];
						let distToMouse = p.dist(currentGridElement.x, currentGridElement.y, p.mouseX, p.mouseY);

						if (distToMouse < spacing * 3) {
							currentGridElement.rot = p.atan2(
								p.mouseY - currentGridElement.y, 
								p.mouseX - currentGridElement.x
							);
						}
						else {
							currentGridElement.rot = 0;
						}
						gridElements[currentRow][currentCol].draw(p, spacing);
						currentCol++;

					}
					currentCol = 0;
					currentRow++;
				}
			}

		}, container);

	},

	view: () => Mithril("#background-sketch")
}

export default C_BackgroundSketch;