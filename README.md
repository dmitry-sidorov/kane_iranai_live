# KaneIranaiLive

To start your Phoenix server:

- Create database container `docker run --name kane_iranai_live_dev -p 5432:5432 -e POSTGRES_USER=kane_iranai_live -e POSTGRES_PASSWORD=kane_iranai_live -d postgres`
- Start already existing container `docker start kane_iranai_live_dev`
- Run `mix setup` to install and setup dependencies
- Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Application is available on [`localhost:6767`](http://localhost:6767) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).
