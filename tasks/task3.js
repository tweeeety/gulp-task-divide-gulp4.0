var gulp = require('gulp');

/*
 * gulp@3.x.xの書き方
 */
/*
gulp.task('task3', function() {
  console.log('i am task3!!');
});
*/

/*
 * gulp@^4.x.xの書き方
 */
///*
gulp.task('task3', function(callback) {
  console.log('i am task3!!');
  callback();
});
//*/
