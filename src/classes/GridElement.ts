import type p5 from "p5";

class GridElement {
	x: number;
	y: number;
	rot: number;
	randFactor: number;

	constructor(_x: number, _y: number, _rot: number, _randFactor: number) {
		this.x = _x;
		this.y = _y;
		this.rot = _rot;
		this.randFactor = _randFactor;
	}

	draw(p: p5, spacingX: number, spacingY: number): void {
		p.push();
		p.stroke(255);
		p.translate(this.x + spacingX / 2, this.y + spacingY / 2);
		p.rotate(this.rot);
		if (this.randFactor < 0.5) {
			p.line(-spacingX / 2, -spacingY / 2, spacingX / 2, spacingY / 2);
		} else {
			p.line(-spacingX / 2, spacingY / 2, spacingX / 2, -spacingY / 2);
		}
		p.pop();
	}
}

export { GridElement };
