import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, options } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
import { useExercises } from './context/ExerciseContext';
function SearchExercises({ bodyPart, setBodyPart }) {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    const { exercises, setExercises } = useExercises()
    console.log(bodyParts)
    const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
        setBodyParts(['all', ...bodyPartsData])
    }

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", options);
            const searchedExercises = exerciseData.filter((exercise) => {
                exercise.name.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            })
            setSearch('')
            setExercises(searchedExercises)
        }
    }
    useEffect(() => {
        fetchExercisesData()
        console.log(exercises)
    }, [])

    return (
        <Stack
            alignItems="center"
            mt="37"
            justifyContent="center"
            p="20px"
        >
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input:
                        {
                            fontWeight: "700", border: 'none', borderRadius: '4px'
                        }, width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}

                    height="76px"
                    value={search}
                    onChange={(e) => {
                        let input = e.target.value.toLowerCase()
                        setSearch(input)
                    }}
                    placeholder='Search exercise'
                    type="text"
                />
                <Button className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises