'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}


//htmlの要素を取得
const inputArea1 = document.getElementById("inputArea1");
const inputArea2 = document.getElementById("inputArea2");
const outputArea = document.getElementById("outputArea");

const formBtn1 = document.getElementById("formBtn1");
const formBtn2 = document.getElementById("formBtn2");
const formBtn3 = document.getElementById("formBtn3");

const copyBtn = document.getElementById("copyBtn");

const inTable1 = document.getElementById("inTable1");
const inTable2 = document.getElementById("inTable2");
const outTable = document.getElementById("outTable");


//マウスで選択した時にテキストエリアの初期値をリセット
let isInputAreaInitial1 = false;
let isInputAreaInitial2 = false;
function iniInpugArea1(){
  if (!isInputAreaInitial1) {
    inputArea1.value = "";
    isInputAreaInitial1 =true;
  }
}
function iniInpugArea2(){
  if (!isInputAreaInitial2) {
    inputArea2.value = "";
    isInputAreaInitial2 =true;
  }
}

//Exelからペーストされた列を文字列のまま取得
// function getInput1(){
//   const inputText = inputArea1.value;
//   return inputText;
// }

//取得した文字列を１行ずつ配列に格納
function formInput(str) {
  return str.split(/\n/);
}


//【処理１】　空白行を挿入する
//2配列に1要素ずつ空白を挿入する
function addMargine1(array) {
  const result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(array[i]);
    if(i < array.length -2) {
      result.push("");
    }
  }
  return result;
}
// console.log("Test addMargine1");
const inputExample1 = ["1","2","3",""];
const inputExample2 = ["A","B","C",""];
// test(addMargine1(inputExample1),["1", "", "2", "", "3", "",])
// test(addMargine1(inputExample2),["A", "", "B", "", "C", "",])

//二つの配列を合体させる
function conbineArr(arr1, arr2){
  const result = [];
  let maxRaw = Math.max(arr1.length,arr2.length);
  for(let i = 0; i < maxRaw; i++) {
    const tmpRow = [];
    if (i >= arr1.length) {
      tmpRow.push("");
    } else {
      tmpRow.push(arr1[i]);
    }
    if (i >= arr2.length) {
      tmpRow.push("");
    } else {
      tmpRow.push(arr2[i]);
    }
    result.push(tmpRow);
  }
  return result;
}
console.log("test combine");
test(conbineArr(inputExample1,inputExample2),[["1","A"],["2","B"],["3","C"],["",""]]);


function ArrToStr(arr1, arr2) {
  let reslut = "";
  let maxRaw = Math.max(arr1.length,arr2.length);
  const rowArrays = [];
  for (let i = 0; i < maxRaw; i++) {
    const tmpRow = [];
    tmpRow.push(arr1[i]);  
    tmpRow.push(arr2[i]);
    rowArrays.push(tmpRow)
  }
  
  for (const row of rowArrays) {
    for(let i = 0; i < row.length; i++) {
      if( i === row.length -1) {
        reslut = reslut + String(row[i]) + "\n";
      } else {
        reslut = reslut + String(row[i]) + "\t";
      }
    }
  }
  return reslut;
}
// const combineOutImage = "1\ta\n\t\n2\tb\n\t\n3\tc\n\t\n";
// test(ArrToStr(["1", "", "2", "", "3", "",],["a", "", "b", "", "c", "",]), combineOutImage)



//【処理２】配列２を子要素として並べる
//２つの目の配列が子項目になる様にならびかえた２列の配列を返す
function formArr2(arr1,arr2) {
  console.log(arr1,arr2);
  const result = [];
  for(let i =  0;i < arr1.length -1;i++) {
      const row = [];
      console.log("cell1:",arr1[i]);
      row.push(arr1[i]);
      for(let j = 0; j < arr2.length; j++) {
          if(j === 0) {
              row.push(arr2[j]);
              result.push(row);
          } else if (j < arr2.length -1) {
              result.push(["",arr2[j]]);
          }
      }
  }
  return result;
}
//配列の要素を１つずつ改行して出力
function ArrToStr2(arr1) {
  let reslut = "";
  const rowArrays = arr1;  
  for (const row of rowArrays) {
    for(let i = 0; i < row.length; i++) {
      if( i === row.length -1) {
        reslut = reslut + String(row[i]) + "\n";
      } else {
        reslut = reslut + String(row[i]) + "\t";
      }
    }
  }
  return reslut;
}



//【処理3】２つの配列を交互にならべる
//２つ目の配列を１要素配列の配列にして返す
function formArr3(arr1,arr2) {
  console.log(arr1,arr2);
  let maxRaw = Math.max(arr1.length,arr2.length);
  console.log(maxRaw,arr1.length,arr2.length);
  const result = [];
  for(let i =  0;i < maxRaw-1; i++) {
    console.log(i, arr1[i], arr2[i]);
    const row1 = [];
    const row2 = [];
    if ( i < arr1.length) {
      row1.push(arr1[i]);
    } else {
      row1.push("");
    }
    if ( i < arr2.length) {
      row2.push(arr2[i]);
    } else {
      row2.push("");
    }
    result.push(row1);
    result.push(row2);
  }
  console.log(result);
  return result;
}
// //配列の要素を１つずつ改行して出力
// function ArrToStr2(arr1) {
//   let reslut = "";
//   const rowArrays = arr1;  
//   for (const row of rowArrays) {
//     for(let i = 0; i < row.length; i++) {
//       if( i === row.length -1) {
//         reslut = reslut + String(row[i]) + "\n";
//       } else {
//         reslut = reslut + String(row[i]) + "\t";
//       }
//     }
//   }
//   return reslut;
// }






//【全処理に共通の関数】
//変換した配列をhtmlで描画する
function drawTabe(arrInArr,tableElm) {
  console.log(arrInArr);
  // console.log("table", tableElm.hasChildNodes())
  if (tableElm.hasChildNodes()) {
    const tableChildren = tableElm.children;
    while (tableChildren.length > 0) {
      tableElm.removeChild(tableChildren[0]);
    } 
  }
  for (const row of arrInArr) {
    console.log(row);
    const addTr = document.createElement("tr");
    for (const cell of row) {
      // console.log(cell);
      const addTd = document.createElement("td");
      addTd.innerHTML = cell + "<br>";
      addTr.appendChild(addTd);
    }
    tableElm.appendChild(addTr);
  }

  tableElm.style.width = "100px";
  tableElm.border = "1";
  tableElm.style.borderCollapse = "collapse";
}

let outputStr = ""//combineOutImage;
//コピーボタンを押すとクリップボードに変換した文字列がコピーされる
function copyReslut(){
  outputArea.value = outputStr;
  outputArea.select();
  document.execCommand("copy");
}
copyBtn.addEventListener("click",copyReslut);

//処理選択ボタンを押すと処理が切り替わる
let formFlag = 1;




//ペーストをトリガーに処理を実行する
function onPasted(){
  console.log("Pasted in Area1:\n",inputArea1.value);
  console.log("Pasted in Area2:\n",inputArea2.value);
  // console.log(getInput1());
  // test(getInput1(),"1\n2\n3\n");
  // test(formInput1("1\n2\n3\n"),["1","2","3",""]);
  // test(formInput1(inputStr),["1","2","3",""]);
  // console.log(isInputAreaInitial1, isInputAreaInitial2, outputStr);
  let inputStr1 = inputArea1.value;
  let inputStr2 = inputArea2.value;

  if(isInputAreaInitial1) {
    console.log("draw input2 table");
    drawTabe(formInput(inputStr1),inTable1);
  }
  if(isInputAreaInitial2) {
    console.log("draw input2 table");
    drawTabe(formInput(inputStr2),inTable2);
  }

  let outArr;
  if (isInputAreaInitial1 && isInputAreaInitial2) {
    // console.log("inProcess",inputArea1.value,inputArea2 .value);
    const inputArr1 = formInput(inputStr1);
    const inputArr2 = formInput(inputStr2);
    // console.log(inputArr1, inputArr2);

    if (formFlag === 1) {
      const formedArr1 = addMargine1(inputArr1);
      const formedArr2 = addMargine1(inputArr2);
      outArr = conbineArr(formedArr1,formedArr2);
      outputStr = ArrToStr(formedArr1, formedArr2);
    } else if (formFlag === 2){
      outArr = formArr2(inputArr1, inputArr2);
      outputStr = ArrToStr2(outArr);
    } else if (formFlag === 3){
      outArr = formArr3(inputArr1, inputArr2);
      outputStr = ArrToStr2(outArr);
    }

    console.log(outputStr);
    console.log("draw outTable")
    drawTabe(outArr, outTable);
  }
  

}


//formボタンをクリックしたときの関数
const formBtnOnImg1 = "./formOn1.png";
const formBtnOffImg1 = "./formOff1.png";

function onClickFormBtn1(){
  if(formFlag === 2) {
    formFlag = 1;
    formBtn1.classList.toggle("off");
    formBtn2.classList.toggle("off");
  } else if(formFlag === 3) {
    formFlag = 1;
    formBtn1.classList.toggle("off");
    formBtn3.classList.toggle("off");
  }
  onPasted()
}

function onClickFormBtn2(){
  if(formFlag === 1) {
    formFlag = 2;
    formBtn1.classList.toggle("off");
    formBtn2.classList.toggle("off");
  } else if(formFlag === 3) {
    formFlag = 2;
    formBtn2.classList.toggle("off");
    formBtn3.classList.toggle("off");
  }
  onPasted()
}

function onClickFormBtn3(){
  if(formFlag === 1) {
    formFlag = 3;
    formBtn1.classList.toggle("off");
    formBtn3.classList.toggle("off");
  } else if(formFlag === 2) {
    formFlag = 3;
    formBtn2.classList.toggle("off");
    formBtn3.classList.toggle("off");
  }
  onPasted()
}



//inputArea1のイベントに関数をアサイン
// inputArea1.addEventListener("paste",onPasted);
inputArea1.addEventListener("mousedown",iniInpugArea1);
inputArea1.addEventListener("input",onPasted);

//inputArea2のイベントに関数をアサイン
// inputArea2.addEventListener("paste",onPasted);
inputArea2.addEventListener("mousedown",iniInpugArea2);
inputArea2.addEventListener("input",onPasted);

formBtn1.addEventListener("click", onClickFormBtn1);
formBtn2.addEventListener("click", onClickFormBtn2);
formBtn3.addEventListener("click", onClickFormBtn3);


formBtn2.classList.toggle("off");
formBtn3.classList.toggle("off");

























// const testTable = document.getElementById("testTable");
// console.log(testTable.innerText);
// const newTd = document.createElement("td");


// function drawTabe(arrInArr) {
//   for (const row of arrInArr) {
//        const addTr = document.createElement("tr");
//        for (const cell of row) {
//            console.log(cell);
//            const addTd = document.createElement("td");
//            addTd.innerHTML = cell + "<br>";
//            addTr.appendChild(addTd);
//        }
//        testTable.appendChild(addTr);
//    }
// }

// drawTabe(formArr2(inArr1, inArr2));
// testTable.style.width = "100px";
// testTable.border = "1";
// testTable.style.borderCollapse = "collapse";

