// const allClear = document.querySelector(".btn-all-clear");
// const checkAll = document.querySelector(".cart-items-check-all");
// const cartItems = document.querySelector(".cart-items");
// const summary = document.querySelector(".cart-items-summary");
// const btnOrder = document.querySelector(".btn-order");
// const img = document.querySelector(".cart-item-empty");

// allClear.addEventListener("click", () => {
//   cartItems.style.display = "none";
//   summary.style.display = "none";
//   btnOrder.style.display = "none";
//   img.style.display = "block";
// });

// const itemClear = document.querySelectorAll(".cart-content .btn-clear");

// let clickedCount = 0;

// itemClear.forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", function () {
//     this.parentElement.parentElement.style.display = "none";
//     clickedCount++;
//     // 각각의 장바구니 아이템이 모두 삭제되면 텅 이미지 나오게
//     if (clickedCount === itemClear.length) {
//       cartItems.style.display = "none";
//       summary.style.display = "none";
//       btnOrder.style.display = "none";
//       img.style.display = "block";
//     }
//   });
// });

// const cartCheckAll = document.querySelector(".cart-check-all");

// cartCheckAll.addEventListener("click", () => {
//   const cartCheck = document.querySelectorAll(".cart-chk");
//   cartCheck.forEach((checkbox) => {
//     checkbox.checked = cartCheckAll.checked;
//   });
// });

// // const a = 11760;
// // const b = 18800;

// // const price01 = document.querySelector(".price01");
// // const price02 = document.querySelector(".price02");
// // const priceSum = document.querySelectorAll(".priceSum");

// // price01.innerText = a.toLocaleString() + " 원";
// // price02.innerText = b.toLocaleString() + " 원";

// // const switchCommas = (a + b).toLocaleString();
// // priceSum.forEach((item) => {
// //   item.innerText = switchCommas + "원";
// // });

const allClear = document.querySelector(".btn-all-clear");
const checkAll = document.querySelector(".cart-items-check-all");
const cartItems = document.querySelector(".cart-items");
const summary = document.querySelector(".cart-items-summary");
const btnOrder = document.querySelector(".btn-order");
const img = document.querySelector(".cart-item-empty");

allClear.addEventListener("click", () => {
  checkAll.style.display = "none";
  cartItems.style.display = "none";
  summary.style.display = "none";
  btnOrder.style.display = "none";
  img.style.display = "block";
});

const itemClear = document.querySelectorAll(".cart-content .btn-clear");
let totalPaymentAmount = 0;
let clickedCount = 0;

itemClear.forEach((item) => {
  item.addEventListener("click", function () {
    const productPriceText =
      this.parentElement.parentElement.querySelector(".productPrice").innerText;
    const productPrice = parseFloat(productPriceText.replace(/,/g, ""));
    if (this.checked) {
      totalPaymentAmount += productPrice;
    } else {
      totalPaymentAmount -= productPrice;
    }
    updateTotalPaymentDisplay();

    this.parentElement.parentElement.style.display = "none";
    clickedCount++;

    if (clickedCount === itemClear.length) {
      checkAll.style.display = "none";
      cartItems.style.display = "none";
      summary.style.display = "none";
      btnOrder.style.display = "none";
      img.style.display = "block";
    }
  });
});

const cartCheckAll = document.querySelector(".cart-check-all");
const cartCheck = document.querySelectorAll(".cart-chk");

cartCheckAll.addEventListener("click", () => {
  cartCheck.forEach((checkbox) => {
    checkbox.checked = cartCheckAll.checked;
  });
  totalPaymentAmount = 0;
  cartCheck.forEach((checkbox, idx) => {
    if (checkbox.checked) {
      const productPriceText = productPrices[idx].innerText;
      const productPrice = parseFloat(productPriceText.replace(/,/g, ""));
      totalPaymentAmount += productPrice;
    }
  });
  priceSum.forEach((item) => {
    item.innerText = totalPaymentAmount.toLocaleString();
  });
});

// price auto
const productNames = document.querySelectorAll(".productName");
const productPrice = document.querySelectorAll(".productPrice");
const priceSum = document.querySelectorAll(".priceSum");

fetch("../products.json")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.data.forEach((item, idx) => {
      productNames[idx].innerText = item.name;
      productPrice[idx].innerText = item.price.toLocaleString() + "원";
      totalPaymentAmount += item.price;
    });
    update();
  });

cartCheck.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    const productPriceText =
      this.parentElement.parentElement.querySelector(".productPrice").innerText;
    const productPrice = parseInt(productPriceText.replace(/,/g, ""));
    if (this.checked) {
      totalPaymentAmount += productPrice;
    } else {
      totalPaymentAmount -= productPrice;
    }
    update();
  });
});

function update() {
  priceSum.forEach((item) => {
    item.innerText = totalPaymentAmount.toLocaleString();
  });
}
