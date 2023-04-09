const tabItem = document.querySelectorAll('.tab-item');
const coursesList = document.querySelector('.courses-wrapper .courses-list');
const loader = document.querySelector('.loader-wrapper');
const pagination = document.querySelector('.pagination');

const courses = [
    {
        id: 1,
        title: "ReactJS",
        type: "frontend",
        form: "offline",
        price: 4500000,
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/react-course-2.jpg"
    },
    {
        id: 2,
        title: "NodeJS",
        type: "backend",
        form: "offline",
        price: 4500000,
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/nodejs-course.jpg"
    },
    {
        id: 3,
        title: "PHP",
        type: "backend",
        price: 4500000,
        form: "offline",
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/php-course.jpg"
    },
    {
        id: 4,
        title: "Flutter",
        type: "mobile",
        price: 4500000,
        form: "offline",
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/flutter-course.jpg"
    },
    {
        id: 5,
        title: "QC",
        type: "qc",
        price: 4500000,
        form: "offline",
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/qc.jpg"
    },
    {
        id: 6,
        title: "Unity",
        type: "game",
        price: 4500000,
        form: "offline",
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/unity-course.jpg"
    },
    {
        id: 7,
        title: "Blockchain",
        type: "blockchain",
        price: 4500000,
        form: "offline",
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/blockchain.jpg"
    },
    {
        id: 8,
        title: "QC",
        type: "qc",
        price: 4500000,
        form: "offline",
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/qc.jpg"
    },
    {
        id: 9,
        title: "IOT",
        type: "iot",
        price: 4500000,
        form: "offline",
        teacher: "Jane Cooper",
        avatar: "./src/images/avatar-2.png",
        thumbnail: "./src/images/iot.jpg"
    }
]

const renderCourses = (arrayCourses) => {
    const coursesHTML = arrayCourses.map((course) => {
        return `<a href="./courses-details.html"
       class= "animate__animated animate__zoomIn animate__faster hover:shadow-xl transition-all duration-100 relative after:absolute after:content-['Offline'] after:px-4 after:py-2 inline-block after:bg-primary-color-5 after:text-white after:top-5 after:right-5">
       <img src="${course.thumbnail}" class="w-full md:w-auto"
           alt="react-course-apps-cyclone">
           <div class="p-5 xl:p-10 bg-pray-color-1">
               <p class="text-pray-color-12 mb-2 text-sm font-medium">${course.type.toUpperCase()}</p>
               <h3 class="text-2xl mb-4">${course.title}</h3>
               <div class="flex justify-between items-center">
                   <div class="flex gap-2 items-center">
                       <img src="${course.avatar}" alt="${course.title.toLowerCase()}-mentor-jane-cooper-apps-cyclone">
                           <p class="text-pray-color-12 font-medium">${course.teacher}</p>
                   </div>
                   <span class="font-bold">${course.price.toLocaleString('en-US')}đ</span>
               </div>
           </div>
       </a>`;
    })
    if (arrayCourses.length >= 9) {
        pagination.classList.add('block')
        pagination.classList.remove('hidden')
    } else {
        pagination.classList.remove('block')
        pagination.classList.add('hidden')
    }
    const html = coursesHTML.length === 0 ? '<p class="col-span-3">There are no courses that match your course type.</p>' : coursesHTML.join(' ');
    coursesList.classList.add('grid');
    coursesList.classList.remove('hidden');
    coursesList.innerHTML = html;
}

const fakeApiCall = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
};

const getApiRender = (data) => {
    fakeApiCall(data)
        .then(data => {
            loader.classList.add('hidden');
            renderCourses(data);
        })
        .catch(error => {
            loader.classList.add('hidden');
            coursesList.innerHTML = '<p class="col-span-3">An error occurred, please try again later.</p>';
        });
}

getApiRender(courses);


tabItem.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        loader.classList.remove('hidden');
        loader.classList.add('flex');
        coursesList.innerHTML = "";
        pagination.classList.add('hidden');

        tabItem.forEach((link) => {
            link.classList.remove('bg-pray-color-22');
            link.classList.remove('text-white');
            link.classList.add('bg-pray-color-1');
        });

        tab.classList.remove('bg-pray-color-1');
        tab.classList.add('bg-pray-color-22');
        tab.classList.add('text-white');

        let coursesFilter = {};
        if (tab.getAttribute('data-type') === 'all') {
            coursesFilter = courses;
        } else {
            coursesFilter = courses.filter(item => item.type === tab.getAttribute('data-type'))
        }
        getApiRender(coursesFilter);
    })
});