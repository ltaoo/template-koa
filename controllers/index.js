let index = (ctx, next) => {
	console.log(ctx)
    ctx.response.body = '<h1>Index</h1>';
}

module.exports = {
	'GET /': index
}