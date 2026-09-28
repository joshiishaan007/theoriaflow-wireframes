// Shared dummy dataset for the TheoriaFlow wireframe prototype.
// Every page reads from this file — no backend, everything is static and
// deterministic so cross-page links (?token=SYM, ?wallet=ADDR) resolve.

const TH_CHAINS = ["ethereum", "bsc", "base", "arbitrum", "solana", "robinhood"];

const TH_TOKENS = [
  { sym: "PEPE", name: "Pepe", chain: "ethereum", price: "$0.0000095", mcap: "$4.2B", fdv: "$4.9B", liq: "$11.2M", vol: "$92.1M", holders: "184,203", whalePct: "6.1%", age: "8mo", p5m: 0.4, p1h: 1.2, p6h: -0.8, p24h: 12.4, phase: "ACC", rating: "A-", risk: "Elevated sell-tax detected on 2 pools — review before trading" },
  { sym: "WIF", name: "dogwifhat", chain: "solana", price: "$1.82", mcap: "$1.8B", fdv: "$1.9B", liq: "$6.8M", vol: "$44.3M", holders: "91,410", whalePct: "4.2%", age: "11mo", p5m: -0.1, p1h: 0.6, p6h: 2.1, p24h: 8.1, phase: "ACC", rating: "B+", risk: null },
  { sym: "BONK", name: "Bonk", chain: "solana", price: "$0.0000151", mcap: "$920M", fdv: "$1.0B", liq: "$3.1M", vol: "$21.7M", holders: "612,004", whalePct: "3.0%", age: "1yr", p5m: 0.2, p1h: -0.4, p6h: -1.9, p24h: -3.2, phase: "DIS", rating: "C+", risk: null },
  { sym: "DEGEN", name: "Degen", chain: "base", price: "$0.0086", mcap: "$310M", fdv: "$340M", liq: "$2.6M", vol: "$18.4M", holders: "58,220", whalePct: "7.4%", age: "6mo", p5m: 1.1, p1h: 3.4, p6h: 9.2, p24h: 21.7, phase: "MARKUP", rating: "A", risk: null },
  { sym: "TOSHI", name: "Toshi", chain: "base", price: "$0.00031", mcap: "$210M", fdv: "$225M", liq: "$1.4M", vol: "$9.2M", holders: "34,880", whalePct: "5.5%", age: "7mo", p5m: -0.3, p1h: -0.9, p6h: -2.1, p24h: -1.4, phase: "DIS", rating: "B-", risk: null },
  { sym: "GRAIL", name: "Camelot Token", chain: "arbitrum", price: "$1,240", mcap: "$88M", fdv: "$91M", liq: "$1.1M", vol: "$3.1M", holders: "5,120", whalePct: "9.8%", age: "2yr", p5m: 0.1, p1h: 0.2, p6h: 0.5, p24h: 2.2, phase: "ACC", rating: "B", risk: null },
  { sym: "AERO", name: "Aerodrome", chain: "base", price: "$1.14", mcap: "$620M", fdv: "$680M", liq: "$4.2M", vol: "$15.9M", holders: "41,900", whalePct: "6.9%", age: "10mo", p5m: -0.2, p1h: 0.4, p6h: -1.1, p24h: 1.9, phase: "ACC", rating: "B+", risk: null },
  { sym: "BRETT", name: "Brett", chain: "base", price: "$0.084", mcap: "$1.1B", fdv: "$1.2B", liq: "$5.9M", vol: "$27.8M", holders: "112,300", whalePct: "5.1%", age: "5mo", p5m: 0.6, p1h: 1.8, p6h: 4.0, p24h: 16.3, phase: "MARKUP", rating: "A-", risk: null },
  { sym: "ARB", name: "Arbitrum", chain: "arbitrum", price: "$0.65", mcap: "$2.6B", fdv: "$6.5B", liq: "$18.4M", vol: "$61.2M", holders: "402,110", whalePct: "22.0%", age: "2yr", p5m: 0.3, p1h: 0.9, p6h: 1.2, p24h: 4.1, phase: "ACC", rating: "B+", risk: null },
  { sym: "SHIB", name: "Shiba Inu", chain: "ethereum", price: "$0.000014", mcap: "$8.2B", fdv: "$8.4B", liq: "$14.1M", vol: "$71.0M", holders: "1,410,200", whalePct: "11.2%", age: "4yr", p5m: -0.1, p1h: -0.5, p6h: -1.0, p24h: -2.7, phase: "DIS", rating: "C", risk: null },
  { sym: "USDG", name: "Global Dollar", chain: "ethereum", price: "$1.00", mcap: "$920M", fdv: "$920M", liq: "$40.1M", vol: "$8.1M", holders: "9,140", whalePct: "18.0%", age: "3mo", p5m: 0.0, p1h: 0.0, p6h: 0.0, p24h: 0.0, phase: "MARKUP", rating: "A", risk: null },
  { sym: "CAKE", name: "PancakeSwap", chain: "bsc", price: "$2.40", mcap: "$610M", fdv: "$610M", liq: "$9.8M", vol: "$22.4M", holders: "220,410", whalePct: "8.8%", age: "4yr", p5m: 0.2, p1h: -0.3, p6h: 1.1, p24h: 3.6, phase: "ACC", rating: "B", risk: null },
  { sym: "BANANA", name: "ApeSwap Token", chain: "bsc", price: "$0.25", mcap: "$18M", fdv: "$19M", liq: "$0.4M", vol: "$1.1M", holders: "8,220", whalePct: "12.4%", age: "3yr", p5m: -0.4, p1h: -1.1, p6h: -3.0, p24h: -6.2, phase: "DIS", rating: "D+", risk: "Low liquidity relative to market cap" },
  { sym: "OP", name: "Optimism", chain: "arbitrum", price: "$1.45", mcap: "$1.5B", fdv: "$6.1B", liq: "$12.0M", vol: "$34.9M", holders: "310,900", whalePct: "19.5%", age: "2yr", p5m: 0.1, p1h: 0.5, p6h: 0.9, p24h: 2.8, phase: "MARKUP", rating: "B+", risk: null },
  { sym: "AVAX", name: "Avalanche", chain: "arbitrum", price: "$28.50", mcap: "$11.4B", fdv: "$13.9B", liq: "$21.2M", vol: "$88.0M", holders: "890,410", whalePct: "16.1%", age: "4yr", p5m: 0.0, p1h: 0.2, p6h: -0.4, p24h: 1.0, phase: "ACC", rating: "A-", risk: null },
  { sym: "PENGU", name: "Pudgy Penguins", chain: "solana", price: "$0.032", mcap: "$1.9B", fdv: "$3.2B", liq: "$7.4M", vol: "$51.2M", holders: "220,010", whalePct: "9.1%", age: "9mo", p5m: 0.9, p1h: 2.1, p6h: 6.4, p24h: 18.9, phase: "MARKUP", rating: "A", risk: null },
  { sym: "GRIFFAIN", name: "Griffain", chain: "solana", price: "$0.41", mcap: "$260M", fdv: "$410M", liq: "$1.9M", vol: "$9.8M", holders: "44,200", whalePct: "14.7%", age: "2mo", p5m: -1.2, p1h: -4.1, p6h: -9.4, p24h: -22.1, phase: "MARKDOWN", rating: "D", risk: "Rapid whale distribution in last 6h" },
  { sym: "STONKBROKER", name: "StonkBroker", chain: "robinhood", price: "$0.05", mcap: "$14M", fdv: "$50M", liq: "$0.3M", vol: "$0.9M", holders: "3,110", whalePct: "21.0%", age: "1mo", p5m: 0.5, p1h: 1.8, p6h: 5.2, p24h: 14.0, phase: "MARKUP", rating: "C+", risk: "New token, thin liquidity" },
  { sym: "CASHCAT", name: "CashCat", chain: "robinhood", price: "$0.205", mcap: "$41M", fdv: "$205M", liq: "$0.6M", vol: "$2.1M", holders: "6,700", whalePct: "17.5%", age: "3mo", p5m: -0.6, p1h: -1.4, p6h: -3.9, p24h: -8.0, phase: "DIS", rating: "C", risk: null },
  { sym: "USDT0", name: "Tether USD (Omnichain)", chain: "robinhood", price: "$1.00", mcap: "$310M", fdv: "$310M", liq: "$22.1M", vol: "$4.4M", holders: "12,900", whalePct: "24.1%", age: "6mo", p5m: 0.0, p1h: 0.0, p6h: 0.0, p24h: 0.1, phase: "ACC", rating: "A", risk: null },
  { sym: "WBTC", name: "Wrapped BTC", chain: "ethereum", price: "$68,000", mcap: "$13.4B", fdv: "$13.4B", liq: "$61.2M", vol: "$210.4M", holders: "290,410", whalePct: "31.0%", age: "5yr", p5m: 0.1, p1h: 0.3, p6h: 0.6, p24h: 1.4, phase: "ACC", rating: "A", risk: null },
  { sym: "DAI", name: "Dai Stablecoin", chain: "ethereum", price: "$1.00", mcap: "$5.3B", fdv: "$5.3B", liq: "$91.4M", vol: "$41.2M", holders: "610,200", whalePct: "9.4%", age: "6yr", p5m: 0.0, p1h: 0.0, p6h: 0.0, p24h: -0.1, phase: "MARKUP", rating: "A", risk: null },
  { sym: "UNI", name: "Uniswap", chain: "ethereum", price: "$6.50", mcap: "$3.9B", fdv: "$6.5B", liq: "$18.9M", vol: "$54.1M", holders: "410,900", whalePct: "18.2%", age: "5yr", p5m: 0.2, p1h: 0.7, p6h: 1.4, p24h: 3.2, phase: "ACC", rating: "B+", risk: null },
  { sym: "LINK", name: "Chainlink", chain: "ethereum", price: "$11.20", mcap: "$7.1B", fdv: "$11.2B", liq: "$32.1M", vol: "$102.4M", holders: "780,110", whalePct: "27.4%", age: "7yr", p5m: -0.1, p1h: -0.2, p6h: 0.3, p24h: -0.9, phase: "DIS", rating: "B", risk: null }
];

function thTokenBySym(sym) {
  return TH_TOKENS.find(function (t) { return t.sym === sym; }) || TH_TOKENS[0];
}

// Trade/Bridge use a SEPARATE small native+stable catalog per chain (mirrors the
// real prototype backend's fixtures/token_catalog.py), not the market/screener
// universe above — a swap should default to ETH -> USDC, not to whichever altcoin
// happens to sort first in the screener.
const TH_TRADE_CATALOG = {
  ethereum: [
    { sym: "ETH", name: "Ethereum", price: "$2,500.00", chain: "ethereum", isNative: true },
    { sym: "USDC", name: "USD Coin", price: "$1.00", chain: "ethereum" },
    { sym: "USDT", name: "Tether USD", price: "$1.00", chain: "ethereum" }
  ],
  bsc: [
    { sym: "BNB", name: "BNB", price: "$580.00", chain: "bsc", isNative: true },
    { sym: "USDT", name: "Tether USD", price: "$1.00", chain: "bsc" },
    { sym: "USDC", name: "USD Coin", price: "$1.00", chain: "bsc" }
  ],
  base: [
    { sym: "ETH", name: "Ethereum", price: "$2,500.00", chain: "base", isNative: true },
    { sym: "USDC", name: "USD Coin", price: "$1.00", chain: "base" }
  ],
  arbitrum: [
    { sym: "ETH", name: "Ethereum", price: "$2,500.00", chain: "arbitrum", isNative: true },
    { sym: "USDC", name: "USD Coin", price: "$1.00", chain: "arbitrum" }
  ],
  solana: [
    { sym: "SOL", name: "Solana", price: "$140.00", chain: "solana", isNative: true },
    { sym: "USDC", name: "USD Coin", price: "$1.00", chain: "solana" }
  ],
  robinhood: [
    { sym: "ETH", name: "Ethereum", price: "$2,500.00", chain: "robinhood", isNative: true },
    { sym: "USDC", name: "USD Coin", price: "$1.00", chain: "robinhood" }
  ]
};
function thTokensForChain(chain) {
  return TH_TRADE_CATALOG[chain] || TH_TRADE_CATALOG.ethereum;
}

const TH_NEW_PAIRS = [
  { name: "MOONCAT / ETH", token: "PEPE", age: "2m" },
  { name: "RUGZ / SOL", token: "WIF", age: "6m" },
  { name: "FLUX / BASE", token: "DEGEN", age: "11m" },
  { name: "ZAPPY / ARB", token: "GRAIL", age: "24m" }
];

const TH_WALLETS = [
  { wallet: "0x7a3f..92c1", badge: "Whale", cls: "cyan", balance: "1.2M", pct: "3.4%", firstSeen: "12d ago", cat: "identities", pnl: "+$182K" },
  { wallet: "0x9c21..4de0", badge: "Bot", cls: "pink", balance: "640K", pct: "1.8%", firstSeen: "3d ago", cat: "identities", pnl: "+$94K" },
  { wallet: "0x1b88..77aa", badge: "Mega Whale", cls: "amber", balance: "4.1M", pct: "11.6%", firstSeen: "41d ago", cat: "whales", pnl: "+$61K" },
  { wallet: "0x44de..9911", badge: "CEX", cls: "orange", balance: "2.9M", pct: "8.2%", firstSeen: "88d ago", cat: "identities", pnl: "+$40K" },
  { wallet: "0x22ab..1c40", badge: "Smart$", cls: "cyan", balance: "510K", pct: "1.4%", firstSeen: "6d ago", cat: "hunters", pnl: "+$28K" },
  { wallet: "0x66fe..a032", badge: "Dev", cls: "green", balance: "890K", pct: "2.5%", firstSeen: "190d ago", cat: "contracts", pnl: "+$9K" },
  { wallet: "0x33cc..5b19", badge: "Router", cls: "blue", balance: "220K", pct: "0.6%", firstSeen: "2d ago", cat: "contracts", pnl: "+$4K" },
  { wallet: "0x88aa..de77", badge: "Whale", cls: "cyan", balance: "1.7M", pct: "4.8%", firstSeen: "55d ago", cat: "whales", pnl: "+$77K" },
  { wallet: "0x11ff..0022", badge: "Bot", cls: "pink", balance: "310K", pct: "0.9%", firstSeen: "1d ago", cat: "identities", pnl: "+$2K" },
  { wallet: "0x50fc..3a91", badge: "Smart$", cls: "cyan", balance: "720K", pct: "2.0%", firstSeen: "63d ago", cat: "hunters", pnl: "+$51K" },
  { wallet: "0x8b3d..ee02", badge: "Whale", cls: "cyan", balance: "980K", pct: "2.8%", firstSeen: "8d ago", cat: "whales", pnl: "+$19K" },
  { wallet: "0x99de..7712", badge: "Bot", cls: "pink", balance: "150K", pct: "0.4%", firstSeen: "19d ago", cat: "contracts", pnl: "+$6K" }
];

const TH_BADGE_STYLES = {
  cyan: { color: "#00F0FF", bg: "rgba(0,240,255,.12)" },
  green: { color: "#00FF87", bg: "rgba(0,255,135,.12)" },
  red: { color: "#FF3B56", bg: "rgba(255,59,86,.12)" },
  pink: { color: "#F472B6", bg: "rgba(244,114,182,.15)" },
  amber: { color: "#FBBF24", bg: "rgba(245,158,11,.2)" },
  orange: { color: "#F59E0B", bg: "rgba(245,158,11,.12)" },
  blue: { color: "#38BDF8", bg: "rgba(56,189,248,.15)" }
};

const TH_BRIDGE_PROTOCOLS = [
  { id: "across", protocol: "Across", time: "~2m", gas: "$1.20", best: false },
  { id: "socket", protocol: "Socket", time: "~4m", gas: "$0.90", best: false },
  { id: "relay", protocol: "Relay", time: "~1m", gas: "$1.80", best: true }
];

const TH_GAS_BY_CHAIN = {
  ethereum: { label: "Ethereum", feeUsd: 3.4 },
  bsc: { label: "BSC", feeUsd: 0.12 },
  base: { label: "Base", feeUsd: 0.03 },
  arbitrum: { label: "Arbitrum", feeUsd: 0.08 },
  solana: { label: "Solana", feeUsd: 0.0025 },
  robinhood: { label: "Robinhood L2", feeUsd: 0.01 }
};

// Deterministic string hash -> [0,1) stream, same idea as the backend's seeded RNG.
function thSeedRng(seed) {
  var h = 1779033703 ^ String(seed).length;
  for (var i = 0; i < String(seed).length; i++) { h = Math.imul(h ^ seed.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  return function () { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}

// Fake wallet-balance for a token — deterministic per (address, symbol) so it never
// flickers across renders. Sized to a plausible $10-$8000 USD holding, not a flat
// random quantity, so a $68,000 token doesn't show a thousand "coins" in the wallet.
function thFakeBalance(sym, addr) {
  var r = thSeedRng((addr || "0xDEMO") + ":" + sym + ":balance");
  var usdValue = 10 + r() * 7990;
  var priceNum = thPriceNumBySym(sym);
  var qty = usdValue / (priceNum || 1);
  var decimals = qty >= 1000 ? 1 : qty >= 1 ? 4 : 6;
  return Math.round(qty * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
// Looks a symbol up across BOTH catalogs (market universe + trade natives/stables)
// since a Trade/Bridge symbol like "ETH" or "USDC" only exists in TH_TRADE_CATALOG.
function thAnyTokenBySym(sym) {
  var hit = TH_TOKENS.find(function (t) { return t.sym === sym; });
  if (hit) return hit;
  var chains = Object.keys(TH_TRADE_CATALOG);
  for (var i = 0; i < chains.length; i++) {
    var found = TH_TRADE_CATALOG[chains[i]].find(function (t) { return t.sym === sym; });
    if (found) return found;
  }
  return TH_TOKENS[0];
}
// Named distinctly from any page-local `thPriceNum(priceString)` helper — this one
// takes a SYMBOL and looks the token up, so the two must never collide by name.
function thPriceNumBySym(sym) {
  var t = thAnyTokenBySym(sym);
  return parseFloat(String(t.price).replace(/[$,]/g, "")) || 0;
}

// --- Simulated wallet connect (localStorage only, no real web3) ---
function thConnectedWallet() {
  try { return JSON.parse(localStorage.getItem("th_wallet") || "null"); } catch (e) { return null; }
}
function thConnectWallet(provider) {
  var r = thSeedRng(provider + ":" + Date.now());
  var addr = "0x" + Array.from({ length: 40 }, function () { return Math.floor(r() * 16).toString(16); }).join("");
  var wallet = { address: addr, provider: provider, connectedAt: new Date().toISOString() };
  localStorage.setItem("th_wallet", JSON.stringify(wallet));
  return wallet;
}
function thDisconnectWallet() { localStorage.removeItem("th_wallet"); }
function thTruncateAddr(addr) { return addr ? addr.slice(0, 6) + "..." + addr.slice(-4) : ""; }

// Simulated portfolio for a connected wallet — a deterministic subset of TH_TOKENS
// with fake holdings, so the Wallet Overview page has something real to show.
function thPortfolioFor(addr) {
  var r = thSeedRng(addr + ":portfolio");
  var picks = TH_TOKENS.slice().sort(function () { return r() - 0.5; }).slice(0, 7);
  return picks.map(function (t) {
    var qty = thFakeBalance(t.sym, addr);
    var priceNum = parseFloat(String(t.price).replace(/[$,]/g, "")) || 0;
    return { token: t, qty: qty, valueUsd: qty * priceNum };
  }).sort(function (a, b) { return b.valueUsd - a.valueUsd; });
}

const TH_POOLS = [
  { pool: "PEPE/WETH", dex: "Uniswap V3", liq: "$8.1M", vol: "$61M", fee: "0.30%", age: "8mo" },
  { pool: "PEPE/USDC", dex: "Uniswap V3", liq: "$2.4M", vol: "$21M", fee: "0.05%", age: "8mo" },
  { pool: "PEPE/WETH", dex: "Sushiswap", liq: "$0.7M", vol: "$4.2M", fee: "0.30%", age: "7mo" },
  { pool: "PEPE/USDT", dex: "Curve", liq: "$0.4M", vol: "$1.1M", fee: "0.04%", age: "5mo" },
  { pool: "PEPE/WETH", dex: "Balancer", liq: "$0.2M", vol: "$0.6M", fee: "0.20%", age: "3mo" }
];

const TH_HOLDER_TIERS = [
  { tier: "Whale (>1%)", wallets: "42", pct: "38.1%", avg: "1.6M" },
  { tier: "Large (0.1-1%)", wallets: "318", pct: "24.7%", avg: "128K" },
  { tier: "Mid (0.01-0.1%)", wallets: "2,140", pct: "19.2%", avg: "14.8K" },
  { tier: "Small (<0.01%)", wallets: "181,700", pct: "18.0%", avg: "420" }
];

const TH_BUNDLES = [
  { id: "BND-0192", wallets: "6", source: "0x9f2c..0e1a", delta: "+0s" },
  { id: "BND-0201", wallets: "11", source: "0x4a8e..dd21", delta: "+4s" },
  { id: "BND-0244", wallets: "4", source: "0x11bc..9f80", delta: "+1s" },
  { id: "BND-0301", wallets: "8", source: "0x77aa..2c40", delta: "+12s" }
];

const TH_STEALTH = [
  { wallet: "0x22ab..1c40", window: "41d", entry: "$0.0000061", unreal: "+55.7%" },
  { wallet: "0x99de..7712", window: "19d", entry: "$0.0000082", unreal: "+15.9%" },
  { wallet: "0x50fc..3a91", window: "63d", entry: "$0.0000045", unreal: "+111.1%" },
  { wallet: "0x8b3d..ee02", window: "8d", entry: "$0.0000090", unreal: "+5.6%" }
];

const TH_ORDERS = [
  { side: "BUY", price: "$0.0000090", size: "$4.2k", wallet: "0x7a3f..92c1", age: "2h", status: "Open" },
  { side: "SELL", price: "$0.0000102", size: "$1.8k", wallet: "0x9c21..4de0", age: "40m", status: "Open" },
  { side: "BUY", price: "$0.0000088", size: "$9.1k", wallet: "0x1b88..77aa", age: "6h", status: "Partial" },
  { side: "SELL", price: "$0.0000099", size: "$620", wallet: "0x44de..9911", age: "12m", status: "Open" }
];

const TH_AI_ANSWERS = {
  "Who's accumulating?": "3 wallets accumulated 4.1% of supply over the past 41 days via stealth buys under $2k each — consistent with a smart-money entry pattern rather than a coordinated bundle launch.",
  "Bundle risk?": "4 bundles detected at launch, largest holding 11 wallets funded from a single source. Combined they control 6.8% of supply — moderate risk, watch for coordinated exits.",
  "Is this a honeypot?": "No blocked-sell signatures detected across the last 500 transactions. Sell tax sits at 1.2%, within normal range. Theoria Shield: Safe.",
  "Summarize whale flow": "Whale buy/sell split is 62/38 over the last hour, led by 2 wallets tagged Smart Money. Net whale flow is positive (+$14.2K)."
};

const TH_ORDERFLOW_ROWS = [
  { sym: "PEPE", token: "Pepe", pool: "PEPE/WETH", chain: "ethereum", assetClass: "crypto", whales: 42, cls: "Accumulation", clsColor: "#00FF87" },
  { sym: "WIF", token: "dogwifhat", pool: "WIF/SOL", chain: "solana", assetClass: "crypto", whales: 19, cls: "Distribution", clsColor: "#FF3B56" },
  { sym: "DEGEN", token: "Degen", pool: "DEGEN/WETH", chain: "base", assetClass: "crypto", whales: 27, cls: "Markup", clsColor: "#00F0FF" },
  { sym: "TSLA", token: "Tesla (tokenized)", pool: "TSLA/USDC", chain: "robinhood", assetClass: "stocks", whales: 8, cls: "Markdown", clsColor: "#F59E0B" },
  { sym: "BONK", token: "Bonk", pool: "BONK/SOL", chain: "solana", assetClass: "crypto", whales: 11, cls: "Distribution", clsColor: "#FF3B56" },
  { sym: "AERO", token: "Aerodrome", pool: "AERO/WETH", chain: "base", assetClass: "crypto", whales: 14, cls: "Accumulation", clsColor: "#00FF87" },
  { sym: "ARB", token: "Arbitrum", pool: "ARB/WETH", chain: "arbitrum", assetClass: "crypto", whales: 22, cls: "Markup", clsColor: "#00F0FF" },
  { sym: "AAPL", token: "Apple (tokenized)", pool: "AAPL/USDC", chain: "robinhood", assetClass: "stocks", whales: 31, cls: "Accumulation", clsColor: "#00FF87" }
];
