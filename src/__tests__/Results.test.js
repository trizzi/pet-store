/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import Results from "../Results";

test("renders correctly with no pets", async () => {
  const tree = create(<Results pets={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
