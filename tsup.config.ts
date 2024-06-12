import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	treeshake: true,
	sourcemap: false,
	minify: true,
	clean: true,
	dts: false,
	splitting: false, // https://github.com/egoist/tsup/issues/255
	format: "cjs",
	metafile: false,
	target: "es2020",
});
