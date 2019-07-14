# Realworld with Next.js

This project use [Realword API](https://github.com/gothinkster/realworld) and [Next.js](https://nextjs.org/).

## Realworld API

Realworld API is `The mother of all demo apps` they said.

## Next.js

Next.js is React Framework. If you need SSR(Server Side Rendering), Next.js is so easy to set SSR.

### PROS

Next.js has some PROS.

1. Provide Server Side Rendering(SSR) by default.

2. Automatic code spliting.

3. Easy client routing.

   - Next.js has `link/next`

4. Support Hot Module Replacement.

5. Use Next.js with node.js.

6. Cutomizable Babel and Webpack.

## Dependencies

- `next`: React with Server Side Rendering.

- `react, react-dom`

- `styled-components`

  - `babel-plugin-styled-components`: Support styled-components with Nextjs.

  - and create .babelrc in root path.

    ```
    {
      "presets": ["next/babel"],
      "plugins": [["styled-components", { "ssr": true }]]
    }

    ```

  - ref: https://github.com/zeit/next.js/tree/master/examples/with-styled-components

- `eslint`

  - `eslint-config-airbnb`

  - `eslint-plugin-babel, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react`

## Script

```
scripts: {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

## Description

### How to use Styled-components

ref: https://github.com/zeit/next.js/tree/canary/examples/with-styled-components

```
  npm install styled-components
```

Note🚨

Create \_app.js and \_document.js files to use styled-components with SSR.

### How to use Css with Next.js

ref: https://github.com/zeit/next-plugins/tree/master/packages/next-css

```
  npm install --save @zeit/next-css
```

Note🚨

Css files cannot be import `_documnet.js`.

### How to use Redux with redux-saga

ref: https://github.com/zeit/next.js/tree/canary/examples/with-redux-saga

# License

MIT
