const checkbox = document.getElementById('flexSwitchCheckDefault');

function output_image(img){
    const output_image = `
    <img class="output-image rounded-4" src="${img}"/>
    <div class="storyboard">
        <h5>Explain Storyboard</h5>
            <textarea placeholder="Describe the storyboard here"></textarea>
            <div class="buttons">
                <button class="button-vr" onclick="window.open('viewer.html')"></button>
                <button class="button-next" onclick="next()"></button>
            </div>
    </div>
    <div id="loading-overlay">
        <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>`     //makevr->이미지로 aframe, next->영상
    return output_image;
}

function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

function generate(){
    var image_input = document.getElementById("image-input").tagName;
    var prompt_input = document.getElementById("prompt-input").value;
    var output = document.getElementById("right");
    output.innerHTML = `<div id="loading-overlay">
        <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>`
    showLoading();
    // 처리할 내용들
    setTimeout(() => {
        hideLoading();
        alert(checkbox.checked+image_input+prompt_input)
        output.innerHTML = output_image("/img/test_image.png");
    }, 3000); // 3초 뒤에 로딩 화면 숨김 (예시)
}

function next(){
    showLoading();
    // 처리할 내용들
    setTimeout(() => {
        hideLoading();
    }, 3000); // 3초 뒤에 로딩 화면 숨김 (예시)
}