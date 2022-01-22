import Joi from "joi";

export  const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ]{1,20}$')).required().messages({
        'string.empty':'"model" не може бути пустим',
        'string.pattern.base':'Тільки букви 1 - 20 символів'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base':'Ціна може бути від 1 до 1 000 000',
        'number.min':'Ціна має бути рівна або більша 0',
        'number.max':'Ціна має бути не більша 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік може бути від 1900 до теперішнього'
    })
})