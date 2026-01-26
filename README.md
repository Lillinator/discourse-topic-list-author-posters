# Discourse Topic List Author & Posters

## Overview
This Discourse theme component inserts a topic author avatar in all topic list routes and has settings that let the admin specify avatar shape and size. There is also a setting to make the posters' avatars column display only the latest (most recent) poster, but only if there is more than one participant in the topic. 

In addition, admins can also choose to display the topic author on the category page when latest topic list views are enabled (i.e.: `Categories with latest topics`), and there are avatar size and shape options as well.

## Installation and Configuration 

- Install this theme component as per the instructions at [Installing a theme or theme component](https://meta.discourse.org/t/installing-a-theme-or-theme-component/63682).
- The default settings are medium avatars with the standard shape, and posters in the posters column as usual.  

## Settings

<img width="50%" height="50%" alt="image" src="https://github.com/user-attachments/assets/b8b7a887-bc50-401c-8d83-8dec1989a06d" />

|Settings | Description|
|--- | ---|
|`Topic_list_author_avatar_size` | Size of avatars in the author avatar column of topic list page routes - `small`, `medium`, or `large`.|
|`Topic_list_author_avatar_border_radius` | Avatar rounding on topic list page routes: `0%` = square -> `50%` = circle.  `tab_style` = rounded left corners|
|`Topic_list_show_last_poster_only` | Show just the last poster avatar in the posters column, but only if there are more than one participant in the topic.|
|`Show_author_on_categories_page` | Show the author avatar instead of the latest poster in topic lists on the categories page.|
|`Category_page_topic_avatar_size` | Size of avatars in the author avatar column in categories page topic lists - `small`, `medium`, or `large`.|
|`Category_page_avatar_border_radius` | Avatar rounding on categories page: `0%` = square -> `50%` = circle.  `tab_style` = rounded left corners |


## Screenshots
Here are screenshots with different avatar size and shape, also showing with expanded AI summary gists. 

### Topic list pages

<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/61813c3c-3f37-46ff-8221-2cd0596e20cc" />

<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/4ac5f5b5-f99a-4bb3-a9f9-daf21ea1e1fc" />

### Categories page topic list

<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/e1082fc6-bdda-4c49-8326-017e37634a35" />

## Notes

 - Does not work with the Topic Excerpts theme component (or other topic preview components).
 - Inserts author avatar and changes the posters column where expected in profile page tabs.
 - Mobile behavior is the same as default in topic footer lists (suggested/related topics) and in profile and inbox tab pages.


## Possible future todos
 - Incorporate topic excerpts
 - Shape poster avatars

   
---
**Discourse Meta Topic**: [insert topic link here]

**Support**: For issues or feature requests, please post in the [Meta topic](https://#) or start a PR on this repo.  

**To hire me or buy me coffee**: visit me here: [Lilly@Discourse Meta](https://meta.discourse.org/u/Lilly/summary).
