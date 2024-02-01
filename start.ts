const servers: string = Deno.env.get('SERVERS')
const delay: number = Number(Deno.env.get('DELAY'))

if (!servers) {
  console.error(`You need to provide the environment variable 'SERVERS' with url list.`)
  Deno.exit(1)
}

const serverList = servers.split(',')

Deno.cron('ping', { minute: { every: delay || 1 } }, () => {
  console.log('ping')
  serverList.map(url => fetch(url).catch())
})
