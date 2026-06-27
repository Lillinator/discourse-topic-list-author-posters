import { apiInitializer } from "discourse/lib/api";
import AuthorColumnContent from "../components/author-column-content";
import AuthorColumnHeader from "../components/author-column-header";
import CustomPostersHeader from "../components/custom-posters-header";
import CustomPostersCell from "../components/custom-posters-cell";
import CustomCategoriesLatestAvatar from "../components/custom-categories-latest-avatar";

export default apiInitializer((api) => {
  // Show topic author avatar on categories page if setting enabled
  if (settings.show_author_on_categories_page) {
    api.renderInOutlet(
      "latest-topic-list-item-topic-poster",
      CustomCategoriesLatestAvatar
    );
  }

  // Add topic author column on left side before the topic titles in topic lists 
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
    // 1. Move the check inside the transformer callback (executes dynamically during render)
    const site = api.container.lookup("service:site");
    
    // Bail out and do not modify columns if disabled on mobile
    if (settings.disable_on_mobile && site.mobileView) {
      return columns;
    }

    columns.add(
      "topic-list-author",
      {
        item: AuthorColumnContent,
        header: AuthorColumnHeader
      },
      { before: "topic" }
    );

    // Replace posters header AND poster column contents in topic lists if setting enabled 
    if (settings.topic_list_show_last_poster_only) {
      columns.replace("posters", { 
        item: CustomPostersCell, 
        header: CustomPostersHeader
      });
    }
    
    return columns;
  });

  // 2. Add topic author to Mobile view ONLY if setting is not disabled
  if (!settings.disable_on_mobile) {
    api.renderInOutlet("topic-list-item-mobile-avatar", AuthorColumnContent);
  }
});
