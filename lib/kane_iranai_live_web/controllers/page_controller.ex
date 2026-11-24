defmodule KaneIranaiLiveWeb.PageController do
  use KaneIranaiLiveWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
