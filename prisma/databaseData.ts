type Product = {
  name: string;
  price: number;
  details: string;
  genre: string;
  imageSrc: string;
};

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
};

export const users: User[] = [
  {
    firstName: "Piotr",
    lastName: "Wrobel",
    email: "ajiiz@gmail.com",
    phoneNumber: "000111222",
    password: "",
    role: "admin"
  },
  {
    firstName: "Name",
    lastName: "Last",
    email: "newmail@gmail.com",
    phoneNumber: "000111222",
    password: "",
    role: "basic"
  },
  {
    firstName: "Dawid",
    lastName: "Diwad",
    email: "google@gmail.com",
    phoneNumber: "222111444",
    password: "",
    role: "basic"
  }
];

export const products: Product[] = [
  {
    name: "The Flamingos : Zoo in the Bathroom",
    price: 101,
    details: "Psychedelic rock with the addition of classic sound.",
    genre: "Indie rock",
    imageSrc: "https://i.imgur.com/PJtKC0n.png"
  },
  {
    name: "LMP: Astronaut",
    price: 42,
    details: "Tragic for souls but suitable for a pub.",
    genre: "Stree punk",
    imageSrc:
      "https://images.unsplash.com/photo-1436076863939-06870fe779c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
  },
  {
    name: "The Oak Ridge Motel:  Stand Alone",
    price: 36,
    details: "A perfect record for a nice, acoustic afternoon",
    genre: "Indie pop",
    imageSrc: "https://i.imgur.com/GVrLK1w.jpeg"
  },
  {
    name: "Doggos: Me and the boys",
    price: 299,
    details: "Unique collection of warm folk songwriting ",
    genre: "Indie folk",
    imageSrc: "https://i.imgur.com/g8CXV9m.jpeg"
  },
  {
    name: "GOAT: Mountain Home ",
    price: 999,
    details: "The heaviest record of the Icelandic black metal scene",
    genre: "Black metal",
    imageSrc: "https://i.imgur.com/XsV96eE.png"
  },
  {
    name: "The animals: Capi and chill",
    price: 21,
    details: "Peaceful melodies to ease the soul",
    genre: "Contemporary Folk",
    imageSrc: "https://i.imgur.com/60HEhgl.png"
  },
  {
    name: "Stevie Wonion: The deep cuts will make you cry",
    price: 42,
    details: "Lonely, desolate, and emotional piece of music",
    genre: "Jazz",
    imageSrc: "https://i.imgur.com/lUUXJJD.jpeg"
  },
  {
    name: "The Bricks: Paper walls",
    price: 36,
    details: "Sentimental, warmth-filled production with introspective lyricism",
    genre: "Alternative R&B",
    imageSrc: "https://i.imgur.com/zBtu9ZP.jpeg"
  },
  {
    name: "Anxiety Subnautica: High Tea Low Tide",
    price: 299,
    details: "A clever reversal of expectations in a warm sounding setting",
    genre: "Comedy rock",
    imageSrc: "https://i.imgur.com/177gkxR.png"
  },
  {
    name: "Stave Jobs and the Mackintash: Planned Obsolescence",
    price: 25,
    details: "Genre shifting left turn of the last decade",
    genre: "FutExperimental Rock",
    imageSrc: "https://i.imgur.com/Ez9Eu3H.jpeg"
  },
  {
    name: "The Curb Kids: Waiting For My Mothership ",
    price: 21,
    details: "Futuristic sounds that carries the listener into another dimension",
    genre: "Space rock",
    imageSrc: "https://i.imgur.com/yd6elYc.jpeg"
  },
  {
    name: "The Royals: Give’em Pleasure",
    price: 42,
    details: "Album that shattered and completely changed the perception of new wave",
    genre: "New Wave",
    imageSrc: "https://i.imgur.com/BHIU7lT.png"
  },
  {
    name: "Elk Cube - component Final",
    price: 36,
    details: "Cryptic and mysterious debut of Detroit’s duo",
    genre: "Abstract Hip Hop",
    imageSrc: "https://i.imgur.com/rB09rJn.jpeg"
  },
  {
    name: "7 samurai: Death To The Black Emperor",
    price: 299,
    details: "Powerful and hypnotic journey that transcenders the genre",
    genre: "Drone",
    imageSrc: "https://i.imgur.com/m5vs1zM.jpeg"
  },
  {
    name: "The Somethings: Neuropathy ",
    price: 19,
    details: "Art of shapeless shapes, sound waves forming melodic pillows",
    genre: "Shoegaze",
    imageSrc: "https://i.imgur.com/qP4PCeQ.jpeg"
  },
  {
    name: "Heaven Sent: Dog Days",
    price: 27,
    details: "Dreamy vocals combined with catchy melodies packed into a 90 minute double LP",
    genre: "Bedroom pop",
    imageSrc: "https://i.imgur.com/saRmSEP.jpeg"
  },
  {
    name: "Apilocrocis: Syringa Path",
    price: 42,
    details: "Anxiety-inducing record which leaves you hopeless",
    genre: "Post-Industiral",
    imageSrc: "https://i.imgur.com/1b6jeWu.jpeg"
  },
  {
    name: "Asian sweatbox: Today's Hong Kong is your Tomorrow!",
    price: 36,
    details: "A long and exhausting trip through the personal hell",
    genre: "Drone",
    imageSrc: "https://i.imgur.com/hY0jWfR.png"
  },
  {
    name: "Penguinz: Back Home",
    price: 299,
    details: "The most upbeat record of last few years that brightens your mood",
    genre: "Lo-Fi",
    imageSrc: "https://i.imgur.com/HOrIqvo.png"
  },
  {
    name: "Science Fiction - The Company We Keep",
    price: 123,
    details: "Chilling, final statement of Science Fiction",
    genre: "Indie Rock",
    imageSrc: "https://i.imgur.com/Jw3oGU0.jpeg"
  }
];
