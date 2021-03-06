import React from 'react';
import { string } from 'prop-types';
import {
    Badge
} from 'upkit';

import { formatRupiah } from '../../utils/format-rupiah';
import { config } from '../../config';

export default function StatusLabel({status}) {
    switch(status) {
        case 'waiting_payment':
            return (
                <Badge color="orange">
                    Menunggu Pembayaran
                </Badge>
            )
        case 'paid':
            return (
                <Badge color="yellow">
                    Sedang Diproses
                </Badge>
            )
        case 'processing':
            return (
                <Badge color="blue">
                    Dalam pengiriman
                </Badge>
            )
        case 'delivered':
            return (
                <Badge color="blue">
                    Dalam pengiriman
                </Badge>
            )
        default:
            return <div/>
    }
}

StatusLabel.defaultProps = {

}

StatusLabel.propTypes = {
    status: string.isRequired
}