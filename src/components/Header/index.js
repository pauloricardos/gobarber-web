import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-colorized.svg';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <div>
                        <img src={logo} alt="Barbearia Amizade" />
                    </div>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src={
                                profile.avatar ||
                                'https://www.capacitarnh.com.br/img/avatar.png'
                            }
                            alt="Avatar"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
