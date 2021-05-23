
// 次やる

let id = 101101;
// questions[];
// 問題文の配列
let question  = ["11x01","2x2","3x3","4x4"];


// 二重配列　2個のカラムを持つテーブル n個
var hairetu = new Array(2);


for (let i = 0; i < 2 ; i++ ){
    hairetu[i] = new Array(2).fill(0); }

// globalと考えて良い？
let saveTime  = [0,0,0,0,0,0,0,0,0]; //1-9
let nowDate   = 0;
let inputText = "" ;// 入力数字


// ______________________________

function clear_click(){
    inputText                   = "";
    document.f1.t_input.value   = inputText ;
    document.f1.t_1.value   = "";
    document.f1.t_1_s.value = "";
    document.f1.t_2.value   = "";
    document.f1.t_2_1.value = "";
    document.f1.t_3.value   = "";
    document.f1.t_3_2.value = "";
    document.f1.t_4.value   = "";
    document.f1.t_4_3.value = "";
    
    saveTime[2] = 0; // 1
    saveTime[3] = 0; // 2
    saveTime[4] = 0; // 3
    saveTime[5] = 0; // 4

}

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
function reset_click(){
    document.f1.b_reset.disabled = true;
    
    inputText = "";
    id = id + 101;
    question[0+1];
    nowDate = 0;
    
    for (let i=0; i < 9; i++){
        saveTime[i]  = 0;
    }
    
    
    
    
    
}

function save_click(){
    document.f1.b_save.disabled = true;
    document.f1.t_0x.value = saveTime[0];// ID
    document.f1.t_1x.value = saveTime[1];// start
    document.f1.t_2x.value = saveTime[2];// 1
    document.f1.t_3x.value = saveTime[3];// 2
    document.f1.t_4x.value = saveTime[4];// 3
    document.f1.t_5x.value = saveTime[5];// 4
    document.f1.t_6x.value = saveTime[6];// enter
//    saveTime[7]            = 1;          // true
    document.f1.t_7x.value = saveTime[7];
//    saveTime[8]            = inputText;  // 入力数字
    document.f1.t_8x.value = saveTime[8];
}
function enter_click(){
    document.f1.b_enter.disabled = true;
    inputText = document.f1.t_input.value ;
    document.f1.t_input.value = "";
    
    
    saveTime[0] = id;
    t = saveTime[0] - 100000;
    yy = t % 100;
    xx = Math.floor( t*0.01 );
    document.f1.t_0x.value = xx;
    document.f1.t_1x.value = yy;
    saveTime[8] = inputText;  // 入力数字

    
    if ( xx*yy == saveTime[8] )
    {
        saveTime[7] = 1;
    }
    
    x = new Date();
    saveTime[6] = x.getTime();

    document.f1.t_e.value   = saveTime[6];
    document.f1.t_e_4.value = saveTime[6] - nowDate;
}

function start_click(){
    document.f1.b_start.disabled = true;
    saveTime[0] = id;
    x = new Date();
    saveTime[1] = x.getTime();
    document.f1.t_s.value  = saveTime[1];
    
    document.f1.t_question.value = question[0];
}

function prep_click(){
    document.f1.b_prep.disabled = true;
    document.f1.t_input.value = 0; //入力数字
}

// _____________________________________________________________


