import { ok } from "assert";

async function handleRegister(ev: any) {
  try {
    ev.preventDefault();
    checkIfConnected()
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    const userName = ev.target.elements.name.value;

    //@ts-ignore
    const { data } = await axios.post("/api/users/register", {
      password,
      email,
      userName
    });
    window.location.href = ("./LogIn.html")
    const { error } = data;
    if (error) throw error
    console.log(data);
  } catch (error) {
    console.error(error)
  }
}

async function handleLogIn(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;

    //@ts-ignore
    const { data } = await axios.post("/api/users/login", { password, email });
    const { userDB } = data;

    window.location.href = ("./index.html");

    const { ok } = data;
    if (ok) {
      console.log("suuccesful Login");
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleLogout() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/logout");
    const { logout } = data;

    if (logout) {
      window.location.href = "./index.html";

      const area = document.querySelector(".UserN") as HTMLDivElement;
      area.style.display = "none";

      const regLogButtons = document.querySelector(".RegLofBtn") as HTMLButtonElement;
      regLogButtons.style.display = "block";

      const rentBtn = document.querySelector(".rent") as HTMLButtonElement;;
      rentBtn.style.display = "none";

      const logOutBtn = document.querySelector("#logOut") as HTMLElement;
      logOutBtn.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  }
}

async function checkIfConnected() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-from-cookie");
    const { userDB } = data;

    if (userDB) window.location.href = ("./index.html");

  } catch (error) {
    console.error(error)
  }
}

async function userHomePage() {
  try {
    allCars()
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-from-cookie");
    const { userDB } = data;

    if (userDB) {
      const logOutBtn = document.querySelector("#logOut")as HTMLElement;
      logOutBtn.style.display = "block"

      const regLogButtons = document.querySelector(".RegLofBtn")as HTMLButtonElement;
      regLogButtons.style.display = "none";

      const area = document.querySelector(".UserN");
      const h3 = document.createElement("h3");
      h3.innerHTML = `Hello ${userDB.userName}`;
      area.appendChild(h3)

      const role = `${userDB.role}`;

      if (role === `admin`) {
        const userBtn = document.querySelectorAll("#user"); 
        userBtn.forEach((btn: HTMLButtonElement) => {
          btn.style.display = "none";
        })

        const adminBtn = document.querySelectorAll("#admin");
        adminBtn.forEach((btn: HTMLButtonElement) => {
          btn.style.display = "block";
        })
      }

      const rentBtn = document.querySelector(".rent") as HTMLButtonElement;
      rentBtn.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
}

function clearArea() {
  const car = document.querySelectorAll(".car");

  car.forEach(car => {
    car.remove();
  });

  const search = document.querySelector(".search");
  if(search)
    search.remove();

  const searchBtn = document.querySelector(".searchBtn");
  if(searchBtn)
    searchBtn.remove();

  const select = document.querySelector(".category");
  if(select)
    select.remove();
  
  const form = document.querySelector(".searchForm");
    if(form)
      form.remove();

  const nonePage = document.querySelector(".box1") as HTMLDivElement;
  nonePage.style.display = "none";

  const add = document.querySelector(".add") as HTMLElement;
  add.style.display = "none";

  const upd = document.querySelector(".update") as HTMLElement;
  upd.style.display = "none";

  const del = document.querySelector(".delete") as HTMLElement;
  del.style.display = "none";

  const noneAdminPage = document.querySelector(".adminPage") as HTMLDivElement;
  noneAdminPage.style.display = "none";
}

// async function allCars() {
//   try {
//     clearArea();

//     //@ts-ignore
//     const { data } = await axios.get("/api/cars");
//     const { carsDB } = data; 

//     const nonePage = document.querySelector(".box1")as HTMLDivElement;
//     nonePage.style.display = "flex";

//     carsDB.forEach(car => {
//       createAcar(car);
//     });

//   } catch (error) {
//     console.error(error)
//   }
// }

function allCars() {
  clearArea();
  //@ts-ignore
  axios
  .get("/api/cars")
  .then(({ data }) => {
    const { carsDB } = data; 

    const nonePage = document.querySelector(".box1")as HTMLDivElement;
    nonePage.style.display = "flex";

    carsDB.forEach(car => {
      createAcar(car); 
    });
})
    .catch((err) => console.error(err));
}

async function carsBtn() {
  try {
    clearArea();

    //@ts-ignore
    const { data } = await axios.get("/api/cars");;
    const { carsDB } = data;

    const nonePage = document.querySelector(".box1") as HTMLDivElement;
    nonePage.style.display = "flex";

    carsDB.forEach(car => {
      if (`${car.carType}` === `cars`) {
        createAcar(car);
      }
    });

  } catch (error) {
    console.error(error)
  }
}

async function vanBtn() {
  try {
    clearArea();

    //@ts-ignore
    const { data } = await axios.get("/api/cars");;
    const { carsDB } = data;

    const nonePage = document.querySelector(".box1") as HTMLDivElement;
    nonePage.style.display = "flex";

    carsDB.forEach(car => {
      if (`${car.carType}` == `van`) {
        createAcar(car);
      }
    });

  } catch (error) {
    console.error(error)
  }
}

async function commBtn() {
  try {
    clearArea();

    //@ts-ignore
    const { data } = await axios.get("/api/cars");;
    const { carsDB } = data;

    const nonePage = document.querySelector(".box1") as HTMLDivElement;
    nonePage.style.display = "flex";

    carsDB.forEach(car => {
      if (`${car.carType}` == `commercial`) {
        createAcar(car);
      }
    });

  } catch (error) {
    console.error(error)
  }
}

async function motoBtn() {
  try {
    clearArea();

    //@ts-ignore
    const { data } = await axios.get("/api/cars");;
    const { carsDB } = data;

    const nonePage = document.querySelector(".box1") as HTMLDivElement;
    nonePage.style.display = "flex";

    carsDB.forEach(car => {
      if (`${car.carType}` == `moto`) {
        createAcar(car);
      }
    });

  } catch (error) {
    console.error(error)
  }
}

function addBtn() {
  clearArea();

  const nonePage = document.querySelector(".adminPage") as HTMLDivElement;
  nonePage.style.display = "block";

  const add = document.querySelector(".add") as HTMLElement;
  add.style.display = "block";
}

function updateBtn() {
  clearArea();

  const nonePage = document.querySelector(".adminPage") as HTMLDivElement;
  nonePage.style.display = "block";

  const upd = document.querySelector(".update") as HTMLElement;
  upd.style.display = "block";
}

function deleteBtn() {
  clearArea();

  const nonePage = document.querySelector(".adminPage") as HTMLDivElement;
  nonePage.style.display = "block";

  const del = document.querySelector(".delete") as HTMLElement;
  del.style.display = "block";
}

async function createAcar(carData) {
  const area = document.querySelector(".box1");

  const div = document.createElement("div");

  const span = document.createElement("span");

  if (carData.carAvailabe == `0`) {
    const imgOutOsStock = document.createElement("img");
    imgOutOsStock.setAttribute("src", `https://toppng.com/uploads/preview/out-of-stock-11550257167z1lbrbidee.png`);

    span.appendChild(imgOutOsStock);
  }
  else {
    const carName = document.createElement("h2");
    carName.innerHTML = `${carData.carName}`;

    const amount = document.createElement("h3");
    amount.innerHTML = `In Stock: ${carData.carAvailabe}`;

    const price = document.createElement("h3");
    price.innerHTML = `Price: ${carData.carPrice}$`;

    const forClick = document.createElement("h3");
    forClick.innerHTML = `Click for details and order`;

    span.appendChild(carName);
    span.appendChild(amount);
    span.appendChild(price);
    span.appendChild(forClick);

    span.onclick = clickSpan;
  }

  const img = document.createElement("img");
  img.setAttribute("src", `${carData.carImg}`);

  div.appendChild(span);
  div.appendChild(img);
  div.className = `car`
  area.appendChild(div);

  //@ts-ignore
  const { data } = await axios.get("/api/users/get-from-cookie");
  const { userDB } = data;
  
  function clickSpan() {
    if(userDB.userRent)
      alert("You already have a car in your account");
    
    else
      orderPage(carData);
  }
}

async function orderPage(car) {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-from-cookie");
    const { userDB } = data;

    if (userDB) {
      clearArea();
      const clearButt = document.querySelector(".box2") as HTMLDivElement;
      clearButt.style.display = "none"

      const details = document.querySelector(".details") as HTMLDivElement;

      const divImg = document.createElement("div");
      const divRent = document.createElement("div");

      const span = document.createElement("span");
      span.className = "rentSpan"

      const img = document.createElement("img");
      img.setAttribute("src", `${car.carImg}`);

      const carName = document.createElement("h1");
      carName.innerHTML = `${car.carName}`;

      const amount = document.createElement("h2");
      amount.innerHTML = `In Stock: ${car.carAvailabe}`;

      const price = document.createElement("h2");
      price.innerHTML = `Price: ${car.carPrice}$`

      const days = document.createElement("input");
      days.placeholder = "1"
      days.className = "dayRent"
      days.type = "number";
      days.min = "1";
      days.value = days.placeholder;

      const rentButton = document.createElement("input");
      rentButton.type = "submit";
      rentButton.value = "Rent"
      rentButton.id = "click"
      rentButton.className = "rent";
      rentButton.onclick = order;

      divImg.appendChild(img);
      divRent.appendChild(carName);
      divRent.appendChild(amount);
      divRent.appendChild(price);
      divRent.appendChild(days);
      divRent.appendChild(rentButton);
      divRent.appendChild(span);

      details.appendChild(divImg);
      details.appendChild(divRent);

      details.style.display = "block"

      function order() {
        const h3_1 = document.createElement("h3");
      const h3_2 = document.createElement("h3");
      const h3_3 = document.createElement("h3");
      h3_1.innerHTML = `Your order: ${car.carName}`
      const valueDays = days.value;
      const totalPrice = car.carPrice*Number(valueDays);
      h3_2.innerHTML = `The price for ${valueDays} days is  ${totalPrice}$`;
      h3_3.innerHTML = `Click to confirm:`

      const okButton = document.createElement("input");
      okButton.type = "button";
      okButton.value = "Rent"
      okButton.id = "click"
      okButton.className = "ok";
      okButton.style.marginLeft = "10px"
      okButton.onclick = registerRent;
      
      const cancelBtn = document.createElement("input");
      cancelBtn.type = "button";
      cancelBtn.value = "Cancel"
      cancelBtn.id = "click"
      cancelBtn.className = "cancel";
      cancelBtn.style.marginRight = "10px";
      cancelBtn.onclick = noneSpan;

      span.appendChild(h3_1);
      span.appendChild(h3_2);
      span.appendChild(h3_3);
      span.appendChild(cancelBtn);
      span.appendChild(okButton);

        orderCar(car);
      }

      let noneSpan = () => {
        span.style.display = "none";
      }

      let registerRent = () => {
        registerOrder(car);
      }

    }

  } catch (error) {
    console.error(error);
  }
}

async function orderCar(car) {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-from-cookie");
    const { userDB } = data;

    const span = document.querySelector(".rentSpan") as HTMLSpanElement;
    span.style.display = "block"

  } catch (error) {
    console.error(error);
  }
}

async function registerOrder(car) {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-from-cookie");
    const { userDB } = data;

    let carAvailabe = car.carAvailabe;
    carAvailabe--;

    const carID = car._id;
    const carPrice = car.carPrice;
    const userRent = !userDB.userRent;

    //@ts-ignore
    const { Data } = await axios.patch(`/api/cars/${carID}`, { carPrice, carAvailabe });

    //@ts-ignore
    const { userDb } = await axios.patch(`/api/users/${userDB._id}`, { userRent });

    const span = document.querySelector(".rentSpan") as HTMLSpanElement;
    span.style.display = "none";
    const details = document.querySelector(".details") as HTMLDivElement;
    details.style.display = "none";
    
    userHomePage();

  } catch (error) {
    console.error(error);
  }
}

async function handleAddCar(ev: any) {
  try {
    ev.preventDefault();

    const carType = ev.target.elements.carType.value;
    const carName = ev.target.elements.carName.value;
    const carPrice = ev.target.elements.carPrice.value;
    const carImg = ev.target.elements.src.value;

    //@ts-ignore
    const { data } = await axios.post("/api/cars/add", {
      carType,
      carName,
      carPrice,
      carImg
    });
    console.log(data)
    const { error } = data;
    if (error) throw error
  } catch (error) {
    console.error(error)
  }
}

async function handleUpdateCar(event) {
  try {
    event.preventDefault();

    const carId = event.target.elements.carId.value;
    const carPrice = event.target.elements.carPrice.value;
    const carAvailabe = event.target.elements.carAvailable.value;


    //@ts-ignore
    const { data } = await axios.patch(`/api/cars/${carId}`, { carPrice, carAvailabe });

  } catch (error) {
    console.log(error);
  }
}

async function handleDeleteCar(event) {
  try {
    event.preventDefault();

    const carId = event.target.elements.carId.value;

    //@ts-ignore
    const { data } = await axios.delete(`/api/cars/${carId}`);

  } catch (error) {
    console.log(error);
  }
}

function findBtn() {
  clearArea();

  const area = document.querySelector(".box1") as HTMLDivElement;
  area.style.display = "flex";
  area.style.justifyContent = "left"

  const form = document.createElement("form");
  form.className = "searchForm";
  form.onsubmit = seachSubmit;
  const category = document.createElement("select");
  category.className= "category";
  category.id = "click";
  const op1 = document.createElement("option");
  op1.value = "name";
  op1.innerHTML = "Name";
  const op2 = document.createElement("option");
  op2.value = "price";
  op2.innerHTML = "Price";
  const op3 = document.createElement("option");
  op3.value = "stock";
  op3.innerHTML = "Stock";
  
  category.appendChild(op1);
  category.appendChild(op2);
  category.appendChild(op3);

  const search = document.createElement("input");
    search.placeholder = "Find"
    search.className = "search"
    search.oninput = handeleSearch;

  const searchBtn = document.createElement("input");
    searchBtn.type = "submit";
    searchBtn.id = "click";
    searchBtn.className = "searchBtn";

  form.appendChild(category);
  form.appendChild(search);
  form.appendChild(searchBtn);
  area.appendChild(form);
}

async function handeleSearch(event) {
  try {
    const carSearch = event.target.value;
    const select = document.querySelector(".category") as HTMLSelectElement;
    const category = select.value

    //@ts-ignore
    const {data} = await axios.post(`/api/cars/search/${category}`, {carSearch});
    const { carDB } = data;

    console.log(carDB)
  } catch (error) {
    console.error(error);
  }
}

async function seachSubmit(event) {
  try {
    event.preventDefault();
    const select = document.querySelector(".category") as HTMLSelectElement;
    const category = select.value
    const search = document.querySelector(".search") as HTMLInputElement
    const carSearch = search.value;

    const nonePage = document.querySelector(".box1") as HTMLDivElement;
    nonePage.style.display = "flex";

    //@ts-ignore
    const {data} = await axios.post(`/api/cars/search/${category}`, {carSearch});
    const { carDB } = data;

    carDB.forEach(car => {
      if (`${car.carType}` === `cars`) {
        createAcar(car);
      }
    });

  } catch (error) {
    console.error(error);
  }
}