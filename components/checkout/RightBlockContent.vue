<template>
  <div class="right-block">
    <template v-if="payments.length > 1">
      <h5>Выберите вариант оплаты</h5>

      <div class="payments">
        <SharedPanel
          v-for="payment of payments"
          :title="payment.label"
          :isActive="payment.id === selectedPaymentId"
          @click="selectedPaymentId = payment.id"
        >
          <template slot="payments">
            <!-- hadn't much time to resolve issue with icons loading with dynamic src in Nuxtjs -->
            <img
              v-for="paymentOption of payment.payments"
              :src="`/_nuxt/assets/icons/${paymentOption}.png`"
            />
          </template>
        </SharedPanel>
      </div>
    </template>

    <h5>Заполните контактные данные</h5>

    <form class="form" action="post" @submit="onSubmit">
      <div class="form__inputs">
        <SharedInput placeholder="Имя" v-model="form.name" />
        <SharedInput placeholder="Телефон" v-model="form.phone" />
        <SharedInput placeholder="Электронная почта" v-model="form.email" />
      </div>

      <SharedButton type="submit" title="Получить консультацию" />
    </form>

    <div class="policy" v-html="selectedPayment?.policy" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CheckoutRightBlockContent',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
      },
      selectedPaymentId: 1,
      payments: [] as Array<{
        id: number
        label: string
        payments: string[]
        action: string
        policy: string
      }>,
    }
  },
  mounted() {
    this.$axios.$get('http://api.com').then(
      () => {
        // regular logic
      },
      (err) => {
        let count = Number(this.$route.query.paymentsCount)

        if (count > 4) count = 4
        if (count < 1) count = 1

        const payments = [
          {
            id: 1,
            label: 'Оставить заявку на консультацию',
            payments: [],
            action: 'Получить консультацию',
            policy:
              'Нажимая на кнопку, я соглашаюсь на <a href="#" target="_blank">обработку персональных данных</a> и с <a href="#" target="_blank">правилами пользования Платформой</a>',
          },
          {
            id: 2,
            label: 'Оплатить всю сумму со скидкой 7000 ₽',
            payments: ['visa', 'mir', 'mastercard'],
            action: 'Оплатить',
            policy:
              'Нажимая на кнопку, я соглашаюсь с <a href="#" target="_blank">публичной офертой</a> и <a href="#" target="_blank">политикой обработки персональных данных</a>',
          },
          {
            id: 3,
            label: 'В рассрочку в Покупай со Сбером',
            payments: ['sber'],
            action: 'Оплатить',
            policy:
              'Нажимая на кнопку, я соглашаюсь с <a href="#" target="_blank">публичной офертой</a> и <a href="#" target="_blank">политикой обработки персональных данных</a>',
          },
          {
            id: 4,
            label: 'В рассрочку в Тинькофф',
            payments: ['tinkoff'],
            action: 'Оплатить',
            policy:
              'Нажимая на кнопку, я соглашаюсь с <a href="#" target="_blank">публичной офертой</a> и <a href="#" target="_blank">политикой обработки персональных данных</a>',
          },
        ]

        this.payments = payments.slice(0, count)
        this.selectedPaymentId = this.payments[0].id
      }
    )
  },
  computed: {
    selectedPayment() {
      return this.payments.find((p) => p.id === this.selectedPaymentId)
    },
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault()

      console.log({
        ...this.form,
        paymentId: this.selectedPaymentId,
      })
    },
  },
})
</script>

<style scoped>
h5 {
  margin-bottom: 32px;
}

.payments {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  margin-bottom: 40px;
}

.form__inputs > *:not(:last-child) {
  margin-bottom: 16px;
}

.form__inputs {
  margin-bottom: 32px;
}

.form {
  margin-bottom: 16px;
}

.checkout .policy,
.policy a {
  font-family: 'Graphik LC TT';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-secondary);
}

@media screen and (max-width: 768px), (max-height: 320px) {
  .payments {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }
}
</style>
