import React from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutOne,
    Table,
    Button,
    Text
} from 'upkit';
import FaFileInvoiceDollar from '@meronex/icons/fa/FaFileInvoiceDollar';

import { getOrders } from '../../api/order';
import { formatRupiah } from '../../utils/format-rupiah';
import { sumPrice } from '../../utils/sum-price';
import Topbar from '../../components/TopBar';
import StatusLabel from '../../components/StatusLabel';


const columns = [
    {
        Header: '',
        id: 'Status',
        accessor: order => (
            <div> #{order.order_number} <br/> </div>
        )
    },
    {
        Header: 'Items',
        accessor: order => (
            <div>
                {order.order_items.map(item => (
                    <div key={item._id}>
                        {item.name} {item.qty}
                    </div>
                ))}
            </div>
        )
    },
    {
        Header: 'Total',
        accessor: order => (
            <div>
                {formatRupiah(sumPrice(order.order_items) + order.delivery_fee)}
            </div>
        ) 
    },
    {
        Header: 'Invoice',
        accessor: order => (
            <div>
                <Link to={`/invoice/${order._id}`}>
                    <Button color="gray" iconBefore={<FaFileInvoiceDollar/>}>
                        Invoice
                    </Button>
                </Link>
            </div>
        )
    }
]

export default function UserOrders() {
    let [pesanan, setPesanan] = React.useState([]);
    let [count, setCount] = React.useState(0);
    let [status, setStatus] = React.useState('idle');
    let [page, setPage] = React.useState(1);
    let [limit, setLimit] = React.useState(10);

    const fetchPesanan = React.useCallback( async () => {
        setStatus('process');

        let { data } = await getOrders({limit, page})
        if (data.error) {
            setStatus('error');
            return;
        }

        setStatus('success');
        setPesanan(data.data);
        setCount(data.count);
    }, [page, limit]);

    React.useEffect(() => {
        fetchPesanan();
    }, [fetchPesanan]);

    return (
        <LayoutOne>
            <Topbar/>
            <Text as="h3">Pesanan Anda</Text>
            <br/>

            <Table
                items={pesanan}
                totalItems={count}
                columns={columns}
                onPageChange={page => setPage(page)}
                page={page}
                isLoading={status === 'process'} />
        </LayoutOne>
    )
}
