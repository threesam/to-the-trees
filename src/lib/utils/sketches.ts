export const sketch = (p5) => {
	const points = [];

	const clientHeight = p5.windowHeight;

	p5.setup = () => {
		p5.createCanvas(p5.windowWidth, clientHeight);

		for (let i = 0; i < 500; i++) {
			const size = p5.random(5, 25);
			const x = p5.random(p5.windowWidth - size);
			const y = p5.random(clientHeight);
			const color = p5.random(100, 255);

			let collision;
			points.forEach((point) => {
				if (p5.dist(x, y, point.x, point.y) < 25) {
					collision = true;
				}
			});

			if (!collision) {
				points.push({ x, y, size, color });
			}
		}
	};

	p5.draw = () => {
		p5.frameRate(30);
		p5.background(17, 17, 17);

		for (const point of points) {
			const { x, y, size, color } = point;
			if (y < -size) {
				point.y = clientHeight + size;
			} else {
				point.y -= 1;
			}

			p5.fill(color, 0, color);
			p5.circle(x, y, size);
		}
	};
};
