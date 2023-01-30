<template>
    <div class="input" :class="classNames">
        <input :id="id" type="text" v-model="internalValue" @change="onChange" />
        <label :for="id">{{ placeholder }}</label>
        <span v-if="errors[0]" class="input__error">{{ errors[0] }}</span>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import AbstractValidator from './validators/AbstractValidator';

export default {
    name: 'SkillButton',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        id: {
            type: String,
            default: `input-${Math.random() * 100000}`
        },
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        validators: {
            type: Array as PropType<AbstractValidator[]>,
            default: () => ([])
        }
    },
    emit: ['input'],
    mounted() {
        this.internalValue = this.value;
    },
    data() {
        return {
            internalValue: '',
            errors: [] as string[]
        }
    },
    computed: {
        classNames() {
            return {
                'input--disabled': this.disabled,
                'input--empty': this.internalValue === '',
                'input--invalid': this.errors.length
            }
        }
    },
    methods: {
        onChange() {
            this.$emit('input', this.internalValue);

            if (this.validators.length) {
                this.errors = this.validators
                    .map(validator => validator.validate(this.internalValue))
                    .filter(message => !!message) as string[];
            }
        }
    }
}
</script>

<style scoped>
.input {
    display: flex;
    flex-direction: column;
    position: relative;
}

.input input {
    background: var(--bg-color-secondary);
    border: 1px solid var(--stroke-color-main);
    border-radius: 10px;
    padding: 18px;
    padding-top: 26px;
    padding-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Graphik LC TT';
    transition: .3s background, .3s border;
}

.input input:hover {
    border-color: var(--stroke-color-secondary);
}

.input label {
    font-family: 'Graphik LC TT';
    color: var(--color-always-black);
    font-size: 16px;
    line-height: 20px;
    transition: transform .3s, font-size .3s;
    pointer-events: none;
    position: absolute;
    left: 18px;
    transform: translateY(0px);
    height: 60px;
    top: 0;
    display: flex;
    align-items: center;
}

.input input:focus {
    background: var(--color-always-white);
    border: 1px solid var(--stroke-color-secondary);
    outline: none;
}

.input input:focus+label,
.input:not(.input--empty) label {
    font-size: 11px;
    line-height: 12px;
    color: var(--text-color-secondary);
    transform: translateY(-10px);
}

.input--disabled input {
    background: var(--bg-color-secondary-accent);
    color: var(--stroke-color-secondary);
}

.input.input--invalid input {
    background: var(--color-danger-secondary);
    border: 1px solid var(--color-danger);
}

.input.input--invalid .input__error {
    font-family: 'Graphik LC TT';
    font-size: 11px;
    line-height: 12px;
    color: var(--color-danger);
    padding-top: 8px;
}
</style>
