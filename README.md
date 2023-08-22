# React + TypeScript + Vite

## Actividades a Realizar

### Creación de componentes MUIComponents: 2 Horas

### Creación de contenedores UserSection: 2 Horas

### Creación de estructura Redux--Thunks: 3 Horas

### Creación de RTK Query en UserSection: 1.5 Horas

### Creación de Login y Register: 1.5 Horas

### Creación de paginas de UserSection: 1 Hora

### Creación de componentes AdminSection: 2 Horas

### Creación de RTK Query en AdminSection: 1.5 Horas

### Creación de AdminSection pages: 2 Horas
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
