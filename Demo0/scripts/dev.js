let fs = require("fs").promises;
let esbuild = require("esbuild");

let getTemplate = (entry)=>`<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
</head>
<body>
    <script src="./${entry}.js"></script>
    <script>new EventSource('/esbuild').addEventListener('change', () => location.reload())</script>
</body>
</html>`;

let startDevServer = async () => {
    let entry = "index"
    let content = getTemplate(entry);
    await fs.writeFile(`./dist/${entry}.html`, content);
    let ctx = await esbuild.context({
      entryPoints: [`./src/${entry}.jsx`],
      bundle: true,
      outdir: "dist",
      sourcemap: true,
    });
    await ctx.watch();
    let { port } = await ctx.serve({
      servedir: "dist",
    });
    return `http://localhost:${port}/index.html`;
};
let start = async () => {
    let address = await startDevServer();
    console.log(`start at ${address}`);
};
start();