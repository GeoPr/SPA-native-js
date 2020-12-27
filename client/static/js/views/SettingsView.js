import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle('Settings');
	}

	getHtml() {
		return `
			<section class="settings">
				<div class="settings__container _container">
					<div class="settings__body">
						<h2 class="settings__title">Settings title</h2>
						<p class="settings__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto?</p>
					</div>
				</div>
			</section>
		`
	}
}