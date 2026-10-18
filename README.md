# Shadowrocket Rules

**流量与 DNS 同一套规则分流。适用于 Shadowrocket 与 FlClash。**

国内服务、系统更新和游戏下载走直连，社区、协作等服务走代理；DNS 也按同一套规则选择解析方式：国内域名用国内加密 DNS 获得就近线路，海外域名不经国内 DNS，减少污染与查询泄露。

[Shadowrocket 在线配置](https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/auto_proxy_list.conf) · [FlClash 导入与自动更新](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md) · [反馈规则问题](https://github.com/mofanxt/shadowrocket-rules/issues)

## 亮点：DNS 跟随流量规则

很多配置只分流流量，DNS 却统一交给某个上游：要么国内域名被海外 DNS 解析到远端节点，要么海外域名的查询先经过国内 DNS。本项目让每次解析都跟随该域名实际命中的流量规则：

| 域名情况 | 解析方式 |
| --- | --- |
| 命中直连规则 | 直接查询腾讯 DoH，阿里 DoH 备用，获得国内就近的 CDN 地址 |
| 命中代理规则 | 经代理查询 Google DoH（8.8.8.8），连接时由节点按域名访问 |
| 未命中任何域名规则 | 同样经代理查询 Google DoH，再按 IP 规则判断 |
| 代理节点自身的域名 | 腾讯、阿里 DoH 直连解析，避免连接节点时陷入循环 |

- **无需单独维护 DNS 名单**：解析方式由分流规则决定，规则更新后 DNS 自动保持一致。
- **国内访问更快**：直连域名用国内 DNS 解析，不会被调度到海外线路。
- **海外查询更干净**：代理侧域名经代理查询 Google DoH，不经国内 DNS，避开污染。
- **上游使用加密 DoH**：直连解析失败也不回退到系统 DNS 或改走代理，行为可预期。
- **两端一致**：Shadowrocket 与 FlClash 使用同一组 DNS 和同一套规则。

## 更多优势

- **按业务场景细分**：区分 Steam 商店、支付、下载与社区、聊天、云同步，让大流量下载与代理访问各走合适的路径。
- **保留关键匹配细节**：区分完整域名、域名后缀与正则，保留规则优先级，避免粗略合并扩大匹配范围。
- **主配置更精简**：复用同源规则集并合并等价重复条目，FlClash 自动加载独立规则集合，无需手工维护大段列表。
- **规则版本可追溯**：外部引用固定版本，配套资源按内容哈希命名并保留旧版本，配置与数据始终配套。
- **无需 HTTPS 解密**：不启用 MITM，不需要安装证书；Shadowrocket 还关闭 IPv6、仅阻断代理侧 QUIC，减少绕开分流的连接。
- **每周自动更新**：Shadowrocket 更新远程配置，FlClash 更新远程覆写和配套规则集，与节点订阅互不干扰。

## 常见分流场景

| 场景 | 流量 | DNS |
| --- | --- | --- |
| 国内常用网站与服务 | 直连 | 腾讯／阿里 DoH |
| Windows 更新与安装镜像下载 | 直连 | 腾讯／阿里 DoH |
| Steam 商店、支付、游戏下载与客户端更新 | 直连 | 腾讯／阿里 DoH |
| Steam 社区、聊天与云同步 | 代理 | 经代理 Google DoH |
| GitHub 等代理分类中的服务 | 代理 | 经代理 Google DoH |
| 未命中域名规则的流量 | 继续判断 IP，最终默认代理 | 经代理查询 Google DoH |

具体域名与匹配顺序以当前规则为准。

## 选择你的客户端

| 客户端 | 获取方式 | 更新方式 |
| --- | --- | --- |
| **Shadowrocket · iOS** | [在线配置](https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/auto_proxy_list.conf) | 远程配置更新，可设 7 天间隔 |
| **FlClash · Android** | [远程分流覆写与导入说明](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md) | 资源自动更新设为 168 小时 |

**Shadowrocket：**将在线配置链接添加到“配置”并启用，全局路由选择 **配置**，再选择节点。配套域名匹配脚本和 DNS 设置随配置一起加载。

在 **设置 → 配置 → 自动后台更新** 中可将间隔设为 **7 天**，并允许 iOS 后台 App 刷新。后台调度可能延后，更新内容以仓库实际发布版本为准。

**FlClash：**导入节点或订阅后，添加并绑定本项目的远程覆写脚本，在 `PROXY` 组选择节点。打开 **资源 → 自动更新**，将资源更新间隔设为 **168 小时**。详细步骤见 [Android 指南](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md)。

覆写脚本使用真实 IP 解析，按分流顺序接管 DNS 上游，替换原配置中按域名或回退选择上游的设置；请保持 FlClash 的 **覆写 DNS** 关闭，否则客户端设置会取代脚本。远程脚本负责规则顺序、资源引用和 DNS，规则集负责匹配条目，两者配套更新；IPv6、TUN 和 QUIC 沿用客户端配置。

## 规则来源与致谢

规则数据主要来自以下开源项目：

- [Loyalsoldier / surge-rules](https://github.com/Loyalsoldier/surge-rules)
- [Loyalsoldier / v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)
- [Loyalsoldier / geoip](https://github.com/Loyalsoldier/geoip)

规则集在来源和匹配范围核对后复用，保留匹配边界和规则顺序。转换资源的来源和许可见 [Android 说明](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md#来源与许可)。

欢迎通过 [Issues](https://github.com/mofanxt/shadowrocket-rules/issues) 反馈规则问题，附上目标域名、预期策略与脱敏后的命中日志。
