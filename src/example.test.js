import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Header from "./components/Header.astro";

test("Card with slots", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Header);

  expect(result).toBeTruthy();
});
