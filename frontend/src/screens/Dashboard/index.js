import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboards', {
                headers: { user_id }
            });

            setSpots(response.data);
            console.log(response.data);
        }

        loadSpots();
    }, [])
    return (
        <>
            <ul className="spot-list">
                {spots.map(s => (
                    <li key={s._id}>
                        <header style={{ backgroundImage: `url(${s.thumbnail_url})` }} />
                        <strong>{s.company}</strong>
                        <span>{s.price ? `R$${s.price}` : 'GRATUITO'}</span>
                    </li>
                ))
                }
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo spot</button>
            </Link>

        </>
    )
}