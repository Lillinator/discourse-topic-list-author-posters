import { apiInitializer } from "discourse/lib/api";
import AuthorColumnContent from "../components/author-column-content";
import AuthorColumnHeader from "../components/author-column-header";
import CustomPostersHeader from "../components/custom-posters-header";
import CustomPostersCell from "../components/custom-posters-cell";
import CustomCategoriesLatestAvatar from "../components/custom-categories-latest-avatar";

export default apiInitializer((api) => {
  // Look up the site service to check the current layout
  const site = api.container.lookup("service:site");
  
  // Bail out early if the setting is true and we are rendering the mobile layout
  if (settings.disable_on_mobile && site.mobileView) {
    return;
  }

  // Show topic author avatar on categories page if setting enabled
  if (settings.show_author_on_categories_page) {
    api.renderInOutlet(
      "latest-topic-list-item-topic-poster",
      CustomCategoriesLatestAvatar
    );
  }

  // Add topic author column on left side before the topic titles in topic lists 
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
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

  // Add topic author to Mobile view
  api.renderInOutlet("topic-list-item-mobile-avatar", AuthorColumnContent);
});
