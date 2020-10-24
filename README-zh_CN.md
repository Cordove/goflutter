# 免费 ChatGPT API

欢迎来到免费 ChatGPT API 项目，这是一个简单且开源的代理 API，您可以免费访问 OpenAI 的 ChatGPT API。

## 新闻

- **2023-03-12**：热心群友赞助了本项目 5000 元人民币（合 724 美元），使免费 API 可以维持生命。为了确保 API 的稳定性和安全性，已经实施了速率限制。欢迎以赞助或托管自己 API 端点的方式支持本项目。
- **2023-03-04**：请查看 [Free ChatGPT](https://freechatgpt.chat/)，这是一个非常棒的开源 Web 应用，您可以免费使用 OpenAI 的 ChatGPT API。它是基于此项目构建的。

## 开放 ChatGPT 倡议

在一个技术以指数速度发展的世界里，人与机器之间的界限越来越模糊，那些有能力创造的人有责任确保所有人都能分享这种进步的好处。

考虑到这一点，我想介绍 Open ChatGPT 倡议。在一个人工智能的潜力受限于门槛和成本的世界里，这是一盏希望之灯。一个免费和开源的代理 API，消除了获取最新人工智能技术的障碍，并使其为所有人所用。

这个项目诞生于一种信念，一种对未来的信念，即人工智能的力量不是留给少数特权者的，而是提供给每一位创造者、每一位创新者和每一位梦想者。

这是一种信念，即技术应该为人类服务，而不是相反。这是一种信念，即获得最新进展的机会不应该由一个人的技术能力或财力决定，而是由一个人的创造力、想象力和抱负决定。

这个项目并不寻求变革人工智能行业，而是使其民主化。寻求每个人都能获得人工智能的力量，无论其背景或经济状况。寻求促进平等、教育和创新。

我最真诚地希望，这个项目将成为变革的催化剂，成为那些相信人工智能的好处应该由所有人分享的人的集合点。加入我的努力，让我们共同创造一个未来，一个人工智能的力量属于我们所有人的未来。

> 如果您想阅读另一篇含有更多技术细节的文章，请阅读《[释放 ChatGPT 的无限潜能：一个公开呼吁](https://medium.com/@ayaka_90553/%E9%87%8A%E6%94%BE-chatgpt-%E7%9A%84%E6%97%A0%E9%99%90%E6%BD%9C%E8%83%BD-%E4%B8%80%E4%B8%AA%E5%85%AC%E5%BC%80%E5%91%BC%E5%90%81-7195a12f05f2)》。

## 用法

要使用 ChatGPT API 免费版，只需向以下端点发送 POST 请求：

```raw
https://chatgpt-api.shn.hk/v1/
```

例如，要使用 `gpt-3.5-turbo` 模型回答 "Hello, how are you?"，请发送以下 `curl` 命令：

```sh
curl https://chatgpt-api.shn.hk/v1/ \
  -H 'Content-Type: application/json' \
  -d '{
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Hello, how are you?"}]
}'
```

您可以在 [OpenAI 官方文档](https://platform.openai.com/docs/api-reference/chat/create)上阅读完整的 API 文档。

## 介绍

ChatGPT 是由 OpenAI 开发的全球知名的会话 AI 模型，因生成类似人类的对各种提示和查询的回答而广受赞誉。凭借其先进的功能，ChatGPT 是聊天机器人、虚拟助手和其他自然语言处理应用程序的宝贵资产。

ChatGPT API 是一个强大的工具，允许开发人员将 ChatGPT 模型集成到自己的应用程序中。但是，要使用此 API，用户需要拥有 OpenAI API 密钥并支付使用费用。

免费 ChatGPT API 认为每个人都应该拥有访问最新人工智能技术的权利，而不必承担获取 API 密钥的经济负担。此开源代理 API 允许您在没有密钥的情况下访问 ChatGPT API，促进了对所有人的可访问性和创新。

## 免费 ChatGPT API 做什么？

这个简单的代理 API 充当您与 OpenAI ChatGPT API 之间的桥梁。您可以使用与原始 API 相同的格式向 ChatGPT API 免费版端点发送请求。该代理 API 将请求转发至 OpenAI API，使用该项目提供的 API 密钥，