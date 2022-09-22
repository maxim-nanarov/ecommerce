const gulp = require("gulp");
const clean = require("gulp-clean");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const { exec } = require("child_process");

const webpackConfig = require("./webpack.config.js");

// Removes previous dist
gulp.task("start", () => {
  return gulp.src("./dist", { allowEmpty: true }).pipe(clean());
});

// Creates js bundle from several js files
gulp.task("build", () => {
  return webpack(webpackConfig).pipe(gulp.dest("./dist"));
});

// Converts scss to css
gulp.task("scss", () => {
  return gulp.src("./src/**/*.scss").pipe(sass()).pipe(gulp.dest("./dist"));
});

// Transfers index
gulp.task("index", () => {
  return gulp
    .src(["./src/index/index.html", "./src/favicon.ico", "./src/admin/admin.html","./src/edit/edit.html","./src/add/add.html"])
    .pipe(gulp.dest("./dist"));
});

// Browser Sync
gulp.task("browser-sync", () => {
  browserSync.init({
    browser: "default",
    port: 4000,
    server: { baseDir: "./dist" },
  });
});

// Browser Sync live reload
gulp.task("browser-sync-watch", () => {
  gulp.watch("./dist/styles.css").on("change", browserSync.reload);
  gulp.watch("./dist/index/app.js").on("change", browserSync.reload);
  gulp.watch("./dist/index/index.html").on("change", browserSync.reload);
  gulp.watch("./dist/admin/admin.html").on("change", browserSync.reload);
  gulp.watch("./dist/edit/edit.html").on("change", browserSync.reload);
  gulp.watch("./dist/add/add.html").on("change", browserSync.reload);
});

// Watch scss files
gulp.task("watch-scss", () => {
  return gulp.watch("./src/**/*.scss", gulp.series("scss"));
});

// Watch html files
gulp.task("watch-html", () => {
  return gulp.watch("./src/index/index.html", gulp.series("index"));
});

// Watch admin html files
gulp.task("watch-admin-html", () => {
  return gulp.watch("./src/admin/admin.html", gulp.series("index"));
});

//Watch edit html files
gulp.task("watch-edit-html", () => {
  return gulp.watch("./src/edit/edit.html", gulp.series("index"));
});

//Watch edit html files
gulp.task("watch-add-html", () => {
  return gulp.watch("./src/add/add.html", gulp.series("index"));
});


// Watch tsc files
gulp.task("watch-tsc", () => {
  return gulp.watch("./dist/tsc/**/*.js", gulp.series("build"));
});

// Initial ts compile
gulp.task("tsc", (cb) => {
  exec("tsc", (err, msg) => {
    cb();
  });
});

// Watch ts files and recompile
gulp.task("tsc-w", () => {
  exec("tsc -w");
});

// Run all together
gulp.task(
  "default",
  gulp.series(
    "start",
    "scss",
    "index",
    "tsc",
    "build",
    gulp.parallel(
      "browser-sync",
      "browser-sync-watch",
      "watch-scss",
      "watch-html",
      "watch-admin-html",
      "watch-edit-html",
      "watch-add-html",
      "watch-tsc",
      "tsc-w"
    )
  )
);