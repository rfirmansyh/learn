import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, LayoutOne, Text } from 'upkit';

export default function RegisterSuccess() {
    return (
        <LayoutOne size="small">
            <Card color="white">
                <Text as="h3">
                    Pendaftaran Berhasil
                </Text>
                <Text>
                    Silahkan Masuk ke Aplikasi
                </Text>

                <br />

                <Link to="/login">
                    <Button fitContainer>
                        Masuk
                    </Button>
                </Link>
            </Card>
        </LayoutOne>
    )
}
