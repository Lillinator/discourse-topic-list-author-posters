import { module, test } from "qunit";
import { setupRenderingTest } from "discourse/tests/helpers/component-test";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Component | author-column-header", function (hooks) {
  setupRenderingTest(hooks);

  test("renders author column header", async function (assert) {
    await render(hbs`<AuthorColumnHeader />`);

    assert.dom("th.author.topic-list-data").exists("Header cell exists");
    assert.dom("th.author").hasAttribute("scope", "col", "Has proper scope attribute");
    assert.dom("th.author").hasText("Author", "Displays translated text");
  });

  test("hides text when bulk select is enabled", async function (assert) {
    this.bulkSelectEnabled = true;

    await render(hbs`<AuthorColumnHeader @bulkSelectEnabled={{this.bulkSelectEnabled}} />`);

    assert.dom("th.author.topic-list-data").exists("Header cell still exists");
    assert.dom("th.author").hasText("", "Text is hidden during bulk select");
  });

  test("shows text when bulk select is disabled", async function (assert) {
    this.bulkSelectEnabled = false;

    await render(hbs`<AuthorColumnHeader @bulkSelectEnabled={{this.bulkSelectEnabled}} />`);

    assert.dom("th.author").hasText("Author", "Text is visible when bulk select disabled");
  });
});
