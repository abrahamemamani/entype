import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Word from '../Word/Word';
import '../Game/Game.scss';

const initialVocabulary = [
    [
        { 'id' : '1',   'eng' : 'Eyes',       'spa' : 'Ojos'    },
        { 'id' : '2',   'eng' : 'Back',       'spa' : 'Espalda' },
        { 'id' : '3',   'eng' : 'Knee',       'spa' : 'Rodilla' },
        { 'id' : '4',   'eng' : 'Belly',      'spa' : 'Barriga' },
        { 'id' : '5',   'eng' : 'Shoulder',   'spa' : 'Hombro'  },
        { 'id' : '6',   'eng' : 'Mouth',      'spa' : 'Boca'    },
        { 'id' : '7',   'eng' : 'Ear',        'spa' : 'Oreja'   },
        { 'id' : '8',   'eng' : 'Nose',       'spa' : 'Naríz'   },
        { 'id' : '9',   'eng' : 'Hand',       'spa' : 'Mano'    },
        { 'id' : '10',  'eng' : 'Finger',     'spa' : 'Dedo'    }
    ],
    [
        { 'id' : '1',   'eng' : 'Hard drive',  'spa' : 'Disco duro'              },
        { 'id' : '2',   'eng' : 'Browser',     'spa' : 'Navegador'               },
        { 'id' : '3',   'eng' : 'Memory',      'spa' : 'Memoria'                 },
        { 'id' : '4',   'eng' : 'Link',        'spa' : 'Enlace'                  },
        { 'id' : '5',   'eng' : 'Laptop',      'spa' : 'Ordenador portátil'      },
        { 'id' : '6',   'eng' : 'Hardware',    'spa' : 'Hardware'                },
        { 'id' : '7',   'eng' : 'Virus',       'spa' : 'Virus'                   },
        { 'id' : '8',   'eng' : 'Email',       'spa' : 'Correo electrónico'      },
        { 'id' : '9',   'eng' : 'Desktop',     'spa' : 'Ordenador de escritorio' },
        { 'id' : '10',  'eng' : 'Mouse',       'spa' : 'Ratón'                   }
    ],
    [
        { 'id' : '1',   'eng' : 'Kitchen',     'spa' : 'Cocina'     },
        { 'id' : '2',   'eng' : 'Room',        'spa' : 'Habitación' },
        { 'id' : '3',   'eng' : 'Window',      'spa' : 'Ventana'    },
        { 'id' : '4',   'eng' : 'Furniture',   'spa' : 'Muebles'    },
        { 'id' : '5',   'eng' : 'Armchair',    'spa' : 'Sillón'     },
        { 'id' : '6',   'eng' : 'Wardrobe',    'spa' : 'Armario'    },
        { 'id' : '7',   'eng' : 'Shelf',       'spa' : 'Estante'    },
        { 'id' : '8',   'eng' : 'Ceiling',     'spa' : 'Techo'      },
        { 'id' : '9',   'eng' : 'Stairs',      'spa' : 'Escalera'   },
        { 'id' : '10',  'eng' : 'Floor',       'spa' : 'Piso'       }
    ]
];

const Game = ({ game }) => {
    const [vocabulary, setVocabulary]     = useState(initialVocabulary[game.category.id]),
          [category]                      = useState(game.category),
          [word, setWord]                 = useState(''),
          [numberRandom, setNumberRandom] = useState(''),
          [field, setField]               = useState(''),
          [victory, setVictory]           = useState(false);

    const getNumberRandom = useCallback( () => {
        return Math.floor(Math.random() * vocabulary.length);
    },[vocabulary] );

    const updateGame = useCallback( () => {
        const numRand= getNumberRandom();
        setWord(vocabulary[numRand]);
        setNumberRandom(numRand);
    },[vocabulary, getNumberRandom]);

    const verifyCurrentValue = (e) => {
      const value = e.target.value.toLowerCase().trim(),
            eng   = word.eng.toLowerCase().trim();
      
      if(value === eng){
        setVocabulary(vocabulary.filter(
          item => ( item.id !== vocabulary[numberRandom].id )
        ));

        if(vocabulary.length === 1){
          setVictory(true);
        } else {
          updateGame();
          setField('');
        }
      }
    }

    const handleChange = e => {
      setField(e.target.value);
      verifyCurrentValue(e);
    }

    /* Métodos del ciclo de vida */
    useEffect(() => {
      updateGame();
    }, [updateGame]);

    return (
      <div className="app-wrapper">
        <div className="container">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            {
              (!victory) ? (
                <>
                  <h5 className="text-center app-game__subtitle">{ category.name }</h5>
                  <Word word={ word } />
                  <form className="app-game__form">
                    <input className="form-control"
                          placeholder="Escribe aquí..."
                          type="text"
                          onChange={ handleChange }
                          value={ field }
                          autoFocus
                          autoComplete="off" />
                  </form>
                </>
              ) : (
                <>
                  <h1>Lo lograste!</h1>
                  <h4>Ganaste en la categoría "{ category.name }"</h4>
                  <Link to={ '/' } className="btn btn-primary">
                      Volver al menú
                  </Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    );
}
 
export default Game;