module.exports = (plop) => {
  plop.setGenerator('module', {
    description: 'Создать новый модуль',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Type a component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
    ],
  });
};
