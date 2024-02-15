const guitars = [
    {
        id: 1,
        name: "Gibson Les Paul",
        path: "les-paul",
        Users: "Jimmy Page, Slash, Joe Perry, Ace Frehley, Pete Townsend",
        Pickups: "Usually two Humbuckers",
        Information: "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The guitar was designed by factory manager John Huis and his team with input from and endorsement by guitarist Les Paul. Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist. The Les Paul was originally offered with a gold finish and two P-90 pickups. In 1957, humbucking pickups were added, along with sunburst finishes in 1958. The 1958–1960 sunburst Les Paul, today one of the best-known electric guitar types in the world, was considered a commercial failure,[citation needed] with low production and sales. For 1961, the Les Paul was redesigned into what is now known as the Gibson SG. The original single-cutaway, carved top bodystyle was re-introduced in 1968. The Les Paul has been produced in many versions and editions since. Along with Fender's Telecaster and Stratocaster, it was one of the first mass-produced electric solid-body guitars. Due to their versatility, Les Paul electric guitars have been used in a wide range of music genres, including rock, country, pop, soul, rhythm and blues, blues, jazz, reggae, punk, and heavy metal.",
    },
    {
        id: 2,
        name: "Fender Stratocaster",
        path: "stratocaster",
        Users: "Jimi Hendrix, Eric Clapton, David Gilmour, Stevie Ray Vaughan, Buddy Holly",
        Pickups: "Usually three single-coil pickups",
        Information: "The Fender Stratocaster is a solid body electric guitar designed by Leo Fender, George Fullerton, and Freddie Tavares in 1954. It is one of the most iconic and widely recognized electric guitars in the world. The Stratocaster features a double-cutaway body design made of solid wood (commonly alder or ash) with a bolt-on maple neck and a maple or rosewood fingerboard. It typically has three single-coil pickups, though variations with different pickup configurations exist. The Stratocaster is known for its versatile sound, achieved through its five-way pickup selector switch, which allows players to select different combinations of pickups for a wide range of tones. Other features include a synchronized tremolo bridge system, often referred to as a 'tremolo bar' or 'whammy bar', and a contoured body for improved playing comfort. The Stratocaster has been used in countless genres of music, including rock, blues, jazz, country, and more. Its distinctive sound and design have made it a favorite among musicians for over six decades.",
    },
    {
        id: 3,
        name: "Gibson SG",
        path: "sg",
        Users: "Angus Young, Tony Iommi, Derek Trucks, Robby Krieger, Frank Zappa",
        Pickups: "Usually two humbuckers or P-90 pickups",
        Information: "The Gibson SG is a solid body electric guitar introduced by Gibson in 1961. Originally intended to replace the Les Paul model, the SG has become its own iconic guitar known for its distinct shape and sound. The SG features a double-cutaway body made of mahogany, with a set neck typically made of mahogany or maple and a rosewood or ebony fingerboard. It usually comes with two humbuckers or P-90 pickups, although there are variations with different pickup configurations. The SG is known for its lightweight and comfortable design, making it a favorite among rock guitarists. It has been used in a wide range of musical genres, including rock, blues, metal, and more. The SG's aggressive tone and playability have made it a staple in the world of electric guitars for over six decades.",
    },
    {
        id: 4,
        name: "Fender Telecaster",
        path: "telecaster",
        Users: "Keith Richards, Bruce Springsteen, Joe Strummer, Merle Haggard, Muddy Waters",
        Pickups: "Usually two single-coil pickups",
        Information: "The Fender Telecaster, often referred to as the Tele, is a solid body electric guitar introduced by Fender in 1950. It is one of the first commercially successful solid-body electric guitars and has remained in continuous production since its inception. The Telecaster features a single-cutaway body design made of solid wood (commonly ash or alder) with a bolt-on maple neck and a maple or rosewood fingerboard. It typically has two single-coil pickups, known for their bright and twangy sound, though variations with different pickup configurations exist. The Telecaster is known for its simplicity, durability, and versatility. Its straightforward design and distinctive tone have made it a favorite among guitarists in a wide range of genres, including country, rock, blues, and pop. The Telecaster's influence on music and guitar design is undeniable, and it continues to be a popular choice for musicians around the world.",
    },
    {
        id: 5,
        name: "Gibson Flying V",
        path: "flying-v",
        Users: "James Hetfield, Zakk Wylde, Michael Schenker, Dave Davies",
        Pickups: "Usually two humbuckers",
        Information: "The Gibson Flying V is a unique solid body electric guitar introduced by Gibson in 1958. Its radical and futuristic design set it apart from traditional guitar shapes of the time. The Flying V features a V-shaped body made of solid wood (often mahogany) with a set neck and a rosewood or ebony fingerboard. It typically has two humbucking pickups, known for their high output and warm tone. The Flying V is prized for its comfortable playability and distinctive sound, making it a favorite among rock and metal guitarists. While its unconventional design initially received mixed reactions, the Flying V has since become an iconic symbol of Gibson's innovative spirit and continues to be popular among guitarists seeking a bold and distinctive instrument.",
    },
    {
        id: 6,
        name: "PRS Custom 24",
        path: "custom-24",
        Users: "Mark Tremonti, John Mayer, Carlos Santana, Dave Navarro, Mikael Akerfeldt",
        Pickups: "Humbucker, Single-coil combination",
        Information: "The PRS Custom 24 is a solid body electric guitar manufactured by Paul Reed Smith. It is known for its versatile tone, high-quality craftsmanship, and stunning aesthetics. The Custom 24 features a double-cutaway body made of mahogany or maple with a figured maple top, a set neck with a rosewood or ebony fretboard, and PRS-designed humbuckers paired with a coil-splitting option for single-coil tones. It offers a wide range of tones suitable for various music genres, from rock and metal to blues and jazz. The Custom 24's impeccable build quality and attention to detail make it a favorite among professional musicians and enthusiasts alike.",
    },
    {
        id: 7,
        name: "Ibanez RG",
        path: "rg",
        Users: "Steve Vai, Joe Satriani, Paul Gilbert, Herman Li, John Petrucci",
        Pickups: "Usually two humbuckers",
        Information: "The Ibanez RG is a series of solid body electric guitars manufactured by Ibanez. It is known for its sleek and aggressive design, fast-playing neck, and versatile tone options. The RG series typically features a double-cutaway body made of basswood or mahogany, a bolt-on maple neck with a rosewood or maple fretboard, and high-output humbucking pickups. Some models also come with a floating tremolo bridge for added expression and dive-bombing effects. The RG's shredder-friendly features make it a popular choice among virtuoso guitarists in the rock and metal genres.",
    },
    {
        id: 8,
        name: "ESP Eclipse",
        path: "eclipse",
        Users: "James Hetfield, Kirk Hammett, Tom Araya, Alexi Laiho, Stephen Carpenter",
        Pickups: "Usually two active humbuckers",
        Information: "The ESP Eclipse is a solid body electric guitar manufactured by ESP Guitars. It is known for its high-quality construction, smooth playability, and powerful tone. The Eclipse features a single-cutaway body made of mahogany with a carved maple top, a set neck with a rosewood or ebony fretboard, and active EMG humbuckers for high-output, noise-free performance. Its sleek design and aggressive sound make it a popular choice among heavy metal and hard rock guitarists.",
    },
    {
        id: 9,
        name: "Jackson Soloist",
        path: "soloist",
        Users: "Randy Rhoads, Dave Mustaine, Chris Broderick, Marty Friedman, Jeff Loomis",
        Pickups: "Usually two humbuckers",
        Information: "The Jackson Soloist is a solid body electric guitar designed for high-performance playing. It is known for its fast neck, smooth playability, and aggressive tone. The Soloist features a double-cutaway body made of alder or mahogany, a bolt-on maple neck with a compound-radius fretboard, and high-output humbucking pickups. It often comes equipped with a Floyd Rose tremolo system for dive-bombing and extreme whammy bar effects. The Soloist's ergonomic design and versatile tone make it a favorite among shredders and metal guitarists.",
    },
    {
        id: 10,
        name: "Music Man Majesty",
        path: "majesty",
        Users: "John Petrucci, Steve Lukather, Bumblefoot, Reb Beach, John Myung",
        Pickups: "Humbuckers with piezo bridge",
        Information: "The Music Man Majesty is a solid body electric guitar designed in collaboration with guitarist John Petrucci of Dream Theater. It is known for its innovative design, premium craftsmanship, and versatile tone options. The Majesty features a sleek and ergonomic body made of mahogany or basswood with a maple top, a neck-through construction with a maple or mahogany neck, and custom DiMarzio humbuckers paired with a piezo bridge for acoustic-like tones. Its unique features, including an adjustable piezo volume control and onboard preamp, make it a versatile instrument suitable for a wide range of playing styles and musical genres.",
    },
    {
        id: 11,
        name: "Gretsch White Falcon",
        path: "white-falcon",
        Users: "Billy Duffy, Brian Setzer, Neil Young, Joe Robinson, Tim Armstrong",
        Pickups: "High Sensitive Filter'Tron",
        Information: "The Gretsch White Falcon is a hollow body electric guitar known for its luxurious design, vibrant tone, and vintage aesthetic. It is one of Gretsch's flagship models and has been favored by iconic guitarists in various genres. The White Falcon features a hollow body made of maple with gold hardware, a set maple neck with an ebony or rosewood fretboard, and High Sensitive Filter'Tron pickups for its distinctive sound. Its large size, ornate appointments, and sparkling finish make it a visually stunning instrument that commands attention on stage. The White Falcon's rich tone and elegant design have made it a favorite among rockabilly, country, and rock guitarists.",
    },
    {
        id: 12,
        name: "Epiphone Casino",
        path: "casino",
        Users: "John Lennon, George Harrison, Noel Gallagher, Paul Weller, Gary Clark Jr.",
        Pickups: "P-90 single-coil pickups",
        Information: "The Epiphone Casino is a hollow body electric guitar known for its smooth playability, lively tone, and iconic design. It is closely associated with the sound of The Beatles, particularly John Lennon and George Harrison. The Casino features a fully hollow body made of laminated maple with dual F-holes, a set mahogany neck with a rosewood fretboard, and P-90 single-coil pickups for its distinctive sound. Its lightweight construction and resonant tone make it a versatile instrument suitable for a wide range of musical styles, from rock and pop to jazz and blues. The Casino's classic design and timeless appeal have made it a favorite among professional musicians and enthusiasts alike.",
    },
    {
        id: 13,
        name: "Gibson ES-335",
        path: "es-335",
        Users: "Chuck Berry, Larry Carlton, B.B. King, Alvin Lee, Eric Clapton",
        Pickups: "Semi-hollow body with humbuckers",
        Information: "The Gibson ES-335 is a semi-hollow body electric guitar known for its warm tone, versatile sound, and iconic design. It was introduced by Gibson in 1958 and has since become one of the most celebrated electric guitars in history. The ES-335 features a semi-hollow body construction with a solid maple center block, dual 'f'-holes, a set mahogany neck with a rosewood fretboard, and dual humbucking pickups for its rich and expressive tone. Its combination of solidbody sustain and hollowbody resonance makes it a favorite among blues, jazz, and rock guitarists. The ES-335's timeless design and legendary sound have solidified its place as an iconic instrument in the world of electric guitars.",
    },
    {
        id: 14,
        name: "PRS McCarty 594",
        path: "mccarty-594",
        Users: "Mark Tremonti, Carlos Santana, John Mayer, Derek Trucks, Brent Mason",
        Pickups: "58/15 LT humbuckers",
        Information: "The PRS McCarty 594 is a solid body electric guitar designed for vintage tone and modern playability. It is part of the PRS Core line and is known for its exquisite craftsmanship, premium materials, and versatile sound. The McCarty 594 features a double-cutaway body made of mahogany or maple with a carved figured maple top, a set mahogany neck with a rosewood or ebony fretboard, and PRS 58/15 LT humbuckers for its rich and articulate tone. Its 24.594-inch scale length, pattern vintage neck profile, and coil-tap option offer players a wide range of tonal possibilities, from warm jazz tones to aggressive rock sounds. The McCarty 594's blend of vintage aesthetics and modern performance make it a favorite among discerning guitarists.",
    },
    {
        id: 15,
        name: "Gibson Explorer",
        path: "explorer",
        Users: "James Hetfield, Allen Collins, Dave Grohl, The Edge, Rick Nielsen",
        Pickups: "Usually two humbuckers",
        Information: "The Gibson Explorer is a solid body electric guitar known for its futuristic design, powerful sound, and iconic status. It was introduced by Gibson in 1958 as part of its Modernistic series and has since become a favorite among rock and metal guitarists. The Explorer features a unique angular body shape made of mahogany with a set neck and a rosewood or ebony fretboard. It typically comes equipped with dual humbucking pickups for its aggressive tone and high-output performance. The Explorer's edgy design and aggressive sound make it a popular choice for players seeking a bold and distinctive instrument.",
    },
    {
        id: 16,
        name: "Suhr Modern",
        path: "modern",
        Users: "John Suhr, Guthrie Govan, Mark Holcomb, Mateus Asato, Pete Thorn",
        Pickups: "Custom humbuckers or single-coils",
        Information: "The Suhr Modern is a solid body electric guitar known for its precision craftsmanship, innovative design, and superior playability. It is handcrafted by John Suhr and his team of skilled luthiers in California. The Modern features a sleek and contoured body made of basswood or mahogany with a figured maple top, a bolt-on maple neck with a pau ferro or maple fretboard, and Suhr-designed humbuckers or single-coil pickups for its versatile tone. Its modern features, such as stainless steel frets, a compound radius fretboard, and a Gotoh bridge, offer players exceptional performance and playability. The Suhr Modern's attention to detail and commitment to quality make it a top choice among professional musicians and collectors alike.",
    },
    {
        id: 17,
        name: "G&L Legacy",
        path: "legacy",
        Users: "Jerry Cantrell, Pat Smear, Carl Verheyen, Julian Lage, Michael Landau",
        Pickups: "G&L MFD single-coils",
        Information: "The G&L Legacy is a solid body electric guitar designed by Leo Fender and George Fullerton. It is known for its vintage-inspired design, high-quality construction, and versatile tone options. The Legacy features a double-cutaway body made of alder or swamp ash with a bolt-on maple neck and a rosewood or maple fretboard. It typically comes equipped with G&L's Magnetic Field Design (MFD) single-coil pickups for its clear and articulate sound. Its versatile pickup configuration and PTB (Passive Treble/Bass) tone system offer players a wide range of tones suitable for various musical styles. The G&L Legacy's combination of vintage aesthetics and modern features make it a favorite among discerning guitarists.",
    },
    {
        id: 18,
        name: "Ernie Ball Music Man John Petrucci Majesty",
        path: "jp-majesty",
        Users: "John Petrucci, Steve Lukather, Bumblefoot, Reb Beach, John Myung",
        Pickups: "Custom DiMarzio humbuckers with piezo bridge",
        Information: "The Ernie Ball Music Man John Petrucci Majesty is a signature solid body electric guitar designed in collaboration with Dream Theater guitarist John Petrucci. It is known for its innovative design, premium materials, and versatile tone options. The Majesty features a sleek and ergonomic body made of mahogany or basswood with a maple top, a neck-through construction with a maple or mahogany neck, and custom DiMarzio humbuckers paired with a piezo bridge for acoustic-like tones. Its unique features, including an adjustable piezo volume control and onboard preamp, make it a versatile instrument suitable for a wide range of playing styles and musical genres.",
    },
    {
        id: 19,
        name: "Jackson Dinky",
        path: "dinky",
        Users: "Marty Friedman, Adrian Smith, Phil Collen, Dave Davidson, Rob Caggiano",
        Pickups: "Usually two humbuckers",
        Information: "The Jackson Dinky is a solid body electric guitar designed for high-performance playing. It is known for its fast neck, smooth playability, and aggressive tone. The Dinky features a double-cutaway body made of alder or basswood, a bolt-on maple neck with a rosewood or maple fretboard, and high-output humbucking pickups. It often comes equipped with a Floyd Rose tremolo system for dive-bombing and extreme whammy bar effects. The Dinky's ergonomic design and versatile tone make it a favorite among shredders and metal guitarists.",
    },
    {
        id: 20,
        name: "EVH Striped Series",
        path: "striped-series",
        Users: "Eddie Van Halen, George Lynch, Dave Nassie, John 5, Phil Demmel",
        Pickups: "Custom EVH humbuckers",
        Information: "The EVH Striped Series is a solid body electric guitar inspired by the iconic designs of Eddie Van Halen. It is known for its eye-catching graphics, high-performance features, and signature tone. The Striped Series features a double-cutaway body made of basswood or poplar, a bolt-on maple neck with a maple fretboard, and custom EVH humbuckers for its distinctive sound. Its vintage-style tremolo bridge, locking nut, and D-Tuna allow players to recreate Eddie Van Halen's legendary dive bombs and squeals. The Striped Series' bold aesthetics and high-energy performance make it a favorite among Van Halen fans and guitar enthusiasts.",
    },
];

module.exports = {
    getAllGuitars: () => {
        return guitars;
    },

    getGuitarById: (id) => {
        return guitars.find((guitar) => guitar.id === id);
    },

    getGuitarByName: (name) => {
        return guitars.find((guitar) => guitar.name === name);
    },

    getGuitarByPath: (path) => {
        return guitars.find((guitar) => guitar.path === path);
    },
};
