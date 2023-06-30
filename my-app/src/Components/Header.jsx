export default function Header() {
  return (
    <header class="header purple-background">
      <div class="container">
        <div class="row">
          <div class="column-full d-flex align-center">
            <h1 class="white-text">Code Journal</h1>
            <h3>
              <a id="entriesLink" class="entries-link white-text" href="#">
                Entries
              </a>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
