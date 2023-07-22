<script lang="ts">
	import P5 from 'p5-svelte'
	import type { Sketch } from 'p5-svelte'

	let width: number
	let height: number

	type Point = {
		x: number
		y: number
		size: number
		color: number[]
	}

	const sketch: Sketch = (p5) => {
		p5.disableFriendlyErrors = true
		const padding = 1
		const smallSide = width > height ? height * padding : width * padding

		const seed = Math.floor(p5.random(1000000))
		const multi = 0.05

		const space = 100

		const maxLength = 20
		const minLength = 7
		const angle = 30

		const trees = [] as {
			x: number
			y: number
			color: number
		}[]

		p5.setup = () => {
			p5.createCanvas(width, height)
			p5.noiseSeed(seed)
			p5.angleMode(p5.DEGREES)
			p5.rectMode(p5.CENTER)
			p5.noLoop()

			for (let x = -width / 2 - space; x < width / 2 + space; x += space) {
				for (let y = -height / 2 + space; y < height / 2 - space / 2; y += space) {
					const noise = p5.noise(x * multi, y * multi)
					const color = p5.map(noise, 0, 1, 0, 255)
					trees.push({ x: x + p5.random(-10, 10), y: y + p5.random(-10, 10), color })
				}
			}
		}

		p5.draw = () => {
			p5.background(0)
			p5.translate(width / 2 + space / 8, height / 2 + space / 2)

			trees.forEach(({ x, y, color }) => {
				const dist = p5.dist(x, 0, 0, 0)
				const offset = p5.map(dist, 0, width / 2, 0.5, 1.5)
				p5.push()
				p5.stroke(color)
				p5.translate(x, y)
				branch(maxLength * offset)
				p5.pop()
			})
		}

		function branch(len: number) {
			p5.push()
			let isDone
			if (len > minLength) {
				// const weight = p5.map(len, minLength, maxLength, 1, 5)
				// p5.strokeWeight(weight)
				const offset = p5.random(-5, 5)
				// p5.rect(0, 0, offset, -len)
				p5.line(0, 0, offset, -len)
				p5.translate(offset, -len)
				p5.rotate(angle)
				branch(len * p5.random(0.69, 0.8))
				p5.rotate(angle * -2)
				branch(len * p5.random(0.69, 0.8))
			} else if (!isDone) {
				p5.fill(0, 13)
				// p5.rect(0, 0, 10, len)
				p5.ellipse(0, 0, 10 + p5.random(-5, 5), len)

				isDone = true
			}
			p5.pop()
		}

		p5.windowResized = () => {
			p5.resizeCanvas(width, height)
		}
	}
</script>

<div bind:clientWidth={width} bind:clientHeight={height} class="absolute inset-0 overflow-hidden">
	<P5 {sketch} />
</div>
