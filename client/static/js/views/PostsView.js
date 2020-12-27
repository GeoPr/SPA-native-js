import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
    this.links = Array.from({ length: 2 }).map((_, idx) => ({
      href: `/posts/${idx + 1}`,
      title: `Post ${idx + 1}`,
    }));
  }

  getHtml() {
    return `
			<section class="posts">
				<div class="posts__container _container">
					<div class="posts__body">
						<h2 class="posts__title">Posts title</h2>
						<p class="posts__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto?</p>
						<ul class="posts__list">
							${this.links.map(({ title, href }) => {
                return `
									<li>
										<a href="${href}" data-type="link">${title}</a>
									</li>
								`;
              }).join('')}
						</ul>
					</div>
				</div>
			</section>
		`;
  }
}
