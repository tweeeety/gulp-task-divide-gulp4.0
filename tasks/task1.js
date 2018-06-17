var gulp = require('gulp');

/*
 * gulp@3.x.xの書き方
 */
/*
gulp.task('task1', function() {
  console.log('i am task1!!');
});
*/

/*
 * gulp@^4.x.xの書き方
 * ダメな書き方
 *     - callbackやstreamをreturnしないとダメ
 */
/*
gulp.task('task1', function(callback) {
  console.log('i am task1!!');
});
*/

/*
 * gulp@^4.x.xの書き方
 * OKな書き方
 *     - callbackをやstreamをreturnすれば通る
 */
///*
gulp.task('task1', function(callback) {
  console.log('i am task1!!');
  callback();
});
//*/
