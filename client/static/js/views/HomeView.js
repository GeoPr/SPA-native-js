import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle('Home');
	}

	getHtml() {
		return `
			<section class="home">
				<div class="home__container _container">
					<div class="home__body">
						<h2 class="home__title">Home title</h2>
						<p class="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto?</p>
					</div>
				</div>
			</section>
		`
	}
}