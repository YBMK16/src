import React, { useState } from 'react';
function Helper(btn) {
  if (btn === 1 || btn === 2 || btn === 3) {
    return btn;
  } else return null;
}
const Help = () => {
  const [bt1, setbt1] = useState(false);
  const [bt2, setbt2] = useState(false);
  const [bt3, setbt3] = useState(false);
  const [whichBtn, setWhichBtn] = useState(0);

  return (
    <>
      <div className='box-border h-[auto] w-[auto] p-4 border-4 border-colo'>
        {(!bt1 || whichBtn !== 1) && (
          <button
            onClick={() => {
              const abc = Helper(1);
              setWhichBtn(abc);
              setbt1(true);
            }}
          >
            show
          </button>
        )}
        {bt1 && whichBtn === 1 && (
          <button
            onClick={() => {
              const abc = Helper(0);
              setWhichBtn(abc);
              setbt1(false);
            }}
          >
            Hide
          </button>
        )}
        {bt1 && whichBtn === 1 && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            nihil tempore exercitationem repudiandae, reprehenderit est. Ex
            deleniti asperiores iste cupiditate consequuntur accusamus sunt
            assumenda voluptatum, optio nobis voluptates illum iure.
          </p>
        )}
      </div>
      <div className='box-border h-[auto] w-[auto] p-4 border-4 border-colo'>
        {(!bt2 || whichBtn !== 2) && (
          <button
            onClick={() => {
              const abc = Helper(2);
              setWhichBtn(abc);
              setbt2(true);
            }}
          >
            show
          </button>
        )}
        {bt2 && whichBtn === 2 && (
          <button
            onClick={() => {
              const abc = Helper(0);
              setWhichBtn(abc);
              setbt2(false);
            }}
          >
            Hide
          </button>
        )}
        {bt2 && whichBtn === 2 && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            nihil tempore exercitationem repudiandae, reprehenderit est. Ex
            deleniti asperiores iste cupiditate consequuntur accusamus sunt
            assumenda voluptatum, optio nobis voluptates illum iure.
          </p>
        )}
      </div>
      <div className='box-border h-[auto] w-[auto] p-4 border-4 border-colo'>
        {(!bt3 || whichBtn !== 3) && (
          <button
            onClick={() => {
              const abc = Helper(3);
              setWhichBtn(abc);
              setbt3(true);
            }}
          >
            show
          </button>
        )}
        {bt3 && whichBtn === 3 && (
          <button
            onClick={() => {
              const abc = Helper(0);
              setWhichBtn(abc);
              setbt3(false);
            }}
          >
            Hide
          </button>
        )}
        {bt3 && whichBtn === 3 && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            nihil tempore exercitationem repudiandae, reprehenderit est. Ex
            deleniti asperiores iste cupiditate consequuntur accusamus sunt
            assumenda voluptatum, optio nobis voluptates illum iure.
          </p>
        )}
      </div>
    </>
  );
};
export default Help;
