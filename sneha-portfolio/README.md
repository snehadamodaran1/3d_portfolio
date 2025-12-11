Libraries used:

@react-three/fiber - an open-source React renderer for Three.js (<Canvas />, Hooks - useThree, useFrame, useLoader)

three.js -  The three. js library provides many features and APIs for drawing 3D scenes in your browser.JavaScript-based WebGL engine that can run GPU-powered games and other graphics-powered apps straight from the browser

Drei - A vast collection of useful helpers, abstractions, and pre-made components for things like camera controls, 3D text, loaders, and environment maps.

sketchfab - Download Free 3D Models - Royalty Free
download foxes island in GLB format

https://gltf.pmnd.rs/ - helps to load our models into three.js scene. Usually its a lot of work configuring and animating all of our models meshes but luckily react three.js fiber team created an app that turns GLB files into Jsx components. We just have to drag and drop GLB files to it.


@react-three/spring - to animate the application a.group (means animated)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
