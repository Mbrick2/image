let hash = location.href.split("#")[1];

if (hash) {
    let image = document.createElement('img');
    document.body.style.margin = 0;
    document.body.style.backgroundColor = "black";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";
    image.src = `https://assets.scratch.mit.edu/get_image/.%2E/${hash}`;
    image.style.maxWidth = "100%";
    image.style.margin = "auto";
    document.body.appendChild(image);
}

function ini() {
    let input = document.getElementById('input').value;
    document.getElementById('result').innerHTML = generateUrl(input);
}
        
function generateUrl(url) {
    if (text.includes("https://"))
       let code = url.split("/")[5];
    } else {
       let code = url.split("/")[3];
    }
    
    return code;
}

function check() {
    if (location.hostname !== "chiroyce1.github.io" || location.hostname !== "mbrick2.github.io" ) { /// Add your own Github Pages URL for testing
        document.getElementById('cont').style.display = 'none';
    }
}
