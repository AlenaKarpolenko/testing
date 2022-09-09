/* eslint-disable linebreak-style */
import GoblinClick from './GoblinClick';

document.addEventListener('DOMContentLoaded', () => {
	const goblinPlay = new GoblinClick();
	goblinPlay.createField();
	goblinPlay.punchGoblin.bind(goblinPlay)();
});
