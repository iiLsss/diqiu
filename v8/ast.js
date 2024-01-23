const esprima = require('esprima');
const fs = require('fs');
const path = require('path')

const code = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf-8');
console.log('==>', code)

const tokens = esprima.tokenize(code);
console.log(tokens)
const ast = esprima.parseScript(`const name = 'diqiu' `);

console.log(JSON.stringify(ast, null, "\t"));

/**
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "name"
          },
          "init": {
            "type": "Literal",
            "value": "diqiu",
            "raw": "'diqiu'"
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
 */