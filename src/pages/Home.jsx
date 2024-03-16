import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
import { Box } from "@mui/material"
import { ExercisesProvider } from '../components/context/ExerciseContext'
function Home() {
    const [bodyPart, setBodyPart] = useState('all')
    return (
        <ExercisesProvider>
            <Box>
                <HeroBanner />
                <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} />
                <Exercises bodyPart={bodyPart} />
            </Box>
        </ExercisesProvider>
    )
}

export default Home