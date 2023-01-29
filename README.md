<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>is-zod</h1>
  <a href="https://npmjs.com/package/is-zod">
    <img alt="NPM" src="https://img.shields.io/npm/v/is-zod.svg">
  </a>
  <a href="https://github.com/bconnorwhite/is-zod">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/is-zod.svg">
  </a>
</div>

<br />

<blockquote align="center">Typeguard to check if a value matches a zod schema.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/is-zod">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/is-zod?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
npm install is-zod
```

```sh
yarn add is-zod
```

```sh
pnpm add is-zod
```

## Usage

### Is

```ts
import { z } from 'zod';
import is from 'is-zod';

const user = z.object({
  name: z.string(),
  age: z.number()
});

const value = {
  name: 'Bob',
  age: 42
};

if(is(value, user)) {
  // value is typed as { name: string; age: number; }
}
```

### Validate

```ts
import { z } from 'zod';
import { validate } from 'is-zod';

const user = z.object({
  name: z.string(),
  age: z.number(),
});

const isUser = validate(user);

const value = {
  name: 'Bob',
  age: 42,
};

if(isUser(value)) {
  // value is typed as { name: string; age: number; }
}
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/is-zod?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/is-zod.svg"></a></h2>

- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference

<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/is-zod.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
