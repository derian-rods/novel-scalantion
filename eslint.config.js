import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Aquí puedes agregar tus reglas personalizadas
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-var": ["error"], // Prohibit the use of 'var'
      eqeqeq: ["error", "always"], // Require === and !==
      curly: ["error", "all"], // Require curly braces for all control statements
      "no-console": ["warn"], // Warn on console.log statements
      "no-debugger": ["error"], // Disallow debugger statements
      "prefer-const": ["error"], // Prefer const over let when variables are not reassigned
      "no-trailing-spaces": ["error"], // Disallow trailing whitespace at the end of lines
      "eol-last": ["error", "always"], // Require newline at the end of files
      indent: ["error", 2], // Enforce consistent indentation (2 spaces)
    },
  },
];
