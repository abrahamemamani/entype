import React, { useEffect, useState, useCallback } from 'react';
import Word from '../Word/Word';
import '../Game/Game.scss';

const words = [
    [
        { 'eng' : 'Eyes',       'spa' : 'Ojos'    },
        { 'eng' : 'Back',       'spa' : 'Espalda' },
        { 'eng' : 'Knee',       'spa' : 'Rodilla' },
        { 'eng' : 'Belly',      'spa' : 'Barriga' },
        { 'eng' : 'Shoulder',   'spa' : 'Hombro'  },
        { 'eng' : 'Mouth',      'spa' : 'Boca'    },
        { 'eng' : 'Ear',        'spa' : 'Oreja'   },
        { 'eng' : 'Nose',       'spa' : 'Naríz'   },
        { 'eng' : 'Hand',       'spa' : 'Mano'    },
        { 'eng' : 'Finger',     'spa' : 'Dedo'    }
    ],
    [
        { 'eng' : 'Hard drive',  'spa' : 'Disco duro'              },
        { 'eng' : 'Browser',     'spa' : 'Navegador'               },
        { 'eng' : 'Memory',      'spa' : 'Memoria'                 },
        { 'eng' : 'Link',        'spa' : 'Enlace'                  },
        { 'eng' : 'Laptop',      'spa' : 'Ordenador portátil'      },
        { 'eng' : 'Hardware',    'spa' : 'Hardware'                },
        { 'eng' : 'Virus',       'spa' : 'Virus'                   },
        { 'eng' : 'Email',       'spa' : 'Correo electrónico'      },
        { 'eng' : 'Desktop',     'spa' : 'Ordenador de escritorio' },
        { 'eng' : 'Mouse',       'spa' : 'Ratón'                   }
    ],
    [
        { 'eng' : 'Kitchen',     'spa' : 'Cocina'     },
        { 'eng' : 'Room',        'spa' : 'Habitación' },
        { 'eng' : 'Window',      'spa' : 'Ventana'    },
        { 'eng' : 'Furniture',   'spa' : 'Muebles'    },
        { 'eng' : 'Armchair',    'spa' : 'Sillón'     },
        { 'eng' : 'Wardrobe',    'spa' : 'Armario'    },
        { 'eng' : 'Shelf',       'spa' : 'Estante'    },
        { 'eng' : 'Ceiling',     'spa' : 'Techo'      },
        { 'eng' : 'Stairs',      'spa' : 'Escalera'   },
        { 'eng' : 'Floor',       'spa' : 'Piso'       }
    ]
];

const Game = ({ game }) => {

    const [word, setWord] = useState('');
    
    const getNumberRandom = useCallback(
      () => {
        const length = words[game.category.id -1].length;
        return Math.floor(Math.random() * length);
      },[game]
    );
    
    useEffect(() => {
      setWord(words[game.category.id -1][getNumberRandom()]);
    }, [game, getNumberRandom]);

    const handleChange = e => {
    }

    return (
      <div className="app-wrapper">
        <div className="container">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-center app-game__subtitle">{ game.category.name }</h5>
            <Word word={ word } />
            <form className="app-game__form">
              <input className="form-control"
                     placeholder="Escribe aquí..."
                     type="text"
                     name="field"
                     onChange={ handleChange }
                     autoFocus />
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default Game;