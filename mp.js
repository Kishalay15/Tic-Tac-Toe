let turn = "X";
let isgameOver = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};
const checkTie = () => {
  let celltxts = document.querySelectorAll(".celltext");
  let gameOver = true;
  celltxts.forEach((element) => {
    if (element.innerText === "") {
      isgameOver = false;
    }
  });
  if ((gameOver = true)) {
    return true;
  } else {
    return false;
  }
};
const checkWin = () => {
  let cs = document.querySelectorAll(".cell");
  let celltxts = document.querySelectorAll(".celltext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      celltxts[e[0]].innerText === celltxts[e[1]].innerText &&
      celltxts[e[1]].innerText === celltxts[e[2]].innerText &&
      celltxts[e[0]].innerText !== ""
    ) {
      cs[e[0]].style.backgroundColor = "white";
      cs[e[1]].style.backgroundColor = "white";
      cs[e[2]].style.backgroundColor = "white";
      cs[e[0]].style.color = "black";
      cs[e[1]].style.color = "black";
      cs[e[2]].style.color = "black";
      document.querySelector(".info").innerText =
        celltxts[e[0]].innerText + " Won";
      isgameOver = true;

      setTimeout(resetbtn, 2000);
    }
  });
};

let cells = document.querySelectorAll(".cell");
Array.from(cells).forEach((element) => {
  let celltxt = element.querySelector(".celltext");
  element.addEventListener("click", () => {
    if (celltxt.innerHTML === "") {
      celltxt.innerHTML = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerHTML = turn + "'s Turn";
      }
    }
  });
});

const resetbtn = () => {
  let celltxts = document.querySelectorAll(".celltext");
  Array.from(celltxts).forEach((element) => {
    element.innerText = "";
  });

  Array.from(cells).forEach((element) => {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  });

  turn = "X";
  isgameOver = false;
  document.getElementsByClassName("info")[0].innerHTML = turn + "'s Turn";
};
reset.addEventListener("click", resetbtn);
