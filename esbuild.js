const esbuild = require("esbuild");
const { globPlugin } = require("esbuild-plugin-glob");

esbuild.build({
  bundle: true,
  entryPoints: ["./src/uicons/css/**/*.css"],
  format: "esm",
  loader: {
    ".eot": "file",
    ".ttf": "file",
    ".svg": "file",
    ".woff": "file",
    ".woff2": "file",
  },
  minify: true,
  outdir: "css",
  plugins: [globPlugin()],
  sourcemap: true,
  splitting: true,
  target: ["esnext"],
}).catch(() => process.exit(1));