
// globalと考えて良い？
// 問題文の配列
let question = ["8x1","2x2","3x3","4x4"];
//LAP1の保存配列 S,1,2,3,4,E
let timeStamp = [1,2,3,4,5,6];
let lapStamp  = [0,0,0,0,0]
let saveTime  = [0,0,0,0,0,0,0,0,0];//1-9
let nowDate   = 0;
// 入力数字
let inputText = "" ;

// 二重配列　2個のカラムを持つテーブル n個
var hairetu = new Array(2);
for (let i = 0; i < 2 ; i++ )
{ hairetu[i] = new Array(2).fill(0); }


function save_click()
{
    let xx = 0;
    for (let i=0; i < saveTime.length; i++)
    {
        xx = xx + saveTime[i];
        document.f1.t_xx.value = xx;
    }
    
    saveTime[5] = 100303;// ???
    saveTime[6] = 100303;// 正解
    saveTime[7] = 100303;// ID
    saveTime[8] = 100303;// 入力数字
}
// ______________________________

function Clear_click()
{
    inputText = "";
    document.f1.t_input.value = inputText;
}
// ______________________________

function b0_click()
{
if (inputText != "")
    {
        if (inputText.length < 4)
        {
            inputText = inputText + "0";
            document.f1.t_input.value = inputText;
        }
    }   
    
}
// ______________________________

function b9_click()
{
    if (inputText.length < 4)
    {
        inputText = inputText + "9";
        document.f1.t_input.value = inputText;
    }
}
// ______________________________

function b1_click(){
if (inputText.length < 4)
{
    if     (inputText.length === 0 )
    {
        d1 = new Date();
        timeStamp[1] = d1.getTime();
        nowDate = timeStamp[1];
        document.f1.t_1.value = timeStamp[1];
    
        saveTime[0] = timeStamp[1] - timeStamp[0];
        document.f1.t_1_s.value = saveTime[0]; 
        
    }
    
    else if (inputText.length === 1 )
    {
        d1 = new Date();
        timeStamp[2] = d1.getTime();
        nowDate = timeStamp[2];
        document.f1.t_2.value = timeStamp[2];
        
        saveTime[1] = timeStamp[2] - timeStamp[1];
        document.f1.t_2_1.value = saveTime[1]; 
        
    }
    
    else if (inputText.length === 2 )
    {
        d1 = new Date();
        timeStamp[3] = d1.getTime();
        nowDate = timeStamp[3];
        document.f1.t_3.value = timeStamp[3];

        saveTime[2] = timeStamp[3] - timeStamp[2];
        document.f1.t_3_2.value = saveTime[2]; 
        
    }
    else if    (inputText.length === 3 )
    {
        d1 = new Date();
        timeStamp[4] = d1.getTime();
        nowDate = timeStamp[4];
        document.f1.t_4.value = timeStamp[4];
        
        saveTime[3] = timeStamp[4] - timeStamp[3];
        document.f1.t_4_3.value = saveTime[3];
    }
    else{ }
        
        inputText = inputText + "1";
        document.f1.t_input.value = inputText;
    }
}

function Enter_click()
{
    document.f1.b_enter.disabled = true;
    inputText = document.f1.t_input.value ;
    document.f1.t_input.value = "";
    document.f1.t_inputCopy.value = inputText;
    
    d1 = new Date();
    timeStamp[5] = d1.getTime();
    document.f1.t_e.value = timeStamp[5];
    
    saveTime[4] = timeStamp[5] - nowDate;
    document.f1.t_e_4.value = saveTime[4];
    
}

function Start_click()
{
    document.f1.b_start.disabled = true;
    d1 = new Date();
    timeStamp[0] = d1.getTime();
    document.f1.t_0.value  = timeStamp[0];
    document.f1.t_s.value  = timeStamp[0];
    document.f1.t_question.value = question[1];
}

function Prep_click()// 準備
{
    document.f1.b_prep.disabled = true;
    document.f1.t_input.value = 0;//入力数字
}



// ___________________________________________________________________   
