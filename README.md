# hello-deno

my first step to starting Deno

## first step

### [Installation](https://deno.land/#installation)

```shell
> brew install deno
```

### version

```shell
> deno --version
deno 1.11.0 (release, x86_64-apple-darwin)
v8 9.1.269.35
typescript 4.3.2
```

### hello Deno

```ts
console.log('hello Deno')
```

```shell
> deno run hello-Deno.ts
Check file:///your-repo/hello-Deno.ts
hello Deno
```

## [Permissions](https://deno.land/manual@v1.11.0/getting_started/permissions)

Deno is secure by default. Therefore, unless you specifically enable it, a deno module has no file, network, or environment access for example.

- [Permissions list](https://deno.land/manual@v1.11.0/getting_started/permissions#permissions-list)
- [Permissions allow-list](https://deno.land/manual@v1.11.0/getting_started/permissions#permissions-allow-list)
- [Network access](https://deno.land/manual@v1.11.0/getting_started/permissions#network-access)

### Network access sample: [Making an HTTP request](https://deno.land/manual/getting_started/first_steps#making-an-http-request)

```ts
const url: string = Deno.args[0]
const res: Response = await fetch(url)

const body: Uint8Array = new Uint8Array(await res.arrayBuffer())
await Deno.stdout.write(body)
```

```shell
> deno run --allow-net=example.com curl.ts https://example.com
<!doctype html>
...
```

### [Reading a file sample](https://deno.land/manual/getting_started/first_steps#reading-a-file)

```ts
const filenames: string[] = Deno.args
for (const filename of filenames) {
  const file = await Deno.open(filename)
  await Deno.copy(file, Deno.stdout)
  file.close()
}
```

```shell
> deno run --allow-read src/cat.ts ./README.md
# hello-deno
```

## [Third Party Modules](https://deno.land/x)

- [How do I use modules on deno.land/x?](https://deno.land/x#info)
- [How to keep the version of packages in Deno](https://stackoverflow.com/questions/64496938/how-to-keep-the-version-of-packages-in-deno)
  - [Import maps](https://deno.land/manual/linking_to_external_code/import_maps)