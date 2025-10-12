// Arrays of words for each part of the story
// Each array contains different options that can be cycled through
        const wordArrays = [
            // Array 0: Characters
            ['A brave knight', 'A silly clown', 'A friendly dragon', 'A clever fox', 'A tiny mouse', 'A wise owl'],
            
            // Array 1: Actions
            ['danced with', 'sang to', 'helped', 'played with', 'told stories to', 'baked cookies for'],
            
            // Array 2: Locations
            ['in the enchanted forest', 'at the royal castle', 'under the rainbow', 'by the sparkling lake', 'on top of a mountain', 'in a magical garden'],
            
            // Array 3: Time
            ['yesterday morning', 'last night', 'this afternoon', 'at sunset', 'during a full moon', 'on a sunny day'],
            
            // Array 4: Feelings/endings
            ['and felt very happy', 'and laughed joyfully', 'and had a wonderful time', 'and smiled brightly', 'and danced with joy', 'and felt proud']
        ];

        // Array to keep track of current index for each word category
        // Starts at -1 so first click shows index 0
        let currentIndices = [-1, -1, -1, -1, -1];

        // Array to store the user's selected words
        let selectedWords = ['?', '?', '?', '?', '?']; 
        
        
        // Function to cycle through words in a given array
        
        function cycleWord(arrayIndex) {
            // Increment the index for this array
            currentIndices[arrayIndex]++;
            
            // If we've reached the end of the array, loop back to the beginning
            if (currentIndices[arrayIndex] >= wordArrays[arrayIndex].length) {
                currentIndices[arrayIndex] = 0;
            }
            
            // Get the current word from the array
            const currentWord = wordArrays[arrayIndex][currentIndices[arrayIndex]];
            
            // Store the selected word
            selectedWords[arrayIndex] = currentWord;
            
            // Update the display to show the selected word
            document.getElementById('word-' + arrayIndex).textContent = currentWord;
        }

        // Function to generate and Displays the complete story using all selected words

        function displayStory() {
            // Check if all words have been selected (none are still '?')
            if (selectedWords.includes('?')) {
                alert('Please select all parts of your story first!');
                return;
            }
            
            // Construct the complete story sentence
            const story = selectedWords[0] + ' ' + 
                         selectedWords[1] + ' ' + 
                         selectedWords[2] + ' ' + 
                         selectedWords[3] + ' ' + 
                         selectedWords[4] + '.';
            
            // Display the story
            document.getElementById('story-text').textContent = story;
            document.getElementById('story-display').classList.add('active');
            
            // Optional: Read the story aloud using Web Speech API
            speakStory(story);
        }

        // function to  Generates a completely random story by selecting random words from each array

        function generateRandom() {
            // Loop through each word array
            for (let i = 0; i < wordArrays.length; i++) {
                // Generate a random index within the bounds of the current array
                const randomIndex = Math.floor(Math.random() * wordArrays[i].length);
                
                // Update the current index
                currentIndices[i] = randomIndex;
                
                // Get and store the random word
                selectedWords[i] = wordArrays[i][randomIndex];
                
                // Update the display
                document.getElementById('word-' + i).textContent = selectedWords[i];
            }
            // Display the generated story
            displayStory();
        }

        //function to reset the story maker to initial state

        function resetStory() {
             // Reset all indices to -1
            currentIndices = [-1, -1, -1, -1, -1];
            
            // Reset all selected words to '?'
            selectedWords = ['?', '?', '?', '?', '?'];
            
            // Update all displays to show '?'
            for (let i = 0; i < 5; i++) {
                document.getElementById('word-' + i).textContent = '?';
            }
            
            // Hide the story display
            document.getElementById('story-display').classList.remove('active');
        }