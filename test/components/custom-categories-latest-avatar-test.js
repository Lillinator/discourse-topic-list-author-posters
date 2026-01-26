import { module, test } from "qunit";
import { setupRenderingTest } from "discourse/tests/helpers/component-test";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Component | custom-categories-latest-avatar", function (hooks) {
  setupRenderingTest(hooks);

  test("renders topic creator avatar and flair", async function (assert) {
    this.outletArgs = {
      topic: {
        creator: {
          username: "topicauthor",
          avatar_template: "/images/avatar.png",
          path: "/u/topicauthor"
        }
      }
    };

    await render(hbs`<CustomCategoriesLatestAvatar @outletArgs={{this.outletArgs}} />`);

    assert.dom(".topic-poster.custom-latest-poster").exists("Custom poster wrapper exists");
    assert.dom(".user-link").exists("User link exists");
    assert.dom("img.avatar").exists("Avatar is rendered");
    assert.dom(".avatar-flair").exists("User avatar flair component is rendered");
  });

  test("includes aria-label with username", async function (assert) {
    this.outletArgs = {
      topic: {
        creator: {
          username: "testuser",
          avatar_template: "/images/avatar.png",
          path: "/u/testuser"
        }
      }
    };

    await render(hbs`<CustomCategoriesLatestAvatar @outletArgs={{this.outletArgs}} />`);

    assert.dom(".user-link").hasAttribute("aria-label", /testuser/, "Aria-label includes username");
  });

  test("renders without aria-label when username is missing", async function (assert) {
    this.outletArgs = {
      topic: {
        creator: {
          username: null,
          avatar_template: "/images/avatar.png",
          path: "/u/unknown"
        }
      }
    };

    await render(hbs`<CustomCategoriesLatestAvatar @outletArgs={{this.outletArgs}} />`);

    assert.dom(".user-link").exists("User link still renders");
    assert.dom(".user-link").doesNotHaveAttribute("aria-label", "No aria-label when username missing");
  });

  test("passes creator to UserLink component", async function (assert) {
    this.outletArgs = {
      topic: {
        creator: {
          username: "linkuser",
          avatar_template: "/images/avatar.png",
          path: "/u/linkuser"
        }
      }
    };

    await render(hbs`<CustomCategoriesLatestAvatar @outletArgs={{this.outletArgs}} />`);

    assert.dom("a[data-user-card='linkuser']").exists("User card data attribute is set");
  });

  test("passes creator to UserAvatarFlair component", async function (assert) {
    this.outletArgs = {
      topic: {
        creator: {
          username: "flairuser",
          avatar_template: "/images/avatar.png",
          path: "/u/flairuser",
          flair_name: "special-flair",
          flair_url: "/images/flair.png"
        }
      }
    };

    await render(hbs`<CustomCategoriesLatestAvatar @outletArgs={{this.outletArgs}} />`);

    // UserAvatarFlair renders when user has flair data
    assert.dom(".avatar-flair").exists("Flair component is present");
  });
});
