let page = {
    tweets: [
        {
            tweet: `When parents say to kids "go to ur room & think about what you've done" it's really good practice for what you'll do every night as an adult`,
            username: `author1`,
            created_at: `1-1-2001`,
            age: 10,
        },

        {
            tweet: `To the guy who stole my antidepressants, I hope you're happy now.`,
            username: `author2`,
            created_at: `2-2-2002`,
            age: 11,
        },

        {
            tweet: `I can't believe I didn't get an Oscar nomination for my performance in, "No, I never got your text!"`,
            username: `author3`,
            created_at: `3-3-2003`,
            age: 12,
        },

        {
            tweet: `When someone tells me, "Great question." I never hear their answer because I'm busy congratulating myself for asking such a great question.`,
            username: `author4`,
            created_at: `4-4-2004`,
            age: 13,
        },

        {
            tweet: `One of life's great pleasures is to watch two idiots agree on something and then hear one of them say "Great minds think alike".`,
            username: `author5`,
            created_at: `5-5-2005`,
            age: 14,
        },

        {
            tweet: `Honestly, my biggest fear about becoming a zombie is all the walking.`,
            username: `author6`,
            created_at: `6-6-2006`,
            age: 25,
        },

        {
            tweet: `Every time I almost think humanity will be okay, I see someone struggle with the self-checkout for 20 minutes.`,
            username: `author7`,
            created_at: `7-7-2007`,
            age: 26,
        },

        {
            tweet: `If I ever say the words "my fantasy football team" just know it is code for "I've been kidnapped please help me."`,
            username: `author8`,
            created_at: `8-8-2008`,
            age: 27,
        },

        {
            tweet: `I don't want to die doing something I love. I want to die doing something I hate. That way I don't have to finish it.`,
            username: `author1`,
            created_at: `9-9-2009`,
            age: 28,
        },

        {
            tweet: `Every neck tattoo should read "I'm not getting the job, am I?"`,
            username: `author10`,
            created_at: `10-10-2010`,
            age: 29,
        }
    ]
}

let counter = 0;
while (page[`tweets`][counter][`age`] >= 18){
    console.log(page[`tweets`][counter][`tweet`]);
    console.log(page[`tweets`][counter][`username`]);
    console.log(page[`tweets`][counter][`created_at`]);
    counter++;
}

let arri = 0;
while (page[`tweets`][counter][`age`] < 18){
    console.log(page[`tweets`][arri][`tweet`]);
    console.log(page[`tweets`][arri][`username`]);
    console.log(page[`tweets`][arri][`created_at`]);
    counter++;
}

