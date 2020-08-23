import React from 'react'

export const Status = {
  DISABLED: 0,
  ACTIVE: 1,
  NOT_ACTIVE: 2
}

function Subtitle ({ status, info, toggle }) {

  switch (status) {
    case Status.NOT_ACTIVE:
      return  <div className="subtitle">
                <span>Чего сидишь? Порадуй котэ,&nbsp;
                  <span className="link" onClick={toggle}>купи.</span>
                </span>
              </div>
  
    case Status.ACTIVE:
      return  <div className="subtitle">
                {info}
              </div>
      
    case Status.DISABLED:
      return  <div className="subtitle subtitle-disabled">
                {"Печалька, " + info + " закончился."}
              </div>
  }
}

export default Subtitle