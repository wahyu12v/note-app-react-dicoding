import React from 'react';

function DeleteButton({ id, onDelete }) {
  return (
    <button class="button-24" role="button" onClick={() => onDelete(id)} >Hapus</button>
  );
}

export default DeleteButton;
