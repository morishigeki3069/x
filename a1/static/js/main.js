
// 整理整頓
const qsLength  = 4;      // 問題数

var saveTime  = [0,0,0,0,0,0,0,0,0]; //1-9

let inputText = "" ;// 入力数字
let ima       = 0;
let nowDate   = 0;
let nowTime   = 0;
let questions = [];


// ２次元配列

var saveData = new Array(1);        // 必須１行目　この方法しかない？？
for (let i=0; i< qsLength; i++)
{ saveData[i] = new Array(9).fill(0); } // カラムの数

// ______________________________
// 問題群　二乗数
function id_generator(){
    
    let all_id      = [];
    for (let i=0; i<100; i++){
        if ( i%10 != 0){
            all_id.push( 100000 + (101*i));}}

    for ( let i=0; i< qsLength; i++ ){
        x = Math.floor( Math.random() * all_id.length );
        questions.push(all_id[x]); }
}
function qu_generator(idNum){
    
    id = idNum - 100000;
    yy = id % 100;
    xx = Math.floor(id * 0.01);
    up = String(xx);
    dw = String(yy);
    
    return up + "x" + dw;}
    
function correct(){
    
    id = questions[ima];
    x = id - 100000;
    yy = x % 100;
    xx = Math.floor(x * 0.01);
    if ( inputText == String(xx * yy))
    {
        return 88888888888 ;    
    }
    else
    {
        return 0 ;
        
    }
}
// ______________________________
function prep_click(){
         prep_enable();
         id_generator(qsLength);

}
function start_click(){
    start_enable();
    document.f1.t_input.value    = 0; //入力数字
    
    saveTime[0] = questions[ima];// 後で消す
    saveData[ima][0] = questions[ima];
    
    x = new Date();
    saveTime[1]      = x.getTime();// 後で消す
    saveData[ima][1] = x.getTime();
    
    document.f1.t_s.value        = saveTime[1];// 後で消す
    document.f1.t_s.value        = saveData[ima][1];

    document.f1.t_test.value     = questions[ima];
    document.f1.t_question.value = qu_generator(questions[ima]);
    document.f1.t_remain.value   = qsLength - ima; // 残数に利用
}
function b1_click(obj){
    if (inputText.length < 4){
        if      (inputText.length === 0 ){
            x = new Date();
            saveTime[2]      = x.getTime();// 後で消す
            saveData[ima][2] = x.getTime();
            
            
            nowDate = saveTime[2];// 後で消す
            nowTime = saveData[ima][2];

            
            
            document.f1.t_1.value   = saveTime[2];// 後で消す
            document.f1.t_1.value   = saveData[ima][2];
            
            document.f1.t_1_s.value = saveTime[2] - saveTime[1];// 後で消す
            document.f1.t_1_s.value = saveData[ima][2] - saveData[ima][1];
            
            
            
            b1_enable();
        }
        else if (inputText.length === 1 ){
            x = new Date();
            saveTime[3]      = x.getTime();// 後で消す
            saveData[ima][3] = x.getTime();
            
            
            nowDate = saveTime[3];
            nowTime = saveData[ima][3];
            
            
            
            
            document.f1.t_2.value = saveTime[3];// 後で消す
            document.f1.t_2.value = saveData[ima][3];
            
            
            document.f1.t_2_1.value = saveTime[3] - saveTime[2];// 後で消す
            document.f1.t_2_1.value = saveData[ima][3] - saveData[ima][2];
            
        }
        else if (inputText.length === 2 ){
            x = new Date();
            saveTime[4] = x.getTime();// 後で消す
            saveData[ima][4] = x.getTime();
            
            nowDate = saveTime[4];// 後で消す
            nowTime = saveData[ima][4];
            
            
            
            document.f1.t_3.value   = saveTime[4];// 後で消す
            document.f1.t_3.value   = saveData[ima][4];
            
            
            
            document.f1.t_3_2.value = saveTime[4] - saveTime[3];// 後で消す
            document.f1.t_3_2.value = saveData[ima][4] - saveData[ima][3];
            
        }
        else if (inputText.length === 3 ){
            x = new Date();
            saveTime[5] = x.getTime();// 後で
            saveData[ima][5] = x.getTime();

            nowDate = saveTime[5];// 後で
            nowTime = saveData[ima][5];
            
            
            
            
            document.f1.t_4.value = saveTime[5];// 後で
            document.f1.t_4.value = saveData[ima][5];
            
            
            
            document.f1.t_4_3.value = saveTime[5] - saveTime[4];// 後で
            document.f1.t_4_3.value = saveData[ima][5] - saveData[ima][4];
            
            
        }
        else{ }
        inputText = inputText + obj.value;
        document.f1.t_input.value = inputText;
        }
}
function clear_click(){
    clear_enable();
    
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

    saveData[ima][2] = 0; // 1
    saveData[ima][3] = 0; // 2
    saveData[ima][4] = 0; // 3
    saveData[ima][5] = 0; // 4



}
function enter_click(){
         enter_enable();
    saveTime[7] = correct();            // 後で消す
    saveData[ima][7] = correct();
    saveTime[8] = inputText;            // 入力数字
    saveData[ima][8] = inputText;        // 後で消す
    
    x = new Date();
    saveTime[6]      = x.getTime();// 後で消す
    saveData[ima][6] = x.getTime();        
    
    document.f1.t_e.value   = saveTime[6];
    document.f1.t_e_4.value = saveTime[6] - nowDate;

    enter_document();    

}
function save_click(){
    save_enable();

// いらない？   
    for (let i=0; i<9; i++)
    {    hairetu[ima][i] = saveTime[i];}
//
    
    
    
}
function reset_click(){
    reset_enable();

    ima += 1;
    
// 終了判定     
    if (ima < qsLength){
        document.f1.b_start.disabled = false;
    }
    else{
        document.f1.b_start.disabled = true;
        document.f1.b_next.disabled  = false;
    }
    
// 変数クリア
    inputText = "";
    nowDate = 0;
    
    
    
    clear_document();
}
function next_click(){

//いらない？？  saveTime のリセット 
    for (let i=0; i < 9; i++){ saveTime[i]  = 0; }
//

}
function test_click(){
    
    document.f1.t_0_0x.value    = saveData[0][0];
    document.f1.t_0_1x.value    = saveData[0][1];
    document.f1.t_0_2x.value    = saveData[0][2];
    document.f1.t_0_3x.value    = saveData[0][3];
    document.f1.t_0_4x.value    = saveData[0][4];
    document.f1.t_0_5x.value    = saveData[0][5];
    document.f1.t_0_6x.value    = saveData[0][6];
    document.f1.t_0_7x.value    = saveData[0][7];
    document.f1.t_0_8x.value    = saveData[0][8];

    document.f1.t_1_0x.value    = saveData[1][0];
    document.f1.t_1_1x.value    = saveData[1][1];
    document.f1.t_1_2x.value    = saveData[1][2];
    document.f1.t_1_3x.value    = saveData[1][3];
    document.f1.t_1_4x.value    = saveData[1][4];
    document.f1.t_1_5x.value    = saveData[1][5];
    document.f1.t_1_6x.value    = saveData[1][6];
    document.f1.t_1_7x.value    = saveData[1][7];
    document.f1.t_1_8x.value    = saveData[1][8];

    document.f1.t_2_0x.value    = saveData[2][0];
    document.f1.t_2_1x.value    = saveData[2][1];
    document.f1.t_2_2x.value    = saveData[2][2];
    document.f1.t_2_3x.value    = saveData[2][3];
    document.f1.t_2_4x.value    = saveData[2][4];
    document.f1.t_2_5x.value    = saveData[2][5];
    document.f1.t_2_6x.value    = saveData[2][6];
    document.f1.t_2_7x.value    = saveData[2][7];
    document.f1.t_2_8x.value    = saveData[2][8];

    document.f1.t_3_0x.value    = saveData[3][0];
    document.f1.t_3_1x.value    = saveData[3][1];
    document.f1.t_3_2x.value    = saveData[3][2];
    document.f1.t_3_3x.value    = saveData[3][3];
    document.f1.t_3_4x.value    = saveData[3][4];
    document.f1.t_3_5x.value    = saveData[3][5];
    document.f1.t_3_6x.value    = saveData[3][6];
    document.f1.t_3_7x.value    = saveData[3][7];
    document.f1.t_3_8x.value    = saveData[3][8];
}
//-------------------------
function prep_enable(){
    
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
    document.f1.b_next.disabled  = false;
    
    document.f1.b_start.disabled = false;

}
function start_enable(){
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
function b1_enable(){
    document.f1.b0.disabled      = false;
    document.f1.clear.disabled   = false;
    document.f1.b_enter.disabled = false;
    
}
function clear_enable(){
    document.f1.b_enter.disabled = true;
    document.f1.b0.disabled      = true;
    
}
function enter_enable(){
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
function save_enable(){
    document.f1.b_save.disabled = true;
    document.f1.b_reset.disabled= false;

}
function reset_enable(){
    document.f1.b_save.disabled = true;
    document.f1.b_reset.disabled= false;
    
    document.f1.b_reset.disabled = true;
    document.f1.b_prep.disabled = true;
    document.f1.b_start.disabled = false;


}
function clear_document(){
    
    document.f1.t_input.value   = "";
    document.f1.t_question.value= "";
    document.f1.t_test.value    = "";
    document.f1.t_remain.value  = "";

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
    
}
function enter_document(){
    document.f1.t_0x.value = saveTime[0];// ID
    document.f1.t_1x.value = saveTime[1];// start
    document.f1.t_2x.value = saveTime[2];// 1
    document.f1.t_3x.value = saveTime[3];// 2
    document.f1.t_4x.value = saveTime[4];// 3
    document.f1.t_5x.value = saveTime[5];// 4
    document.f1.t_6x.value = saveTime[6];// enter
    document.f1.t_7x.value = saveTime[7];// TRUE or
    document.f1.t_8x.value = saveTime[8];// input

    document.f1.t_0x.value = saveData[ima][0];// ID
    document.f1.t_1x.value = saveData[ima][1];// start
    document.f1.t_2x.value = saveData[ima][2];// 1
    document.f1.t_3x.value = saveData[ima][3];// 2
    document.f1.t_4x.value = saveData[ima][4];// 3
    document.f1.t_5x.value = saveData[ima][5];// 4
    document.f1.t_6x.value = saveData[ima][6];// enter
    document.f1.t_7x.value = saveData[ima][7];// TRUE or
    document.f1.t_8x.value = saveData[ima][8];// input
    
}
// _____________________________________________________________

