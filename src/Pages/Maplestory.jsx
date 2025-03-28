import React from 'react'
import { Select, Button, FormControl, InputLabel, MenuItem,
        Box, TextField, Typography, IconButton, Snackbar } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {classCategories, bosses, difficulties} from './data.jsx'

const Maplestory = () => {
    
    const [selectedClass, setSelectedClass] = React.useState('');
    const [koreanName, setKoreanName] = React.useState('');
    const [selectedBoss, setSelectedBoss] = React.useState('');
    const [bossKoreanName, setBossKoreanName] = React.useState('');
    const [selectedDifficulty, setSelectedDifficulty] = React.useState('');
    const [difficultyKoreanName, setDifficultyKoreanName] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleClassChange = (event) => {
        const classData = event.target.value;
        // Parse the stringified object back to an object
        const classObj = JSON.parse(classData);
        setSelectedClass(classData);
        setKoreanName(classObj.korean);
    };

    const handleBossChange = (event) => {
        const bossData = event.target.value;
        // Parse the stringified object back to an object
        const bossObj = JSON.parse(bossData);
        setSelectedBoss(bossData);
        setBossKoreanName(bossObj.korean);
    };

    const handleDifficultyChange = (event) => {
        const difficultyData = event.target.value;
        // Parse the stringified object back to an object
        const difficultyObj = JSON.parse(difficultyData);
        setSelectedDifficulty(difficultyData);
        setDifficultyKoreanName(difficultyObj.korean);
    };
    // Combine all Korean names into one search query
    const combinedSearchQuery = [koreanName, difficultyKoreanName, bossKoreanName]
        .filter(Boolean) // Remove empty strings,Boolean() returns false for these values: false, 0, "" (empty string), null, undefined, and NaN
        .join(' '); // Join with spaces

    const handleCopyClick = () => {
        navigator.clipboard.writeText(combinedSearchQuery)
            .then(() => {
                // Show success message
                setSnackbarOpen(true);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };
    
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };
    

    return (
        <>
            <Typography variant="h4" gutterBottom>Maplestory search helper</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: '500px' }}>
                <Box>
                    <Typography variant="h6" gutterBottom>Class</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="class-label">Class</InputLabel>
                        <Select
                            labelId="class-label"
                            id="class-select"
                            value={selectedClass}
                            label="Class"
                            onChange={handleClassChange}
                        >
                            {Object.entries(classCategories).map(([category, classes]) => [
                                <MenuItem key={category} disabled divider>
                                    {category}
                                </MenuItem>,
                                ...classes.map((classObj, index) => (
                                    <MenuItem 
                                        key={`${category}-${index}`} 
                                        value={JSON.stringify(classObj)}
                                        style={{ paddingLeft: '20px' }}
                                    >
                                        {`${classObj.english} ${classObj.korean}`}
                                    </MenuItem>
                                ))
                            ]).flat()}
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <Typography variant="h6" gutterBottom>Difficulty</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="difficulty-label">Difficulty</InputLabel>
                        <Select
                            labelId="difficulty-label"
                            id="difficulty-select"
                            value={selectedDifficulty}
                            label="Difficulty"
                            onChange={handleDifficultyChange}
                        >
                            {difficulties.map((difficultyObj, index) => (
                                <MenuItem 
                                    key={index} 
                                    value={JSON.stringify(difficultyObj)}
                                >
                                    {`${difficultyObj.english} ${difficultyObj.korean}`}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <Typography variant="h6" gutterBottom>Boss</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="boss-label">Boss</InputLabel>
                        <Select
                            labelId="boss-label"
                            id="boss-select"
                            value={selectedBoss}
                            label="Boss"
                            onChange={handleBossChange}
                        >
                            {bosses.map((bossObj, index) => (
                                <MenuItem 
                                    key={index} 
                                    value={JSON.stringify(bossObj)}
                                >
                                    {`${bossObj.english} ${bossObj.korean}`}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>Combined Search Query</Typography>
                        <IconButton 
                            onClick={handleCopyClick} 
                            color="primary"
                            disabled={!combinedSearchQuery}
                            size="small"
                        >
                            <ContentCopyIcon />
                        </IconButton>
                    </Box>
                    <TextField
                        label="Search query"
                        variant="outlined"
                        fullWidth
                        value={combinedSearchQuery}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={3000}
                        onClose={handleSnackbarClose}
                        message="Copied to clipboard!"
                    />
                </Box>
            </Box>
            <Button
                variant="contained"
                color="error"
                size="large"
                href={`https://www.youtube.com/results?search_query=${combinedSearchQuery}`}
                sx={{ mt: 2 }}
                target="_blank" //This opens the link in a new tab
                rel="noopener noreferrer"
                disabled={!combinedSearchQuery} // Disable when combinedSearchQuery is empty
            >
                Youtube search 
            </Button>
            
        </>
    )
}

export default Maplestory