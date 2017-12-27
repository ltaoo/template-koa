const fetch = require('isomorphic-fetch');

let index = async (ctx, next) => {
    const res = await fetch('https://easy-mock.com/mock/5a1d30028e6ddb24964c2d91/business/api/accnt');
    const data = await res.json();
    ctx.render('index.html', {title: 'Index Page', data: JSON.stringify(data)});
}

module.exports = {
	'GET /': index
}