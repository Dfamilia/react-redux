import React, { Fragment } from 'react'
import AppBar from '../appBar';
import './styles.css';
//es buena practica quitar conflictos entre los estilos de las paginas o componentes
//a travez de @material-ui tenemos: OPCIONAL
import CssBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';

function Page(props) {

    const { 
        results,
        goTo,
    }= props;
    
    //se declara un booleano para saber si results esta vacio
    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseLine />
            
            <AppBar />

            <div className="results-page">
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    results.map(item => 
                        <div 
                            key={item.id}
                            className="card-container"
                        >
                            {/* creamos la carta de presentacion, cuando se le da click nos envia a otra pantalla con info detallada */}
                            <Card
                                className="card"
                                //goTo recibe una ruta y la ejecuta por medio medio  de referencia en el index
                                onClick={()=> goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia 
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>

                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        
                        </div>
                    )
                }
            </div>

        </Fragment>
    )

}

export default Page;