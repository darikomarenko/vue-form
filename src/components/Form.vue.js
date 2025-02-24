import { ref, computed } from 'vue';
import { useAccountStore } from '../../stores/accountStore';
import { BButton, BForm, BFormGroup, BFormInput, BFormSelect, BRow, BCol } from 'bootstrap-vue-next';
const accountTypes = [
    { value: 'LDAP', text: 'LDAP' },
    { value: 'Локальная', text: 'Локальная' }
];
const accountStore = useAccountStore();
const accounts = computed(() => accountStore.accounts);
const showForm = ref(false);
const newAccount = ref({
    label: '',
    type: 'LDAP',
    login: '',
    password: '',
});
const passwordVisible = ref(false);
const toggleForm = () => {
    showForm.value = !showForm.value;
};
const transformLabel = (label) => {
    return label ? label.split(';').map(part => part.trim()) : [];
};
const addNewAccount = () => {
    if (isFormValid.value) {
        const account = {
            ...newAccount.value,
            label: transformLabel(newAccount.value.label).join(';') // Сохраняем обратно в строку
        };
        accountStore.addAccount(account);
        newAccount.value = { label: '', type: 'LDAP', login: '', password: '' };
        showForm.value = false;
    }
};
const saveAccount = (index) => {
    const account = accounts.value[index];
    if (isValid(account.login, 'login')) {
        account.label = transformLabel(account.label).join(';');
        accountStore.updateAccount(index, account);
    }
};
const deleteAccount = (index) => {
    accountStore.deleteAccount(index);
};
const isValid = (value, field) => {
    if (!value)
        return field !== 'login' && field !== 'password';
    if (field === 'login' || field === 'password')
        return value.length <= 100;
    if (field === 'label')
        return value.length <= 50;
    return true;
};
const isFormValid = computed(() => {
    return (isValid(newAccount.value.login, 'login') &&
        (newAccount.value.type !== 'Локальная' || isValid(newAccount.value.password, 'password')));
});
const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['password-input-container']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
const __VLS_0 = {}.BButton;
/** @type {[typeof __VLS_components.BButton, typeof __VLS_components.bButton, typeof __VLS_components.BButton, typeof __VLS_components.bButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    variant: "primary",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    variant: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.toggleForm)
};
__VLS_3.slots.default;
var __VLS_3;
if (__VLS_ctx.showForm) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mt-3" },
    });
    const __VLS_8 = {}.BForm;
    /** @type {[typeof __VLS_components.BForm, typeof __VLS_components.bForm, typeof __VLS_components.BForm, typeof __VLS_components.bForm, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        ...{ 'onSubmit': {} },
    }));
    const __VLS_10 = __VLS_9({
        ...{ 'onSubmit': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_12;
    let __VLS_13;
    let __VLS_14;
    const __VLS_15 = {
        onSubmit: (__VLS_ctx.addNewAccount)
    };
    __VLS_11.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "message mt-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: "bi bi-question-circle" },
    });
    const __VLS_16 = {}.BRow;
    /** @type {[typeof __VLS_components.BRow, typeof __VLS_components.bRow, typeof __VLS_components.BRow, typeof __VLS_components.bRow, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        ...{ class: "g-3" },
    }));
    const __VLS_18 = __VLS_17({
        ...{ class: "g-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_19.slots.default;
    const __VLS_20 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        sm: "12",
        md: "6",
        lg: "3",
    }));
    const __VLS_22 = __VLS_21({
        sm: "12",
        md: "6",
        lg: "3",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    const __VLS_24 = {}.BFormGroup;
    /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        label: "Метка",
    }));
    const __VLS_26 = __VLS_25({
        label: "Метка",
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_27.slots.default;
    const __VLS_28 = {}.BFormInput;
    /** @type {[typeof __VLS_components.BFormInput, typeof __VLS_components.bFormInput, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        modelValue: (__VLS_ctx.newAccount.label),
        placeholder: "Метка (макс. 50 символов)",
        maxlength: "50",
    }));
    const __VLS_30 = __VLS_29({
        modelValue: (__VLS_ctx.newAccount.label),
        placeholder: "Метка (макс. 50 символов)",
        maxlength: "50",
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    var __VLS_27;
    var __VLS_23;
    const __VLS_32 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        sm: "12",
        md: "6",
        lg: "3",
    }));
    const __VLS_34 = __VLS_33({
        sm: "12",
        md: "6",
        lg: "3",
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_35.slots.default;
    const __VLS_36 = {}.BFormGroup;
    /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
        label: "Тип записи",
    }));
    const __VLS_38 = __VLS_37({
        label: "Тип записи",
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_39.slots.default;
    const __VLS_40 = {}.BFormSelect;
    /** @type {[typeof __VLS_components.BFormSelect, typeof __VLS_components.bFormSelect, ]} */ ;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
        modelValue: (__VLS_ctx.newAccount.type),
        options: (__VLS_ctx.accountTypes),
    }));
    const __VLS_42 = __VLS_41({
        modelValue: (__VLS_ctx.newAccount.type),
        options: (__VLS_ctx.accountTypes),
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    var __VLS_39;
    var __VLS_35;
    const __VLS_44 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
        sm: "12",
        md: "6",
        lg: "3",
    }));
    const __VLS_46 = __VLS_45({
        sm: "12",
        md: "6",
        lg: "3",
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_47.slots.default;
    const __VLS_48 = {}.BFormGroup;
    /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
        label: "Логин",
    }));
    const __VLS_50 = __VLS_49({
        label: "Логин",
    }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_51.slots.default;
    const __VLS_52 = {}.BFormInput;
    /** @type {[typeof __VLS_components.BFormInput, typeof __VLS_components.bFormInput, ]} */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
        modelValue: (__VLS_ctx.newAccount.login),
        state: (__VLS_ctx.isValid(__VLS_ctx.newAccount.login, 'login')),
        placeholder: "Логин",
    }));
    const __VLS_54 = __VLS_53({
        modelValue: (__VLS_ctx.newAccount.login),
        state: (__VLS_ctx.isValid(__VLS_ctx.newAccount.login, 'login')),
        placeholder: "Логин",
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    var __VLS_51;
    var __VLS_47;
    if (__VLS_ctx.newAccount.type === 'Локальная') {
        const __VLS_56 = {}.BCol;
        /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
            sm: "12",
            md: "6",
            lg: "3",
        }));
        const __VLS_58 = __VLS_57({
            sm: "12",
            md: "6",
            lg: "3",
        }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        __VLS_59.slots.default;
        const __VLS_60 = {}.BFormGroup;
        /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
            label: "Пароль",
        }));
        const __VLS_62 = __VLS_61({
            label: "Пароль",
        }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        __VLS_63.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "password-input-container" },
        });
        const __VLS_64 = {}.BFormInput;
        /** @type {[typeof __VLS_components.BFormInput, typeof __VLS_components.bFormInput, ]} */ ;
        // @ts-ignore
        const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
            modelValue: (__VLS_ctx.newAccount.password),
            state: (__VLS_ctx.isValid(__VLS_ctx.newAccount.password, 'password')),
            placeholder: "Пароль",
            type: (__VLS_ctx.passwordVisible ? 'text' : 'password'),
        }));
        const __VLS_66 = __VLS_65({
            modelValue: (__VLS_ctx.newAccount.password),
            state: (__VLS_ctx.isValid(__VLS_ctx.newAccount.password, 'password')),
            placeholder: "Пароль",
            type: (__VLS_ctx.passwordVisible ? 'text' : 'password'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_65));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ onClick: (__VLS_ctx.togglePasswordVisibility) },
            ...{ class: "bi" },
            ...{ class: (__VLS_ctx.passwordVisible ? 'bi-eye-slash' : 'bi-eye') },
            'aria-hidden': "true",
        });
        var __VLS_63;
        var __VLS_59;
    }
    const __VLS_68 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        sm: "12",
        ...{ class: "align-self-end d-flex gap-2" },
    }));
    const __VLS_70 = __VLS_69({
        sm: "12",
        ...{ class: "align-self-end d-flex gap-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    __VLS_71.slots.default;
    const __VLS_72 = {}.BButton;
    /** @type {[typeof __VLS_components.BButton, typeof __VLS_components.bButton, typeof __VLS_components.BButton, typeof __VLS_components.bButton, ]} */ ;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        variant: "success",
        type: "submit",
        disabled: (!__VLS_ctx.isFormValid),
    }));
    const __VLS_74 = __VLS_73({
        variant: "success",
        type: "submit",
        disabled: (!__VLS_ctx.isFormValid),
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_75.slots.default;
    var __VLS_75;
    const __VLS_76 = {}.BButton;
    /** @type {[typeof __VLS_components.BButton, typeof __VLS_components.bButton, typeof __VLS_components.BButton, typeof __VLS_components.bButton, ]} */ ;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
        ...{ 'onClick': {} },
        variant: "secondary",
    }));
    const __VLS_78 = __VLS_77({
        ...{ 'onClick': {} },
        variant: "secondary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    let __VLS_80;
    let __VLS_81;
    let __VLS_82;
    const __VLS_83 = {
        onClick: (__VLS_ctx.toggleForm)
    };
    __VLS_79.slots.default;
    var __VLS_79;
    var __VLS_71;
    var __VLS_19;
    var __VLS_11;
}
for (const [account, index] of __VLS_getVForSourceType((__VLS_ctx.accounts))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (index),
        ...{ class: "mt-3" },
    });
    const __VLS_84 = {}.BForm;
    /** @type {[typeof __VLS_components.BForm, typeof __VLS_components.bForm, typeof __VLS_components.BForm, typeof __VLS_components.bForm, ]} */ ;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
        ...{ 'onSubmit': {} },
    }));
    const __VLS_86 = __VLS_85({
        ...{ 'onSubmit': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    let __VLS_88;
    let __VLS_89;
    let __VLS_90;
    const __VLS_91 = {
        onSubmit: (...[$event]) => {
            __VLS_ctx.saveAccount(index);
        }
    };
    __VLS_87.slots.default;
    const __VLS_92 = {}.BRow;
    /** @type {[typeof __VLS_components.BRow, typeof __VLS_components.bRow, typeof __VLS_components.BRow, typeof __VLS_components.bRow, ]} */ ;
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
        ...{ class: "g-3" },
    }));
    const __VLS_94 = __VLS_93({
        ...{ class: "g-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_95.slots.default;
    const __VLS_96 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
        sm: "12",
        md: "6",
        lg: "3",
    }));
    const __VLS_98 = __VLS_97({
        sm: "12",
        md: "6",
        lg: "3",
    }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    __VLS_99.slots.default;
    const __VLS_100 = {}.BFormGroup;
    /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
        label: "Метка",
    }));
    const __VLS_102 = __VLS_101({
        label: "Метка",
    }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    __VLS_103.slots.default;
    const __VLS_104 = {}.BFormInput;
    /** @type {[typeof __VLS_components.BFormInput, typeof __VLS_components.bFormInput, ]} */ ;
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
        modelValue: (account.label),
        placeholder: "Метка (макс. 50 символов)",
        maxlength: "50",
        readonly: true,
    }));
    const __VLS_106 = __VLS_105({
        modelValue: (account.label),
        placeholder: "Метка (макс. 50 символов)",
        maxlength: "50",
        readonly: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    var __VLS_103;
    var __VLS_99;
    const __VLS_108 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
        sm: "12",
        md: "6",
        lg: "3",
    }));
    const __VLS_110 = __VLS_109({
        sm: "12",
        md: "6",
        lg: "3",
    }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_111.slots.default;
    const __VLS_112 = {}.BFormGroup;
    /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({
        label: "Тип записи",
    }));
    const __VLS_114 = __VLS_113({
        label: "Тип записи",
    }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    __VLS_115.slots.default;
    const __VLS_116 = {}.BFormSelect;
    /** @type {[typeof __VLS_components.BFormSelect, typeof __VLS_components.bFormSelect, ]} */ ;
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
        modelValue: (account.type),
        options: (__VLS_ctx.accountTypes),
        disabled: true,
    }));
    const __VLS_118 = __VLS_117({
        modelValue: (account.type),
        options: (__VLS_ctx.accountTypes),
        disabled: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    var __VLS_115;
    var __VLS_111;
    const __VLS_120 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
        sm: "12",
        md: "6",
        lg: "3",
    }));
    const __VLS_122 = __VLS_121({
        sm: "12",
        md: "6",
        lg: "3",
    }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    __VLS_123.slots.default;
    const __VLS_124 = {}.BFormGroup;
    /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({
        label: "Логин",
    }));
    const __VLS_126 = __VLS_125({
        label: "Логин",
    }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    __VLS_127.slots.default;
    const __VLS_128 = {}.BFormInput;
    /** @type {[typeof __VLS_components.BFormInput, typeof __VLS_components.bFormInput, ]} */ ;
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({
        modelValue: (account.login),
        placeholder: "Логин",
        readonly: true,
    }));
    const __VLS_130 = __VLS_129({
        modelValue: (account.login),
        placeholder: "Логин",
        readonly: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    var __VLS_127;
    var __VLS_123;
    if (account.type === 'Локальная') {
        const __VLS_132 = {}.BCol;
        /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
        // @ts-ignore
        const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
            sm: "12",
            md: "6",
            lg: "3",
        }));
        const __VLS_134 = __VLS_133({
            sm: "12",
            md: "6",
            lg: "3",
        }, ...__VLS_functionalComponentArgsRest(__VLS_133));
        __VLS_135.slots.default;
        const __VLS_136 = {}.BFormGroup;
        /** @type {[typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, typeof __VLS_components.BFormGroup, typeof __VLS_components.bFormGroup, ]} */ ;
        // @ts-ignore
        const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({
            label: "Пароль",
        }));
        const __VLS_138 = __VLS_137({
            label: "Пароль",
        }, ...__VLS_functionalComponentArgsRest(__VLS_137));
        __VLS_139.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "password-input-container" },
        });
        const __VLS_140 = {}.BFormInput;
        /** @type {[typeof __VLS_components.BFormInput, typeof __VLS_components.bFormInput, ]} */ ;
        // @ts-ignore
        const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({
            modelValue: (account.password),
            placeholder: "Пароль",
            type: "password",
            readonly: true,
        }));
        const __VLS_142 = __VLS_141({
            modelValue: (account.password),
            placeholder: "Пароль",
            type: "password",
            readonly: true,
        }, ...__VLS_functionalComponentArgsRest(__VLS_141));
        var __VLS_139;
        var __VLS_135;
    }
    const __VLS_144 = {}.BCol;
    /** @type {[typeof __VLS_components.BCol, typeof __VLS_components.bCol, typeof __VLS_components.BCol, typeof __VLS_components.bCol, ]} */ ;
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
        sm: "12",
        ...{ class: "align-self-end" },
    }));
    const __VLS_146 = __VLS_145({
        sm: "12",
        ...{ class: "align-self-end" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    __VLS_147.slots.default;
    const __VLS_148 = {}.BButton;
    /** @type {[typeof __VLS_components.BButton, typeof __VLS_components.bButton, typeof __VLS_components.BButton, typeof __VLS_components.bButton, ]} */ ;
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({
        ...{ 'onClick': {} },
        variant: "danger",
    }));
    const __VLS_150 = __VLS_149({
        ...{ 'onClick': {} },
        variant: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_149));
    let __VLS_152;
    let __VLS_153;
    let __VLS_154;
    const __VLS_155 = {
        onClick: (...[$event]) => {
            __VLS_ctx.deleteAccount(index);
        }
    };
    __VLS_151.slots.default;
    var __VLS_151;
    var __VLS_147;
    var __VLS_95;
    var __VLS_87;
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['message']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bi']} */ ;
/** @type {__VLS_StyleScopedClasses['bi-question-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['password-input-container']} */ ;
/** @type {__VLS_StyleScopedClasses['bi']} */ ;
/** @type {__VLS_StyleScopedClasses['align-self-end']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['password-input-container']} */ ;
/** @type {__VLS_StyleScopedClasses['align-self-end']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            BButton: BButton,
            BForm: BForm,
            BFormGroup: BFormGroup,
            BFormInput: BFormInput,
            BFormSelect: BFormSelect,
            BRow: BRow,
            BCol: BCol,
            accountTypes: accountTypes,
            accounts: accounts,
            showForm: showForm,
            newAccount: newAccount,
            passwordVisible: passwordVisible,
            toggleForm: toggleForm,
            addNewAccount: addNewAccount,
            saveAccount: saveAccount,
            deleteAccount: deleteAccount,
            isValid: isValid,
            isFormValid: isFormValid,
            togglePasswordVisibility: togglePasswordVisibility,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
