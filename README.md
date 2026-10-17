# Shadowrocket Rules

**精细分流，轻松接入。适用于 Shadowrocket 与 FlClash。**

国内服务、系统更新和游戏下载优先直连，社区、协作等代理流量使用当前节点。一套分流策略，两种客户端格式，兼顾规则准确性与日常使用便利。

[Shadowrocket 在线配置](https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/auto_proxy_list.conf) · [FlClash 导入与自动更新](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md) · [反馈规则问题](https://github.com/mofanxt/shadowrocket-rules/issues)

## 项目优势

- **按业务场景细分**：区分 Steam 商店、支付、下载与社区、聊天、云同步，让大流量下载与代理访问各走合适的路径。
- **保留关键匹配细节**：区分完整域名、域名后缀与正则，保留规则优先级，避免粗略合并扩大匹配范围。
- **一个代理出口即可使用**：代理分类统一跟随当前节点，切换出口无需重新配置多个地区策略组。
- **主配置更精简**：Shadowrocket 复用同源规则集并合并等价重复条目；FlClash 自动加载独立规则集合，避免手工维护大段列表。
- **规则版本清晰可追溯**：外部引用固定版本，配套资源按内容哈希命名并保留旧版本，便于保持配置与数据一致。
- **沿用已有节点与订阅**：提供分流配置和规则资源，无需额外安装 HTTPS 解密证书。
- **支持每周自动更新**：Shadowrocket 更新远程配置，FlClash 更新远程分流覆写和配套规则集，节点订阅仍独立管理。

## 常见分流场景

| 场景 | 策略 |
| --- | --- |
| 国内常用网站与服务 | 优先直连 |
| Windows 更新与安装镜像下载 | 直连 |
| Steam 商店、支付、游戏下载与客户端更新 | 直连 |
| Steam 社区、聊天与云同步 | 代理 |
| GitHub 等代理分类中的服务 | 代理 |
| 未命中域名规则的流量 | 继续判断 IP，最终默认代理 |

具体域名与匹配顺序以当前规则为准。

## 选择你的客户端

| 客户端 | 获取方式 | 更新方式 |
| --- | --- | --- |
| **Shadowrocket · iOS** | [在线配置](https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/auto_proxy_list.conf) | 远程配置更新，可设 7 天间隔 |
| **FlClash · Android** | [远程分流覆写与导入说明](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md) | 资源自动更新设为 168 小时 |

**Shadowrocket：**将在线配置链接添加到“配置”并启用，全局路由选择 **配置**，然后使用自己的代理节点。配套域名匹配脚本会在线加载。

在 **设置 → 配置 → 自动后台更新** 中可将间隔设为 **7 天**，并允许 iOS 后台 App 刷新。后台调度可能延后，更新内容以仓库实际发布版本为准。

**FlClash：**先导入自己的节点或订阅，再添加并绑定本项目的远程覆写脚本，在 `PROXY` 组选择节点。打开 **资源 → 自动更新**，将资源更新间隔设为 **168 小时**。详细步骤见 [Android 指南](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md)。

FlClash 的远程脚本负责更新规则顺序和资源引用，规则集负责加载匹配条目；两者配套更新。Android 后台调度与网络状态可能影响执行时间。

Shadowrocket 配置还提供直连与代理 DNS 分流、关闭 IPv6、仅阻断代理侧 QUIC 等设置；FlClash 覆写专注分流，DNS 和协议设置沿用客户端配置。

## 规则来源与致谢

规则数据主要来自以下开源项目：

- [Loyalsoldier / surge-rules](https://github.com/Loyalsoldier/surge-rules)
- [Loyalsoldier / v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)
- [Loyalsoldier / geoip](https://github.com/Loyalsoldier/geoip)

规则集在来源和匹配范围核对后复用，保留匹配边界和规则顺序。转换资源的来源和许可见 [Android 说明](https://github.com/mofanxt/shadowrocket-rules/blob/main/flclash/README.md#来源与许可)。

欢迎通过 [Issues](https://github.com/mofanxt/shadowrocket-rules/issues) 反馈规则问题，附上目标域名、预期策略与脱敏后的命中日志。
