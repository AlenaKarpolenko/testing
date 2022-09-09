/* eslint-disable linebreak-style */
/* eslint-disable no-alert */

/* eslint-disable no-plusplus */
import Counters from './Counters';

export default class GoblinClick {
	constructor() {
		this.counters = new Counters();
		this.fieldSize = 4;
		this.field = document.querySelector('.field');
		this.cells = null;
		this.previousIndex = null;
		this.interval = null;
	}

	createField() {
		for (let i = 0; i < this.fieldSize; i++) {
			const col = document.createElement('div');
			col.classList.add('col');
			this.field.appendChild(col);
			for (let j = 0; j < this.fieldSize; j++) {
				const cell = document.createElement('div');
				cell.classList.add('cell');
				col.appendChild(cell);
			}
		}
		this.cells = Array.from(document.querySelectorAll('.cell'));
	}

	damage(event) {
		if (!event.target.classList.contains('goblin')) {
			return;
		}
		this.counters.increaseDamaged();
		event.target.removeEventListener('click', this.damage);
		if (this.counters.damagedCounter === 10) {
			this.win();
		}
		document.querySelector('.goblin').remove();
		clearInterval(this.interval);
		this.punchGoblin();
	}

	punchGoblin() {
		if (document.querySelector('.goblin')) {
			document.querySelector('.goblin').remove();
			this.counters.increaseHealthy();
			clearInterval(this.interval);
			if (this.counters.healthyCounter === 5) {
				this.fail();
			}
		}
		let randomIndex = Math.floor(Math.random() * this.cells.length);
		while (randomIndex === this.previousIndex) {
			randomIndex = Math.floor(Math.random() * this.cells.length);
		}
		const randomCell = this.cells[randomIndex];
		this.previousIndex = randomIndex;
		const goblin = document.createElement('div');
		goblin.classList.add('goblin');
		randomCell.appendChild(goblin);
		goblin.addEventListener('click', this.damage.bind(this));
		this.interval = setInterval(this.punchGoblin.bind(this), 1000);
	}

	win() {
		alert('Победа!');
		this.counters.damagedDiv.innerText = 0;
		this.counters.damagedCounter = 0;
		this.counters.healthyDiv.innerText = 0;
		this.counters.healthyCounter = 0;
	}

	fail() {
		alert('Вы проиграли...');
		this.counters.damagedDiv.innerText = 0;
		this.counters.damagedCounter = 0;
		this.counters.healthyDiv.innerText = 0;
		this.counters.healthyCounter = 0;
	}
}
