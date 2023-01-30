<template>
    <div style="display:flex;flex-direction:column;gap: 20px;">
        <SharedButton title="Текст кнопки" />
        <SharedButton title="Текст кнопки блок" disabled />
        <SharedInput />
        <SharedInput :validators="validators" />
        <SharedPanel title="Оставить заявку на консультацию" />
        <SharedPanel title="Оставить заявку на консультацию">
            <template slot="payments">
                <img src="~/assets/icons/visa.png" />
                <img src="~/assets/icons/mastercard.png" />
            </template>
        </SharedPanel>
        <SharedPanel title="Оставить заявку на консультацию" isActive />
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
