import placeholderImageSquare from '../Images/placeholder-image-square.jpg';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Entry() {
  const [formData, setFormData] = useState({
    uuid: uuidv4(),
    title: '',
    photoURL: '',
    notes: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }

	const beforeUnloadFn = () => {
		localStorage.setItem('formData', JSON.stringity(formData));
	}
​
	window.addEventListener('beforeunload', beforeUnloadFn);
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadFn);
    }
  }, [formData]);

  function handleOnSubmit(event) {
    event.preventDefault();
    setFormData((prevFormData) => {
      return { uuid: '', title: '', photoURL: '', notes: '' };
    });
  }

  return (
    <div class="container" data-view="entry-form">
      <div class="row">
        <div class="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entryForm" onSubmit={handleOnSubmit}>
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
              name="title"
              value={formData.title}
              onChange={handleOnChange}
            />
            <label class="margin-bottom-1 d-block" for="photoUrk">
              Photo URL
            </label>
            <input
              required
              class="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleOnChange}
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
              name="notes"
              id="formNotes"
              cols="30"
              rows="10"
              value={formData.notes}
              onChange={handleOnChange}></textarea>
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
            <button
              type="submit"
              class="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
