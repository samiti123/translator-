
function explain() {
  return (
    <div>
      <div class='translate_wrapper'>
        <div class='current_lang'>
          <div class='lang'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299722.svg'
              alt='test-1'
            />
            <span class='lang-txt'>EN</span>
            <span class='fa fa-chevron-down chevron'></span>
          </div>
        </div>

        <div class='more_lang'>
          <div class='lang' data-value='cn'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299914.svg'
              alt='test-2'
            />
            <span class='lang-txt'>简体中文</span>
          </div>

          <div class='lang selected' data-value='en'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299722.svg'
              alt='test-3'
            />
            <span class='lang-txt'>
              English<span> (US)</span>
            </span>
          </div>

          <div class='lang' data-value='de'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299786.svg'
              alt='test-4'
            />
            <span class='lang-txt'>Deutsch</span>
          </div>

          <div class='lang' data-value='es'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299820.svg'
              alt='test-5'
            />
            <span class='lang-txt'>Español</span>
          </div>

          <div class='lang' data-value='fr'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299753.svg'
              alt='test-6'
            />
            <span class='lang-txt'>Français</span>
          </div>

          <div class='lang' data-value='pt'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299693.svg'
              alt='test-7'
            />
            <span class='lang-txt'>
              Português<span> (BR)</span>
            </span>
          </div>

          <div class='lang' data-value='ar'>
            <img
              src='https://image.flaticon.com/icons/svg/299/299815.svg'
              alt='test-8'
            />
            <span class='lang-txt'>
              العربية <span> (SA)</span>
            </span>
          </div>
        </div>
      </div>

      <div class='content'>
        <div class='ct-img'>
          <img
            src='https://traceyrickard.co.uk/wp-content/uploads/2015/09/lizard-765x510.jpg'
            alt='test-2'
          />
        </div>
        <div class='ct-txt'>
          <h1>This is about translating</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos cum
            alias vel, velit architecto est! Consequatur beatae facilis
            voluptatibus modi.
          </p>
          <a href='www.google.com'>
            <span>Link</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default explain;
