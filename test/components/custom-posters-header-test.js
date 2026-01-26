import { module, test } from "qunit";
import { setupRenderingTest } from "discourse/tests/helpers/component-test";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Component | custom-posters-header", function (hooks) {
  setupRenderingTest(hooks);

  test("renders custom posters column header", async function (assert) {
    await render(hbs`<CustomPostersHeader />`);

    assert.dom("th.posters.topic-list-data").exists("Header cell exists");
    assert.dom("th.posters").hasAttribute("scope", "col", "Has proper scope attribute");
    assert.dom("th.posters").hasText("Last Poster", "Displays translated text");
  });
});
