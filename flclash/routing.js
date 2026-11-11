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
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-03": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-04": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-05": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
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
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "rule-set:rules-11": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "rule-set:rules-12": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "rule-set:rules-13": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-14": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-15": [
      "8.8.8.8#PROXY"
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
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-01.a00539a44035d2669c189feab891ea3a082b010f3f4b9d78bbf90776ccf8bdbf.list",
      "path": "./flclash/rulesets/rules-01.a00539a44035d2669c189feab891ea3a082b010f3f4b9d78bbf90776ccf8bdbf.list",
      "interval": 604800
    },
    "rules-02": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-02.37f15a7c62d22b40807aec0f0c689ce9fcbb829201121d10e69c69cab3ebe2ff.list",
      "path": "./flclash/rulesets/rules-02.37f15a7c62d22b40807aec0f0c689ce9fcbb829201121d10e69c69cab3ebe2ff.list",
      "interval": 604800
    },
    "rules-03": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-03.14b46800120f7a3049f7967d2d8bf548000c05ed82d6384c1c3d426972eba977.list",
      "path": "./flclash/rulesets/rules-03.14b46800120f7a3049f7967d2d8bf548000c05ed82d6384c1c3d426972eba977.list",
      "interval": 604800
    },
    "rules-04": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-04.88b73f9452303e5091dbe2de309646a39207355e978d46b109bfa55f9e5025e9.list",
      "path": "./flclash/rulesets/rules-04.88b73f9452303e5091dbe2de309646a39207355e978d46b109bfa55f9e5025e9.list",
      "interval": 604800
    },
    "rules-05": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-05.20df603f21eee624b83fb05e99f6c5f2f478621b078aed210d8365623e1d07f7.list",
      "path": "./flclash/rulesets/rules-05.20df603f21eee624b83fb05e99f6c5f2f478621b078aed210d8365623e1d07f7.list",
      "interval": 604800
    },
    "rules-06": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-06.d2cd44d1a8605b0e979ed203f6c4e5563f522308a8ce83613a19cefb69a95998.list",
      "path": "./flclash/rulesets/rules-06.d2cd44d1a8605b0e979ed203f6c4e5563f522308a8ce83613a19cefb69a95998.list",
      "interval": 604800
    },
    "rules-07": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-07.78193acbfc12f2634c6d5e4428a9cb42809a2096d7b572ec2556a8dc7f90892d.list",
      "path": "./flclash/rulesets/rules-07.78193acbfc12f2634c6d5e4428a9cb42809a2096d7b572ec2556a8dc7f90892d.list",
      "interval": 604800
    },
    "rules-08": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-08.c118078c0c2605e7610832ac809805b85bbf4ad7a2977a0e7b249afa24866813.list",
      "path": "./flclash/rulesets/rules-08.c118078c0c2605e7610832ac809805b85bbf4ad7a2977a0e7b249afa24866813.list",
      "interval": 604800
    },
    "rules-09": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-09.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "path": "./flclash/rulesets/rules-09.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "interval": 604800
    },
    "rules-10": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-10.9b6f105a81313fe2aa89ac8d5b559a5776c9a966b422fbe61160f44d7d574d9a.list",
      "path": "./flclash/rulesets/rules-10.9b6f105a81313fe2aa89ac8d5b559a5776c9a966b422fbe61160f44d7d574d9a.list",
      "interval": 604800
    },
    "rules-11": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-11.498afc00cd597da08db7fd1b20eea4db7dbe263b3ebec36a75d7388e1a30534a.list",
      "path": "./flclash/rulesets/rules-11.498afc00cd597da08db7fd1b20eea4db7dbe263b3ebec36a75d7388e1a30534a.list",
      "interval": 604800
    },
    "rules-12": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/293cca573b170f8d89d0a7c267518748a598c780/ruleset/direct.txt",
      "path": "./flclash/upstream/2e42c17f8f8a9378a4591c2351752a95a1d4384302c35b4af8f4a513ffa016d8.list",
      "interval": 604800
    },
    "rules-13": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-13.0777bc26f74b083b879713bd97e198d4e53d3f66c95879281b89e9e624443471.list",
      "path": "./flclash/rulesets/rules-13.0777bc26f74b083b879713bd97e198d4e53d3f66c95879281b89e9e624443471.list",
      "interval": 604800
    },
    "rules-14": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-14.d1d370b6499309a165d1b4027aa64d22b31219462b83049bd5ed5321e7e67901.list",
      "path": "./flclash/rulesets/rules-14.d1d370b6499309a165d1b4027aa64d22b31219462b83049bd5ed5321e7e67901.list",
      "interval": 604800
    },
    "rules-15": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/6dcdb6bf663611e0e36d04dae16e6bb071f6807b/ruleset/proxy.txt",
      "path": "./flclash/upstream/34ed396c398285295a3df97a5b4ca1a716b1861a8aad4788653adbb988f64a2f.list",
      "interval": 604800
    },
    "rules-16": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-16.25944836814551f7a4a5389b4b3f563acc9ac40362e3745079105543ce07210b.list",
      "path": "./flclash/rulesets/rules-16.25944836814551f7a4a5389b4b3f563acc9ac40362e3745079105543ce07210b.list",
      "interval": 604800
    },
    "rules-17": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/6232c9528e724aeb626fd44a908afabf695e5ea7/text/cn.txt",
      "path": "./flclash/upstream/04672a826b9571cbab7a87625fe3d41a773b28752ac7087e7f5519fb3f28cb9c.list",
      "interval": 604800
    },
    "rules-18": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/49cb9d1346e6ddd709effe93fd2075aba34de0fe/text/private.txt",
      "path": "./flclash/upstream/6863a48ac56e55df4f946c9a550e526429930734b350675f7e263f12588e2cf1.list",
      "interval": 604800
    },
    "rules-19": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-19.f48523f6eeadb8484099a4298c626af46adaaee7998767b566511a7d6381a789.list",
      "path": "./flclash/rulesets/rules-19.f48523f6eeadb8484099a4298c626af46adaaee7998767b566511a7d6381a789.list",
      "interval": 604800
    },
    "rules-20": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/6232c9528e724aeb626fd44a908afabf695e5ea7/text/hk.txt",
      "path": "./flclash/upstream/aad88baaec9e04faf74323f1a3691edd9e90644d5b61c61cd9f0e9d0c8a522b5.list",
      "interval": 604800
    }
  },
  "rules": [
    "RULE-SET,rules-01,DIRECT",
    "RULE-SET,rules-02,PROXY",
    "RULE-SET,rules-03,PROXY",
    "RULE-SET,rules-04,PROXY",
    "RULE-SET,rules-05,DIRECT",
    "RULE-SET,rules-06,PROXY",
    "RULE-SET,rules-07,PROXY",
    "RULE-SET,rules-08,PROXY",
    "RULE-SET,rules-09,PROXY",
    "RULE-SET,rules-10,DIRECT",
    "RULE-SET,rules-11,DIRECT",
    "RULE-SET,rules-12,DIRECT",
    "RULE-SET,rules-13,PROXY",
    "RULE-SET,rules-14,PROXY",
    "RULE-SET,rules-15,PROXY",
    "RULE-SET,rules-16,DIRECT",
    "RULE-SET,rules-17,DIRECT",
    "RULE-SET,rules-18,DIRECT",
    "RULE-SET,rules-19,PROXY",
    "RULE-SET,rules-20,PROXY",
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
