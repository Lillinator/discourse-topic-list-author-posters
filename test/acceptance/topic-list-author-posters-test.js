import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Topic List Author Posters - Author Column", function (needs) {
  needs.user();
  needs.settings({
    show_author_on_categories_page: false,
    topic_list_show_last_poster_only: false,
  });

  test("adds author column to topic list", async function (assert) {
    await visit("/latest");
    
    assert.dom("th.author.topic-list-data").exists("Author column header exists");
    assert.dom("td.custom-author-column").exists("Author column cells exist");
  });

  test("author column appears before topic column", async function (assert) {
    await visit("/latest");
    
    const headers = document.querySelectorAll("th.topic-list-data");
    const authorIndex = Array.from(headers).findIndex(h => h.classList.contains("author"));
    const topicIndex = Array.from(headers).findIndex(h => h.classList.contains("main-link"));
    
    assert.ok(authorIndex > -1, "Author column header found");
    assert.ok(topicIndex > -1, "Topic column header found");
    assert.ok(authorIndex < topicIndex, "Author column is positioned before topic column");
  });

  test("shows author avatars in topic list", async function (assert) {
    await visit("/latest");
    
    assert.dom("td.custom-author-column img.avatar").exists("Author avatars are rendered");
  });
});

acceptance("Topic List Author Posters - Last Poster Only Mode", function (needs) {
  needs.user();
  needs.settings({
    show_author_on_categories_page: false,
    topic_list_show_last_poster_only: true,
  });

  test("replaces posters column header and content", async function (assert) {
    await visit("/latest");
    
    assert.dom("th.custom-posters-header").exists("Custom posters header exists");
    assert.dom("td.topic-list-data.posters .custom-last-poster").exists("Custom last poster cell exists");
  });

  test("still shows author column alongside custom posters", async function (assert) {
    await visit("/latest");
    
    assert.dom("th.author.topic-list-data").exists("Author column header still exists");
    assert.dom("td.custom-author-column").exists("Author column still exists with last poster mode");
  });
});

acceptance("Topic List Author Posters - Categories Page", function (needs) {
  needs.user();
  needs.settings({
    show_author_on_categories_page: true,
    topic_list_show_last_poster_only: false,
  });

  test("shows author avatar on categories page when enabled", async function (assert) {
    await visit("/categories");
    
    assert.dom(".custom-latest-poster").exists("Custom author avatar renders on categories page");
  });

  test("author column still appears in main topic lists", async function (assert) {
    await visit("/latest");
    
    assert.dom("td.custom-author-column").exists("Author column exists on /latest route");
  });
});

acceptance("Topic List Author Posters - Categories Page Disabled", function (needs) {
  needs.user();
  needs.settings({
    show_author_on_categories_page: false,
    topic_list_show_last_poster_only: false,
  });

  test("does not show custom author avatar on categories page", async function (assert) {
    await visit("/categories");
    
    assert.dom(".custom-latest-poster").doesNotExist("Custom author avatar hidden when setting disabled");
  });
});

acceptance("Topic List Author Posters - Mobile View", function (needs) {
  needs.user();
  needs.mobileView();
  needs.settings({
    show_author_on_categories_page: false,
    topic_list_show_last_poster_only: false,
  });

  test("shows author avatar in mobile topic list", async function (assert) {
    await visit("/latest");
    
    // Mobile uses outlet instead of table columns
    assert.dom(".topic-list-item-mobile-avatar").exists("Mobile avatar outlet exists");
  });
});
