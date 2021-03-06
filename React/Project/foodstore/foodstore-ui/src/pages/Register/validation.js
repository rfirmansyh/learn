const rules = {
    full_name: {
        required: { value: true, message: 'Nama Lengkap harus diisi' },
        maxLength: { value: 500, message: 'Panjang Nama lengkap maksimal 500 karakter' }
    },
    
    email: {
        required: { value: true, message: 'Email harus diisi' },
        maxLength: { value: 255, message: 'Panjang Email maksimal 255 karakter' },
        pattern: { value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, message: 'Email tidak valid' }
    },
    
    password: {
        required: { value: true, message: 'Password harus diisi' },
        maxLength: { value: 255, message: 'Panjang Password maksimal 255 karakter' }
    },
    
    password_confirmation: {
        required: { value: true, message: 'Konfirmasi Password harus diisi' },
    },

};

export { rules };