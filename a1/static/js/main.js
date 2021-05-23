

let id = 1000000;
// 二重配列　2個のカラムを持つテーブル n個
var hairetu = new Array(2);
for (let i = 0; i < 2 ; i++ )
{ hairetu[i] = new Array(2).fill(0); }
// globalと考えて良い？
// 問題文の配列
let question = ["100000","2x2","3x3","4x4"];
// LAP1の保存配列 S,1,2,3,4,E
let timeStamp = [1,2,3,4,5,6];
// let lapStamp  = [0,0,0,0,0];
let saveTime  = [0,0,0,0,0,0,0,0,0]; //1-9

let nowDate   = 0;
let inputText = "" ;// 入力数字

function save_click(){
    document.f1.t_0x.value = saveTime[0];// ID

    document.f1.t_1x.value = saveTime[1];// start
    
    document.f1.t_2x.value = saveTime[2];// 1
    
    document.f1.t_3x.value = saveTime[3];// 2
    
    document.f1.t_4x.value = saveTime[4];// 3
    
    document.f1.t_5x.value = saveTime[5];// 4
    
    document.f1.t_6x.value = saveTime[6];// enter
    
    saveTime[7] = 1; // true
    document.f1.t_7x.value = saveTime[7];
    
    saveTime[8] = inputText; // 入力数字
    document.f1.t_8x.value = saveTime[8];
    
}
// ______________________________

function Clear_click(){
    inputText = "";
    document.f1.t_input.value = inputText;
}
// ______________________________

function b0_click(){
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

function b9_click(){
    if (inputText.length < 4)
    {
        inputText = inputText + "9";
        document.f1.t_input.value = inputText;
    }
}

function b1_click(){
if (inputText.length < 4)
{
    if     (inputText.length === 0 )
    {
        x = new Date();
        saveTime[2] = x.getTime();
        nowDate = saveTime[2];
        
        
        document.f1.t_1.value = saveTime[2];
        document.f1.t_1_s.value = saveTime[2] - saveTime[1];
 
    }
    
    else if (inputText.length === 1 )
    {
        x = new Date();
        saveTime[3] = x.getTime();
        nowDate = saveTime[3];
        
        
        document.f1.t_2.value = saveTime[3];
        document.f1.t_2_1.value = saveTime[3] - saveTime[2];
 
    }
    
    else if (inputText.length === 2 )
    {
        x = new Date();
        saveTime[4] = x.getTime();
        nowDate = saveTime[4];
        
        
        document.f1.t_3.value = saveTime[4];
        document.f1.t_3_2.value = saveTime[4] - saveTime[3];
 
    }
    else if    (inputText.length === 3 )
    {
        x = new Date();
        saveTime[5] = x.getTime();
        nowDate = saveTime[5];
        
        
        document.f1.t_4.value = saveTime[5];
        document.f1.t_4_3.value = saveTime[5] - saveTime[4];
 
    }
    else{ }
    inputText = inputText + "1";
    document.f1.t_input.value = inputText;
    }
}

function Enter_click(){
    document.f1.b_enter.disabled = true;
    inputText = document.f1.t_input.value ;
    document.f1.t_input.value = "";

    x = new Date();
    saveTime[6] = x.getTime();
//    nowDate = saveTime[6];

    document.f1.t_e.value = saveTime[6];
    document.f1.t_e_4.value = saveTime[6] - nowDate;
}

function Start_click(){
    document.f1.b_start.disabled = true;
    saveTime[0] = id;
    x = new Date();
    saveTime[1] = x.getTime();
    document.f1.t_s.value  = saveTime[1];
    
    document.f1.t_question.value = question[1];
}

function Prep_click(){
    document.f1.b_prep.disabled = true;
    document.f1.t_input.value = 0; //入力数字
}

// _____________________________________________________________


