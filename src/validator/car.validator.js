import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-Zа-яА-ЯіІїЇ]{1,20}$')).required().messages({
        'string.empty':'"model" не може бути пустим',
        'string.pattern.base':'Тільки букви 1 - 20 символів'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base':'Ціна може бути від 1 до 1000000',
        'number.min':'Ціна має бути рівна або більша 0',
        'number.max': 'Ціна має бути меншою ніж 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік має бути від 1900 до теперішнього',
        'number.min':'Рік має бути рівним або більшим 1900',
        'number.max': 'Рік має бути рівним або меншим теперішнього року'
    })
})