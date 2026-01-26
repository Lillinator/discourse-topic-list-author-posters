import Component from "@glimmer/component";
import UserLink from "discourse/components/user-link";
import avatar from "discourse/helpers/avatar";

export default class CustomPostersCell extends Component {
  get topic() {
    return this.args.topic || this.args.outletArgs?.topic;
  }

get shouldShowPoster() {
  const topic = this.topic;
  if (!topic.lastPosterUser || !topic.posters) {
    return false;
  }

  // Show avatar only if there are multiple participants
  return topic.posters.length > 1;
}

  <template>
    <td class="posters topic-list-data">
      {{#if this.shouldShowPoster}}
        <UserLink
          @username={{this.topic.lastPosterUser.username}}
          @href={{this.topic.lastPosterUser.path}}
          class="latest"
        >
          {{avatar this.topic.lastPosterUser imageSize="small"}}
        </UserLink>
      {{/if}}
    </td>
  </template>
}
