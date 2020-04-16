<template>
  <div class="promises">
    <h1 class="promises__headline">
      {{ $vuetify.lang.t('$vuetify.promises.headline') }}
    </h1>
    <div class="promises__item">
      <Flexibility></Flexibility>
    </div>
    <div class="promises__item">
      <Personality></Personality>
    </div>
    <div class="promises__item">
      <Luxury></Luxury>
    </div>
  </div>
</template>

<script>
import Flexibility from '@/components/Flexibility'
import Personality from '@/components/Personality'
import Luxury from '@/components/Luxury'

export default {
  name: 'promises',
  props: {
    msg: String
  },
  components: {
    Flexibility,
    Personality,
    Luxury
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/less/structure';

.promises {
  background: var(--v-secondary-darken1);
  line-height: 1.8em;
  color: white;
  overflow: hidden;

  &__headline {
    padding: 10vh 0;
    width: 100vw;
  }
  &__item {
    @media @tablet {
      width: 150vw;
    }
  }
}
</style>
