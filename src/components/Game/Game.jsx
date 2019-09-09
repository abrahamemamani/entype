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
        { 'id' : '10',  'eng' : 'Finger',     'spa' : 'Dedo'    },
        { 'id' : '11',  'eng' : 'Tall',       'spa' : 'Alto'    },
        { 'id' : '12',  'eng' : 'Handsome',   'spa' : 'Guapo'   },
        { 'id' : '13',  'eng' : 'Arm',        'spa' : 'Brazo'   },
        { 'id' : '14',  'eng' : 'Tooth',      'spa' : 'Diente'  },
        { 'id' : '15',  'eng' : 'Neck',       'spa' : 'Cuello'  },
        { 'id' : '16',  'eng' : 'Head',       'spa' : 'Cabeza'  }
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
        { 'id' : '10',  'eng' : 'Mouse',       'spa' : 'Ratón'                   },
        { 'id' : '11',  'eng' : 'Scanner',     'spa' : 'Escáner'                 },
        { 'id' : '12',  'eng' : 'Keyboard',    'spa' : 'Teclado'                 },
        { 'id' : '13',  'eng' : 'Printer',     'spa' : 'Impresora'               },
        { 'id' : '14',  'eng' : 'Wireless',    'spa' : 'Inalámbrico'             },
        { 'id' : '15',  'eng' : 'Online',      'spa' : 'En línea'                },
        { 'id' : '16',  'eng' : 'Draft',       'spa' : 'Borrador'                }
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
        { 'id' : '10',  'eng' : 'Floor',       'spa' : 'Piso'       },
        { 'id' : '11',  'eng' : 'Bathroom',    'spa' : 'Baño'       },
        { 'id' : '12',  'eng' : 'Bedroom',     'spa' : 'Dormitorio' },
        { 'id' : '13',  'eng' : 'Wall',        'spa' : 'Pared'      },
        { 'id' : '14',  'eng' : 'Balcony',     'spa' : 'Balcón'     },
        { 'id' : '15',  'eng' : 'Beanbag',     'spa' : 'Puf'        },
        { 'id' : '16',  'eng' : 'Table',       'spa' : 'Mesa'       }
    ],
    [
        { 'id' : '1',   'eng' : 'Meat',         'spa' : 'Carne'          },
        { 'id' : '2',   'eng' : 'Sausage',      'spa' : 'Salchicha'      },
        { 'id' : '3',   'eng' : 'Beef',         'spa' : 'Carne de vaca'  },
        { 'id' : '4',   'eng' : 'Pork',         'spa' : 'Carne de cerdo' },
        { 'id' : '5',   'eng' : 'Poultry',      'spa' : 'Ave de corral'  },
        { 'id' : '6',   'eng' : 'Lamb',         'spa' : 'Cordero'        },
        { 'id' : '7',   'eng' : 'Milk',         'spa' : 'Leche'          },
        { 'id' : '8',   'eng' : 'Wine',         'spa' : 'Vino'           },
        { 'id' : '9',   'eng' : 'Juice',        'spa' : 'Jugo'           },
        { 'id' : '10',  'eng' : 'Coffee',       'spa' : 'Café'           },
        { 'id' : '11',  'eng' : 'Beer',         'spa' : 'Cerveza'        },
        { 'id' : '12',  'eng' : 'Water',        'spa' : 'Agua'           }
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
                  <h1 className="text-center">Lo lograste!</h1>
                  <h4 className="text-center">Ganaste en la categoría "{ category.name }"</h4>
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