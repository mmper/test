const ProductionRunner = require('@freshes/house/src/Runners/ProductionRunner')

new ProductionRunner()
  .setOptions(require('./configs/options'))
  .setProxy(require('./configs/proxy'))
  .setAppEnvs(require('./configs/appEnvs'))
  .run()
