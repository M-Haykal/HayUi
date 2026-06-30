import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "Hayui",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    postcss({
      inject: true,
      minimize: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        declaration: true,
        declarationDir: "dist",
        declarationMap: true,
      },
    }),
    terser(),
  ],
};
