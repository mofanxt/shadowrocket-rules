# FlClash 分流规则

适用于 [FlClash v0.9.0](https://github.com/chen08209/FlClash/releases/tag/v0.9.0) 及兼容版本。使用 Mihomo 原生规则集，保留完整域名、后缀、关键词、正则和 IP 网段的匹配方式，Steam 商店与下载直连、社区与聊天走代理。

## 导入使用

1. 安装官方项目发布的 FlClash，普通 Android 手机一般选择 `android-arm64-v8a.apk`。先导入自己的节点分享链接或订阅，确认节点可用。
2. 打开该节点配置的 **扩展/覆写 → 脚本**，点击前往配置脚本的入口，进入脚本管理。点击 **＋ → 导入 URL**，填写下面地址；可将导入的 `routing` 重命名为“精细分流”。也可以从高级配置的脚本管理进入：

   ```text
   https://raw.githubusercontent.com/mofanxt/shadowrocket-rules/refs/heads/main/flclash/routing.js
   ```

3. 打开自己的节点配置的 **扩展/覆写** 设置，选择 **脚本**，绑定刚导入的“精细分流”。检查并停用与本方案冲突的全局附加规则；修改自己的规则前先备份。不要只下载脚本而不绑定配置。
4. 应用配置，在代理页面的 **PROXY** 组选择自己的节点。该组初始包含 `REJECT`，用于无可用节点时阻止误走直连；首次导入务必选择实际节点。
5. 使用 **规则** 模式，确认资源下载成功，再检查国内服务、Steam、GitHub 等请求的连接日志。

覆写只替换分流规则、规则资源和策略组，保留你本地的节点与订阅。全部代理流量使用一个 `PROXY` 选择组。普通单出口节点适用；依赖原策略组的链式代理需要单独适配。资源文件由配置自动加载，无需手工导入 Geo 数据。

## 每周自动更新

**FlClash v0.9.0 的资源自动更新包含远程脚本。** 请使用以上远程 URL 导入方式，本地粘贴的脚本没有更新地址。

1. 打开 **资源** 页面右上角菜单，开启 **自动更新**。
2. 将 **资源更新间隔** 设为 **168 小时**，即 7 天。
3. 在资源列表中手动同步“精细分流”一次，确认成功并应用到当前配置。
4. 允许 FlClash 后台运行。应用进程运行时会定期检查到期资源，强制结束后需重新打开才会补检查；系统休眠或网络不可用也可能延后更新。重新打开后检查资源时间和加载状态。

规则集的 `interval` 为 **604800 秒**。远程脚本按上述设置更新后会替换规则顺序和资源引用，当前正在使用该脚本的配置会重新应用。脚本与内容哈希规则集在同一提交发布，旧资源保留，避免旧脚本突然找不到文件。

**只更新旧规则集 URL 会得到旧快照，必须同时启用远程脚本更新。** 节点订阅可以独立更新，更新节点后依然会应用绑定的分流脚本。如果还设置节点配置自动更新，其间隔单位为分钟，7 天为 **10080 分钟**；它不替代资源页面的脚本更新。

更新内容以仓库实际发布版本为准。后台自动更新已核对客户端实现，仍需在自己的 Android 设备上确认实际运行。

## 指定 Wi-Fi 下自动暂停代理

FlClash v0.9.1 内置 **按需运行**：连接指定 Wi-Fi 时暂停代理，切换到其他 Wi-Fi 或移动数据后恢复原有代理配置。

1. 打开 **工具 → 常规**，在“启动与后台”分组中进入 **按需运行**。
2. 在 **排除 SSIDs** 中添加不需要手机代理的 **Wi-Fi 名称**。名称要完全一致；多个名称分别添加。
3. 按页面提示，将位置权限设为 **始终允许**，并允许 **忽略电池优化**，以便后台识别 Wi-Fi 和处理网络变化。
4. 首次先在未排除的网络下正常启动一次代理，完成 VPN 授权。之后保持 FlClash 后台运行，由“按需运行”自动暂停、恢复。
5. 如果希望每次打开应用时自动启动代理，可同时开启 **常规 → 自动运行**。

| 当前网络 | FlClash 行为 |
| --- | --- |
| 排除列表中的 Wi-Fi | 暂停代理 |
| 其他 Wi-Fi、移动数据 | 恢复原有代理配置 |

暂停代理时，应用仍需运行以监测网络变化。强制结束应用或系统限制后台运行可能影响自动恢复。设置后分别切换到排除的 Wi-Fi、移动数据和其他 Wi-Fi，确认实际效果。

这是客户端本地设置，无需修改分流覆写脚本。功能依据：[按需运行界面](https://github.com/chen08209/FlClash/blob/v0.9.1/lib/views/config/on_demand.dart)、[暂停与恢复逻辑](https://github.com/chen08209/FlClash/blob/v0.9.1/lib/providers/actions/setup.dart#L266-L275)。

## 规则与网络设置

- 域名规则先于 IP 规则，保留各组顺序和前置例外；未命中时默认代理。
- 大批域名和网段使用专用集合，关键词和正则使用 classical 集合。
- DNS 与流量使用同一套规则：覆写使用真实 IP 解析（`redir-host`），命中直连规则的域名用腾讯、阿里 DoH，命中代理规则或未命中的域名经 `PROXY` 查询 Google DoH；会替换配置中原有的 `nameserver-policy` 并移除 `fallback`。请保持 FlClash 的“覆写 DNS”关闭，否则客户端设置会取代覆写。IPv6、TUN 和 QUIC 仍按客户端原配置执行，解析结果与节点能力可能影响实际连接。

## 来源与许可

规则从 [Loyalsoldier/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat) 与 [Loyalsoldier/geoip](https://github.com/Loyalsoldier/geoip) 的固定数据转换为 Mihomo 规则集，保留所用分类的匹配范围与顺序。GeoIP 含 [MaxMind GeoLite2](https://www.maxmind.com/) 数据。

转换后的文件沿用相应上游许可：[GPL-3.0](licenses/GPL-3.0.txt)、[CC BY-SA 4.0](licenses/CC-BY-SA-4.0.txt)。改动为格式转换、单一代理出口和规则集合组织；原始数据的源列表与生成流程见上游项目。

自动更新依据：[资源设置界面](https://github.com/chen08209/FlClash/blob/v0.9.0/lib/views/resources.dart)、[运行期间的定时检查](https://github.com/chen08209/FlClash/blob/v0.9.0/lib/application.dart)、[远程资源更新](https://github.com/chen08209/FlClash/blob/v0.9.0/lib/providers/actions/resources.dart)、[脚本更新后应用配置](https://github.com/chen08209/FlClash/blob/v0.9.0/lib/providers/actions/scripts.dart)、[Mihomo 规则集](https://wiki.metacubex.one/config/rule-providers/)。
