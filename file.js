function buttonChange1() {
  if (count > 4) {
    document.getElementById("seatA1").classList.add("bg-[#1DD100]");
    addToEntry("A1");
  }
}
function buttonChange2() {
  if (count > 4) {
    document.getElementById("seatA2").classList.add("bg-[#1DD100]");
    addToEntry("A2");
  }
}
function buttonChange3() {
  if (count > 4) {
    document.getElementById("seatA3").classList.add("bg-[#1DD100]");
    addToEntry("A3");
  }
}
function buttonChange4() {
  if (count > 4) {
    document.getElementById("seatA4").classList.add("bg-[#1DD100]");
    addToEntry("A4");
  }
}
function buttonChange5() {
  if (count > 4) {
    document.getElementById("seatB1").classList.add("bg-[#1DD100]");
    addToEntry("B1");
  }
}
function buttonChange6() {
  if (count > 4) {
    document.getElementById("seatB2").classList.add("bg-[#1DD100]");
    addToEntry("B2");
  }
}
function buttonChange7() {
  if (count > 4) {
    document.getElementById("seatB3").classList.add("bg-[#1DD100]");
    addToEntry("B3");
  }
}
function buttonChange8() {
  if (count > 4) {
    document.getElementById("seatB4").classList.add("bg-[#1DD100]");
    addToEntry("B4");
  }
}

function addToEntry(seatName) {
  const seatEntry = document.getElementById("seat-entry");
  const p = document.createElement("p");

  p.innerHTML = seatName;
  const p2 = document.createElement("p");
  p2.innerText = "Economy";
  const p3 = document.createElement("p");
  p3.innerText = 550;

  seatEntry.appendChild(p);
  seatEntry.appendChild(p2);
  seatEntry.appendChild(p3);
}

const allBtn = document.getElementsByClassName("btnonly");

let count = 8;
let seatCount = 0;

let totalPrice = 0;
let ticketPrice = 550;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    //seat left
    if (count > 4) {
      count = count - 1;
      totalPrice = ticketPrice + totalPrice;
    }

    document.getElementById("seat-left").innerText = count;
    //seat count
    if (seatCount < 4) {
      seatCount = seatCount + 1;
    }
    document.getElementById("seat-count").innerText = seatCount;

    // total price

    document.getElementById("total-price").innerText = totalPrice;

    // grand total
    document.getElementById("grand-total").innerText = totalPrice;
  });
}
