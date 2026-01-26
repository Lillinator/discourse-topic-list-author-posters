import { i18n } from "discourse-i18n";

const AuthorColumnHeader = <template>
  <th class="author topic-list-data" scope="col">
    {{#unless @bulkSelectEnabled}}
      {{i18n (themePrefix "author")}}
    {{/unless}}
  </th>
</template>;

export default AuthorColumnHeader;
