<template>
    <div class="left-block">
        <div class="left-block__section">
            <h4>
                Заполните форму, чтобы оформить заказ
            </h4>
            <p>Забронируйте курсы со скидкой, а мы перезвоним, проконсультируем и оформим заказ.</p>
        </div>

        <div class="left-block__section">
            <h5>
                Итоговая стоимость
            </h5>
            <div class="total left-block__total">
                <div class="total__price">
                    <div class="old total__old">
                        <span class="old__value">000 000</span>
                        <span>₽</span>
                    </div>
                    <div class="total__recurrent">0 000 <sup>₽/мес.</sup></div>
                    <div class="total__label">Рассрочка на NN месяцев</div>
                </div>
                <div class="discount total__discount">
                    <img src="~/assets/icons/star.png" />
                    <div class="discount__value">-00%</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CheckoutLeftBlockContent',
})
</script>

<style scoped>
.left-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.block h4, .block h5 {
    margin-bottom: 24px;
}

.left-block__total {
    background: var(--bg-color-secondary);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.total__old {
    font-family: 'Graphik LC TT';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;
}

.total__recurrent {
    font-family: 'Graphik LC TT';
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 4px;
}

.total__recurrent sup {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}

.total__label {
    font-family: 'Graphik LC TT';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}

.old__value {
    text-decoration: line-through;
}

.total__discount {
    width: 48px;
    height: 48px;
    position: relative;
}

.total__discount img {
    width: 100%;
}

.discount__value {
    font-family: 'Graphik LC TT';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>
