var gulp = require('gulp');
var dir = require( 'require-dir' );
dir( './tasks', { recurse: true } );

/*
 * gulp@3.x.xの書き方
 */
/*
gulp.task('default', ['task1', 'task2', 'task3']);
*/

/*
 * gulp@^4.x.xの書き方
 */
///*
gulp.task('default', gulp.series(['task1', 'task2', 'task3']));
//*/
