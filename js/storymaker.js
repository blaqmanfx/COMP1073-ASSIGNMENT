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