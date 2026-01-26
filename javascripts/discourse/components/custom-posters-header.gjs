import { i18n } from "discourse-i18n";

const CustomPostersHeader = <template>
  <th class="posters topic-list-data" scope="col">
    {{i18n (themePrefix "last_poster")}}
  </th>
</template>;

export default CustomPostersHeader;
