import { module, test } from "qunit";
import { setupRenderingTest } from "discourse/tests/helpers/component-test";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import AuthorColumnContent from "discourse/plugins/YOUR-PLUGIN-NAME/discourse/components/author-column-content";

module("Component | author-column-content", function (hooks) {
  setupRenderingTest(hooks);

  test("renders author avatar with topic prop", async function (assert) {
    this.topic = {
      creator: {
        username: "testuser",
        path: "/u/testuser",
        avatar_template: "/images/avatar.png"
      }
    };

    await render(hbs`<AuthorColumnContent @topic={{this.topic}} />`);

    assert.dom("td.custom-author-column").exists("Column cell exists");
    assert.dom("a[data-user-card='testuser']").exists("User card link exists");
    assert.dom("a[href='/u/testuser']").exists("User profile link exists");
    assert.dom("img.avatar").exists("Avatar image exists");
  });

  test("renders author avatar with outletArgs", async function (assert) {
    this.outletArgs = {
      topic: {
        creator: {
          username: "outletuser",
          path: "/u/outletuser",
          avatar_template: "/images/avatar.png"
        }
      }
    };

    await render(hbs`<AuthorColumnContent @outletArgs={{this.outletArgs}} />`);

    assert.dom("a[data-user-card='outletuser']").exists("Outlet args work");
  });

  test("uses small avatar size when setting is 'small'", async function (assert) {
    this.owner.lookup("service:site-settings").topic_list_author_avatar_size = "small";
    
    this.topic = {
      creator: {
        username: "testuser",
        path: "/u/testuser",
        avatar_template: "/images/avatar.png"
      }
    };

    await render(hbs`<AuthorColumnContent @topic={{this.topic}} />`);

    // Avatar helper renders with width/height attributes
    assert.dom("img.avatar").hasAttribute("width", "32", "Small avatar is 32px");
  });

  test("uses large avatar size when setting is 'large'", async function (assert) {
    this.owner.lookup("service:site-settings").topic_list_author_avatar_size = "large";
    
    this.topic = {
      creator: {
        username: "testuser",
        path: "/u/testuser",
        avatar_template: "/images/avatar.png"
      }
    };

    await render(hbs`<AuthorColumnContent @topic={{this.topic}} />`);

    assert.dom("img.avatar").hasAttribute("width", "48", "Large avatar is 48px");
  });

  test("uses medium avatar size by default", async function (assert) {
    // Set to any value that's not "small" or "large" to test default case
    this.owner.lookup("service:site-settings").topic_list_author_avatar_size = "medium";
  
    this.topic = {
      creator: {
        username: "testuser",
        path: "/u/testuser",
        avatar_template: "/images/avatar.png"
      }
    };

    await render(hbs`<AuthorColumnContent @topic={{this.topic}} />`);

    assert.dom("img.avatar").hasAttribute("width", "40", "Medium avatar is 40px (default)");
  });
});
