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

---
<!--END HEADER-->

<!-- BEGIN INSTALLATION -->
## Installation

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/is-zod">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install is-zod
```

</details>

<details>
  <summary>
    <a href="https://yarnpkg.com/package/is-zod">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add is-zod
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add is-zod
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add is-zod
```

</details>
<!-- END INSTALLATION -->

## Usage

### Is

```ts
import { z } from "zod";
import is from "is-zod";

const user = z.object({
  name: z.string(),
  age: z.number()
});

const value = {
  name: "Bob",
  age: 42
};

if (is(value, user)) {
  // value is typed as { name: string; age: number; }
}
```

### Validate

```ts
import { z } from "zod";
import { validate } from "is-zod";

const user = z.object({
  name: z.string(),
  age: z.number()
});

const isUser = validate(user);

const value = {
  name: "Bob",
  age: 42
};

if (isUser(value)) {
  // value is typed as { name: string; age: number; }
}
```

<!--BEGIN FOOTER-->
<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/is-zod?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/is-zod.svg"></a></h2>

- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/is-zod.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->
