var gulp = require('gulp');

/*
 * gulp@3.x.xの書き方
 */
/*
gulp.task('task2', ['task2-1', 'task2-2'], function() {
  console.log('i am task2!!');
});

gulp.task('task2-1', function() {
  console.log('i am task2-1!!');
});

gulp.task('task2-2', function() {
  console.log('i am task2-2!!');
});
*/

/*
 * gulp@^4.x.xの書き方
 */
///*
gulp.task('task2-1', function(callback) {
  console.log('i am task2-1!!');
  callback();
});

gulp.task('task2-2', function(callback) {
  console.log('i am task2-2!!');
  callback();
});

gulp.task('task2', gulp.series('task2-1', 'task2-2', function(callback) {
  console.log('i am task2!!');
  callback();
}));
//k*/
