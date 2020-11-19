# Frontend Monorepo

本仓库是一个前端工程 monorepo 的模版仓库，旨在不断探索前端工程在 monorepo 的仓库风格下的一个最佳实践。

本仓库会模拟一个常见的业务场景，既存在 Single Page Application 项目，又存在需要发布的 npm 包项目，同时 Application 会用到同一仓库的 npm 包。

## mono vs multiple

在使用 monorepo 的过程中，相较于 multiple repo 能够明显感知到的优势：
- 无需一个项目一套配置，整个仓库下使用统一套配置、依赖，方便做统一升级。
- 代码风格由同一套规则约束
- 开发时更加方便，不再需要各种包之间的 link
