<template>
    <div class="Agreement">
      <VHeader title="协议内容"></VHeader>
      <div class="agreement_text">
        <h1>1.Definitions</h1>
        <p>1.1 Plant adaptations can be remarkably complex. Certain species of
        orchids, for instance, imitate female bees, other plants look and smell
        like dead animals, and still others have the appearance of stones.
        These strange adaptations to life represent just a few of the sophisticated
         means by which plants enhance their chances of survival. Mimicry in plants
         or animals is a three part system. There is a model: the animal, plant or
         substrate being initiated. There is a mimic: the organism that imitates the
         model. And there is a signal receiver or dupe: the animal that cannot
         effectively distinguish between the model and the mimic. Mimetic traits
          may include morphological structures, color patterns, behaviors or other
          attributes of the mimic that promote its resemblance to a model.
          That model may be either an unrelated species or an inanimate object,
          such as the background against which an organism spends most of its time.
          Mimicry is not an active strategy on the part of an individual plant;
          flowers do not deliberately trick or deceive animals into visiting
          them.Mimicry arises as the result of evolution through natural selection
          and the occurrence of random genetic mutations that lead over many
          generations to the appearance of favorable characteristics. If such
          traits help to camouflage a plant, for example, the plant is likely to
          have a survival advantage over other plants that are less well camouflaged.
          The plant will leave more descendants, thereby passing the advantage to
          the next generation. For natural selection to favor the evolution of
          mimicry, the mimicry must derive a reproductive advantage from modeling
           itself after another organism or object: its fitness, measured as the
         number of offspring produced that survive into the next generation,
          must be increased as the result of deception.
        </p>
      </div>
    </div>
</template>

<script>
  import VHeader from "../../components/common/VHeader.vue";
  export default{
    props: {
      //标题
      title: {
        default: ''
      }
    },
    components: {
      VHeader,
    },
  }
</script>

<style scoped lang="scss">
.agreement_text{
  padding: 0 30px;
  margin-top:20px;

  h1{
    margin:4px 0 20px;
    font-weight:400;
  }
  p{
    line-height:36px;
  }
}


</style>
