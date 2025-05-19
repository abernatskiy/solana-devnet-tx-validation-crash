import {run} from '@subsquid/batch-processor'
import {DataSourceBuilder, SolanaRpcClient} from '@subsquid/solana-stream'
import {TypeormDatabase} from '@subsquid/typeorm-store'

const dataSource = new DataSourceBuilder()
  .setRpc({
     client: new SolanaRpcClient({
       url: process.env.SOLANA_NODE!
     })
  })
  .setBlockRange({ from: 369843572, to: 369843572 })
  .addInstruction({
    where: {
      isCommitted: true,
    }
  })
  .build();

const database = new TypeormDatabase()

run(dataSource, database, async ctx => {
  console.log(`got ${ctx.blocks.length} blocks`)
})
