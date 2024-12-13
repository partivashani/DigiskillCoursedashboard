const courses = [
    {
      id:1,
      image: "https://media.istockphoto.com/id/529418808/photo/shes-developing-advanced-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ6zUOrOj2Lh3ypFhC0kVXi7MxgT4XHc09gyWEtVVU4=",
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      author: "Dr. Angela Yu, Developer and Lead...",
      rating: 4.7,
      reviews: "336,055",
      price: "RS.19.99",
      originalPrice: "Rs.84.99",
      badge: "Bestseller",
      desc:"this is best course on internet"
    },
    {
      id:2,
      image: "https://media.istockphoto.com/id/1552848373/photo/woman-tablet-and-hologram-at-night-in-web-design-with-dashboard-interface-or-hud-display-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=szlvecoXx75PPDwQVu672Mi0y5FRldOqhu-FTbCIhSE=",
      title: "The Complete 2024 Web Development Bootcamp",
      author: "Dr. Angela Yu, Developer and Lead...",
      rating: 4.6,
      reviews: "412,963",
      price: "RS.12.99",
      originalPrice: "Rs.64.99",
      badge: "Bestseller",
    },
    {
      id:3,
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXJ8ZW58MHx8MHx8fDA%3D",
      title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
      author: "Stephane Maarek | AWS Certified Cloud...",
      rating: 4.7,
      reviews: "227,604",
      price: "RS.10.99",
      originalPrice: "Rs.44.99",
      badge: "Bestseller",
    },
    {
      id:4,
      image: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGVyfGVufDB8fDB8fHww",
      title: "Ultimate AWS Certified Solutions Architect Associate 2025",
      author: "Stephane Maarek | AWS Certified Cloud...",
      rating: 4.7,
      reviews: "241,014",
      price: "RS.9.99",
      originalPrice: "Rs.57.99",
      badge: "Bestseller",
    },
  ];


  const coursecard = [
    {
      image: "https://media.istockphoto.com/id/529418808/photo/shes-developing-advanced-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ6zUOrOj2Lh3ypFhC0kVXi7MxgT4XHc09gyWEtVVU4=",
      title: "NLP - Natural Language Processing with Python",
      author: "Jose Portilla, Pierian Training",
      rating: 4.5,
      reviews: "18,192",
      price: "RS.8.56",
      originalPrice: "Rs.24.54",
      badge: "Bestseller",
    },
    {
      image: "https://media.istockphoto.com/id/1552848373/photo/woman-tablet-and-hologram-at-night-in-web-design-with-dashboard-interface-or-hud-display-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=szlvecoXx75PPDwQVu672Mi0y5FRldOqhu-FTbCIhSE=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "RS.12.99",
      originalPrice: "RS.54.27",
      badge: "Bestseller",
    },
    {
      image: "https://media.istockphoto.com/id/1149529035/photo/this-looks-interesting.webp?a=1&b=1&s=612x612&w=0&k=20&c=WBoEsW34ZoDhvrdadrU9jl1b6Gxc2B-tXtUnPT_FVR8=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "RS. 7.99",
      originalPrice: "RS.24.99",
      badge: "Bestseller",
    },
    {
      image: "https://media.istockphoto.com/id/638620962/photo/sifting-through-streams-of-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=ioi1MpgcJeKtncsX6gPWiHtiLW0uGAXnSZE2LE3-NrM=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "RS.9.99",
      originalPrice: "RS.74.99",
      badge: "Bestseller",
    },
    {
      image: "https://media.istockphoto.com/id/1552875565/photo/programming-coding-and-man-with-focus-hologram-and-trading-with-cyber-security-futuristic-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=kDl6LkUcVrUP3MJwv17F2jsAndTroskw-ulbWDBI17E=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "RS. 9.99",
      originalPrice: "RS. 74.99",
      badge: "Bestseller",
    },
    // Add other web devlopment courses


    {
      title: "Data Analytics Bootcamp",
      description: "Master data analytics with practical, real-world projects.",
      image: "/data.jpeg", // Replace with actual image URL
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
      badge: "Bestseller",
    },
    {
      title: "Full Stack Web Development",
      description: "Learn to build scalable web applications from scratch.",
      image: "/fullstack.png", // Replace with actual image URL
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
      badge: "Bestseller",
  },

  {
    title: "Introduction to Python Programming",
    description: "Begin your programming journey with Python basics.",
    image: "/python.jpeg", // Replace with actual image URL
    author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
      badge: "Bestseller",
  },
  {
    title: "Javascript for Beginners",
    description: "Master data analytics with practical, real-world projects.",
    image: "/javascript.png", // Replace with actual image URL
    author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
      badge: "Bestseller",
  },
  {
    title: "HTML for Beginners",
    description: "Master data analytics with practical, real-world projects.",
    image: "/html.jpeg", // Replace with actual image URL
    author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
      badge: "Bestseller",
  },
  {
    title: "React JS for Beginners",
    description: "Master data analytics with practical, real-world projects.",
    image: "/react.png", // Replace with actual image URL
    author: "Martin Jocqueviel, SuperDataScience",
    rating: 4.5,
    reviews: "1,715",
    price: "9.99",
    originalPrice: "64.99",
    badge: "Bestseller",
  },

// it certifications courses
{
  title: "CompTIA A+ Certification",
  description: "Comprehensive training to become a certified IT support specialist.",
  image: "/comptia-a.jpeg", // Replace with actual image URL
  author: "Martin Jocqueviel, SuperDataScience",
  rating: 4.5,
  reviews: "1,715",
  price: "9.99",
  originalPrice: "64.99",
  badge: "Bestseller",
},
{
  title: "Certified Ethical Hacker (CEH)",
  description: "Learn ethical hacking techniques to strengthen cybersecurity.",
  image: "/ceh.jpeg", // Replace with actual image URL
  author: "Martin Jocqueviel, SuperDataScience",
  rating: 4.5,
  reviews: "1,715",
  price: "9.99",
  originalPrice: "64.99",
  badge: "Bestseller",
},
{
  title: "AWS Certified Solutions Architect",
  description: "Master cloud architecture with AWS's leading certification program.",
  image: "/aws.jpeg", // Replace with actual image URL
  author: "Martin Jocqueviel, SuperDataScience",
    rating: 4.5,
    reviews: "1,715",
    price: "9.99",
    originalPrice: "64.99",
    badge: "Bestseller",
},
{
  title: "Cisco CCNA Certification",
  description: "Become an expert in networking with the industry's best certification.",
  image: "/skill.jpeg", // Replace with actual image URL
  author: "Martin Jocqueviel, SuperDataScience",
  rating: 4.5,
  reviews: "1,715",
  price: "9.99",
  originalPrice: "64.99",
  badge: "Bestseller",
},
{
  title: "Microsoft Azure Fundamentals",
  description: "Learn the basics of cloud services with Microsoft Azure.",
  image: "/azure.jpeg", // Replace with actual image URL
  author: "Martin Jocqueviel, SuperDataScience",
    rating: 4.5,
    reviews: "1,715",
    price: "9.99",
    originalPrice: "64.99",
    badge: "Bestseller",
},
{
  title: "Google Cloud Professional Certification",
  description: "Gain expertise in Google Cloud platform solutions and tools.",
  image: "/google-cloud.jpeg", // Replace with actual image URL
  author: "Martin Jocqueviel, SuperDataScience",
    rating: 4.5,
    reviews: "1,715",
    price: "9.99",
    originalPrice: "64.99",
    badge: "Bestseller",
},

  ];

  const courses2 = [
    {
      image: "https://media.istockphoto.com/id/529418808/photo/shes-developing-advanced-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ6zUOrOj2Lh3ypFhC0kVXi7MxgT4XHc09gyWEtVVU4=",
      title: "NLP - Natural Language Processing with Python",
      author: "Jose Portilla, Pierian Training",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
      badge: "Bestseller",
    },
    {
      image: "https://media.istockphoto.com/id/1552848373/photo/woman-tablet-and-hologram-at-night-in-web-design-with-dashboard-interface-or-hud-display-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=szlvecoXx75PPDwQVu672Mi0y5FRldOqhu-FTbCIhSE=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
    author: "Martin Jocqueviel, SuperDataScience",
    rating: 4.5,
    reviews: "1,715",
    price: "9.99",
    originalPrice: "64.99",
    badge: "Bestseller",
    },
    {
      image: "https://media.istockphoto.com/id/1149529035/photo/this-looks-interesting.webp?a=1&b=1&s=612x612&w=0&k=20&c=WBoEsW34ZoDhvrdadrU9jl1b6Gxc2B-tXtUnPT_FVR8=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
    },
    {
      image: "https://media.istockphoto.com/id/638620962/photo/sifting-through-streams-of-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=ioi1MpgcJeKtncsX6gPWiHtiLW0uGAXnSZE2LE3-NrM=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
    },
    {
      image: "https://media.istockphoto.com/id/1552875565/photo/programming-coding-and-man-with-focus-hologram-and-trading-with-cyber-security-futuristic-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=kDl6LkUcVrUP3MJwv17F2jsAndTroskw-ulbWDBI17E=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
    },
    // Add other courses similarly
  ];


  const coursesdata = [
    {
      title: "Data Analytics Bootcamp",
      description: "Master data analytics with practical, real-world projects.",
      image: "/data.jpeg", // Replace with actual image URL
      dollor: "$9.70",
      dollor2:"7.85",
      rating: "4.5"
    },
    {
      title: "Full Stack Web Development",
      description: "Learn to build scalable web applications from scratch.",
      image: "/fullstack.png", // Replace with actual image URL
      dollor: "$19.70",
      dollor2:"27.85" ,
      rating: "4.6"
  },
    {
      title: "Introduction to Python Programming",
      description: "Begin your programming journey with Python basics.",
      image: "/python.jpeg", // Replace with actual image URL
       dollor: "$12.70",
      dollor2:"15.85",
      rating: "4.7",
      reviews: "1,715",
    },
    {
      title: "Javascript for Beginners",
      description: "Master data analytics with practical, real-world projects.",
      image: "/javascript.png", // Replace with actual image URL
       dollor: "$8.70",
      dollor2:"10.85",
      rating: "4.5",
      reviews: "1,715",
    },
    {
      title: "HTML for Beginners",
      description: "Master data analytics with practical, real-world projects.",
      image: "/html.jpeg", // Replace with actual image URL
       dollor: "$5.70",
      dollor2:"6.85",
      rating: "4.5",
      reviews: "1,715",
    },
    {
      title: "React JS for Beginners",
      description: "Master data analytics with practical, real-world projects.",
      image: "/react.png", // Replace with actual image URL
       dollor: "$7.70",
      dollor2:"9.85",
      rating: "4.6",
      reviews: "1,715",
    },
  ];

  export {courses , courses2, coursesdata, coursecard}