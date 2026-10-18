// 只转换分流和 DNS；节点和订阅保留在客户端本地。
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
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-04": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-05": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-06": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-07": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-08": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-09": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-10": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-11": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-12": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-13": [
      "https://8.8.8.8/dns-query#PROXY"
    ],
    "rule-set:rules-14": [
      "https://8.8.8.8/dns-query#PROXY"
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
    "https://8.8.8.8/dns-query#PROXY"
  ]
};
const routingPlan = {
  "rule-providers": {
    "rules-01": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-01.d2df2445908f89f62e3efd6266d4b6c4a8251e1fc370e4a1e9d74a678fc77589.list",
      "path": "./flclash/rulesets/rules-01.d2df2445908f89f62e3efd6266d4b6c4a8251e1fc370e4a1e9d74a678fc77589.list",
      "interval": 604800
    },
    "rules-02": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-02.0bc8f912bae768ee0f6c2e9b340e5e392e03ddf489864cb20d9e8dd91314e191.list",
      "path": "./flclash/rulesets/rules-02.0bc8f912bae768ee0f6c2e9b340e5e392e03ddf489864cb20d9e8dd91314e191.list",
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
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/839f1ae338e41ca77b4599119c000e93bb89822e/ruleset/proxy.txt",
      "path": "./flclash/upstream/ef09439812c4502f5a30878a7b07d9257a87609cdf964ea20d5185d832e84d7b.list",
      "interval": 604800
    },
    "rules-05": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-05.90fb4946f3d0ead23cc434accd0bd420850badce0a874ab9a8f9a37bc0bf0fbe.list",
      "path": "./flclash/rulesets/rules-05.90fb4946f3d0ead23cc434accd0bd420850badce0a874ab9a8f9a37bc0bf0fbe.list",
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
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-13.115b04d73556f3ae38ee38aaaf50ce7b0afbfc26de4a46f20061397d2108d793.list",
      "path": "./flclash/rulesets/rules-13.115b04d73556f3ae38ee38aaaf50ce7b0afbfc26de4a46f20061397d2108d793.list",
      "interval": 604800
    },
    "rules-14": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-14.63734fd74a8e50827602e0e390a4e9b43d304973bd9782b39aad4430c1441d4f.list",
      "path": "./flclash/rulesets/rules-14.63734fd74a8e50827602e0e390a4e9b43d304973bd9782b39aad4430c1441d4f.list",
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
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/d8ae14543c0eeebc6dc733a3a4551cce3e45bc5b/ruleset/direct.txt",
      "path": "./flclash/upstream/e378af27dcc7546385b4592dd3bed5efda141a51733fe2f69960dd7d4e5ac388.list",
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
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/9294c07224a94ad3fe9d48eea160e4406d14fbde/text/hk.txt",
      "path": "./flclash/upstream/6b1595318b44f3846c5726fc26b08b4cd9fde2b7a7d7fa31a7886dc7433dfa34.list",
      "interval": 604800
    },
    "rules-20": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/9294c07224a94ad3fe9d48eea160e4406d14fbde/text/sg.txt",
      "path": "./flclash/upstream/7271ed7c2492411a8beee3b64811cb394be2ea5836d5016f6486cf571c39d955.list",
      "interval": 604800
    },
    "rules-21": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/9294c07224a94ad3fe9d48eea160e4406d14fbde/text/tw.txt",
      "path": "./flclash/upstream/b9afd2d170292473bb35965f28ad419f674f7a18c14a6fea40c5d819813df4b7.list",
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
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/9294c07224a94ad3fe9d48eea160e4406d14fbde/text/cn.txt",
      "path": "./flclash/upstream/10a1c18eb09d62931a127b9943d9eadfaac6eb93f2ef4ff00fdb507a2307dc16.list",
      "interval": 604800
    },
    "rules-24": {
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
    "MATCH,PROXY"
  ]
};
function main(config) {
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
