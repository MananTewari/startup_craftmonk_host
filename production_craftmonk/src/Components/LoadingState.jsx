import "bootstrap/dist/css/bootstrap.min.css";

function LoadingSpinner() {
  return (
    <div class="clearfix spinner">
      <div
        class="spinner-border"
        style={{ width: "5rem", height: "5rem", marginLeft: "50%" }}
        role="status"
      ></div>
    </div>
  );
}

export default LoadingSpinner;
