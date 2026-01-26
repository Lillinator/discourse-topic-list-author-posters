import Component from "@glimmer/component";
import avatar from "discourse/helpers/avatar";

export default class AuthorColumnContent extends Component {
  get topic() {
    return this.args.topic || this.args.outletArgs?.topic;
  }

 // Check the setting and return the avatar size
  get avatarSize() {
    switch (settings.topic_list_author_avatar_size) {
      case "small":
        return "32";
      default:
        return "40";
      case "large":
        return "48";
    }
  }

  <template>
    <td class="custom-author-column topic-list-data">
      <a
        href={{this.topic.creator.path}}
        data-user-card={{this.topic.creator.username}}
      >
        {{avatar this.topic.creator imageSize=this.avatarSize}}
      </a>
    </td>
  </template>
}
