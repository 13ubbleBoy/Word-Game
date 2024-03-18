$("h4").addClass("hide");
let words = ["apple", "banana", "mango","praveen","power","the","sky","adapter","length","width","cone","triangle","bottle","cube","time","news","letter","wire","toggle","front","family","alphabet","number","digit","pond","train","travel","many","some","where","customer","visit","phone","usb","cable","slippers","slide","above","downfall","area","medecine","window","door","aeroplane","superb","awesome","mustard","electricity","flash","batman","wonder","woman","female","male","gender","town","table","chair","media","capcium","potato","carrot","lemon","ginger"];
let word_size = 4;
let ans = "word";
let count = 0;
let str = "";

$("button").on("click", function(){
    // show random word
    let size_words = words.length;
    let random_number = Math.floor(Math.random() * size_words);
    $("h2").text(words[random_number]);
    word_size = words[random_number].length;
    ans = words[random_number];
});

// match the word with input
$(document).on("keypress", function(e){
    // backspace / delete
    if(e.keyCode == 13){
        str = str.substring(0, str.length-1);
    }
    if(e.keyCode >= 97 && e.keyCode <= 122){
        str += e.key;
    }
   
    //console.log(e.keyCode);

    // update user's typing
    $("h5").text(str);

    // check
    if(str.length == word_size){
        if(str === ans){
            count++;
            $("h3").slideUp().text(count).slideDown();
            str = "";
            $("h5").text(str);

            // show random word
            let size_words = words.length;
            let random_number = Math.floor(Math.random() * size_words);
            $("h2").text(words[random_number]);
            word_size = words[random_number].length;
            ans = words[random_number];

        } else{
            $("h4").removeClass("hide");
            setTimeout(function() {
                $("h4").addClass("hide");
                str = "";
                $("h5").text(str);
            }, 1000);
        }
    }
});