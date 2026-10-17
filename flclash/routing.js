// 只转换分流；节点和订阅保留在客户端本地。
const routingPlan = {
  "rule-providers": {
    "rules-01": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-01.10ccb00f5fa91b7f068f24d1680068396a6d03ff3137ee120881091af03d7791.list",
      "path": "./flclash/rulesets/rules-01.10ccb00f5fa91b7f068f24d1680068396a6d03ff3137ee120881091af03d7791.list",
      "interval": 604800
    },
    "rules-02": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-02.22246591f709db94aba482a6cfde2c313ed8df5932658921bbf38c04f6656a31.list",
      "path": "./flclash/rulesets/rules-02.22246591f709db94aba482a6cfde2c313ed8df5932658921bbf38c04f6656a31.list",
      "interval": 604800
    },
    "rules-03": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-03.e27e68d0ff5bdd23fa321b411a0512b6d7df3282fdcb713073873997b759b18d.list",
      "path": "./flclash/rulesets/rules-03.e27e68d0ff5bdd23fa321b411a0512b6d7df3282fdcb713073873997b759b18d.list",
      "interval": 604800
    },
    "rules-04": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-04.0bc8f912bae768ee0f6c2e9b340e5e392e03ddf489864cb20d9e8dd91314e191.list",
      "path": "./flclash/rulesets/rules-04.0bc8f912bae768ee0f6c2e9b340e5e392e03ddf489864cb20d9e8dd91314e191.list",
      "interval": 604800
    },
    "rules-05": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-05.304ccfff3b30ba7da5cb897c0def7186ad4bf77c4ae526d35d3e9c23989e6636.list",
      "path": "./flclash/rulesets/rules-05.304ccfff3b30ba7da5cb897c0def7186ad4bf77c4ae526d35d3e9c23989e6636.list",
      "interval": 604800
    },
    "rules-06": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-06.177c2cabb6e4e1ee022dfd4c89bfba05d038ac5cf35bba548855c459652977d5.list",
      "path": "./flclash/rulesets/rules-06.177c2cabb6e4e1ee022dfd4c89bfba05d038ac5cf35bba548855c459652977d5.list",
      "interval": 604800
    },
    "rules-07": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-07.37f15a7c62d22b40807aec0f0c689ce9fcbb829201121d10e69c69cab3ebe2ff.list",
      "path": "./flclash/rulesets/rules-07.37f15a7c62d22b40807aec0f0c689ce9fcbb829201121d10e69c69cab3ebe2ff.list",
      "interval": 604800
    },
    "rules-08": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-08.a7b2e135935f5d079f3793e8c0456793eeb23be2bc36e593481d415d48368cd9.list",
      "path": "./flclash/rulesets/rules-08.a7b2e135935f5d079f3793e8c0456793eeb23be2bc36e593481d415d48368cd9.list",
      "interval": 604800
    },
    "rules-09": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-09.88b73f9452303e5091dbe2de309646a39207355e978d46b109bfa55f9e5025e9.list",
      "path": "./flclash/rulesets/rules-09.88b73f9452303e5091dbe2de309646a39207355e978d46b109bfa55f9e5025e9.list",
      "interval": 604800
    },
    "rules-10": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-10.947bc8a9f3cee88cf7d6d1928a1f434e45b0b61158b6c28519651ce854845c1f.list",
      "path": "./flclash/rulesets/rules-10.947bc8a9f3cee88cf7d6d1928a1f434e45b0b61158b6c28519651ce854845c1f.list",
      "interval": 604800
    },
    "rules-11": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-11.0eb64ba6a45fee3c38c635a582db0297a185a5ea4d960cb4cdb2c57f8670ad66.list",
      "path": "./flclash/rulesets/rules-11.0eb64ba6a45fee3c38c635a582db0297a185a5ea4d960cb4cdb2c57f8670ad66.list",
      "interval": 604800
    },
    "rules-12": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-12.c4dab88893b4e677eeff7668af64a7302d66e33a786e57a7acdd3d1f5275d5ce.list",
      "path": "./flclash/rulesets/rules-12.c4dab88893b4e677eeff7668af64a7302d66e33a786e57a7acdd3d1f5275d5ce.list",
      "interval": 604800
    },
    "rules-13": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-13.78193acbfc12f2634c6d5e4428a9cb42809a2096d7b572ec2556a8dc7f90892d.list",
      "path": "./flclash/rulesets/rules-13.78193acbfc12f2634c6d5e4428a9cb42809a2096d7b572ec2556a8dc7f90892d.list",
      "interval": 604800
    },
    "rules-14": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-14.26aae01aaad23b5f0e0e01ea1be8d97ebba96c35cc8077eebb55480803a24e52.list",
      "path": "./flclash/rulesets/rules-14.26aae01aaad23b5f0e0e01ea1be8d97ebba96c35cc8077eebb55480803a24e52.list",
      "interval": 604800
    },
    "rules-15": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-15.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "path": "./flclash/rulesets/rules-15.d2da642fad34b8eebd81879fbbacbb89e13881a59f2614e2515994d79b545d30.list",
      "interval": 604800
    },
    "rules-16": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-16.9ef39ca5b8c9bb97481d1ec095ac6ad5563a86656b47e531f60bed6a7b9114e3.list",
      "path": "./flclash/rulesets/rules-16.9ef39ca5b8c9bb97481d1ec095ac6ad5563a86656b47e531f60bed6a7b9114e3.list",
      "interval": 604800
    },
    "rules-17": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-17.f09cc60523e9791d65dda66725da2e94fd9c00e19cd78bbe54f1549b65219525.list",
      "path": "./flclash/rulesets/rules-17.f09cc60523e9791d65dda66725da2e94fd9c00e19cd78bbe54f1549b65219525.list",
      "interval": 604800
    },
    "rules-18": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-18.db8e785d4f71b929ffee9dcbb35b2dab78287d14980b5c333346ee0f6a072e74.list",
      "path": "./flclash/rulesets/rules-18.db8e785d4f71b929ffee9dcbb35b2dab78287d14980b5c333346ee0f6a072e74.list",
      "interval": 604800
    },
    "rules-19": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-19.b4ea470c4f7244e75a5806eb8443051a30e540c5e269716628fd8e69cf8ab429.list",
      "path": "./flclash/rulesets/rules-19.b4ea470c4f7244e75a5806eb8443051a30e540c5e269716628fd8e69cf8ab429.list",
      "interval": 604800
    },
    "rules-20": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-20.6892658a9884bb48a4a25882e8ed9ce363c5036d0a8a99bfc23cc9088784f142.list",
      "path": "./flclash/rulesets/rules-20.6892658a9884bb48a4a25882e8ed9ce363c5036d0a8a99bfc23cc9088784f142.list",
      "interval": 604800
    },
    "rules-21": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-21.d7c71269113609b715d66f6986bec29774527d2d131cbc0dea9c7280dcc5c779.list",
      "path": "./flclash/rulesets/rules-21.d7c71269113609b715d66f6986bec29774527d2d131cbc0dea9c7280dcc5c779.list",
      "interval": 604800
    },
    "rules-22": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-22.bfa4afffb9f50dd24e55689b8dcb59b6b20d0de50a9772e00d67a017e71af73a.list",
      "path": "./flclash/rulesets/rules-22.bfa4afffb9f50dd24e55689b8dcb59b6b20d0de50a9772e00d67a017e71af73a.list",
      "interval": 604800
    },
    "rules-23": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-23.a4484674b70f25e5431be476a88ff3d07350260858688000c2cbbdba9b40e506.list",
      "path": "./flclash/rulesets/rules-23.a4484674b70f25e5431be476a88ff3d07350260858688000c2cbbdba9b40e506.list",
      "interval": 604800
    },
    "rules-24": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "text",
      "url": "https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/rulesets/rules-24.5c9c2404c5fbecb9eb0bccf41a7bfbc33f4ee4aa05b2aedb8bcca8f9d33ef07c.list",
      "path": "./flclash/rulesets/rules-24.5c9c2404c5fbecb9eb0bccf41a7bfbc33f4ee4aa05b2aedb8bcca8f9d33ef07c.list",
      "interval": 604800
    }
  },
  "rules": [
    "RULE-SET,rules-01,DIRECT",
    "RULE-SET,rules-02,DIRECT",
    "RULE-SET,rules-03,DIRECT",
    "RULE-SET,rules-04,DIRECT",
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
    "RULE-SET,rules-15,PROXY",
    "RULE-SET,rules-16,PROXY",
    "RULE-SET,rules-17,PROXY",
    "RULE-SET,rules-18,PROXY",
    "RULE-SET,rules-19,DIRECT",
    "RULE-SET,rules-20,DIRECT",
    "RULE-SET,rules-21,PROXY",
    "RULE-SET,rules-22,PROXY",
    "RULE-SET,rules-23,PROXY",
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
  return config;
}
