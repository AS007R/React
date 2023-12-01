import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="border-top border-primary border-2 sticky-bottom  text-center">
        
        <div className="card-body">
          <h5 className="card-title">Todos List</h5>
          <p className="card-text">
          Every completed task is a step closer to your goals. Keep making progress, one todo at a time!"
          </p>
          <a href="#" className="btn btn-primary">
            Home page
          </a>
        </div>
        <div className="card-footer text-body-secondary">© Todos List, 2023 | All rights reserved</div>
      </div>
    </div>
  );
}
