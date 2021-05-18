
// globalと考えて良い？
// 問題文の配列
let question = ["8x1","2x2","3x3","4x4"];
//LAP1の保存配列 S,1,2,3,4,E
let timeStamp = [1,2,3,4,5,6];
let startTime = 0  ;
// 入力数字
let inputText = "" ;



// 二重配列　2個のカラムを持つテーブル n個
var hairetu = new Array(2);
for (let i = 0; i < 2 ; i++ )
{ hairetu[i] = new Array(2).fill(0); }

// ______________________________

function Clear_click()
{
    inputText = "";
    document.f1.num_input.value = inputText;
}
// ______________________________

function b0_click()
{
if (inputText != "")
    {
        if (inputText.length < 4)
        {
            inputText = inputText + "0";
            document.f1.num_input.value = inputText;
        }
    }   
    
}
// ______________________________

function b9_click()
{
    if (inputText.length < 4)
    {
        inputText = inputText + "9";
        document.f1.num_input.value = inputText;
    }
}
// ______________________________

function b1_click()
{
    if (inputText.length < 4)
    {
        inputText = inputText + "1";
        document.f1.num_input.value = inputText;
    }
}

function Enter_click()
{
document.f1.en.disabled = true;
inputText = document.f1.num_input.value ;
document.f1.num_input.value = "";
document.f1.t1.value = inputText;

timeE = new Date();
endTime = timeE.getTime();
endTime = endTime - startTime;
document.f1.ts.value = endTime;

}
function Start_click()
{
    document.f1.st.disabled = true;
    document.f1.t0.value = hairetu[0][0];
    time0 = new Date();
    startTime = time0.getTime();
    document.f1.t0.value = startTime;
    
//        for (let i=0; i<3; i++ )
//        {question.push("100x"+String(i));}

    document.f1.qu.value = question[2];

}


function Array_click()// 準備
{
    document.f1.ar.disabled = true;
    hairetu[0][0] = 7  ;
    hairetu[0][1] = 1  ;
    
    hairetu[1][0] = 10 ;
    hairetu[1][1] = 11 ;
    document.f1.num_input.value = 0;//入力数字
    
}



// ___________________________________________________________________   
