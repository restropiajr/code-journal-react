import placeholderImageSquare from '../Images/placeholder-image-square.jpg';

export default function Entry() {
  return (
    <div class="container hidden" data-view="entry-form">
      <div class="row">
        <div class="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entryForm">
        <div class="row margin-bottom-1">
          <div class="column-half">
            <img
              class="input-b-radius form-image"
              id="formImage"
              src={placeholderImageSquare}
              alt="entry"
            />
          </div>
          <div class="column-half">
            <label class="margin-bottom-1 d-block" for="title">
              Title
            </label>
            <input
              required
              class="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formTitle"
              name="formTitle"
            />
            <label class="margin-bottom-1 d-block" for="photoUrk">
              Photo URL
            </label>
            <input
              required
              class="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formURL"
              name="formURL"
            />
          </div>
        </div>
        <div class="row margin-bottom-1">
          <div class="column-full">
            <label class="margin-bottom-1 d-block" for="formNotes">
              Notes
            </label>
            <textarea
              required
              class="input-b-color text-padding input-b-radius purple-outline d-block width-100"
              name="formNotes"
              id="formNotes"
              cols="30"
              rows="10"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="column-full d-flex justify-between">
            <button
              class="invisible delete-entry-button"
              type="button"
              id="deleteEntry">
              Delete Entry
            </button>
            <button class="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
