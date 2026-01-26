import { module, test } from "qunit";
import { setupRenderingTest } from "discourse/tests/helpers/component-test";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Component | custom-posters-cell", function (hooks) {
  setupRenderingTest(hooks);

  test("renders last poster when multiple participants exist", async function (assert) {
    this.topic = {
      lastPosterUser: {
        username: "lastposter",
        path: "/u/lastposter",
        avatar_template: "/images/avatar.png"
      },
      posters: [
        { user: { username: "user1" } },
        { user: { username: "user2" } }
      ]
    };

    await render(hbs`<CustomPostersCell @topic={{this.topic}} />`);

    assert.dom("td.posters.topic-list-data").exists("Cell exists");
    assert.dom(".user-link.latest").exists("User link exists");
    assert.dom("a[data-user-card='lastposter']").exists("Last poster link exists");
    assert.dom("img.avatar").exists("Avatar is rendered");
  });

  test("does not render poster when only one participant", async function (assert) {
    this.topic = {
      lastPosterUser: {
        username: "onlyuser",
        path: "/u/onlyuser",
        avatar_template: "/images/avatar.png"
      },
      posters: [
        { user: { username: "onlyuser" } }
      ]
    };

    await render(hbs`<CustomPostersCell @topic={{this.topic}} />`);

    assert.dom("td.posters.topic-list-data").exists("Cell exists");
    assert.dom(".user-link").doesNotExist("User link not rendered for single participant");
    assert.dom("img.avatar").doesNotExist("Avatar not rendered for single participant");
  });

  test("does not render when lastPosterUser is missing", async function (assert) {
    this.topic = {
      lastPosterUser: null,
      posters: [
        { user: { username: "user1" } },
        { user: { username: "user2" } }
      ]
    };

    await render(hbs`<CustomPostersCell @topic={{this.topic}} />`);

    assert.dom("td.posters.topic-list-data").exists("Cell exists");
    assert.dom(".user-link").doesNotExist("No user link when lastPosterUser missing");
  });

  test("does not render when posters array is missing", async function (assert) {
    this.topic = {
      lastPosterUser: {
        username: "lastposter",
        path: "/u/lastposter"
      },
      posters: null
    };

    await render(hbs`<CustomPostersCell @topic={{this.topic}} />`);

    assert.dom("td.posters.topic-list-data").exists("Cell exists");
    assert.dom(".user-link").doesNotExist("No user link when posters array missing");
  });

  test("works with outletArgs", async function (assert) {
    this.outletArgs = {
      topic: {
        lastPosterUser: {
          username: "outletuser",
          path: "/u/outletuser",
          avatar_template: "/images/avatar.png"
        },
        posters: [
          { user: { username: "user1" } },
          { user: { username: "user2" } }
        ]
      }
    };

    await render(hbs`<CustomPostersCell @outletArgs={{this.outletArgs}} />`);

    assert.dom("a[data-user-card='outletuser']").exists("OutletArgs work correctly");
  });
});
