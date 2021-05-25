
// 整理整頓
// 次やる

let id = 101101;
// questions[];
// 問題文の配列
let question  = ["11x01","2x2","3x3","4x4"];

// 二重配列　9個のカラムを持つテーブル 10個

let questAmount = 10;
var hairetu = new Array(8);
for (let i = 0; i < questAmount ; i++ ){
    hairetu[i] = new Array(8).fill(0); }
let ima = 0; // 今何問目？


// globalと考えて良い？
let saveTime  = [0,0,0,0,0,0,0,0,0]; //1-9
let nowDate   = 0;
let inputText = "" ;// 入力数字

// ______________________________






function reset_click(){
    document.f1.b_reset.disabled = true;
    document.f1.b_prep.disabled = false;

    document.f1.t_question.value = "";
    inputText = "";
    nowDate = 0;
    
// 次やる    
//    id = id + 101;
//    question[0+1];
//  
    
    for (let i=0; i < 9; i++){
        saveTime[i]  = 0;
    }
    document.f1.t_s.value   = "";
    document.f1.t_1_s.value = "";
    document.f1.t_1.value   = "";
    document.f1.t_2_1.value = "";
    document.f1.t_2.value   = "";
    document.f1.t_2_1.value = "";
    document.f1.t_3.value   = "";
    document.f1.t_3_2.value = "";
    document.f1.t_4.value   = "";
    document.f1.t_4_3.value = "";
    document.f1.t_e.value   = "";
    document.f1.t_e_4.value = "";

    document.f1.t_0x.value  = "";
    document.f1.t_1x.value  = "";
    document.f1.t_2x.value  = "";
    document.f1.t_3x.value  = "";
    document.f1.t_4x.value  = "";
    document.f1.t_5x.value  = "";
    document.f1.t_6x.value  = "";
    document.f1.t_7x.value  = "";
    document.f1.t_8x.value  = "";
    
    ima += 1;
    
}
function save_click(){
    document.f1.b_save.disabled = true;
    document.f1.b_reset.disabled= false;
    document.f1.t_0x.value      = saveTime[0];// ID
    document.f1.t_1x.value      = saveTime[1];// start
    document.f1.t_2x.value      = saveTime[2];// 1
    document.f1.t_3x.value      = saveTime[3];// 2
    document.f1.t_4x.value      = saveTime[4];// 3
    document.f1.t_5x.value      = saveTime[5];// 4
    document.f1.t_6x.value      = saveTime[6];// enter
    document.f1.t_7x.value      = saveTime[7];// TRUE or
    document.f1.t_8x.value      = saveTime[8];// input
    

    for (let i=0; i<9; i++){
        hairetu[ima][i] = saveTime[i];
    }
    
    
    
}




function b0_click(){
if ( inputText != "" )
    {
        if ( inputText.length < 4 ){
             inputText = inputText + "0";
             document.f1.t_input.value = inputText;
        }
    }   
}


function enter_click(){
    enable_enter();
    
    
/*    
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
  */  
    x = new Date();
    saveTime[6]             = x.getTime();
    document.f1.t_e.value   = saveTime[6];
    document.f1.t_e_4.value = saveTime[6] - nowDate;
}
function enable_enter(){
    document.f1.b1.disabled      = true;
    document.f1.b2.disabled      = true;
    document.f1.b3.disabled      = true;
    document.f1.b4.disabled      = true;
    document.f1.b5.disabled      = true;
    document.f1.b6.disabled      = true;
    document.f1.b7.disabled      = true;
    document.f1.b8.disabled      = true;
    document.f1.b9.disabled      = true;
    document.f1.b0.disabled      = true;
    document.f1.clear.disabled   = true;
    document.f1.b_enter.disabled = true;
    document.f1.b_save.disabled = false;

    
}

function clear_click(){
    enable_clear();
    
    inputText                   = "";
    
    document.f1.t_input.value   = inputText ;
    document.f1.t_1.value       = "";
    document.f1.t_1_s.value     = "";
    document.f1.t_2.value       = "";
    document.f1.t_2_1.value     = "";
    document.f1.t_3.value       = "";
    document.f1.t_3_2.value     = "";
    document.f1.t_4.value       = "";
    document.f1.t_4_3.value     = "";
    
    saveTime[2] = 0; // 1
    saveTime[3] = 0; // 2
    saveTime[4] = 0; // 3
    saveTime[5] = 0; // 4

}
function enable_clear(){
    document.f1.b_enter.disabled = true;
    document.f1.b0.disabled      = true;
    
}
function b1_click(obj){
if (inputText.length < 4){
    if      (inputText.length === 0 ){
        x = new Date();
        saveTime[2] = x.getTime();
        nowDate = saveTime[2];
        document.f1.t_1.value   = saveTime[2];
        document.f1.t_1_s.value = saveTime[2] - saveTime[1];
        enable_b1();
    }
    else if (inputText.length === 1 ){
        x = new Date();
        saveTime[3] = x.getTime();
        nowDate = saveTime[3];
        document.f1.t_2.value = saveTime[3];
        document.f1.t_2_1.value = saveTime[3] - saveTime[2];
    }
    else if (inputText.length === 2 ){
        x = new Date();
        saveTime[4] = x.getTime();
        nowDate = saveTime[4];
        document.f1.t_3.value   = saveTime[4];
        document.f1.t_3_2.value = saveTime[4] - saveTime[3];
    }
    else if (inputText.length === 3 ){
        x = new Date();
        saveTime[5] = x.getTime();
        nowDate = saveTime[5];
        document.f1.t_4.value = saveTime[5];
        document.f1.t_4_3.value = saveTime[5] - saveTime[4];
    }
    else{ }
    inputText = inputText + obj.value;
    document.f1.t_input.value = inputText;
    }
}
function enable_b1(){
    document.f1.b0.disabled      = false;
    document.f1.clear.disabled   = false;
    document.f1.b_enter.disabled = false;
    
}
function start_click(){
    enable_start();
    document.f1.t_input.value    = 0; //入力数字
    

    saveTime[0] = id;
    x = new Date();
    saveTime[1] = x.getTime();
    document.f1.t_s.value        = saveTime[1];
    
    document.f1.t_question.value = question[ima];
}
function enable_start(){
    document.f1.b1.disabled      = false;
    document.f1.b2.disabled      = false;
    document.f1.b3.disabled      = false;
    document.f1.b4.disabled      = false;
    document.f1.b5.disabled      = false;
    document.f1.b6.disabled      = false;
    document.f1.b7.disabled      = false;
    document.f1.b8.disabled      = false;
    document.f1.b9.disabled      = false;
    document.f1.b0.disabled      = true;
    document.f1.clear.disabled   = true;
    document.f1.b_prep.disabled  = true;
    document.f1.b_start.disabled = true;
    document.f1.b_enter.disabled = true;
    document.f1.b_save.disabled  = true;
    document.f1.b_reset.disabled = true;

}
function prep_click(){
    enable_prep();
}
function enable_prep(){
    document.f1.b1.disabled      = true;
    document.f1.b2.disabled      = true;
    document.f1.b3.disabled      = true;
    document.f1.b4.disabled      = true;
    document.f1.b5.disabled      = true;
    document.f1.b6.disabled      = true;
    document.f1.b7.disabled      = true;
    document.f1.b8.disabled      = true;
    document.f1.b9.disabled      = true;
    document.f1.b0.disabled      = true;
    document.f1.clear.disabled   = true;
    document.f1.b_prep.disabled  = true;
    document.f1.b_start.disabled = true;
    document.f1.b_enter.disabled = true;
    document.f1.b_save.disabled  = true;
    document.f1.b_reset.disabled = true;
    
    document.f1.b_start.disabled = false;

}

// _____________________________________________________________


