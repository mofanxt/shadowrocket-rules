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
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
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
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-13": [
      "8.8.8.8#PROXY"
    ],
    "rule-set:rules-14": [
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
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-01.08d7cf0dc24e1b6b0816068617f69265e2e1bd87c362e0e681a45063477302da.list",
      "path": "./flclash/rulesets/rules-01.08d7cf0dc24e1b6b0816068617f69265e2e1bd87c362e0e681a45063477302da.list",
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
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-03.7891114f310bfa910bf7b2201374a93e0f7ff3cb7b54f88493a822430b2a4ef3.list",
      "path": "./flclash/rulesets/rules-03.7891114f310bfa910bf7b2201374a93e0f7ff3cb7b54f88493a822430b2a4ef3.list",
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
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-05.f595587e2eb597e8a77131f57cbddf7531438f6b13b76271fef7fd3555235d20.list",
      "path": "./flclash/rulesets/rules-05.f595587e2eb597e8a77131f57cbddf7531438f6b13b76271fef7fd3555235d20.list",
      "interval": 604800
    },
    "rules-06": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-06.78193acbfc12f2634c6d5e4428a9cb42809a2096d7b572ec2556a8dc7f90892d.list",
      "path": "./flclash/rulesets/rules-06.78193acbfc12f2634c6d5e4428a9cb42809a2096d7b572ec2556a8dc7f90892d.list",
      "interval": 604800
    },
    "rules-07": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-07.3ee7355dce919ac606e18cad7819806d9f2180822e81ef8e3aec33f7394502ef.list",
      "path": "./flclash/rulesets/rules-07.3ee7355dce919ac606e18cad7819806d9f2180822e81ef8e3aec33f7394502ef.list",
      "interval": 604800
    },
    "rules-08": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-08.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "path": "./flclash/rulesets/rules-08.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "interval": 604800
    },
    "rules-09": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-09.c33f4db04f07bd648832e30d6a82f0f9f83f729a4b2b4c6b2354cf0e3b44bd05.list",
      "path": "./flclash/rulesets/rules-09.c33f4db04f07bd648832e30d6a82f0f9f83f729a4b2b4c6b2354cf0e3b44bd05.list",
      "interval": 604800
    },
    "rules-10": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-10.498afc00cd597da08db7fd1b20eea4db7dbe263b3ebec36a75d7388e1a30534a.list",
      "path": "./flclash/rulesets/rules-10.498afc00cd597da08db7fd1b20eea4db7dbe263b3ebec36a75d7388e1a30534a.list",
      "interval": 604800
    },
    "rules-11": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/0badb9a4e740e2e89fdf7916f4283f44eb62fead/ruleset/direct.txt",
      "path": "./flclash/upstream/c9024d15f4b2d2b414fb9f8aa3d4d8a0a30a6a9f3c2bd2267b77fac64f2984aa.list",
      "interval": 604800
    },
    "rules-12": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-12.656f00cde976f1653f53593ed596d77aa0847c5fe113df31bf23f1bfe581a6e0.list",
      "path": "./flclash/rulesets/rules-12.656f00cde976f1653f53593ed596d77aa0847c5fe113df31bf23f1bfe581a6e0.list",
      "interval": 604800
    },
    "rules-13": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-13.d1d370b6499309a165d1b4027aa64d22b31219462b83049bd5ed5321e7e67901.list",
      "path": "./flclash/rulesets/rules-13.d1d370b6499309a165d1b4027aa64d22b31219462b83049bd5ed5321e7e67901.list",
      "interval": 604800
    },
    "rules-14": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/surge-rules/6dcdb6bf663611e0e36d04dae16e6bb071f6807b/ruleset/proxy.txt",
      "path": "./flclash/upstream/34ed396c398285295a3df97a5b4ca1a716b1861a8aad4788653adbb988f64a2f.list",
      "interval": 604800
    },
    "rules-15": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-15.25944836814551f7a4a5389b4b3f563acc9ac40362e3745079105543ce07210b.list",
      "path": "./flclash/rulesets/rules-15.25944836814551f7a4a5389b4b3f563acc9ac40362e3745079105543ce07210b.list",
      "interval": 604800
    },
    "rules-16": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/ec6f8d0f6b5c6c6924d9230f2ed893f69585d38c/text/cn.txt",
      "path": "./flclash/upstream/1af593d984330fa68e4b94e09cbfa95a44a104128869afe02694886d16e896cd.list",
      "interval": 604800
    },
    "rules-17": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/49cb9d1346e6ddd709effe93fd2075aba34de0fe/text/private.txt",
      "path": "./flclash/upstream/6863a48ac56e55df4f946c9a550e526429930734b350675f7e263f12588e2cf1.list",
      "interval": 604800
    },
    "rules-18": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-18.f48523f6eeadb8484099a4298c626af46adaaee7998767b566511a7d6381a789.list",
      "path": "./flclash/rulesets/rules-18.f48523f6eeadb8484099a4298c626af46adaaee7998767b566511a7d6381a789.list",
      "interval": 604800
    },
    "rules-19": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/Loyalsoldier/geoip/ec6f8d0f6b5c6c6924d9230f2ed893f69585d38c/text/hk.txt",
      "path": "./flclash/upstream/883073e8949974385078d5957d3076410a30fbf62d1b2b412bcbcaf8f6824199.list",
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
    "RULE-SET,rules-09,DIRECT",
    "RULE-SET,rules-10,DIRECT",
    "RULE-SET,rules-11,DIRECT",
    "RULE-SET,rules-12,PROXY",
    "RULE-SET,rules-13,PROXY",
    "RULE-SET,rules-14,PROXY",
    "RULE-SET,rules-15,DIRECT",
    "RULE-SET,rules-16,DIRECT",
    "RULE-SET,rules-17,DIRECT",
    "RULE-SET,rules-18,PROXY",
    "RULE-SET,rules-19,PROXY",
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
