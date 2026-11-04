// 分流、DNS 与域名嗅探覆写；节点和订阅保留在客户端本地。
const dnsPlan = {
  "enable": true,
  "ipv6": false,
  "enhanced-mode": "redir-host",
  "respect-rules": false,
  "default-nameserver": [
    "119.29.29.29",
    "223.5.5.5"
  ],
  "proxy-server-nameserver": [
    "https://doh.pub/dns-query",
    "https://dns.alidns.com/dns-query"
  ],
  "direct-nameserver": [
    "https://doh.pub/dns-query",
    "https://dns.alidns.com/dns-query"
  ],
  "direct-nameserver-follow-policy": false,
  "nameserver-policy": {
    "rule-set:rules-01": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "rule-set:rules-02": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "rule-set:rules-03": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-04": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-05": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-06": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-07": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-08": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-09": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-10": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-11": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-12": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-13": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-14": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-15": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "rule-set:rules-16": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "rule-set:rules-17": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ]
  },
  "nameserver": [
    "8.8.8.8#PROXY"
  ]
};
const routingPlan = {
  "rule-providers": {
    "rules-01": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-01.cbae97f3966c3a4c5b79829af32c4faa6ac47ddc230ed4766f902158dce7505d.list",
      "path": "./flclash/rulesets/rules-01.cbae97f3966c3a4c5b79829af32c4faa6ac47ddc230ed4766f902158dce7505d.list",
      "interval": 604800
    },
    "rules-02": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-02.a0986ce68b758584191d2e94ecd5a33ab3d03c87c8f07ab0152812db9f6e3e06.list",
      "path": "./flclash/rulesets/rules-02.a0986ce68b758584191d2e94ecd5a33ab3d03c87c8f07ab0152812db9f6e3e06.list",
      "interval": 604800
    },
    "rules-03": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-03.37f15a7c62d22b40807aec0f0c689ce9fcbb829201121d10e69c69cab3ebe2ff.list",
      "path": "./flclash/rulesets/rules-03.37f15a7c62d22b40807aec0f0c689ce9fcbb829201121d10e69c69cab3ebe2ff.list",
      "interval": 604800
    },
    "rules-04": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/6dcdb6bf663611e0e36d04dae16e6bb071f6807b/ruleset/proxy.txt",
      "path": "./flclash/upstream/34ed396c398285295a3df97a5b4ca1a716b1861a8aad4788653adbb988f64a2f.list",
      "interval": 604800
    },
    "rules-05": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-05.5a40b58aa41e2fe378c8695335eb49abc539b580c72d2fb3b428e5990b3a8000.list",
      "path": "./flclash/rulesets/rules-05.5a40b58aa41e2fe378c8695335eb49abc539b580c72d2fb3b428e5990b3a8000.list",
      "interval": 604800
    },
    "rules-06": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-06.88b73f9452303e5091dbe2de309646a39207355e978d46b109bfa55f9e5025e9.list",
      "path": "./flclash/rulesets/rules-06.88b73f9452303e5091dbe2de309646a39207355e978d46b109bfa55f9e5025e9.list",
      "interval": 604800
    },
    "rules-07": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-07.1c74a6469724f5d1a70354e1f7143367c2711c3de2b9786008cbca73eda22c10.list",
      "path": "./flclash/rulesets/rules-07.1c74a6469724f5d1a70354e1f7143367c2711c3de2b9786008cbca73eda22c10.list",
      "interval": 604800
    },
    "rules-08": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-08.55a5974a7e2bd8163169c20a1dd4c5c0155b4d42267d594fc6bfa722766893c9.list",
      "path": "./flclash/rulesets/rules-08.55a5974a7e2bd8163169c20a1dd4c5c0155b4d42267d594fc6bfa722766893c9.list",
      "interval": 604800
    },
    "rules-09": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-09.c4dab88893b4e677eeff7668af64a7302d66e33a786e57a7acdd3d1f5275d5ce.list",
      "path": "./flclash/rulesets/rules-09.c4dab88893b4e677eeff7668af64a7302d66e33a786e57a7acdd3d1f5275d5ce.list",
      "interval": 604800
    },
    "rules-10": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-10.c95f6c8882480aeb84ef1a7be3938e6b1af78f0dbeb9b07e40ccd45e030f8474.list",
      "path": "./flclash/rulesets/rules-10.c95f6c8882480aeb84ef1a7be3938e6b1af78f0dbeb9b07e40ccd45e030f8474.list",
      "interval": 604800
    },
    "rules-11": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-11.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "path": "./flclash/rulesets/rules-11.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "interval": 604800
    },
    "rules-12": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-12.483c5dbc086da2ca47c28e8e57ed6a3e9ba4f6a1edb56ba9de0ae8705cb82146.list",
      "path": "./flclash/rulesets/rules-12.483c5dbc086da2ca47c28e8e57ed6a3e9ba4f6a1edb56ba9de0ae8705cb82146.list",
      "interval": 604800
    },
    "rules-13": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-13.9f83c04cb3cbd0fe59d423b7ca3614048059f9b06dd057fd72264b717f649dcf.list",
      "path": "./flclash/rulesets/rules-13.9f83c04cb3cbd0fe59d423b7ca3614048059f9b06dd057fd72264b717f649dcf.list",
      "interval": 604800
    },
    "rules-14": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-14.b907c40719b341d158b02770a76d0540dc919bd4735fbfa49b32fadd7f912ae9.list",
      "path": "./flclash/rulesets/rules-14.b907c40719b341d158b02770a76d0540dc919bd4735fbfa49b32fadd7f912ae9.list",
      "interval": 604800
    },
    "rules-15": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-15.f70f3f7bd883c516355ea046268a267a961a6c3046ba1aa14c1ab90770331468.list",
      "path": "./flclash/rulesets/rules-15.f70f3f7bd883c516355ea046268a267a961a6c3046ba1aa14c1ab90770331468.list",
      "interval": 604800
    },
    "rules-16": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-16.b774e39e5332a4f098f2c9cc1e75f5305a22e76b346d42841b923d8ce6807d5a.list",
      "path": "./flclash/rulesets/rules-16.b774e39e5332a4f098f2c9cc1e75f5305a22e76b346d42841b923d8ce6807d5a.list",
      "interval": 604800
    },
    "rules-17": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/293cca573b170f8d89d0a7c267518748a598c780/ruleset/direct.txt",
      "path": "./flclash/upstream/2e42c17f8f8a9378a4591c2351752a95a1d4384302c35b4af8f4a513ffa016d8.list",
      "interval": 604800
    },
    "rules-18": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/49cb9d1346e6ddd709effe93fd2075aba34de0fe/text/netflix.txt",
      "path": "./flclash/upstream/e58eaa4309007aa141f3e1da7043feaa648c37675fb91d4fc70c12a517694761.list",
      "interval": 604800
    },
    "rules-19": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/6232c9528e724aeb626fd44a908afabf695e5ea7/text/hk.txt",
      "path": "./flclash/upstream/aad88baaec9e04faf74323f1a3691edd9e90644d5b61c61cd9f0e9d0c8a522b5.list",
      "interval": 604800
    },
    "rules-20": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/6232c9528e724aeb626fd44a908afabf695e5ea7/text/sg.txt",
      "path": "./flclash/upstream/f1b848f9b241672fc42a771832f332443f465c4512cbf4c93914640405541e6c.list",
      "interval": 604800
    },
    "rules-21": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/6232c9528e724aeb626fd44a908afabf695e5ea7/text/tw.txt",
      "path": "./flclash/upstream/89f7de62ab2b5c5934e5f94ecc64079d42bac0fbd5940dbeaac15643ced74a4d.list",
      "interval": 604800
    },
    "rules-22": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-22.f48523f6eeadb8484099a4298c626af46adaaee7998767b566511a7d6381a789.list",
      "path": "./flclash/rulesets/rules-22.f48523f6eeadb8484099a4298c626af46adaaee7998767b566511a7d6381a789.list",
      "interval": 604800
    },
    "rules-23": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-23.25944836814551f7a4a5389b4b3f563acc9ac40362e3745079105543ce07210b.list",
      "path": "./flclash/rulesets/rules-23.25944836814551f7a4a5389b4b3f563acc9ac40362e3745079105543ce07210b.list",
      "interval": 604800
    },
    "rules-24": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/6232c9528e724aeb626fd44a908afabf695e5ea7/text/cn.txt",
      "path": "./flclash/upstream/04672a826b9571cbab7a87625fe3d41a773b28752ac7087e7f5519fb3f28cb9c.list",
      "interval": 604800
    },
    "rules-25": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/49cb9d1346e6ddd709effe93fd2075aba34de0fe/text/private.txt",
      "path": "./flclash/upstream/6863a48ac56e55df4f946c9a550e526429930734b350675f7e263f12588e2cf1.list",
      "interval": 604800
    }
  },
  "rules": [
    "RULE-SET,rules-01,DIRECT",
    "RULE-SET,rules-02,DIRECT",
    "RULE-SET,rules-03,PROXY",
    "RULE-SET,rules-04,PROXY",
    "RULE-SET,rules-05,PROXY",
    "RULE-SET,rules-06,PROXY",
    "RULE-SET,rules-07,PROXY",
    "RULE-SET,rules-08,PROXY",
    "RULE-SET,rules-09,PROXY",
    "RULE-SET,rules-10,PROXY",
    "RULE-SET,rules-11,PROXY",
    "RULE-SET,rules-12,PROXY",
    "RULE-SET,rules-13,PROXY",
    "RULE-SET,rules-14,PROXY",
    "RULE-SET,rules-15,DIRECT",
    "RULE-SET,rules-16,DIRECT",
    "RULE-SET,rules-17,DIRECT",
    "RULE-SET,rules-18,PROXY",
    "RULE-SET,rules-19,PROXY",
    "RULE-SET,rules-20,PROXY",
    "RULE-SET,rules-21,PROXY",
    "RULE-SET,rules-22,PROXY",
    "RULE-SET,rules-23,DIRECT",
    "RULE-SET,rules-24,DIRECT",
    "RULE-SET,rules-25,DIRECT",
    "MATCH,PROXY"
  ]
};
function main(config) {
  const sniffPlan = {
  "enable": true,
  "force-dns-mapping": true,
  "parse-pure-ip": true,
  "override-destination": true,
  "sniff": {
    "HTTP": {
      "ports": [
        80,
        "8080-8880"
      ]
    },
    "TLS": {
      "ports": [
        443,
        8443
      ]
    },
    "QUIC": {
      "ports": [
        443,
        8443
      ]
    }
  }
};
  // 保留客户端明确设置的跳过列表，固定嗅探开关与协议端口按配置应用。
  config.sniffer = Object.assign({}, config.sniffer || {}, sniffPlan);
  const nodes = Array.isArray(config.proxies) ? config.proxies : [];
  const sources = config["proxy-providers"] || {};
  const names = nodes.map(function (node) { return node.name; });
  if (!names.length && !Object.keys(sources).length) {
    throw new Error("请先导入自己的节点或订阅");
  }
  if (names.some(function (name) {
    return !name || ["PROXY", "DIRECT", "REJECT", "GLOBAL"].indexOf(name) >= 0;
  })) throw new Error("节点名与保留策略名冲突");
  // 链式出站可能引用将被替换的旧策略组，不能静默破坏它。
  nodes.forEach(function (node) {
    if (node["dialer-proxy"]) throw new Error("链式代理需单独适配");
  });
  Object.keys(sources).forEach(function (name) {
    const source = sources[name];
    if ((source.override || {})["dialer-proxy"])
      throw new Error("链式订阅需单独适配");
  });
  config["proxy-groups"] = [{
    name: "PROXY", type: "select", proxies: ["REJECT"].concat(names),
    use: Object.keys(sources)
  }];
  config["rule-providers"] = routingPlan["rule-providers"];
  config.rules = routingPlan.rules;
  config.mode = "rule";
  // DNS 与流量使用同一套规则，替换客户端原有的按域名或回退选择上游。
  const dns = Object.assign({}, config.dns || {});
  ["fallback", "fallback-filter"].forEach(function (key) { delete dns[key]; });
  config.dns = Object.assign(dns, dnsPlan);
  return config;
}
