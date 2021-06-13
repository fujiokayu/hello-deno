const url: string = Deno.args[0]
const res: Response = await fetch(url)

const body: Uint8Array = new Uint8Array(await res.arrayBuffer())
await Deno.stdout.write(body)
