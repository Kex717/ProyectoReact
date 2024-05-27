import React from 'react'
import {useIdleTimer} from 'react-idle-timer'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

const timeout = 10000

function SesionCaducada(){
    const cookies = new Cookies();

    const onIdle = () => {
        cookies.remove('iniciado');
        cookies.remove('email');
        cookies.remove('nombreUsu');
        window.location.href = '/';
        Swal.fire({
            title: "La sesion expiró por inactividad. Inicie sesión nuevamente",
            icon: "info"
        })
    }

    const getRemainingTime = useIdleTimer({
        onIdle,
        timeout,
        throttle: 500
    })
    console.log(getRemainingTime);

    return(
        <div>
        </div>
    )
}
export default SesionCaducada;