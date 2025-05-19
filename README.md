# Solana devnet tx validation crash

```bash
git clone https://github.com/abernatskiy/solana-devnet-tx-validation-crash
cd solana-devnet-tx-validation-crash
npm ci
npm run build
docker compose up -d
node -r dotenv/config lib/main.js
```
