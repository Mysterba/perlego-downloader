function printPages(start, end) {
    document.querySelector("style").remove();
    let printContents = "";
    let i = start;
    
    function downloadPage() {
        setTimeout(()=>{
        let pageText = document.getElementById('content').innerText;
        printContents += pageText;
            if (i <= end) {
                downloadPage();
            }
            if (i == end + 1) {
                document.body.innerHTML = printContents;
                console.log("Reading...");
                setTimeout(()=>{
                    window.print();
                    location.reload();
                }
                , (end - start) * 100);
            }
        }
        , 1000);
    }
    downloadPage();
}
