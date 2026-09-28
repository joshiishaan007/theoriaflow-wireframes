// Shared top nav + Ctrl+K search + watchlist panel + simulated wallet connect,
// used on every page. Nothing here talks to a real network — localStorage only.

function thWatchlist() {
  try { return JSON.parse(localStorage.getItem("th_watchlist") || "[]"); } catch (e) { return []; }
}
function thIsWatched(sym) { return thWatchlist().indexOf(sym) !== -1; }
function thToggleWatch(sym) {
  var list = thWatchlist();
  var i = list.indexOf(sym);
  if (i === -1) { list.push(sym); } else { list.splice(i, 1); }
  localStorage.setItem("th_watchlist", JSON.stringify(list));
  if (document.getElementById("th-watchlist-panel")) thRenderWatchlistPanel();
  return list.indexOf(sym) !== -1;
}

function thRenderNav(currentPage) {
  var links = [
    { href: "1-screener.html", key: "screener", label: "Screener" },
    { href: "3-wallet-record.html", key: "wallet-record", label: "Wallet Record" },
    { href: "4-tearsheet-dock.html", key: "tearsheet", label: "Tearsheet" },
    { href: "5-order-flow-stub.html", key: "order-flow", label: "Order Flow" },
    { href: "6-wallet-overview.html", key: "portfolio", label: "Portfolio" }
  ];
  var linksHtml = links.map(function (l) {
    return '<a href="' + l.href + '" class="' + (l.key === currentPage ? "current" : "") + '">' + l.label + "</a>";
  }).join("");

  var nav = document.getElementById("th-nav");
  if (!nav) return;
  nav.innerHTML =
    '<span class="th-logo" onclick="window.location.href=\'1-screener.html\'">THEORIAFLOW</span>' +
    '<div class="th-navlinks">' + linksHtml + "</div>" +
    '<div style="flex:1;"></div>' +
    '<button class="th-search-btn" onclick="thOpenSearch()">&#8984;K &nbsp;Search</button>' +
    '<button class="th-search-btn" onclick="thOpenWatchlistPanel()" title="Watchlist">&#9733; <span id="th-watch-count"></span></button>' +
    '<div id="th-wallet-slot"></div>';

  thInjectSearchOverlay();
  thInjectWatchlistPanel();
  thInjectWalletUi();
  thRenderWalletSlot();
  thUpdateWatchCount();
}

function thUpdateWatchCount() {
  var el = document.getElementById("th-watch-count");
  if (el) el.textContent = thWatchlist().length;
}

/* ---------- Ctrl+K search ---------- */

function thInjectSearchOverlay() {
  if (document.getElementById("th-search-overlay")) return;
  var el = document.createElement("div");
  el.id = "th-search-overlay";
  el.innerHTML =
    '<div class="box" onclick="event.stopPropagation()">' +
    '<input id="th-search-input" type="text" placeholder="Search tokens..." oninput="thRunSearch(this.value)" />' +
    '<div class="results" id="th-search-results"></div>' +
    "</div>";
  el.addEventListener("click", thCloseSearch);
  document.body.appendChild(el);

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); thOpenSearch(); }
    if (e.key === "Escape") { thCloseSearch(); thCloseWatchlistPanel(); thCloseWalletModal(); }
  });
}
function thOpenSearch() {
  document.getElementById("th-search-overlay").classList.add("open");
  var input = document.getElementById("th-search-input");
  input.value = "";
  input.focus();
  thRunSearch("");
}
function thCloseSearch() {
  var el = document.getElementById("th-search-overlay");
  if (el) el.classList.remove("open");
}
function thRunSearch(query) {
  var q = query.trim().toLowerCase();
  var matches = TH_TOKENS.filter(function (t) {
    return !q || t.sym.toLowerCase().indexOf(q) !== -1 || t.name.toLowerCase().indexOf(q) !== -1;
  }).slice(0, 12);
  var box = document.getElementById("th-search-results");
  if (matches.length === 0) {
    box.innerHTML = '<div style="padding:16px;text-align:center;color:#64748B;font-size:12px;">No tokens match.</div>';
    return;
  }
  box.innerHTML = matches.map(function (t) {
    var chg = t.p24h >= 0 ? "#00FF87" : "#FF3B56";
    return '<div class="result-row" onclick="window.location.href=\'2-token-detail.html?token=' + t.sym + '\'">' +
      '<span>' + t.sym + ' <span style="color:#64748B;font-size:10px;">' + t.chain + '</span></span>' +
      '<span>' + t.price + ' <span style="color:' + chg + ';">' + (t.p24h >= 0 ? "+" : "") + t.p24h + '%</span></span>' +
      "</div>";
  }).join("");
}

/* ---------- Watchlist slide-out panel ---------- */

function thInjectWatchlistPanel() {
  if (document.getElementById("th-watchlist-panel")) return;
  var el = document.createElement("div");
  el.id = "th-watchlist-panel";
  el.className = "th-slideout";
  el.innerHTML =
    '<div class="th-slideout-inner" onclick="event.stopPropagation()">' +
    '<div class="th-slideout-header"><span class="th-heading" style="font-size:12px;">Watchlist</span>' +
    '<span style="cursor:pointer;color:var(--text2);" onclick="thCloseWatchlistPanel()">&#10005;</span></div>' +
    '<div id="th-watchlist-items" style="overflow-y:auto;flex:1;"></div>' +
    "</div>";
  el.addEventListener("click", thCloseWatchlistPanel);
  document.body.appendChild(el);
}
function thOpenWatchlistPanel() {
  document.getElementById("th-watchlist-panel").classList.add("open");
  thRenderWatchlistPanel();
}
function thCloseWatchlistPanel() {
  var el = document.getElementById("th-watchlist-panel");
  if (el) el.classList.remove("open");
}
function thRenderWatchlistPanel() {
  var syms = thWatchlist();
  var box = document.getElementById("th-watchlist-items");
  thUpdateWatchCount();
  if (!box) return;
  if (syms.length === 0) {
    box.innerHTML = '<div style="padding:20px;text-align:center;color:#64748B;font-size:11px;">No tokens starred yet. Click the &#9733; on any token row to add it.</div>';
    return;
  }
  box.innerHTML = syms.map(function (sym) {
    var t = thTokenBySym(sym);
    var chg = t.p24h >= 0 ? "#00FF87" : "#FF3B56";
    return '<div class="result-row" style="padding:10px;">' +
      '<span style="cursor:pointer;flex:1;" onclick="window.location.href=\'2-token-detail.html?token=' + t.sym + '\'">' + t.sym + ' <span style="color:#64748B;font-size:10px;">' + t.chain + '</span></span>' +
      '<span style="margin-right:10px;">' + t.price + ' <span style="color:' + chg + ';">' + (t.p24h >= 0 ? "+" : "") + t.p24h + '%</span></span>' +
      '<span style="cursor:pointer;color:#FF3B56;" onclick="thToggleWatch(\'' + t.sym + '\')">&#10005;</span>' +
      "</div>";
  }).join("");
}

/* ---------- Simulated wallet connect ---------- */

function thInjectWalletUi() {
  if (document.getElementById("th-wallet-modal")) return;
  var modal = document.createElement("div");
  modal.id = "th-wallet-modal";
  modal.className = "modal-overlay";
  modal.innerHTML =
    '<div class="th-card" style="width:320px;padding:16px;" onclick="event.stopPropagation()">' +
    '<div style="display:flex;justify-content:space-between;margin-bottom:12px;"><span class="th-heading" style="font-size:12px;">Connect a wallet</span><span style="cursor:pointer;color:var(--text2);" onclick="thCloseWalletModal()">&#10005;</span></div>' +
    '<div style="display:flex;flex-direction:column;gap:8px;">' +
    thWalletProviderRow("Rabby") + thWalletProviderRow("MetaMask") + thWalletProviderRow("WalletConnect") +
    "</div>" +
    '<div style="font-size:9.5px;color:var(--text3);margin-top:12px;text-align:center;">Simulated only &mdash; no real wallet is contacted.</div>' +
    "</div>";
  modal.addEventListener("click", thCloseWalletModal);
  document.body.appendChild(modal);

  var dd = document.createElement("div");
  dd.id = "th-wallet-dropdown";
  dd.className = "modal-overlay";
  dd.innerHTML =
    '<div class="th-card" style="width:260px;padding:14px;position:absolute;" id="th-wallet-dropdown-box" onclick="event.stopPropagation()">' +
    '<div id="th-wallet-dd-addr" style="font-size:12px;font-weight:700;margin-bottom:10px;"></div>' +
    '<a href="6-wallet-overview.html" class="th-pill" style="display:block;text-align:center;margin-bottom:8px;">Portfolio</a>' +
    '<span class="th-pill" style="display:block;text-align:center;color:#FF3B56;border-color:#FF3B56;" onclick="thDisconnectWallet();thRenderWalletSlot();thCloseWalletDropdown();">Disconnect</span>' +
    "</div>";
  dd.style.background = "transparent";
  dd.addEventListener("click", thCloseWalletDropdown);
  document.body.appendChild(dd);
}
function thWalletProviderRow(name) {
  return '<div class="th-pill" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;" onclick="thPickProvider(\'' + name + '\')"><span>' + name + '</span><span style="color:var(--text3);font-size:10px;">Connect</span></div>';
}
function thOpenWalletModal() { document.getElementById("th-wallet-modal").classList.add("open"); }
function thCloseWalletModal() { document.getElementById("th-wallet-modal").classList.remove("open"); }
function thPickProvider(name) {
  thConnectWallet(name);
  thCloseWalletModal();
  thRenderWalletSlot();
}
function thOpenWalletDropdown() {
  var w = thConnectedWallet();
  if (!w) return;
  document.getElementById("th-wallet-dd-addr").textContent = w.provider + " · " + thTruncateAddr(w.address);
  document.getElementById("th-wallet-dropdown").classList.add("open");
}
function thCloseWalletDropdown() {
  var el = document.getElementById("th-wallet-dropdown");
  if (el) el.classList.remove("open");
}
function thRenderWalletSlot() {
  var slot = document.getElementById("th-wallet-slot");
  if (!slot) return;
  var w = thConnectedWallet();
  if (w) {
    slot.innerHTML = '<button class="th-wallet-btn" onclick="thOpenWalletDropdown()">' + thTruncateAddr(w.address) + "</button>";
  } else {
    slot.innerHTML = '<button class="th-wallet-btn" onclick="thOpenWalletModal()">Connect Wallet</button>';
  }
}

function thQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
