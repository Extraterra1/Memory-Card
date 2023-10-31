import Swal from 'sweetalert2';

export default function Toast({ title, icon = 'error', color = 'red' }) {
  return Swal.fire({
    icon,
    title,
    toast: true,
    position: 'top-right',
    iconColor: color,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });
}
