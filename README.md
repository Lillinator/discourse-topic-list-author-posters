# Discourse Topic List Author & Posters

## Overview
This Discourse theme component inserts a topic author avatar into the first column of all topic list routes and has settings that let the admin specify avatar shape and size. Also, the author’s avatar will not show as first avatar in the posters list.

There is also a setting to make the posters avatars column display only the latest (most recent) poster, but only if there is more than one topic participant. Thus, the author’s avatar will only if there are other posters in the topic.

In addition, admins can also choose to display the topic author on the category page when latest topic list views are enabled (i.e.: Categories with latest topics), and there are avatar size and shape options as well.


## Installation and Configuration 

- Install this theme component as per the instructions at [Installing a theme or theme component](https://meta.discourse.org/t/installing-a-theme-or-theme-component/63682).
- The default settings are medium avatars with the standard shape, and posters in the posters column as usual.  

## Settings

<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/1047d186-0450-4bab-9c6f-de24f7798062" />


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

<img width="3044" height="1868" alt="image" src="https://github.com/user-attachments/assets/a9cad8f9-e2bd-4054-a895-dd5a3bc3b667" />
<img width="3044" height="1886" alt="image" src="https://github.com/user-attachments/assets/cc574c39-edfa-4cdc-8fa6-bb8a494f06d7" />
<img width="3044" height="1878" alt="image" src="https://github.com/user-attachments/assets/27a7518d-8665-46c0-b158-0fba10356afb" />
<img width="3044" height="1884" alt="image" src="https://github.com/user-attachments/assets/16eabeab-f32a-4727-8ed3-e8212f02ab99" />

### Topic list pages


### Categories page topic list

<img width="690" height="431" alt="image" src="https://github.com/user-attachments/assets/c14be493-9e86-4e9a-8353-decebcc14c21" />

<img width="690" height="429" alt="image" src="https://github.com/user-attachments/assets/07adb661-1939-4937-82d3-18ae61e487f8" />

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
