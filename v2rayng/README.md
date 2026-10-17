# v2rayNG 分流规则

原生 Xray 路由，保留精确域名、后缀、正则与 Geo 分类语义。所有代理分类使用当前选中的节点，不提供节点、订阅或设备密钥。

## 下载与导入

- [路由 JSON](https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/v2rayng/routing.json)
- [域名规则库](https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/v2rayng/geo/phone-geosite.79d15a5bd8205d83c377fcfde394500db762b2b400feff24612834e528a111cb.dat)
- [IP 规则库](https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/v2rayng/geo/phone-geoip.116cc0f03d48991962f7f9cdbbcf53d45d89777f9c3cd1a663210853e5df6093.dat)

1. 下载上述三个文件，两个 `.dat` 保持原文件名。在 v2rayNG 的 **Geo 资源文件 → 添加文件** 中分别导入。也可以添加上面的 Geo 下载 URL，资源文件名必须与 URL 最后一段完全一致。
2. 先从 **路由设置** 导出备份旧规则；解除或移除旧的锁定规则，避免它们继续排在新规则前面。
3. 打开路由 JSON，复制完整内容（包含最外层方括号），在 **路由设置 → 从剪贴板导入** 中导入。这不是节点订阅地址，也不是完整核心配置。
4. 将域名策略设为 **IPIfNonMatch**，保持顺序，不叠加预定义规则或全端口兜底规则。
5. 选择已有普通节点，重启 VPN。若入口要求 IP 白名单，先完成下面的上报。

客户端需要支持 JSON 路由导入和 Geo 文件导入。完整自定义核心配置可能跳过应用路由设置，请使用普通节点。所有 Geo 文件按内容哈希命名，旧资源会保留；更新时重新导入新的路由和它引用的资源。**当前没有实现路由 JSON 每周自动导入**，更新节点订阅不会更新本列表。

## DNS 与协议设置

这些文件只迁移分流，不能导入 Shadowrocket 的 `[General]`。DNS、IPv6、仅代理侧 QUIC 阻断需在客户端另行配置；不要把全局 UDP/443 阻断等同于只阻断代理流量。未确认节点 IPv6 能力时建议先保持关闭。

## 可选：用 MacroDroid 自动上报白名单

v2rayNG 不直接运行 Shadowrocket 的 `.module`。需要白名单的用户，可参考 [PO0 安卓方案](https://github.com/w0ven/po0fw/tree/main/android)，以 MacroDroid 的网络事件和定时任务实现；免费版的 5 个宏足够配置下面两个宏。

下面以支持 `POST /v1/client/refresh`、Bearer 设备密钥的自建接口为例。**使用你自己的上报地址和独立设备密钥，不要把密钥发送到 PO0 示例接口或写入公共规则。** 本仓库不提供加白服务、令牌或授权。

两个宏使用相同的 **HTTP 请求** 动作：

| 字段 | 填写方式 |
| --- | --- |
| 方法 | `POST` |
| URL | 自己的完整 HTTPS 续租地址，路径 `/v1/client/refresh` |
| Header Params | 名称 `Authorization`，值 `Bearer ` 加自己的设备密钥（中间一个空格） |
| 请求正文 | 留空 |
| 超时 | 30 秒 |
| TLS 证书校验 | 保持开启 |
| HTTP 状态码 | 保存到本地变量，200 才记为成功 |

- **宏 1：网络变化上报。** 网络连接变化、Wi-Fi 连接/断开或移动数据连接时执行，加“网络已连接”约束。不同版本触发器名称可能不同，覆盖 Wi-Fi 与蜂窝切换即可。
- **宏 2：周期补报。** 定期触发设为 **1 分钟**，加“网络已连接”约束。参考项目默认 15 分钟，本例为更快发现静默换 IP 使用 60 秒。

在 v2rayNG 分应用设置中启用 **绕过选中的应用**，选中 MacroDroid，重启 VPN，确保上报走手机实际网络。检查系统“阻止未通过 VPN 的连接”是否阻挡应用绕过。允许 MacroDroid 自启动、后台运行并调整电池限制。

先手动执行，确认 HTTP 200、后台出现实际直连来源 IPv4和授权，再测试 Wi-Fi/蜂窝切换、锁屏和重启。服务端按连接来源认定 IP，不需要客户端自行查询或提交 IP。Android 省电调度可能延后，1 分钟不是严格时限；上游 Wi-Fi 网关若另有透明代理，也要核对实际来源。含密钥的宏、备份和调试日志不要分享。

已有 Tasker 的用户也可用 HTTP Request + 网络事件 + 60000 毫秒 Tick 实现，无需同时运行两个上报工具。

## 关于内置加白客户端

[po0-clash](https://github.com/yuuuki-creation/po0-clash) 是基于 FlClash 的社区客户端，内置 PO0/咕咕云加白；它不是 v2rayNG 模块。已检查的实现只接受相应服务凭证和接口，不能直接使用自建 Bearer 接口，需另行适配客户端。本项目没有提供其定制 APK。

## 来源与验证

- Geo 数据来自 [Loyalsoldier/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat) 和 [Loyalsoldier/geoip](https://github.com/Loyalsoldier/geoip)，固定文件保持原始字节。
- 随包附上上游许可：[GPL-3.0](licenses/GPL-3.0.txt)、[CC BY-SA 4.0](licenses/CC-BY-SA-4.0.txt)。数据未作修改，仅按哈希重命名。GeoIP 包含 MaxMind 的 GeoLite2 数据（[MaxMind](https://www.maxmind.com/)）；完整数据来源、生成器与源列表见上述上游项目。
- 路由与 Geo 文件在同一提交更新，校验哈希并保留旧资源；公开文件不包含私人域名例外、节点凭据或设备认证信息。
- 已完成生成器离线测试、数据一致性及发布检查；Android 真机导入、实际业务、锁屏自动上报仍需在使用设备上验证。
- 参考：[PO0 自动加白指南](https://wiki.uuuz.de/guide/tutorials/po0fw-whitelist)、[社区客户端说明](https://wiki.uuuz.de/guide/clients/po0-clash)、[MacroDroid HTTP 请求](https://macrodroidforum.com/wiki/index.php/Action:_HTTP_Request)。
