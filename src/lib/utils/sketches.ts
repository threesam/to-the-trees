export const sketch = (p5) => {
	const points = [];

	p5.setup = () => {
		p5.createCanvas(width, height);

		for (let i = 0; i < 200; i++) {
			const size = p5.random(5, 25);
			const x = p5.random(width - size);
			const y = p5.random(height);
			const color = p5.random() > 0.5 ? [183, 198, 175] : [56, 80, 69];

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
				point.y = height + size;
			} else {
				point.y -= 1;
			}

			p5.stroke(...color);
			p5.fill(17, 17, 17);
			p5.strokeWeight(2);
			p5.circle(x, y, size);
		}
	};
};
