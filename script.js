function expandtext() {
    // select elemen yang memiliki id == more yaitu div yang berisi text terhidden dan akan diexpand
    var moreText = document.getElementById("more");
    // select buttonnya, yaitu yang ber-id == readMore
    var btnText = document.getElementById("readMore");
    
    // apabila terdapat kelas dnone di dalamnya
    if (moreText.classList.contains('dnone')) {
      btnText.innerHTML = "Read Less";
        // hapus kelas dnone
      moreText.classList.remove('dnone');
        // tambah kelas dblock
      moreText.classList.add('dblock');
      
    } else if(moreText.classList.contains('dblock')) {
      btnText.innerHTML = "Read More";
      // haspus kelas dblock
      moreText.classList.remove('dblock');
      // tambah kelas dnone
      moreText.classList.add('dnone');
      
    }
}

