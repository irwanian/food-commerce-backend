const Joi = require('joi')

const schemas = {
    registerCustomer: Joi.object({
        full_name: Joi.string().pattern(new RegExp('^[a-z A-Z]*$')).min(2).max(100).required().error(new Error('Panjang Nama Harus 2 - 100 Karakter dan Terdiri Dari Huruf Alphabet dan spasi')),
        email: Joi.string().email().max(100).required().lowercase().error(new Error('Mohon Masukkan Format email yang Benar dan Terdiri Dari Huruf Kecil (lowercase)')),
        phone: Joi.string().pattern(new RegExp('^0[0-9]{8,11}$')).required().error(new Error('Nomor HP Diawali dengan Angka 0 dan Terdiri dari 9-12 Karakter')),
        password: Joi.string().min(6).max(60).error(new Error('Panjang Password Terdiri dari 6 - 60 Karakter')),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required().error(new Error('Konfirmasi Password Tidak Sesuai dengan Password'))
    }),

    getCustomers: {

    }
}

module.exports = schemas