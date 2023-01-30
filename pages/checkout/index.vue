<template>
    <div class="checkout">
        <CheckoutBlock class="checkout__block">
            <CheckoutLeftBlockContent />
        </CheckoutBlock>
        <CheckoutBlock class="checkout__block">
            <CheckoutRightBlockContent />
        </CheckoutBlock>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MinLengthValidator } from '~/components/shared/input/validators/LengthValidator';
import RequiredValidator from '~/components/shared/input/validators/RequiredValidator';

export default Vue.extend({
    name: 'CheckoutPage',
    data() {
        return {
            validators: [
                new RequiredValidator('Required'),
                new MinLengthValidator('Too short', 10)
            ]
        }
    }
})
</script>

<style scoped>
.checkout {
    display: flex;
    gap: 8px;
    padding: 112px 56px;
}

.checkout__block {
    width: calc(50% - 60px);
}
</style>
