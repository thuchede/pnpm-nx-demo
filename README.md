# Demo project for GeekCamp 2022

This project has been entirely generated using the NX cli and some plugins.
It combines the power of `pnpm` an `nx` to offer a performant setup for your monorepo.

## Run project

To serve both the front-end application and the api:

```bash
pnpx nx run-many --target=serve
```

To run the storybook for the `my-new-lib` library:

```bash
pnpx nx storybook my-new-lib
```

## Steps you can use to reproduce the creation of this repo

```bash
pnpx create-nx-workspace
pnpm i -D @nrwl/react @nrwl/storybook
pnpx nx g @nrwl/react:lib my-new-lib
pnpx nx g @nrwl/storybook:configuration my-new-lib
```

Then a `my-new-lib.stories.mdx` file was created to see storybook in action and the `MyNewLib` component was imported in the `web` project as well.

## Slides 

See `./slides` directory

## Additional links

- [https://pnpm.io/](https://pnpm.io/)
- [https://nx.dev/](https://nx.dev/)
- [https://monorepo.tools/](https://monorepo.tools/)
