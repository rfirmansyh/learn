export function formatRupiah(number) {
    if (isNaN(parseInt(number))) return 'NaN';
    return new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 2, style: 'currency', currency: 'IDR'}).format(number);
}