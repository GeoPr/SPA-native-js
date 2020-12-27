import AbstarctView from './AbstractView.js'

export default class extends AbstarctView {
	constructor(params) {
		super(params);
		this.setTitle(`Post ${this.params.id}`)
	}

	getHtml() {
		return `
			<div className="post">
				<div class="post__body">Post number ${this.params.id}</div>
			</div>
		`
	}
}