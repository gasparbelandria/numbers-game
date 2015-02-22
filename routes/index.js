
/*
 * GET home page.
 */
console.log('routes done...');
exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};