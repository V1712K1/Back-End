function started(){
    console.log("Download começou!");

}

function update(percentagem){
    console.log( percentagem + "% de download");
}


function completed(){
    console.log("Fim de download!");
}

function performDownload(){

    started();

    i = 0;
    for (let i = 0; i<= 100; i+=4){
        update(i);
    }

    completed();

}

performDownload(started,update,completed)