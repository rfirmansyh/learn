import React from 'react';
import { Link } from 'react-router-dom';
import {
    Text,
    LayoutOne,
    Button,
    Table
} from 'upkit';

import { useAddressData } from '../../hooks/address';
import TopBar from '../../components/TopBar';

const columns = [
    { Header: 'Nama', accessor: 'nama' },
    { Header: 'Detail', accessor: alamat => {
        return (
            <div>
                {alamat.provinsi}, {alamat.kabupaten}, 
            </div>
        )
    }} 
]

export default function UserAddressAdd() {

    let {
        data,
        limit,
        page,
        status,
        count,
        setPage
    } = useAddressData();

    return (
        <LayoutOne size="large">
            <div>
                <TopBar />
                <Text as="h3">Alamat Pengiriman</Text>
                <br/>

                <Link to="/alamat-pengiriman/tambah">
                    <Button> Tambah baru </Button>
                </Link>
                <br/>
                <br/>

                <Table
                    items={data}
                    columns={columns}
                    totalItems={count}
                    page={page}
                    isLoading={status === 'process'}
                    perPage={limit}
                    onPageChange={page => setPage(page)} />
                
                {status === 'success' && !data.length ? 
                    <div className="text-center p-10">
                        Kamu belum menambahkan alamat pengiriman. <br/>
                        <Link to="alamat-pengiriman/tambah">
                            <Button> Tambah baru </Button>
                        </Link>
                    </div> : null }
            </div>
        </LayoutOne>
    )
}
