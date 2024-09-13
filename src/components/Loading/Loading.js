import React from 'react'
import './Loading.css'

export const Loading = () => {
  return (
    <div className="overlay">
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
