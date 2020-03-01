import React from 'react';

export default ({ titleContent }) => {
  return (
    <section>
      <div className="columns is-gapless is-vcentered">
        <div className="column is-half">
          <h1>{titleContent}</h1>
        </div>
      </div>
    </section>
  );
};
