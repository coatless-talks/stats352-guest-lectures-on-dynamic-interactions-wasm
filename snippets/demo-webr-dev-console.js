var webRready = await import('https://webr.r-wasm.org/latest/webr.mjs').then(
  async ({ WebR }) => {
    const webR = new WebR();
    await webR.init();
    return webR;
  }
);

webRready.version
webRready.evalR('set.seed(1); rnorm(10,5,1)');

let result = await webRready.evalR('set.seed(1); rnorm(10,5,1)');
result

let output = await result.toArray();
output