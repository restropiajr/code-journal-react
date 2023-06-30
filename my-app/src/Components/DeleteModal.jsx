export default function DeleteModal() {
  return (
    <div
      id="modalContainer"
      class="modal-container d-flex justify-center align-center hidden">
      <div class="modal row">
        <div class="column-full d-flex justify-center">
          <p>Are you sure you want to delete this entry?</p>
        </div>
        <div class="column-full d-flex justify-between">
          <button class="modal-button" id="cancelButton">
            Cancel
          </button>
          <button
            class="modal-button red-background white-text"
            id="confirmButton">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
