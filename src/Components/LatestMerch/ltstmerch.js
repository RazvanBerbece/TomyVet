import React from 'react';
import pawLogo from './assets/img/paw.png';
import Media from 'react-bootstrap/Media';

function latestMerch() {
    return (
        <Media>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src={pawLogo}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>
    
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
    );
}

export default latestMerch;