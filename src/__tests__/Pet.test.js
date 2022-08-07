/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Pet from "../Pet";

test("displays a default thumbnails", async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("none.jpg");
});
