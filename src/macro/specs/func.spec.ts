import pluginTester from 'babel-plugin-tester';
import prettier from 'prettier';
import plugin from 'babel-plugin-macros';

const macroFile = "'./build/macro/index.macro'";

pluginTester({
  plugin,
  babelOptions: { filename: __filename },
  formatResult: (result: any) => {
    return prettier.format(result, {
      parser: 'babel'
    });
  },
  tests: {
    'should support composed types: functions': {
      code: `
        import { producer } from ${macroFile}
        producer(({
          a1 = Get.foo || '123' && '123'
        }) => { })
      `,
      snapshot: true
    }
  }
});