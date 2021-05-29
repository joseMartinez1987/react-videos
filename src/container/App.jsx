import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CaruselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'


const App = () => {

    const API = 'http://localhost:3000/initalState'

    const initialState = useInitialState(API)
    console.log(initialState)


    return (

        <div className="App">
            <Header />
            <Search />
            {
                initialState.mylist?.length > 0 &&
                <Categories title='Mi Lista'>
                    <Carousel>
                        {
                            initialState.mylist?.map(item => {

                                return <CaruselItem key={item.id} {...item} />
                            })
                        }
                    </Carousel>
                </Categories>

            }



            <Categories title='Tendencias'>
                <Carousel>
                    {
                        initialState.trends?.map(item => {
                            return <CaruselItem key={item.id} {...item} />

                        })
                    }
                </Carousel>
            </Categories>

            <Categories title='Estreno'>
                <Carousel>
                    {
                        initialState.originals?.map(item => {

                            return <CaruselItem key={item.id} {...item} />
                        })
                    }
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )


}

export default App